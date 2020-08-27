const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultContainer = document.querySelector(".results");

async function makeApiCall() {
    try {
        const response = await fetch(url);

        const result = await response.json();

        console.log(result);
    }
    catch (error) {
        console.log(error);
        resultContainer.innerHTML = error
    }
};

makeApiCall();