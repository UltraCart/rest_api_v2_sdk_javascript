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
    instance = new UltraCartRestApiV2.OrderTaxes();
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

  describe('OrderTaxes', function() {
    it('should create an instance of OrderTaxes', function() {
      // uncomment below and update the code to test OrderTaxes
      //var instane = new UltraCartRestApiV2.OrderTaxes();
      //expect(instance).to.be.a(UltraCartRestApiV2.OrderTaxes);
    });

    it('should have the property taxCityAccountingCode (base name: "tax_city_accounting_code")', function() {
      // uncomment below and update the code to test the property taxCityAccountingCode
      //var instane = new UltraCartRestApiV2.OrderTaxes();
      //expect(instance).to.be();
    });

    it('should have the property taxCountryAccountingCode (base name: "tax_country_accounting_code")', function() {
      // uncomment below and update the code to test the property taxCountryAccountingCode
      //var instane = new UltraCartRestApiV2.OrderTaxes();
      //expect(instance).to.be();
    });

    it('should have the property taxCounty (base name: "tax_county")', function() {
      // uncomment below and update the code to test the property taxCounty
      //var instane = new UltraCartRestApiV2.OrderTaxes();
      //expect(instance).to.be();
    });

    it('should have the property taxCountyAccountingCode (base name: "tax_county_accounting_code")', function() {
      // uncomment below and update the code to test the property taxCountyAccountingCode
      //var instane = new UltraCartRestApiV2.OrderTaxes();
      //expect(instance).to.be();
    });

    it('should have the property taxPostalCodeAccountingCode (base name: "tax_postal_code_accounting_code")', function() {
      // uncomment below and update the code to test the property taxPostalCodeAccountingCode
      //var instane = new UltraCartRestApiV2.OrderTaxes();
      //expect(instance).to.be();
    });

    it('should have the property taxRate (base name: "tax_rate")', function() {
      // uncomment below and update the code to test the property taxRate
      //var instane = new UltraCartRestApiV2.OrderTaxes();
      //expect(instance).to.be();
    });

    it('should have the property taxRateCity (base name: "tax_rate_city")', function() {
      // uncomment below and update the code to test the property taxRateCity
      //var instane = new UltraCartRestApiV2.OrderTaxes();
      //expect(instance).to.be();
    });

    it('should have the property taxRateCountry (base name: "tax_rate_country")', function() {
      // uncomment below and update the code to test the property taxRateCountry
      //var instane = new UltraCartRestApiV2.OrderTaxes();
      //expect(instance).to.be();
    });

    it('should have the property taxRateCounty (base name: "tax_rate_county")', function() {
      // uncomment below and update the code to test the property taxRateCounty
      //var instane = new UltraCartRestApiV2.OrderTaxes();
      //expect(instance).to.be();
    });

    it('should have the property taxRatePostalCode (base name: "tax_rate_postal_code")', function() {
      // uncomment below and update the code to test the property taxRatePostalCode
      //var instane = new UltraCartRestApiV2.OrderTaxes();
      //expect(instance).to.be();
    });

    it('should have the property taxRateState (base name: "tax_rate_state")', function() {
      // uncomment below and update the code to test the property taxRateState
      //var instane = new UltraCartRestApiV2.OrderTaxes();
      //expect(instance).to.be();
    });

    it('should have the property taxStateAccountingCode (base name: "tax_state_accounting_code")', function() {
      // uncomment below and update the code to test the property taxStateAccountingCode
      //var instane = new UltraCartRestApiV2.OrderTaxes();
      //expect(instance).to.be();
    });

  });

}));
