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
    instance = new UltraCartRestApiV2.EmailStat();
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

  describe('EmailStat', function() {
    it('should create an instance of EmailStat', function() {
      // uncomment below and update the code to test EmailStat
      //var instane = new UltraCartRestApiV2.EmailStat();
      //expect(instance).to.be.a(UltraCartRestApiV2.EmailStat);
    });

    it('should have the property clickCount (base name: "click_count")', function() {
      // uncomment below and update the code to test the property clickCount
      //var instane = new UltraCartRestApiV2.EmailStat();
      //expect(instance).to.be();
    });

    it('should have the property clickCountFormatted (base name: "click_count_formatted")', function() {
      // uncomment below and update the code to test the property clickCountFormatted
      //var instane = new UltraCartRestApiV2.EmailStat();
      //expect(instance).to.be();
    });

    it('should have the property deliveredCount (base name: "delivered_count")', function() {
      // uncomment below and update the code to test the property deliveredCount
      //var instane = new UltraCartRestApiV2.EmailStat();
      //expect(instance).to.be();
    });

    it('should have the property deliveredCountFormatted (base name: "delivered_count_formatted")', function() {
      // uncomment below and update the code to test the property deliveredCountFormatted
      //var instane = new UltraCartRestApiV2.EmailStat();
      //expect(instance).to.be();
    });

    it('should have the property kickboxCount (base name: "kickbox_count")', function() {
      // uncomment below and update the code to test the property kickboxCount
      //var instane = new UltraCartRestApiV2.EmailStat();
      //expect(instance).to.be();
    });

    it('should have the property kickboxCountFormatted (base name: "kickbox_count_formatted")', function() {
      // uncomment below and update the code to test the property kickboxCountFormatted
      //var instane = new UltraCartRestApiV2.EmailStat();
      //expect(instance).to.be();
    });

    it('should have the property merchantId (base name: "merchant_id")', function() {
      // uncomment below and update the code to test the property merchantId
      //var instane = new UltraCartRestApiV2.EmailStat();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new UltraCartRestApiV2.EmailStat();
      //expect(instance).to.be();
    });

    it('should have the property openCount (base name: "open_count")', function() {
      // uncomment below and update the code to test the property openCount
      //var instane = new UltraCartRestApiV2.EmailStat();
      //expect(instance).to.be();
    });

    it('should have the property openCountFormatted (base name: "open_count_formatted")', function() {
      // uncomment below and update the code to test the property openCountFormatted
      //var instane = new UltraCartRestApiV2.EmailStat();
      //expect(instance).to.be();
    });

    it('should have the property permanentBounceCount (base name: "permanent_bounce_count")', function() {
      // uncomment below and update the code to test the property permanentBounceCount
      //var instane = new UltraCartRestApiV2.EmailStat();
      //expect(instance).to.be();
    });

    it('should have the property permanentBounceCountFormatted (base name: "permanent_bounce_count_formatted")', function() {
      // uncomment below and update the code to test the property permanentBounceCountFormatted
      //var instane = new UltraCartRestApiV2.EmailStat();
      //expect(instance).to.be();
    });

    it('should have the property profit (base name: "profit")', function() {
      // uncomment below and update the code to test the property profit
      //var instane = new UltraCartRestApiV2.EmailStat();
      //expect(instance).to.be();
    });

    it('should have the property profitFormatted (base name: "profit_formatted")', function() {
      // uncomment below and update the code to test the property profitFormatted
      //var instane = new UltraCartRestApiV2.EmailStat();
      //expect(instance).to.be();
    });

    it('should have the property revenue (base name: "revenue")', function() {
      // uncomment below and update the code to test the property revenue
      //var instane = new UltraCartRestApiV2.EmailStat();
      //expect(instance).to.be();
    });

    it('should have the property revenueFormatted (base name: "revenue_formatted")', function() {
      // uncomment below and update the code to test the property revenueFormatted
      //var instane = new UltraCartRestApiV2.EmailStat();
      //expect(instance).to.be();
    });

    it('should have the property skippedCount (base name: "skipped_count")', function() {
      // uncomment below and update the code to test the property skippedCount
      //var instane = new UltraCartRestApiV2.EmailStat();
      //expect(instance).to.be();
    });

    it('should have the property skippedCountFormatted (base name: "skipped_count_formatted")', function() {
      // uncomment below and update the code to test the property skippedCountFormatted
      //var instane = new UltraCartRestApiV2.EmailStat();
      //expect(instance).to.be();
    });

    it('should have the property spamCount (base name: "spam_count")', function() {
      // uncomment below and update the code to test the property spamCount
      //var instane = new UltraCartRestApiV2.EmailStat();
      //expect(instance).to.be();
    });

    it('should have the property spamCountFormatted (base name: "spam_count_formatted")', function() {
      // uncomment below and update the code to test the property spamCountFormatted
      //var instane = new UltraCartRestApiV2.EmailStat();
      //expect(instance).to.be();
    });

    it('should have the property storefrontOid (base name: "storefront_oid")', function() {
      // uncomment below and update the code to test the property storefrontOid
      //var instane = new UltraCartRestApiV2.EmailStat();
      //expect(instance).to.be();
    });

    it('should have the property viewCount (base name: "view_count")', function() {
      // uncomment below and update the code to test the property viewCount
      //var instane = new UltraCartRestApiV2.EmailStat();
      //expect(instance).to.be();
    });

    it('should have the property viewCountFormatted (base name: "view_count_formatted")', function() {
      // uncomment below and update the code to test the property viewCountFormatted
      //var instane = new UltraCartRestApiV2.EmailStat();
      //expect(instance).to.be();
    });

  });

}));
