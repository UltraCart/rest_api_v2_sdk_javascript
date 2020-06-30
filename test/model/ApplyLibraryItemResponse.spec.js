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
    instance = new UltraCartRestApiV2.ApplyLibraryItemResponse();
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

  describe('ApplyLibraryItemResponse', function() {
    it('should create an instance of ApplyLibraryItemResponse', function() {
      // uncomment below and update the code to test ApplyLibraryItemResponse
      //var instane = new UltraCartRestApiV2.ApplyLibraryItemResponse();
      //expect(instance).to.be.a(UltraCartRestApiV2.ApplyLibraryItemResponse);
    });

    it('should have the property cjson (base name: "cjson")', function() {
      // uncomment below and update the code to test the property cjson
      //var instane = new UltraCartRestApiV2.ApplyLibraryItemResponse();
      //expect(instance).to.be();
    });

    it('should have the property contentType (base name: "content_type")', function() {
      // uncomment below and update the code to test the property contentType
      //var instane = new UltraCartRestApiV2.ApplyLibraryItemResponse();
      //expect(instance).to.be();
    });

    it('should have the property error (base name: "error")', function() {
      // uncomment below and update the code to test the property error
      //var instane = new UltraCartRestApiV2.ApplyLibraryItemResponse();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instane = new UltraCartRestApiV2.ApplyLibraryItemResponse();
      //expect(instance).to.be();
    });

    it('should have the property storefrontOid (base name: "storefront_oid")', function() {
      // uncomment below and update the code to test the property storefrontOid
      //var instane = new UltraCartRestApiV2.ApplyLibraryItemResponse();
      //expect(instance).to.be();
    });

    it('should have the property success (base name: "success")', function() {
      // uncomment below and update the code to test the property success
      //var instane = new UltraCartRestApiV2.ApplyLibraryItemResponse();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new UltraCartRestApiV2.ApplyLibraryItemResponse();
      //expect(instance).to.be();
    });

    it('should have the property uuid (base name: "uuid")', function() {
      // uncomment below and update the code to test the property uuid
      //var instane = new UltraCartRestApiV2.ApplyLibraryItemResponse();
      //expect(instance).to.be();
    });

  });

}));
