const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultContainer = document.querySelector(".results");
const loading = document.querySelector(".loading");

setTimeout(function () {
    loading.classList.remove(".loading-symbol");
}, 5000);


async function makeApiCall() {
    try {
        const response = await fetch(url);

        const result = await response.json();

        console.log(result);


        const jsonCount = result.results;
        const jsonRating = result.results;
        const jsonTags = result.results;

        resultContainer.innerHTML = "";

        for (let i = 0; i <= jsonCount.length; i++) {
            console.log(jsonCount[i]);
            console.log(jsonRating[i].rating);
            console.log(jsonTags[i].tags.length);

            if (i === 8) {
                break;
            };
            resultContainer.innerHTML += `<div class="json-1"><p>name: ${jsonCount[i].name} </p></div>`;

            resultContainer.innerHTML += `<div class="json-2"><p>rating: ${jsonRating[i].rating}</p></div>`;

            resultContainer.innerHTML += `<div class="json-3"><p>tags: ${jsonTags[i].tags.length}</p></div>`;
        }
    }
    catch (error) {
        console.log(error);
        resultContainer.innerHTML = "An error has occurred when calling the API";
    }
};

makeApiCall();
