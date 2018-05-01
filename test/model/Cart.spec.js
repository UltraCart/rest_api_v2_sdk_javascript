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
    instance = new UltraCartRestApiV2.Cart();
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

  describe('Cart', function() {
    it('should create an instance of Cart', function() {
      // uncomment below and update the code to test Cart
      //var instane = new UltraCartRestApiV2.Cart();
      //expect(instance).to.be.a(UltraCartRestApiV2.Cart);
    });

    it('should have the property affiliate (base name: "affiliate")', function() {
      // uncomment below and update the code to test the property affiliate
      //var instane = new UltraCartRestApiV2.Cart();
      //expect(instance).to.be();
    });

    it('should have the property baseCurrencyCode (base name: "base_currency_code")', function() {
      // uncomment below and update the code to test the property baseCurrencyCode
      //var instane = new UltraCartRestApiV2.Cart();
      //expect(instance).to.be();
    });

    it('should have the property billing (base name: "billing")', function() {
      // uncomment below and update the code to test the property billing
      //var instane = new UltraCartRestApiV2.Cart();
      //expect(instance).to.be();
    });

    it('should have the property buysafe (base name: "buysafe")', function() {
      // uncomment below and update the code to test the property buysafe
      //var instane = new UltraCartRestApiV2.Cart();
      //expect(instance).to.be();
    });

    it('should have the property cartId (base name: "cart_id")', function() {
      // uncomment below and update the code to test the property cartId
      //var instane = new UltraCartRestApiV2.Cart();
      //expect(instance).to.be();
    });

    it('should have the property checkout (base name: "checkout")', function() {
      // uncomment below and update the code to test the property checkout
      //var instane = new UltraCartRestApiV2.Cart();
      //expect(instance).to.be();
    });

    it('should have the property coupons (base name: "coupons")', function() {
      // uncomment below and update the code to test the property coupons
      //var instane = new UltraCartRestApiV2.Cart();
      //expect(instance).to.be();
    });

    it('should have the property currencyCode (base name: "currency_code")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instane = new UltraCartRestApiV2.Cart();
      //expect(instance).to.be();
    });

    it('should have the property customerProfile (base name: "customer_profile")', function() {
      // uncomment below and update the code to test the property customerProfile
      //var instane = new UltraCartRestApiV2.Cart();
      //expect(instance).to.be();
    });

    it('should have the property exchangeRate (base name: "exchange_rate")', function() {
      // uncomment below and update the code to test the property exchangeRate
      //var instane = new UltraCartRestApiV2.Cart();
      //expect(instance).to.be();
    });

    it('should have the property gift (base name: "gift")', function() {
      // uncomment below and update the code to test the property gift
      //var instane = new UltraCartRestApiV2.Cart();
      //expect(instance).to.be();
    });

    it('should have the property giftCertificate (base name: "gift_certificate")', function() {
      // uncomment below and update the code to test the property giftCertificate
      //var instane = new UltraCartRestApiV2.Cart();
      //expect(instance).to.be();
    });

    it('should have the property items (base name: "items")', function() {
      // uncomment below and update the code to test the property items
      //var instane = new UltraCartRestApiV2.Cart();
      //expect(instance).to.be();
    });

    it('should have the property languageIsoCode (base name: "language_iso_code")', function() {
      // uncomment below and update the code to test the property languageIsoCode
      //var instane = new UltraCartRestApiV2.Cart();
      //expect(instance).to.be();
    });

    it('should have the property loggedIn (base name: "logged_in")', function() {
      // uncomment below and update the code to test the property loggedIn
      //var instane = new UltraCartRestApiV2.Cart();
      //expect(instance).to.be();
    });

    it('should have the property marketing (base name: "marketing")', function() {
      // uncomment below and update the code to test the property marketing
      //var instane = new UltraCartRestApiV2.Cart();
      //expect(instance).to.be();
    });

    it('should have the property merchantId (base name: "merchant_id")', function() {
      // uncomment below and update the code to test the property merchantId
      //var instane = new UltraCartRestApiV2.Cart();
      //expect(instance).to.be();
    });

    it('should have the property payment (base name: "payment")', function() {
      // uncomment below and update the code to test the property payment
      //var instane = new UltraCartRestApiV2.Cart();
      //expect(instance).to.be();
    });

    it('should have the property settings (base name: "settings")', function() {
      // uncomment below and update the code to test the property settings
      //var instane = new UltraCartRestApiV2.Cart();
      //expect(instance).to.be();
    });

    it('should have the property shipping (base name: "shipping")', function() {
      // uncomment below and update the code to test the property shipping
      //var instane = new UltraCartRestApiV2.Cart();
      //expect(instance).to.be();
    });

    it('should have the property summary (base name: "summary")', function() {
      // uncomment below and update the code to test the property summary
      //var instane = new UltraCartRestApiV2.Cart();
      //expect(instance).to.be();
    });

    it('should have the property taxes (base name: "taxes")', function() {
      // uncomment below and update the code to test the property taxes
      //var instane = new UltraCartRestApiV2.Cart();
      //expect(instance).to.be();
    });

    it('should have the property upsellAfter (base name: "upsell_after")', function() {
      // uncomment below and update the code to test the property upsellAfter
      //var instane = new UltraCartRestApiV2.Cart();
      //expect(instance).to.be();
    });

  });

}));
