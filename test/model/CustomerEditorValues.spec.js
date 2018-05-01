/**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.UltraCartRestApiV2);
  }
}(this, function(expect, UltraCartRestApiV2) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new UltraCartRestApiV2.CustomerEditorValues();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('CustomerEditorValues', function() {
    it('should create an instance of CustomerEditorValues', function() {
      // uncomment below and update the code to test CustomerEditorValues
      //var instane = new UltraCartRestApiV2.CustomerEditorValues();
      //expect(instance).to.be.a(UltraCartRestApiV2.CustomerEditorValues);
    });

    it('should have the property affiliates (base name: "affiliates")', function() {
      // uncomment below and update the code to test the property affiliates
      //var instane = new UltraCartRestApiV2.CustomerEditorValues();
      //expect(instance).to.be();
    });

    it('should have the property cardExpMonths (base name: "card_exp_months")', function() {
      // uncomment below and update the code to test the property cardExpMonths
      //var instane = new UltraCartRestApiV2.CustomerEditorValues();
      //expect(instance).to.be();
    });

    it('should have the property cardExpYears (base name: "card_exp_years")', function() {
      // uncomment below and update the code to test the property cardExpYears
      //var instane = new UltraCartRestApiV2.CustomerEditorValues();
      //expect(instance).to.be();
    });

    it('should have the property cardTypes (base name: "card_types")', function() {
      // uncomment below and update the code to test the property cardTypes
      //var instane = new UltraCartRestApiV2.CustomerEditorValues();
      //expect(instance).to.be();
    });

    it('should have the property countries (base name: "countries")', function() {
      // uncomment below and update the code to test the property countries
      //var instane = new UltraCartRestApiV2.CustomerEditorValues();
      //expect(instance).to.be();
    });

    it('should have the property qbClasses (base name: "qb_classes")', function() {
      // uncomment below and update the code to test the property qbClasses
      //var instane = new UltraCartRestApiV2.CustomerEditorValues();
      //expect(instance).to.be();
    });

    it('should have the property salesRepCodes (base name: "sales_rep_codes")', function() {
      // uncomment below and update the code to test the property salesRepCodes
      //var instane = new UltraCartRestApiV2.CustomerEditorValues();
      //expect(instance).to.be();
    });

    it('should have the property terms (base name: "terms")', function() {
      // uncomment below and update the code to test the property terms
      //var instane = new UltraCartRestApiV2.CustomerEditorValues();
      //expect(instance).to.be();
    });

  });

}));
