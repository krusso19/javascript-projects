const processor = require('../processor.js');

describe("transmission processor", function() {

  test("should take a string a return an object", function(){
    let result = processor("9701::<48958>");
    expect(typeof result).toBe("object");
  });

  test("should return -1 if '::' is not found", function(){
    let result = processor("9701 <48955>");
    expect(result).toBe(-1);
  });

  test("returns id in object", function(){
    let result = processor("9701::<48958>")
    expect(result.id).not.toBeUndefined();

  });
 
  test("converts id to number", function(){
    let result = ("9701::<48958>");
    expect(result.id).toBe(9701);
  });
 
  test("returns rawData in object", function(){
    let result = processor("9701::<48958>");
    expect(result.rawData).not.toBeUndefined();
  });
 
  test("returns -1 for rawData if missing < at position 0", function(){
    let result = processor("9701::48958>");
    expect(result.rawData).toBe(-1);

  });
 
 });