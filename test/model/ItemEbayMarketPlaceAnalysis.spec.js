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
    instance = new UltraCartRestApiV2.ItemEbayMarketPlaceAnalysis();
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

  describe('ItemEbayMarketPlaceAnalysis', function() {
    it('should create an instance of ItemEbayMarketPlaceAnalysis', function() {
      // uncomment below and update the code to test ItemEbayMarketPlaceAnalysis
      //var instane = new UltraCartRestApiV2.ItemEbayMarketPlaceAnalysis();
      //expect(instance).to.be.a(UltraCartRestApiV2.ItemEbayMarketPlaceAnalysis);
    });

    it('should have the property adjustedPrice (base name: "adjusted_price")', function() {
      // uncomment below and update the code to test the property adjustedPrice
      //var instane = new UltraCartRestApiV2.ItemEbayMarketPlaceAnalysis();
      //expect(instance).to.be();
    });

    it('should have the property adjustedShipping (base name: "adjusted_shipping")', function() {
      // uncomment below and update the code to test the property adjustedShipping
      //var instane = new UltraCartRestApiV2.ItemEbayMarketPlaceAnalysis();
      //expect(instance).to.be();
    });

    it('should have the property adjustedTotal (base name: "adjusted_total")', function() {
      // uncomment below and update the code to test the property adjustedTotal
      //var instane = new UltraCartRestApiV2.ItemEbayMarketPlaceAnalysis();
      //expect(instance).to.be();
    });

    it('should have the property cogs (base name: "cogs")', function() {
      // uncomment below and update the code to test the property cogs
      //var instane = new UltraCartRestApiV2.ItemEbayMarketPlaceAnalysis();
      //expect(instance).to.be();
    });

    it('should have the property finalValueFee (base name: "final_value_fee")', function() {
      // uncomment below and update the code to test the property finalValueFee
      //var instane = new UltraCartRestApiV2.ItemEbayMarketPlaceAnalysis();
      //expect(instance).to.be();
    });

    it('should have the property minimumAdvertisedPrice (base name: "minimum_advertised_price")', function() {
      // uncomment below and update the code to test the property minimumAdvertisedPrice
      //var instane = new UltraCartRestApiV2.ItemEbayMarketPlaceAnalysis();
      //expect(instance).to.be();
    });

    it('should have the property otherListings (base name: "other_listings")', function() {
      // uncomment below and update the code to test the property otherListings
      //var instane = new UltraCartRestApiV2.ItemEbayMarketPlaceAnalysis();
      //expect(instance).to.be();
    });

    it('should have the property ourListing (base name: "our_listing")', function() {
      // uncomment below and update the code to test the property ourListing
      //var instane = new UltraCartRestApiV2.ItemEbayMarketPlaceAnalysis();
      //expect(instance).to.be();
    });

    it('should have the property overhead (base name: "overhead")', function() {
      // uncomment below and update the code to test the property overhead
      //var instane = new UltraCartRestApiV2.ItemEbayMarketPlaceAnalysis();
      //expect(instance).to.be();
    });

    it('should have the property profitPotential (base name: "profit_potential")', function() {
      // uncomment below and update the code to test the property profitPotential
      //var instane = new UltraCartRestApiV2.ItemEbayMarketPlaceAnalysis();
      //expect(instance).to.be();
    });

  });

}));
