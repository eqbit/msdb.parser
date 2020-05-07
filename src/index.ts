import lineReader from 'line-reader';
import fs from 'fs';

interface Movie {
  adult: boolean;
  id: number;
  original_title: string;
  popularity: number;
  video: boolean;
}

const movies: Movie[] = [];
lineReader.eachLine(__dirname + '/source/source.json', (line: string, last) => {
  const movie: Movie = JSON.parse(line);
  
  if (movie.popularity > 10) {
    movies.push(movie);
  }
  
  if (last) {
    fs.writeFile(
      __dirname + '/output/output.json',
      JSON.stringify(movies, null, ' '),
      (err) => {
        console.error(err);
      }
    );
    return false;
  }
  
  return 1;
});
