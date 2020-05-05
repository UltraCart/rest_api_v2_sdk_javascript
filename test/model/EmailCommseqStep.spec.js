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
    instance = new UltraCartRestApiV2.EmailCommseqStep();
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

  describe('EmailCommseqStep', function() {
    it('should create an instance of EmailCommseqStep', function() {
      // uncomment below and update the code to test EmailCommseqStep
      //var instane = new UltraCartRestApiV2.EmailCommseqStep();
      //expect(instance).to.be.a(UltraCartRestApiV2.EmailCommseqStep);
    });

    it('should have the property altChildEmailCommunicationSequenceSteps (base name: "alt_child_email_communication_sequence_steps")', function() {
      // uncomment below and update the code to test the property altChildEmailCommunicationSequenceSteps
      //var instane = new UltraCartRestApiV2.EmailCommseqStep();
      //expect(instance).to.be();
    });

    it('should have the property childEmailCommunicationSequenceSteps (base name: "child_email_communication_sequence_steps")', function() {
      // uncomment below and update the code to test the property childEmailCommunicationSequenceSteps
      //var instane = new UltraCartRestApiV2.EmailCommseqStep();
      //expect(instance).to.be();
    });

    it('should have the property emailCommunicationSequenceStepUuid (base name: "email_communication_sequence_step_uuid")', function() {
      // uncomment below and update the code to test the property emailCommunicationSequenceStepUuid
      //var instane = new UltraCartRestApiV2.EmailCommseqStep();
      //expect(instance).to.be();
    });

    it('should have the property emailPendingReview (base name: "email_pending_review")', function() {
      // uncomment below and update the code to test the property emailPendingReview
      //var instane = new UltraCartRestApiV2.EmailCommseqStep();
      //expect(instance).to.be();
    });

    it('should have the property emailRejected (base name: "email_rejected")', function() {
      // uncomment below and update the code to test the property emailRejected
      //var instane = new UltraCartRestApiV2.EmailCommseqStep();
      //expect(instance).to.be();
    });

    it('should have the property emailRequiresReview (base name: "email_requires_review")', function() {
      // uncomment below and update the code to test the property emailRequiresReview
      //var instane = new UltraCartRestApiV2.EmailCommseqStep();
      //expect(instance).to.be();
    });

    it('should have the property filterProfileEquationJson (base name: "filter_profile_equation_json")', function() {
      // uncomment below and update the code to test the property filterProfileEquationJson
      //var instane = new UltraCartRestApiV2.EmailCommseqStep();
      //expect(instance).to.be();
    });

    it('should have the property merchantNotes (base name: "merchant_notes")', function() {
      // uncomment below and update the code to test the property merchantNotes
      //var instane = new UltraCartRestApiV2.EmailCommseqStep();
      //expect(instance).to.be();
    });

    it('should have the property stepConfigJson (base name: "step_config_json")', function() {
      // uncomment below and update the code to test the property stepConfigJson
      //var instane = new UltraCartRestApiV2.EmailCommseqStep();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new UltraCartRestApiV2.EmailCommseqStep();
      //expect(instance).to.be();
    });

  });

}));
