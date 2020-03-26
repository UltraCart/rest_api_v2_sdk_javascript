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
    instance = new UltraCartRestApiV2.EmailCommseqEmailSendTestRequest();
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

  describe('EmailCommseqEmailSendTestRequest', function() {
    it('should create an instance of EmailCommseqEmailSendTestRequest', function() {
      // uncomment below and update the code to test EmailCommseqEmailSendTestRequest
      //var instane = new UltraCartRestApiV2.EmailCommseqEmailSendTestRequest();
      //expect(instance).to.be.a(UltraCartRestApiV2.EmailCommseqEmailSendTestRequest);
    });

    it('should have the property cartId (base name: "cart_id")', function() {
      // uncomment below and update the code to test the property cartId
      //var instane = new UltraCartRestApiV2.EmailCommseqEmailSendTestRequest();
      //expect(instance).to.be();
    });

    it('should have the property cartItemIds (base name: "cart_item_ids")', function() {
      // uncomment below and update the code to test the property cartItemIds
      //var instane = new UltraCartRestApiV2.EmailCommseqEmailSendTestRequest();
      //expect(instance).to.be();
    });

    it('should have the property espCommseqEmailUuid (base name: "esp_commseq_email_uuid")', function() {
      // uncomment below and update the code to test the property espCommseqEmailUuid
      //var instane = new UltraCartRestApiV2.EmailCommseqEmailSendTestRequest();
      //expect(instance).to.be();
    });

    it('should have the property espCommseqStepUuid (base name: "esp_commseq_step_uuid")', function() {
      // uncomment below and update the code to test the property espCommseqStepUuid
      //var instane = new UltraCartRestApiV2.EmailCommseqEmailSendTestRequest();
      //expect(instance).to.be();
    });

    it('should have the property espCommseqUuid (base name: "esp_commseq_uuid")', function() {
      // uncomment below and update the code to test the property espCommseqUuid
      //var instane = new UltraCartRestApiV2.EmailCommseqEmailSendTestRequest();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new UltraCartRestApiV2.EmailCommseqEmailSendTestRequest();
      //expect(instance).to.be();
    });

    it('should have the property orderId (base name: "order_id")', function() {
      // uncomment below and update the code to test the property orderId
      //var instane = new UltraCartRestApiV2.EmailCommseqEmailSendTestRequest();
      //expect(instance).to.be();
    });

    it('should have the property sendToAdditionalEmails (base name: "send_to_additional_emails")', function() {
      // uncomment below and update the code to test the property sendToAdditionalEmails
      //var instane = new UltraCartRestApiV2.EmailCommseqEmailSendTestRequest();
      //expect(instance).to.be();
    });

    it('should have the property sendToLoggedInUser (base name: "send_to_logged_in_user")', function() {
      // uncomment below and update the code to test the property sendToLoggedInUser
      //var instane = new UltraCartRestApiV2.EmailCommseqEmailSendTestRequest();
      //expect(instance).to.be();
    });

  });

}));