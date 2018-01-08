import { Disease } from './../js/disease.js';

describe("Disease", function() {
  let reusableDisease;

  beforeEach(function() {
    reusableDisease = new Disease("Chicken Pox", 90, 5);
    jasmine.clock().install();
  })

  afterEach(function() {
    jasmine.clock().uninstall();
  })

  it('creates a new instance of Disease', function() {
    expect(reusableDisease.name).toEqual("Chicken Pox");
    expect(reusableDisease.spread).toEqual(90);
    expect(reusableDisease.mortalityRate).toEqual(5);

  })
})
