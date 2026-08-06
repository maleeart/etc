const https = require('https');

module.exports = async (req, res) => {
    // Set CORS and JSON headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate'); // Cache for 30 minutes

    const fetchTicker = (symbol) => {
        return new Promise((resolve) => {
            const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?interval=1d&range=1d`;
            const request = https.get(url, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
                }
            }, (response) => {
                let data = '';
                response.on('data', (chunk) => { data += chunk; });
                response.on('end', () => {
                    try {
                        const json = JSON.parse(data);
                        if (json.chart && json.chart.result && json.chart.result[0]) {
                            const result = json.chart.result[0];
                            const meta = result.meta;
                            const price = meta.regularMarketPrice;
                            const prevClose = meta.previousClose || meta.chartPreviousClose;
                            const changePercent = prevClose ? ((price - prevClose) / prevClose) * 100 : 0.0;
                            resolve({
                                price: price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
                                change: changePercent.toFixed(2),
                                symbol: symbol
                            });
                        } else {
                            resolve({ price: null, change: null, symbol: symbol, error: 'No chart data' });
                        }
                    } catch (e) {
                        resolve({ price: null, change: null, symbol: symbol, error: e.message });
                    }
                });
            });
            
            request.on('error', (err) => {
                resolve({ price: null, change: null, symbol: symbol, error: err.message });
            });

            // Set timeout to prevent hanging
            request.setTimeout(5000, () => {
                request.destroy();
                resolve({ price: null, change: null, symbol: symbol, error: 'Timeout' });
            });
        });
    };

    try {
        const [sp500, nasdaq, setIndex] = await Promise.all([
            fetchTicker('^GSPC'),
            fetchTicker('^IXIC'),
            fetchTicker('^SET.BK')
        ]);

        // Get USD to THB rate from Open ER Exchange API (Free, keyless CORS-allowed rate provider)
        const usdThb = await new Promise((resolve) => {
            const request = https.get('https://open.er-api.com/v6/latest/USD', (response) => {
                let data = '';
                response.on('data', (chunk) => { data += chunk; });
                response.on('end', () => {
                    try {
                        const json = JSON.parse(data);
                        if (json.rates && json.rates.THB) {
                            resolve(json.rates.THB.toFixed(2));
                        } else {
                            resolve("34.50");
                        }
                    } catch (e) {
                        resolve("34.50");
                    }
                });
            });

            request.on('error', () => { resolve("34.50"); });
            request.setTimeout(4000, () => {
                request.destroy();
                resolve("34.50");
            });
        });

        res.status(200).json({
            sp500,
            nasdaq,
            set: setIndex,
            usdThb
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
