// the model I am using (might change later)
const MODEL = "meta/llama-3.2-70b-instruct";


export default async function handler(req, res) { 


    const { currency } = req.query;
    const NVIDIA_API_KEY = process.env.NVIDIA_API_KEY;


    // system prompt for currency bg
    const sysprompt = `You are an economic historian. The currency you will be describing will be ${currency}. It is the currency code. You have to identify which country it is, then in 4-6 lines, give historical background into the currency (like how influential it was, how strong it was, peak period with rough date, the key events which caused its value to change and rises / downfalls) and where it stands today economically. You should be factual and specific, not generic.`
}

try { 

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
            max_tokens: 500,

        }),

    });

    const data = await response.json();
    if (!response.ok) throw new Error("Your AI request failed !")

} 

catch (error) {

    res.status(500).json({ error: error.message });
    
}