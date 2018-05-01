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
    instance = new UltraCartRestApiV2.ItemVariation();
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

  describe('ItemVariation', function() {
    it('should create an instance of ItemVariation', function() {
      // uncomment below and update the code to test ItemVariation
      //var instane = new UltraCartRestApiV2.ItemVariation();
      //expect(instance).to.be.a(UltraCartRestApiV2.ItemVariation);
    });

    it('should have the property defaultText (base name: "default_text")', function() {
      // uncomment below and update the code to test the property defaultText
      //var instane = new UltraCartRestApiV2.ItemVariation();
      //expect(instance).to.be();
    });

    it('should have the property defaultTextTranslatedTextInstanceOid (base name: "default_text_translated_text_instance_oid")', function() {
      // uncomment below and update the code to test the property defaultTextTranslatedTextInstanceOid
      //var instane = new UltraCartRestApiV2.ItemVariation();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new UltraCartRestApiV2.ItemVariation();
      //expect(instance).to.be();
    });

    it('should have the property nameTranslatedTextInstanceOid (base name: "name_translated_text_instance_oid")', function() {
      // uncomment below and update the code to test the property nameTranslatedTextInstanceOid
      //var instane = new UltraCartRestApiV2.ItemVariation();
      //expect(instance).to.be();
    });

    it('should have the property options (base name: "options")', function() {
      // uncomment below and update the code to test the property options
      //var instane = new UltraCartRestApiV2.ItemVariation();
      //expect(instance).to.be();
    });

  });

}));
