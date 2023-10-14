let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie);
}

// Iterate through all elements of allMovies array
// Display the total number of movies in allMovies array
let printMovies = () => {
    var num = 0;
    allMovies.forEach(movie => {
        num++;
    });
    document.getElementById("moviesWatched").innerHTML = num;
}

// Display only the movies that have a rating higher than the given rating
// Display the total number of matches
let highRatings = (rating) => {
    const highRatedMovies = allMovies.filter(movie => movie.rating > rating);

    if (highRatedMovies.length === 0) {
        document.getElementById("result").innerHTML = "No movies with a rating higher than " + rating;
    } else {
        let resultHTML = "";

        highRatedMovies.forEach(movie => {
            resultHTML += `
                <ul>
                    <strong>${movie.title}</strong> <br>
                    <body>Rating:</body> ${movie.rating}<br>
                    <body>Have Watched:</body> ${movie.haveWatched ? 'Yes' : 'No'}
                </ul>
            `;
        });

        document.getElementById("result").innerHTML = resultHTML;
        document.getElementById("matches").innerHTML = String(highRatedMovies.length);
    }
}

// Toggle the 'haveWatched' property of the specified movie
let changeWatched = (title) => {
    const movie = allMovies.find(movie => movie.title === title);
    if (movie) {
        movie.haveWatched = !movie.haveWatched;
    }
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace console.log with display on web page*/
console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);

/*replace console.log with display on web page*/
console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();

/*replace console.log with display on web page*/
console.log("----------------");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();
/*replace console.log with display on web page*/
console.log("----------------");

highRatings(3.5);