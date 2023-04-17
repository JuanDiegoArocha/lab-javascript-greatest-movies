// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// 1
function getAllDirectors(moviesArray) {
    return moviesArray.map(function(moviesArray) {
        return moviesArray.director;
    })
}

console.log(getAllDirectors(movies))


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
      return 0;
    }
  
    const filteredArray = moviesArray.filter((movie) => {
      return (
        movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
      );
    });
  
    return filteredArray.length;
  }
  console.log(howManyMovies(movies))
  

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }

    const sum = moviesArray.reduce((acc, movies) => {
        if (movies.score) {
            return acc + movies.score;
        } else {
            return acc;
        }
    }, 0);

    const avgScore = sum / moviesArray.length;

    return parseFloat(avgScore.toFixed(2));
}
console.log(scoresAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
    
    
    if (dramaMovies.length === 0) {
      return 0;
    }
    
    
    const sumScores = dramaMovies.reduce((accumulator, movie) => {
      return accumulator + movie.score;
    }, 0);
    
    
    const averageScore = sumScores / dramaMovies.length;
    
    
    return parseFloat(averageScore.toFixed(2));
  }

  console.log(dramaMoviesScore(movies))
  


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const yearCopy = JSON.parse(JSON.stringify(moviesArray));

    const sortedMovies = yearCopy.sort((a, b) => {

      if (a.year === b.year) {

        return a.title.localeCompare(b.title);

      } else {

        return a.year - b.year;

      }
    });

    return sortedMovies;

  }
  
  console.log(orderByYear(movies))
   

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const alphaCopy = JSON.parse(JSON.stringify(moviesArray));

    const sortedArr = alphaCopy.sort((elem1, elem2) => {

        const element1 = elem1.title.toUpperCase();
        const element2 = elem2.title.toUpperCase();
        
        if (element1 < element2) {
            return -1;
        } 
        if (element1 > element2) {
            return 1;
        }
        return 0;

    });

        const titulo = sortedArr.map(movie => movie.title);

        return titulo.slice(0, 20)

}

console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    const moviesCopy = JSON.parse(JSON.stringify(moviesArray));

    const convertedMovies = moviesCopy.map(movie => {

      const durationParts = movie.duration.split(' ');

      let totalMinutes = 0;


      durationParts.forEach(part => {

        if (part.includes('h')) {

          totalMinutes += parseInt(part) * 60;

        } else {


          totalMinutes += parseInt(part);

        }

      });


      return { ...movie, duration: totalMinutes };


    });

    return convertedMovies;
  }
  console.log(turnHoursToMinutes(movies))
  

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    const yearAvgCopy = JSON.parse(JSON.stringify(moviesArray))

        if (moviesArray.length === 0) {
          return null;
        } 
        if (moviesArray.length === 1) {
           return `The best year was ${moviesArray[0].year} with an average score of ${moviesArray[0].score}`
        }

      
        let years = [];
        let scores = [];
      
        moviesArray.forEach((movie) => {
          if (years.indexOf(movie.year) === -1) {
            years.push(movie.year);
            scores.push([movie.score]);
          } else {
            let index = years.indexOf(movie.year);
            scores[index].push(movie.score);
          }
        });
      
        
      
        return `The best year was ${maxYear} with an average score of ${maxAvg.toFixed(1)}`;
      }

      console.log(bestYearAvg(movies))
      
      


