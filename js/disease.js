export class Disease {

  constructor(name, mortalityRate, causes, spreadWay) {
    this.name = name;
    this.spreadRate = 1;
    this.mortalityRate = mortalityRate;
    this.causes = causes;
    this.spreadWay = spreadWay;
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
