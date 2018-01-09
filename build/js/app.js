(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Disease = exports.Disease = function () {
  function Disease(name, mortalityRate, causes, spreadWay) {
    _classCallCheck(this, Disease);

    this.name = name;
    this.spreadRate = 20;
    this.mortalityRate = mortalityRate;
    this.causes = causes;
    this.spreadWay = spreadWay;
  }

  _createClass(Disease, [{
    key: "setSpreadRate",
    value: function setSpreadRate() {
      var _this = this;

      setInterval(function () {
        _this.spreadRate += 10;
        var result = _this.isWinner();
        if (result) {
          $("#result").text(result);
          $(".game-over").show();
          $(".game").hide();
        }
      }, 120000);
    }
  }, {
    key: "isWinner",
    value: function isWinner() {
      if (this.spreadRate >= 100) {
        return "You are a LOSER! The disease has taken over, everyone is dead";
      } else if (this.spreadRate <= 0) {
        return "You Win! You have successfully defeated the " + this.name + " disease";
      }
    }
  }, {
    key: "cure",
    value: function cure(type) {

      if (type === "food-decontamination") {
        if (this.name === "Malaria") {
          this.spreadRate += 10;
        } else if (this.name === "Smallpox") {
          this.spreadRate += 10;
        } else if (this.name === "E. Coli") {
          this.spreadRate = 0;
        }
      } else if (type === "water-decontamination") {
        if (this.name === "Malaria") {
          this.spreadRate += 10;
        } else if (this.name === "Smallpox") {
          this.spreadRate += 10;
        } else if (this.name === "E. Coli") {
          this.spreadRate -= 5;
        }
      } else if (type === "air-decontamination") {
        if (this.name === "Malaria") {
          this.spreadRate += 10;
        } else if (this.name === "Smallpox") {
          this.spreadRate = 0;
        } else if (this.name === "E. Coli") {
          this.spreadRate += 10;
        }
      } else if (type === "antibiotics") {
        if (this.name === "Malaria") {
          this.spreadRate = 0;
        } else if (this.name === "Smallpox") {
          this.spreadRate += 10;
        } else if (this.name === "E. Coli") {
          this.spreadRate += 10;
        }
      } else if (type === "vaccination") {
        if (this.name === "Malaria") {
          this.spreadRate += 10;
        } else if (this.name === "Smallpox") {
          this.spreadRate = 0;
        } else if (this.name === "E. Coli") {
          this.spreadRate += 10;
        }
      } else if (type === "quarantine") {
        if (this.name === "Malaria") {
          this.spreadRate -= 5;
        } else if (this.name === "Smallpox") {
          this.spreadRate -= 5;
        } else if (this.name === "E. Coli") {
          this.spreadRate -= 5;
        }
      }
    }
  }]);

  return Disease;
}();

},{}],2:[function(require,module,exports){
"use strict";

var _disease = require("./../js/disease.js");

$(document).ready(function () {

  $("#disease-name").submit(function (event) {
    event.preventDefault();

    var name = $("#select-name").val();
    var disease = void 0;
    if (name === "Malaria") {
      disease = new _disease.Disease("Malaria", 10, "bacteria", "direct-contact");
    } else if (name === "Smallpox") {
      disease = new _disease.Disease("Smallpox", 30, "virus", "air-contamination");
    } else if (name === "E. Coli") {
      disease = new _disease.Disease("E. Coli", 20, "parasite", "food-contamination");
    }

    disease.setSpreadRate();

    $(".game").show();
    $(".disease-choice").hide();

    $("#name").text(disease.name);
    $("#spread-rate").text(disease.spreadRate);
    $("#mortality-rate").text(disease.mortalityRate);
    $("#causes").text(disease.causes);
    $("#spread-way").text(disease.spreadWay);

    $("#research").click(function () {
      $(".research").show();
      $("#cause-search").click(function () {
        var number = Math.floor(Math.random() * 2 + 1);
        var result = void 0;
        if (number === 1) {
          result = "has led you to the cause of the disease";
          $(".causes").show();
        } else {
          result = "did nothing";
        }
        $("#cause-result").text(result);
        $("#cause-search").hide();
      });
      $("#spread-way-search").click(function () {
        var number = Math.floor(Math.random() * 2 + 1);
        var result = void 0;
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

    $("#fight").click(function () {
      var number = Math.floor(Math.random() * 6 + 1);
      var type = void 0;
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

      var result = disease.isWinner();
      if (result) {
        $("#result").text(result);
        $(".game-over").show();
        $(".game").hide();
      }
    });
  });
});

},{"./../js/disease.js":1}]},{},[2]);
