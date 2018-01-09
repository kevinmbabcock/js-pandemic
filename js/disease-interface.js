import { Disease } from './../js/disease.js';
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {

  $("#disease-name").submit(function(event) {
    event.preventDefault();

    let request = new XMLHttpRequest();
    let url = `http://api.giphy.com/v1/gifs/search?q=virus&api_key=${apiKey}&limit=2&rating=g`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        let response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

    const getElements = function(response) {
      console.log(response);
      response.data.forEach(function(image) {
        $("#pic").prepend("<img src="+image.images.original.url+">");
      })
    };

    let name = $("#select-name").val();
    let disease;
    if (name === "Malaria") {
      disease = new Disease("Malaria", 15, "bacteria", "direct-contact");
    } else if (name === "Smallpox") {
      disease = new Disease("Smallpox", 30, "virus", "air-contamination");
    } else if (name === "E. Coli") {
      disease = new Disease("E. Coli", 20, "parasite", "food-contamination");
    }

    disease.setSpreadRate();


    $(".game").show();
    $(".disease-choice").hide();

    $("#name").text(disease.name);
    $("#spread-rate").text(disease.spreadRate);
    $("#mortality-rate").text(disease.mortalityRate);
    $("#causes").text(disease.causes);
    $("#spread-way").text(disease.spreadWay);


    $("#research").click(function() {
      $(".research").show();
      $("#cause-search").click(function() {
        let number = Math.floor((Math.random() * 2) + 1);
        let result;
        if (number === 1) {
          result = "has led you to the cause of the disease";
          $(".causes").show();
        } else {
          result = "did nothing";
        }
        $("#cause-result").text(result);
        $("#cause-search").hide();

      });
      $("#spread-way-search").click(function() {
        let number = Math.floor((Math.random() * 2) + 1);
        let result;
        if (number === 1) {
          result = "has shown you how the disease spreads";
          $(".spread-way").show();
        } else {
          result = "did nothing";
        }
        $("#spread-result").text(result);
        $("#spread-way-search").hide();
      });

    });

    $("#fight").click(function() {
      $(".fight-type").show();
      $(".fight-result").show();
      let type;
      $("#fight-type").submit(function(event) {
        event.preventDefault();

        type = $("#remedy").val();
      });

      let change = disease.cure(type);
      $("#spread-rate").text(disease.spreadRate);
      $("#fight-type").text(type);
      $("#fight-result").text(change);


      let result = disease.isWinner();
      if (result) {
        $("#result").text(result);
        $(".game-over").show();
        $(".game").hide();
      };
    });
  });
});
