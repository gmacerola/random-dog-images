let numOfDogs = 3;
let dogImages = [];

function getDogImages() {
  fetch(`https://dog.ceo/api/breeds/image/random/${numOfDogs}`)
    .then((response) => response.json())
    .then((responseJson) => displayResults(responseJson))
    //.then((responseJson) => dogImageArray(responseJson))
    .catch((error) => alert("Something went wrong! Try again later"));
}

/*function dogImageArray(responseJson) {
  for (i = 0; i < numOfDogs; i++) {
    `${responseJson.message[i]}.push(dogImages())`;
  }
  console.log(dogImages());
}*/

function displayResults(responseJson) {
  console.log(responseJson);
  const resultsHtmlRef = $(".results");
  const imageArray = [];
  $(".initial").addClass("hidden");
  for (let i = 0; i < numOfDogs; i++) {
    imageArray.push(
      `<img src="${responseJson.message[i]}" class="results-img">`
    );
  }
  /*$(".results").replaceWith(
    `<img src="${responseJson.message[0]}" class="results-img">`
  );*/
  $(".results").removeClass("hidden");
  $(".results").html(imageArray.join(""));
  $(".restart").removeClass("hidden");
}

function watchForm() {
  $("form").submit((event) => {
    event.preventDefault();
    numOfDogs = $("#numOfDogs").val();
    console.log(numOfDogs);
    getDogImages();
  });
}

function restart() {
  $(".restart").on("click", function (event) {
    $(".initial").removeClass("hidden");
    $(".results").addClass("hidden");
    $(".restart").addClass("hidden");
  });
}

$(function () {
  watchForm();
  restart();
});
