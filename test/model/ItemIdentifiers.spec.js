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
    instance = new UltraCartRestApiV2.ItemIdentifiers();
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

  describe('ItemIdentifiers', function() {
    it('should create an instance of ItemIdentifiers', function() {
      // uncomment below and update the code to test ItemIdentifiers
      //var instane = new UltraCartRestApiV2.ItemIdentifiers();
      //expect(instance).to.be.a(UltraCartRestApiV2.ItemIdentifiers);
    });

    it('should have the property barcode (base name: "barcode")', function() {
      // uncomment below and update the code to test the property barcode
      //var instane = new UltraCartRestApiV2.ItemIdentifiers();
      //expect(instance).to.be();
    });

    it('should have the property manufacturerName (base name: "manufacturer_name")', function() {
      // uncomment below and update the code to test the property manufacturerName
      //var instane = new UltraCartRestApiV2.ItemIdentifiers();
      //expect(instance).to.be();
    });

    it('should have the property manufacturerSku (base name: "manufacturer_sku")', function() {
      // uncomment below and update the code to test the property manufacturerSku
      //var instane = new UltraCartRestApiV2.ItemIdentifiers();
      //expect(instance).to.be();
    });

    it('should have the property unspsc (base name: "unspsc")', function() {
      // uncomment below and update the code to test the property unspsc
      //var instane = new UltraCartRestApiV2.ItemIdentifiers();
      //expect(instance).to.be();
    });

  });

}));
