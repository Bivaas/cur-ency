// the model I am using (might change later)
const MODEL = "meta/llama-3.1-70b-instruct";


export default async function handler(req, res) { 


    const { currency } = req.query;
    const NVIDIA_API_KEY = process.env.NVIDIA_API_KEY;
    const SERPER_API_KEY = process.env.SERPER_API_KEY;

    // serper setup to get latest info 
    try { 

        let headlines = "";

        try { 

            const newsRes = await fetch("https://google.serper.dev/news", {

                method: "POST",
                headers: { "X-API-KEY": SERPER_API_KEY, "Content-Type": "application/json" },
                body: JSON.stringify({ q: `${currency} exchange rate economy news`, num: 6 }),
            });

            const newsData = await newsRes.json();
            headlines = (newsData.news || []).map(n => `- ${n.title} (${n.date}): ${n.snippet}`).join("\n");
            
        } catch (e) { 

            headlines = "";
        }
    


    // system prompt for currency bg
    const sysprompt = `You are an economic historian. The currency you will be describing will be ${currency}. It is the currency code. You have to identify which country it is, then in 4-6 lines, give historical background into the currency (like how influential it was, how strong it was, peak period with rough date, the key events which caused its value to change and rises / downfalls) and where it stands today economically. You should be factual and specific, not generic.
    
    Then add 2-3 lines on the CURRENT situation of that currency using latest headlines as context:\n\n${headlines || "(no recent headlines found)"}`


    const response = await fetch ("https://integrate.api.nvidia.com/v1/chat/completions", {

        method: "POST",
        headers: {
            "Authorization": `Bearer ${NVIDIA_API_KEY}`,
            "Content-Type": "application/json",

        },

        body: JSON.stringify ({

            model: MODEL,
            messages: [{ role: "user", content: sysprompt }],
            temperature: 0.5,
            max_tokens: 700,

        }),

    });

    const data = await response.json();
    if (!response.ok) throw new Error("Your AI request failed !")

    const insight = data?.choices?.[0]?.message?.content;
    if (!insight) throw new Error("AI response did not include insight text.");

    res.status(200).json({ insight });


} 

catch (error) {

    res.status(500).json({ error: error.message });
    
    }

}