const catBtn = document.getElementById('cat-btn');
const dogBtn = document.getElementById('dog-btn');
const quoteBtn = document.getElementById('quote-btn');
const resultContainer = document.getElementById('result-container');

// Fetch random cat image
catBtn.addEventListener('click', async () => {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    const imageUrl = data[0].url;
    resultContainer.innerHTML = `<img src="${imageUrl}" alt="Random Cat">`;
  } catch (error) {
    resultContainer.innerHTML = 'Failed to fetch cat image.';
  }
});

// Fetch random dog image
dogBtn.addEventListener('click', async () => {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    const imageUrl = data.message;
    resultContainer.innerHTML = `<img src="${imageUrl}" alt="Random Dog">`;
  } catch (error) {
    resultContainer.innerHTML = 'Failed to fetch dog image.';
  }
});

// Fetch random quote
quoteBtn.addEventListener('click', async () => {
    try {
        const response = await fetch('https://inspirobot.me/api?generate=true');
        const quoteImageURL = await response.text();
        document.getElementById('result-container').innerHTML = `<img src="${quoteImageURL}" alt="Inspirational Quote">`;
    } catch (error) {
        document.getElementById('result-container').innerHTML = '❌ Failed to fetch quote.';
    }
});

