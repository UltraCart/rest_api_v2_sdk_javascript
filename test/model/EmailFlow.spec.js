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
    instance = new UltraCartRestApiV2.EmailFlow();
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

  describe('EmailFlow', function() {
    it('should create an instance of EmailFlow', function() {
      // uncomment below and update the code to test EmailFlow
      //var instane = new UltraCartRestApiV2.EmailFlow();
      //expect(instance).to.be.a(UltraCartRestApiV2.EmailFlow);
    });

    it('should have the property allowMultipleConcurrentEnrollments (base name: "allow_multiple_concurrent_enrollments")', function() {
      // uncomment below and update the code to test the property allowMultipleConcurrentEnrollments
      //var instane = new UltraCartRestApiV2.EmailFlow();
      //expect(instance).to.be();
    });

    it('should have the property createdDts (base name: "created_dts")', function() {
      // uncomment below and update the code to test the property createdDts
      //var instane = new UltraCartRestApiV2.EmailFlow();
      //expect(instance).to.be();
    });

    it('should have the property deleted (base name: "deleted")', function() {
      // uncomment below and update the code to test the property deleted
      //var instane = new UltraCartRestApiV2.EmailFlow();
      //expect(instance).to.be();
    });

    it('should have the property emailCommunicationSequenceUuid (base name: "email_communication_sequence_uuid")', function() {
      // uncomment below and update the code to test the property emailCommunicationSequenceUuid
      //var instane = new UltraCartRestApiV2.EmailFlow();
      //expect(instance).to.be();
    });

    it('should have the property emailFlowUuid (base name: "email_flow_uuid")', function() {
      // uncomment below and update the code to test the property emailFlowUuid
      //var instane = new UltraCartRestApiV2.EmailFlow();
      //expect(instance).to.be();
    });

    it('should have the property filterProfileEquationJson (base name: "filter_profile_equation_json")', function() {
      // uncomment below and update the code to test the property filterProfileEquationJson
      //var instane = new UltraCartRestApiV2.EmailFlow();
      //expect(instance).to.be();
    });

    it('should have the property merchantId (base name: "merchant_id")', function() {
      // uncomment below and update the code to test the property merchantId
      //var instane = new UltraCartRestApiV2.EmailFlow();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new UltraCartRestApiV2.EmailFlow();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new UltraCartRestApiV2.EmailFlow();
      //expect(instance).to.be();
    });

    it('should have the property statusDts (base name: "status_dts")', function() {
      // uncomment below and update the code to test the property statusDts
      //var instane = new UltraCartRestApiV2.EmailFlow();
      //expect(instance).to.be();
    });

    it('should have the property storefrontOid (base name: "storefront_oid")', function() {
      // uncomment below and update the code to test the property storefrontOid
      //var instane = new UltraCartRestApiV2.EmailFlow();
      //expect(instance).to.be();
    });

    it('should have the property triggerParameter (base name: "trigger_parameter")', function() {
      // uncomment below and update the code to test the property triggerParameter
      //var instane = new UltraCartRestApiV2.EmailFlow();
      //expect(instance).to.be();
    });

    it('should have the property triggerType (base name: "trigger_type")', function() {
      // uncomment below and update the code to test the property triggerType
      //var instane = new UltraCartRestApiV2.EmailFlow();
      //expect(instance).to.be();
    });

  });

}));
