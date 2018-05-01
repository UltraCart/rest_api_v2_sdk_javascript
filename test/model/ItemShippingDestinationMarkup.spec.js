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
    instance = new UltraCartRestApiV2.ItemShippingDestinationMarkup();
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

  describe('ItemShippingDestinationMarkup', function() {
    it('should create an instance of ItemShippingDestinationMarkup', function() {
      // uncomment below and update the code to test ItemShippingDestinationMarkup
      //var instane = new UltraCartRestApiV2.ItemShippingDestinationMarkup();
      //expect(instance).to.be.a(UltraCartRestApiV2.ItemShippingDestinationMarkup);
    });

    it('should have the property countryCode (base name: "country_code")', function() {
      // uncomment below and update the code to test the property countryCode
      //var instane = new UltraCartRestApiV2.ItemShippingDestinationMarkup();
      //expect(instance).to.be();
    });

    it('should have the property flatFee (base name: "flat_fee")', function() {
      // uncomment below and update the code to test the property flatFee
      //var instane = new UltraCartRestApiV2.ItemShippingDestinationMarkup();
      //expect(instance).to.be();
    });

    it('should have the property perItem (base name: "per_item")', function() {
      // uncomment below and update the code to test the property perItem
      //var instane = new UltraCartRestApiV2.ItemShippingDestinationMarkup();
      //expect(instance).to.be();
    });

    it('should have the property postalCode (base name: "postal_code")', function() {
      // uncomment below and update the code to test the property postalCode
      //var instane = new UltraCartRestApiV2.ItemShippingDestinationMarkup();
      //expect(instance).to.be();
    });

    it('should have the property shippingMethod (base name: "shipping_method")', function() {
      // uncomment below and update the code to test the property shippingMethod
      //var instane = new UltraCartRestApiV2.ItemShippingDestinationMarkup();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new UltraCartRestApiV2.ItemShippingDestinationMarkup();
      //expect(instance).to.be();
    });

  });

}));
