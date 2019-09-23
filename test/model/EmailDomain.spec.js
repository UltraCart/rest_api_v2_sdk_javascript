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
    instance = new UltraCartRestApiV2.EmailDomain();
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

  describe('EmailDomain', function() {
    it('should create an instance of EmailDomain', function() {
      // uncomment below and update the code to test EmailDomain
      //var instane = new UltraCartRestApiV2.EmailDomain();
      //expect(instance).to.be.a(UltraCartRestApiV2.EmailDomain);
    });

    it('should have the property comment (base name: "comment")', function() {
      // uncomment below and update the code to test the property comment
      //var instane = new UltraCartRestApiV2.EmailDomain();
      //expect(instance).to.be();
    });

    it('should have the property dkim (base name: "dkim")', function() {
      // uncomment below and update the code to test the property dkim
      //var instane = new UltraCartRestApiV2.EmailDomain();
      //expect(instance).to.be();
    });

    it('should have the property dkimStatus (base name: "dkim_status")', function() {
      // uncomment below and update the code to test the property dkimStatus
      //var instane = new UltraCartRestApiV2.EmailDomain();
      //expect(instance).to.be();
    });

    it('should have the property domain (base name: "domain")', function() {
      // uncomment below and update the code to test the property domain
      //var instane = new UltraCartRestApiV2.EmailDomain();
      //expect(instance).to.be();
    });

    it('should have the property espDomainUuid (base name: "esp_domain_uuid")', function() {
      // uncomment below and update the code to test the property espDomainUuid
      //var instane = new UltraCartRestApiV2.EmailDomain();
      //expect(instance).to.be();
    });

    it('should have the property identityStatus (base name: "identity_status")', function() {
      // uncomment below and update the code to test the property identityStatus
      //var instane = new UltraCartRestApiV2.EmailDomain();
      //expect(instance).to.be();
    });

    it('should have the property merchantId (base name: "merchant_id")', function() {
      // uncomment below and update the code to test the property merchantId
      //var instane = new UltraCartRestApiV2.EmailDomain();
      //expect(instance).to.be();
    });

    it('should have the property provider (base name: "provider")', function() {
      // uncomment below and update the code to test the property provider
      //var instane = new UltraCartRestApiV2.EmailDomain();
      //expect(instance).to.be();
    });

    it('should have the property startDkimDts (base name: "start_dkim_dts")', function() {
      // uncomment below and update the code to test the property startDkimDts
      //var instane = new UltraCartRestApiV2.EmailDomain();
      //expect(instance).to.be();
    });

    it('should have the property startIdentityDts (base name: "start_identity_dts")', function() {
      // uncomment below and update the code to test the property startIdentityDts
      //var instane = new UltraCartRestApiV2.EmailDomain();
      //expect(instance).to.be();
    });

    it('should have the property verification (base name: "verification")', function() {
      // uncomment below and update the code to test the property verification
      //var instane = new UltraCartRestApiV2.EmailDomain();
      //expect(instance).to.be();
    });

  });

}));