import fetch from 'node-fetch';

async function infectados2m (_req, res) {
  
  const limiter = 2000000;

  try {
    const fetchResponse = await fetch(process.env.API_URL);
    const { infectedByRegion } = await fetchResponse.json();

    const moreThan2M = infectedByRegion.filter(item => item.count > limiter);

    return res.status(200).send(moreThan2M);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send('Desculpe. Tivemos um problema.');
  }
}

export { infectados2m };