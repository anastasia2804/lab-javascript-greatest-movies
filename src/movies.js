// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directorArray = moviesArray.map(function(element){
        return element.director
    })
    
    return directorArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let filteredMovies = moviesArray.filter(function(movie){
        if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) {
            return true;
        } else {
             return false;
        }
    })
    return filteredMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    // let moviesScoreArray = moviesArray.map(function(movie){
    //     if (!movie.score) {
    //         return 0;
    //     }
    //     return movie.score;
    // })
    if (moviesArray.length == 0){
        return 0;
    }

    let averageScore = moviesArray.reduce (function (acc, curr){
        if (!curr.score) {
        return acc;
        }

        return acc+curr.score;
    }, 0)
    
    return Math.round((averageScore/moviesArray.length)*100)/100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaArray = moviesArray.filter(function(movie){
        if (movie.genre.includes("Drama")) {
            return true
        } else {
            return false
        }
    })

    if (dramaArray.length == 0){
        return 0;
    }

    let averageScore = dramaArray.reduce (function (acc, curr){
        if (!curr.score) {
        return acc;
        }

        return acc+curr.score;
    }, 0)

    return Math.round((averageScore/dramaArray.length)*100)/100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let sortedArray = [...moviesArray].sort(function compare(a,b){
        if (a.year > b.year){
            return 1;
        } else if (a.year < b.year) {
            return -1;
        } else if (a.year === b.year) {
           return a.title.localeCompare(b.title)
        }
    })
    return sortedArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    // let sortedArray = [...moviesArray].sort(function compare(a,b){
    //     if (a.title > b.title){
    //         return 1;
    //     } else if (a.title < b.title) {
    //         return -1;
    //     } else if (a.title === b.title) {
    //         return 0;
    //     }
    // })
    //     return sortedArray.slice(0,20)

    let titleArray=moviesArray.map(function(movie){
        return movie.title
    })

    let sortedArray = titleArray.sort(function compare(a,b){
        if(a < b){
            return -1
        } else if (a > b) {
            return 1   
        } else if (a === b) {
            return 0;
        }
    })
        
    return sortedArray.slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
