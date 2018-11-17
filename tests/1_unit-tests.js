/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', function(done) {
      let input = '0.4gal';
      assert.equal(convertHandler.getNum(input),0.4);
      done();
    });
    
    test('Fractional Input', function(done) {
      let input = '10/5km';
      assert.equal(convertHandler.getNum(input),2);
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      let input = '6.6/3.3kg';
      assert.equal(convertHandler.getNum(input),2);
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      let input = '4.4/2.2/1.1';
      assert.equal(convertHandler.getNum(input),null);
      done();
    });
    
    test('No Numerical Input', function(done) {
      let input = 'kg';
      assert.equal(convertHandler.getNum(input),1);
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        //let output = {gal:'L', GAL:'L', L:'gal', l:'gal', mi:'km', MI:'km', km:'mi', KM:'mi', lbs:'kg', LBS:'kg', kg:'lbs', KG:'lba'};
        assert.notEqual(convertHandler.getUnit(ele), 'invalid unit', 'The input was a valid unit' );
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      assert.equal(convertHandler.getUnit('jims'), 'invalid unit', 'jims is not a valid unit');
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      //see above example for hint
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      inputs.forEach( (ele, i) => {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i], 'The input unit does not match what should be outputed');
      });
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      var input = [1, 'L'];
      var expected = 5;
      assert.approximately(convertHandler.convert(input[0],input[1]), expected, 0.1);  //0.1 tolerance
      done();
    });
    
    test('Mi to Km', function(done) {
      var input = [2, 'Mi'];
      var expected = 3.21868;
      assert.approximately(convertHandler.convert(input[0],input[1]), expected, 0.1);  //0.1 tolerance
      done();
    });
    
    test('Km to Mi', function(done) {
      var input = [3, 'Km'];
      var expected = 1.86411821;
      assert.approximately(convertHandler.convert(input[0],input[1]), expected, 0.1);  //0.1 tolerance
      //done();
    });
    
    test('Lbs to Kg', function(done) {
      var input = [10, 'Lbs'];
      var expected = 4.53592;
      assert.approximately(convertHandler.convert(input[0],input[1]), expected, 0.1);  //0.1 tolerance
      done();
    });
    
    test('Kg to Lbs', function(done) {
      var input = [20, 'Kg'];
      var expected = 44.0924884;
      assert.approximately(convertHandler.convert(input[0],input[1]), expected, 0.1);  //0.1 tolerance
      done();
    });
    
  });

});