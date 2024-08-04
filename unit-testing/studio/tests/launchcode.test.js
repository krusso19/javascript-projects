// launchcode.test.js code:
const { exec } = require('child_process');
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  test("should contain the key value pair organization:'nonprofit'", function(){
   let organization = launchcode.organization();
    expect(organization).toBe("nonprofit");
  });

  test("should contain the key value pair executiveDirector: 'Jeff'", function(){
    let executiveDirector = launchcode.executiveDirector();
    expect(executiveDirector).toBe("Jeff");
  });

  test("should contain percentageCoolEmployees", function(){
    let percentageCoolEmployees = launchcode.percentageCoolEmployees();
    expect(percentageCoolEmployees).toBe(!undefined);
  });

  test("should", function(){
    expect(launchcode()).toBe();
  });
  
  // Write your unit tests here!
  
});