// API setup for server side and future plans :)
export default async function handler(req, res) {


    const { from, to } = req.query;
    const API_KEY = process.env.EXCHANGE_API_KEY;

    const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/$${from}/${to}`;

    try { 

        const response = await fetch(url);
        const data = await response.json();
        res.status(200).json(data);

    } catch (error) {

        res.status(500).json({ error: error.message });
    }

}