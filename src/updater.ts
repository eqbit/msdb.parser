import { ShortMovie } from './types';
import { sleep } from './utils';
import axios from 'axios';

const movies: ShortMovie[] = require('./output/output.json');

const update = async (tmdbId: number) => {
  const response = await axios(`http://localhost:4000/add-movie/${tmdbId}`);
  console.log(response.data.message);
};

let i = 0;

export const updater = async () => {
  i++;
  if (movies && movies.length && i < 10) {
    const movie = movies.shift();
    if (movie) {
      await update(movie.id).then(async () => {
        await sleep(250);
        updater();
      });
    }
  }
};
