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
    instance = new UltraCartRestApiV2.AccountsReceivableRetryConfig();
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

  describe('AccountsReceivableRetryConfig', function() {
    it('should create an instance of AccountsReceivableRetryConfig', function() {
      // uncomment below and update the code to test AccountsReceivableRetryConfig
      //var instane = new UltraCartRestApiV2.AccountsReceivableRetryConfig();
      //expect(instance).to.be.a(UltraCartRestApiV2.AccountsReceivableRetryConfig);
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instane = new UltraCartRestApiV2.AccountsReceivableRetryConfig();
      //expect(instance).to.be();
    });

    it('should have the property allowProcessLinkedAccounts (base name: "allow_process_linked_accounts")', function() {
      // uncomment below and update the code to test the property allowProcessLinkedAccounts
      //var instane = new UltraCartRestApiV2.AccountsReceivableRetryConfig();
      //expect(instance).to.be();
    });

    it('should have the property dailyActivityList (base name: "daily_activity_list")', function() {
      // uncomment below and update the code to test the property dailyActivityList
      //var instane = new UltraCartRestApiV2.AccountsReceivableRetryConfig();
      //expect(instance).to.be();
    });

    it('should have the property managedByLinkedAccountMerchantId (base name: "managed_by_linked_account_merchant_id")', function() {
      // uncomment below and update the code to test the property managedByLinkedAccountMerchantId
      //var instane = new UltraCartRestApiV2.AccountsReceivableRetryConfig();
      //expect(instance).to.be();
    });

    it('should have the property merchantId (base name: "merchant_id")', function() {
      // uncomment below and update the code to test the property merchantId
      //var instane = new UltraCartRestApiV2.AccountsReceivableRetryConfig();
      //expect(instance).to.be();
    });

    it('should have the property notifyEmails (base name: "notify_emails")', function() {
      // uncomment below and update the code to test the property notifyEmails
      //var instane = new UltraCartRestApiV2.AccountsReceivableRetryConfig();
      //expect(instance).to.be();
    });

    it('should have the property notifyRejections (base name: "notify_rejections")', function() {
      // uncomment below and update the code to test the property notifyRejections
      //var instane = new UltraCartRestApiV2.AccountsReceivableRetryConfig();
      //expect(instance).to.be();
    });

    it('should have the property notifySuccesses (base name: "notify_successes")', function() {
      // uncomment below and update the code to test the property notifySuccesses
      //var instane = new UltraCartRestApiV2.AccountsReceivableRetryConfig();
      //expect(instance).to.be();
    });

    it('should have the property processLinkedAccounts (base name: "process_linked_accounts")', function() {
      // uncomment below and update the code to test the property processLinkedAccounts
      //var instane = new UltraCartRestApiV2.AccountsReceivableRetryConfig();
      //expect(instance).to.be();
    });

    it('should have the property rejectAtEnd (base name: "reject_at_end")', function() {
      // uncomment below and update the code to test the property rejectAtEnd
      //var instane = new UltraCartRestApiV2.AccountsReceivableRetryConfig();
      //expect(instance).to.be();
    });

    it('should have the property trialMode (base name: "trialMode")', function() {
      // uncomment below and update the code to test the property trialMode
      //var instane = new UltraCartRestApiV2.AccountsReceivableRetryConfig();
      //expect(instance).to.be();
    });

  });

}));
