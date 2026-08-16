// api/chat.js
// Serverless function (Vercel format — also portable to Netlify Functions
// or a tiny Express server with minimal changes).
//
// Why this file exists: the browser can never hold your Anthropic API key
// safely (anyone can open dev tools and steal it). This function runs on
// the server, holds the key in an environment variable, and the front-end
// calls THIS endpoint instead of Anthropic directly.
//
// Setup:
//   1. Deploy this repo to Vercel (vercel.com/new — free tier is fine).
//   2. In Vercel → Project → Settings → Environment Variables, add:
//        ANTHROPIC_API_KEY = sk-ant-xxxxxxxx
//   3. Redeploy. The chat widget on your site will now work automatically.

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "ANTHROPIC_API_KEY is not set on the server." });
  }

  try {
    const { messages, context } = req.body;

    // Build a compact system prompt from the live product/hotspot data
    // so the assistant always answers with real, current prices.
    const productLines = (context?.products || [])
      .map((p) => `- ${p.name} (${p.category}): $${p.price} — ${p.specs}`)
      .join("\n");
    const hotspotLines = (context?.hotspots || [])
      .map((h) => `- ${h.label}: ${h.price} — ${h.specs}`)
      .join("\n");

    const systemPrompt = `You are the AI assistant embedded on ${context?.brand || "Crochet by Neha"}'s website, a handmade crochet studio.
Answer questions about pieces, colour-customizing, pricing, made-to-order timelines (roughly 3-4 weeks), and delivery (Pathao) or tracking (NCM) helpfully and briefly (2-4 sentences).
Remember every piece is made to order with zero initial stock, and — because pieces are custom-made — there are no returns or exchanges (refunds only for damaged/incorrect items, within 3 days of delivery).
If asked something you can't answer confidently, suggest they use the WhatsApp button on the site.
Never invent prices — only use the data below.

SHOP CATEGORIES:
${hotspotLines}

PRODUCTS:
${productLines}`;

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 400,
        system: systemPrompt,
        messages: messages.map((m) => ({ role: m.role, content: m.content })),
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      return res.status(response.status).json({ error: errText });
    }

    const data = await response.json();
    const reply = data.content?.map((b) => b.text || "").join("\n").trim() || "Sorry, I didn't catch that.";

    return res.status(200).json({ reply });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
