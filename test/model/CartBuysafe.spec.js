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
    instance = new UltraCartRestApiV2.CartBuysafe();
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

  describe('CartBuysafe', function() {
    it('should create an instance of CartBuysafe', function() {
      // uncomment below and update the code to test CartBuysafe
      //var instane = new UltraCartRestApiV2.CartBuysafe();
      //expect(instance).to.be.a(UltraCartRestApiV2.CartBuysafe);
    });

    it('should have the property bondAvailable (base name: "bond_available")', function() {
      // uncomment below and update the code to test the property bondAvailable
      //var instane = new UltraCartRestApiV2.CartBuysafe();
      //expect(instance).to.be();
    });

    it('should have the property bondCost (base name: "bond_cost")', function() {
      // uncomment below and update the code to test the property bondCost
      //var instane = new UltraCartRestApiV2.CartBuysafe();
      //expect(instance).to.be();
    });

    it('should have the property bondFree (base name: "bond_free")', function() {
      // uncomment below and update the code to test the property bondFree
      //var instane = new UltraCartRestApiV2.CartBuysafe();
      //expect(instance).to.be();
    });

    it('should have the property bondWanted (base name: "bond_wanted")', function() {
      // uncomment below and update the code to test the property bondWanted
      //var instane = new UltraCartRestApiV2.CartBuysafe();
      //expect(instance).to.be();
    });

    it('should have the property cartDisplayText (base name: "cart_display_text")', function() {
      // uncomment below and update the code to test the property cartDisplayText
      //var instane = new UltraCartRestApiV2.CartBuysafe();
      //expect(instance).to.be();
    });

    it('should have the property cartDisplayUrl (base name: "cart_display_url")', function() {
      // uncomment below and update the code to test the property cartDisplayUrl
      //var instane = new UltraCartRestApiV2.CartBuysafe();
      //expect(instance).to.be();
    });

  });

}));
