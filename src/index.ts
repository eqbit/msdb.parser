import lineReader from 'line-reader';

interface Movie {
  adult: boolean;
  id: number;
  original_title: string;
  popularity: number;
  video: boolean;
}

let i = 0;
lineReader.eachLine(__dirname + '/source.txt', (line: string) => {
  const movie: Movie = JSON.parse(line);
  
  if (movie.popularity > 100) {
    console.log(movie.original_title, movie.popularity);
    i++;
  }
  
  if (i > 20) return false;
}, (error: Error) => {
  console.log(error);
});
