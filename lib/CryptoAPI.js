const axios = require('axios');
const colors = require('colors');

class cryptoAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker';
    }

    async getPriceData(coinOption, currOption) {
        try {
            // formatter for currency
            const formatter = new Intl.NumberFormat('en-US', {
                styles: 'currency',
                currency: currOption
            })
            const res = await axios.get(`${this.baseUrl}?key=${this.apiKey}&ids=${coinOption}&currency=${currOption}`)
            let output = '';
            res.data.forEach(coin => {
                output += `Coin: ${coin.symbol.yellow} (${coin.name}) | Price: ${formatter.format(coin.price).green} | Rank: ${coin.rank.blue}\n`;
            });
            return output
        } catch (error) {
            customErrorHandler(error)
        }
    }
}

function customErrorHandler(err) {
    if (err.response.status === 401) {
        throw new Error('Your Api is Invalid - Go to https://nomics.com')
    } else if (err.response.status === 404) {
        throw new Error('Your Api is not responding');
    } else {
        throw new Error('Something is went wrong')
    }
}
module.exports = cryptoAPI