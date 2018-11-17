/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) { 
    
    let result;
    if( /^[a-z]+$/i.test(input) ) {
      
      result = 1;
      return result;
      
    }
    let inputNum = input.match(/^[0-9\/\.]+/);
    inputNum = inputNum[0];
    // console.log("this is the input without any units: ",inputNum);
    
    let regexFraction     = /^[0-9]*\.?(?=[0-9])[0-9]*(?<=[0-9])\/?(?=[0-9\.])(?<=\/)[0-9]*\.?(?=[0-9])[0-9]*$/;
    let regexNonFraction  = /^[0-9]*\.?(?=[0-9])[0-9]*$/;
    switch(true){
        
      case regexFraction.test(inputNum):
        // console.log('the input was a fraction.');
        result = inputNum.match(regexFraction);
        // console.log(result);
        result = parseFloat( eval(result[0]) );
        break;
        
      case regexNonFraction.test(inputNum):
        // console.log('the input was not a fraction');
        result = inputNum.match(regexNonFraction);
        // console.log(result);
        result = parseFloat( eval(result[0]) );
        break;
        
      default:
        result = null;
        break;
    }
    // console.log(result);
    return result;
  };
  
  this.getUnit = function(input) {
    let result = input.match(/[^a-z]*([^0-9]*)$/i);
    result = result[1].toLowerCase();
    // console.log(result);
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    switch(true){
      case /^gal$/i.test(initUnit):
        result = 'L';
        break;
      case /^L$/i.test(initUnit):
        result = 'gal';
        break;
      case /^lbs$/i.test(initUnit):
        result = 'kg';
        break;
      case /^kg$/i.test(initUnit):
        result = 'lbs';
        break;
      case /^mi$/i.test(initUnit):
        result = 'km';
        break;
      case /^km$/i.test(initUnit):
        result = 'mi';
        break;
      default:
        result = null;
    }
    // console.log(result);
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    switch(true){
      case /gal/i.test(initUnit):
        result = 'L';
        break;
      case /L/i.test(initUnit):
        result = 'gal';
        break;
      case /lbs/i.test(initUnit):
        result = 'kg';
        break;
      case /kg/i.test(initUnit):
        result = 'lbs';
        break;
      case /mi/i.test(initUnit):
        result = 'km';
        break;
      case /km/i.test(initUnit):
        result = 'mi';
        break;
      default:
        result = 'invalid unit';
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    switch(initUnit){
      case 'gal':
        result = initNum * galToL;
        break;
      case 'L':
        result = initNum / galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      default:
        result = null;
    }
    //initNum is valid but the units are off just return the initNum as the result
    
    result = Math.round( result * 100000 ) / 100000;
    // console.log(result);
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    result = initNum + " " + initUnit + " converts to " + returnNum + " " + returnUnit + " with the result rounded to 5 decimals.";
    // console.log(result);
    return result;
  };
  
}

module.exports = ConvertHandler;
