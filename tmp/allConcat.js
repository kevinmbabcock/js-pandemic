import { Disease } from './../js/disease.js';

$(document).ready(function() {

  $("#disease-name").submit(function(event) {
    event.preventDefault();


    let name = $("#select-name").val();
    let disease;
    if (name === "Malaria") {
      disease = new Disease("Malaria", 10, "bacteria", "direct-contact");
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



    });

    $("#fight").click(function() {
      let number = Math.floor((Math.random() * 6) + 1);
      let type;
      if (number === 1) {
        type = "food-decontamination";
      } else if (number === 2) {
        type = "water-decontamination";
      } else if (number === 3) {
        type = "air-decontamination";
      } else if (number === 4) {
        type = "antibiotics";
      } else if (number === 5) {
        type = "vaccinations";
      } else if (number === 6) {
        type = "quarantine";
      }

      disease.cure(type);
      $("#spread-rate").text(disease.spreadRate);


      let result = disease.isWinner();
      if (result) {
        $("#result").text(result);
        $(".game-over").show();
        $(".game").hide();
      }
    });
  });
});
