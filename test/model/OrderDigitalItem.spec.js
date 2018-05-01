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
    instance = new UltraCartRestApiV2.OrderDigitalItem();
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

  describe('OrderDigitalItem', function() {
    it('should create an instance of OrderDigitalItem', function() {
      // uncomment below and update the code to test OrderDigitalItem
      //var instane = new UltraCartRestApiV2.OrderDigitalItem();
      //expect(instance).to.be.a(UltraCartRestApiV2.OrderDigitalItem);
    });

    it('should have the property fileSize (base name: "file_size")', function() {
      // uncomment below and update the code to test the property fileSize
      //var instane = new UltraCartRestApiV2.OrderDigitalItem();
      //expect(instance).to.be();
    });

    it('should have the property lastDownload (base name: "last_download")', function() {
      // uncomment below and update the code to test the property lastDownload
      //var instane = new UltraCartRestApiV2.OrderDigitalItem();
      //expect(instance).to.be();
    });

    it('should have the property lastDownloadIpAddress (base name: "last_download_ip_address")', function() {
      // uncomment below and update the code to test the property lastDownloadIpAddress
      //var instane = new UltraCartRestApiV2.OrderDigitalItem();
      //expect(instance).to.be();
    });

    it('should have the property originalFilename (base name: "original_filename")', function() {
      // uncomment below and update the code to test the property originalFilename
      //var instane = new UltraCartRestApiV2.OrderDigitalItem();
      //expect(instance).to.be();
    });

    it('should have the property productCode (base name: "product_code")', function() {
      // uncomment below and update the code to test the property productCode
      //var instane = new UltraCartRestApiV2.OrderDigitalItem();
      //expect(instance).to.be();
    });

    it('should have the property productDescription (base name: "product_description")', function() {
      // uncomment below and update the code to test the property productDescription
      //var instane = new UltraCartRestApiV2.OrderDigitalItem();
      //expect(instance).to.be();
    });

    it('should have the property remainingDownloads (base name: "remaining_downloads")', function() {
      // uncomment below and update the code to test the property remainingDownloads
      //var instane = new UltraCartRestApiV2.OrderDigitalItem();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new UltraCartRestApiV2.OrderDigitalItem();
      //expect(instance).to.be();
    });

  });

}));
