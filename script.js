const apiUrl =
  'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd';

async function fetchCryptoPrices() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error('Failed to fetch API');
    const data = await response.json();

    document.getElementById('bitcoin').textContent = data.bitcoin.usd;
    document.getElementById('ethereum').textContent = data.ethereum.usd;
    document.getElementById('dogecoin').textContent = data.dogecoin.usd;
  } catch (error) {
    console.error('Error fetching crypto prices:', error);
  }
}

fetchCryptoPrices();

setInterval(fetchCryptoPrices, 60000);
