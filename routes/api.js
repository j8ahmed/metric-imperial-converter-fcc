/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      
      //check that the return values are valid
      console.log("initNum: ", initNum);
      console.log("initUnit: ", initUnit);
      console.log("returnNum: ", returnNum);
      console.log("returnUnit: ", returnUnit);
      console.log("return string: ", toString);
      if(!returnNum && !returnUnit){
        res.send('invalid number and unit');
      }else if(!initNum){
        res.send('invalid number');
      }else if(returnUnit == 'invalid unit'){
        res.send('invalid unit');
      }else{
        //res.json
          res.json({
          initNum: initNum,
          initUnit: initUnit,
          returnNum: returnNum,
          returnUnit: returnUnit,
          string: toString
        });
      }
    });
    
};
