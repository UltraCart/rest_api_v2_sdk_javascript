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
    instance = new UltraCartRestApiV2.AffiliateLink();
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

  describe('AffiliateLink', function() {
    it('should create an instance of AffiliateLink', function() {
      // uncomment below and update the code to test AffiliateLink
      //var instane = new UltraCartRestApiV2.AffiliateLink();
      //expect(instance).to.be.a(UltraCartRestApiV2.AffiliateLink);
    });

    it('should have the property affiliateLinkOid (base name: "affiliate_link_oid")', function() {
      // uncomment below and update the code to test the property affiliateLinkOid
      //var instane = new UltraCartRestApiV2.AffiliateLink();
      //expect(instance).to.be();
    });

    it('should have the property affiliateManagedLinkOid (base name: "affiliate_managed_link_oid")', function() {
      // uncomment below and update the code to test the property affiliateManagedLinkOid
      //var instane = new UltraCartRestApiV2.AffiliateLink();
      //expect(instance).to.be();
    });

    it('should have the property affiliateOid (base name: "affiliate_oid")', function() {
      // uncomment below and update the code to test the property affiliateOid
      //var instane = new UltraCartRestApiV2.AffiliateLink();
      //expect(instance).to.be();
    });

    it('should have the property affiliateProgramItemOid (base name: "affiliate_program_item_oid")', function() {
      // uncomment below and update the code to test the property affiliateProgramItemOid
      //var instane = new UltraCartRestApiV2.AffiliateLink();
      //expect(instance).to.be();
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instane = new UltraCartRestApiV2.AffiliateLink();
      //expect(instance).to.be();
    });

    it('should have the property creativeOid (base name: "creative_oid")', function() {
      // uncomment below and update the code to test the property creativeOid
      //var instane = new UltraCartRestApiV2.AffiliateLink();
      //expect(instance).to.be();
    });

    it('should have the property customHtml (base name: "custom_html")', function() {
      // uncomment below and update the code to test the property customHtml
      //var instane = new UltraCartRestApiV2.AffiliateLink();
      //expect(instance).to.be();
    });

    it('should have the property customHtmlApprovalStatus (base name: "custom_html_approval_status")', function() {
      // uncomment below and update the code to test the property customHtmlApprovalStatus
      //var instane = new UltraCartRestApiV2.AffiliateLink();
      //expect(instance).to.be();
    });

    it('should have the property customLandingUrl (base name: "custom_landing_url")', function() {
      // uncomment below and update the code to test the property customLandingUrl
      //var instane = new UltraCartRestApiV2.AffiliateLink();
      //expect(instance).to.be();
    });

    it('should have the property deleted (base name: "deleted")', function() {
      // uncomment below and update the code to test the property deleted
      //var instane = new UltraCartRestApiV2.AffiliateLink();
      //expect(instance).to.be();
    });

    it('should have the property invisibleLinkApprovalStatus (base name: "invisible_link_approval_status")', function() {
      // uncomment below and update the code to test the property invisibleLinkApprovalStatus
      //var instane = new UltraCartRestApiV2.AffiliateLink();
      //expect(instance).to.be();
    });

    it('should have the property invisibleLinkUrlPrefix (base name: "invisible_link_url_prefix")', function() {
      // uncomment below and update the code to test the property invisibleLinkUrlPrefix
      //var instane = new UltraCartRestApiV2.AffiliateLink();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new UltraCartRestApiV2.AffiliateLink();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new UltraCartRestApiV2.AffiliateLink();
      //expect(instance).to.be();
    });

  });

}));
