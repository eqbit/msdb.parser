import { ShortMovie } from './types';
import axios from 'axios';

const movies: ShortMovie[] = require('./output/output.json');

const update = async (tmdbId: number) => {
  const response = await axios(`http://localhost:4000/add-movie/${tmdbId}`);
  console.log(response.data.message);
};

export const updater = async () => {
  if (movies && movies.length) {
    const movie = movies.shift();
    if (movie) {
      await update(movie.id).then(() => {
        updater();
      });
    }
  } else {
    console.log('Done');
  }
};
