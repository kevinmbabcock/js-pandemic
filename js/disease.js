export class Disease {

  constructor(name, mortalityRate, causes, spreadWay) {
    this.name = name;
    this.spreadRate = 20;
    this.mortalityRate = mortalityRate;
    this.causes = causes;
    this.spreadWay = spreadWay;
  }

  setSpreadRate() {
    setInterval(() => {
      this.spreadRate += 10;
      let result = this.isWinner();
      if (result) {
        $("#result").text(result);
        $(".game-over").show();
        $(".game").hide();
      }
    }, 120000);

  }

  isWinner() {
    if (this.spreadRate >= 100) {
      return "You are a LOSER! The disease has taken over, everyone is dead";
    } else if (this.spreadRate <= 0) {
      return `You Win! You have successfully defeated the ${this.name} disease`;
    }
  }

  cure(type) {

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
        this.spreadRate -= 5 ;
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
        this.spreadRate -= 5 ;
      }
    }
  }
}
