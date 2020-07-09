import axios from 'axios';

export async function loadBitcoinValue() {
    const response = await axios.get('https://api.bitpreco.com/btc-brl/exchanges');

    const result = response.data.map(item => ({ name: item.name, price: item.ask, date: item.timestamp }))

    return result
}