/**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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
    instance = new UltraCartRestApiV2.ChargebackDispute();
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

  describe('ChargebackDispute', function() {
    it('should create an instance of ChargebackDispute', function() {
      // uncomment below and update the code to test ChargebackDispute
      //var instane = new UltraCartRestApiV2.ChargebackDispute();
      //expect(instance).to.be.a(UltraCartRestApiV2.ChargebackDispute);
    });

    it('should have the property accountNumber (base name: "account_number")', function() {
      // uncomment below and update the code to test the property accountNumber
      //var instane = new UltraCartRestApiV2.ChargebackDispute();
      //expect(instance).to.be();
    });

    it('should have the property adjustmentRequestText (base name: "adjustment_request_text")', function() {
      // uncomment below and update the code to test the property adjustmentRequestText
      //var instane = new UltraCartRestApiV2.ChargebackDispute();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instane = new UltraCartRestApiV2.ChargebackDispute();
      //expect(instance).to.be();
    });

    it('should have the property authCode (base name: "auth_code")', function() {
      // uncomment below and update the code to test the property authCode
      //var instane = new UltraCartRestApiV2.ChargebackDispute();
      //expect(instance).to.be();
    });

    it('should have the property caseNumber (base name: "case_number")', function() {
      // uncomment below and update the code to test the property caseNumber
      //var instane = new UltraCartRestApiV2.ChargebackDispute();
      //expect(instance).to.be();
    });

    it('should have the property chargebackDisputeOid (base name: "chargeback_dispute_oid")', function() {
      // uncomment below and update the code to test the property chargebackDisputeOid
      //var instane = new UltraCartRestApiV2.ChargebackDispute();
      //expect(instance).to.be();
    });

    it('should have the property chargebackDts (base name: "chargeback_dts")', function() {
      // uncomment below and update the code to test the property chargebackDts
      //var instane = new UltraCartRestApiV2.ChargebackDispute();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new UltraCartRestApiV2.ChargebackDispute();
      //expect(instance).to.be();
    });

    it('should have the property customerCareNotes (base name: "customer_care_notes")', function() {
      // uncomment below and update the code to test the property customerCareNotes
      //var instane = new UltraCartRestApiV2.ChargebackDispute();
      //expect(instance).to.be();
    });

    it('should have the property encryptionKey (base name: "encryption_key")', function() {
      // uncomment below and update the code to test the property encryptionKey
      //var instane = new UltraCartRestApiV2.ChargebackDispute();
      //expect(instance).to.be();
    });

    it('should have the property expirationDts (base name: "expiration_dts")', function() {
      // uncomment below and update the code to test the property expirationDts
      //var instane = new UltraCartRestApiV2.ChargebackDispute();
      //expect(instance).to.be();
    });

    it('should have the property faxFailureReason (base name: "fax_failure_reason")', function() {
      // uncomment below and update the code to test the property faxFailureReason
      //var instane = new UltraCartRestApiV2.ChargebackDispute();
      //expect(instance).to.be();
    });

    it('should have the property faxNumber (base name: "fax_number")', function() {
      // uncomment below and update the code to test the property faxNumber
      //var instane = new UltraCartRestApiV2.ChargebackDispute();
      //expect(instance).to.be();
    });

    it('should have the property faxTransactionId (base name: "fax_transaction_id")', function() {
      // uncomment below and update the code to test the property faxTransactionId
      //var instane = new UltraCartRestApiV2.ChargebackDispute();
      //expect(instance).to.be();
    });

    it('should have the property icsid (base name: "icsid")', function() {
      // uncomment below and update the code to test the property icsid
      //var instane = new UltraCartRestApiV2.ChargebackDispute();
      //expect(instance).to.be();
    });

    it('should have the property merchantAccountProfileOid (base name: "merchant_account_profile_oid")', function() {
      // uncomment below and update the code to test the property merchantAccountProfileOid
      //var instane = new UltraCartRestApiV2.ChargebackDispute();
      //expect(instance).to.be();
    });

    it('should have the property order (base name: "order")', function() {
      // uncomment below and update the code to test the property order
      //var instane = new UltraCartRestApiV2.ChargebackDispute();
      //expect(instance).to.be();
    });

    it('should have the property orderId (base name: "order_id")', function() {
      // uncomment below and update the code to test the property orderId
      //var instane = new UltraCartRestApiV2.ChargebackDispute();
      //expect(instance).to.be();
    });

    it('should have the property partialCardNumber (base name: "partial_card_number")', function() {
      // uncomment below and update the code to test the property partialCardNumber
      //var instane = new UltraCartRestApiV2.ChargebackDispute();
      //expect(instance).to.be();
    });

    it('should have the property pdfFileOid (base name: "pdf_file_oid")', function() {
      // uncomment below and update the code to test the property pdfFileOid
      //var instane = new UltraCartRestApiV2.ChargebackDispute();
      //expect(instance).to.be();
    });

    it('should have the property reasonCode (base name: "reason_code")', function() {
      // uncomment below and update the code to test the property reasonCode
      //var instane = new UltraCartRestApiV2.ChargebackDispute();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new UltraCartRestApiV2.ChargebackDispute();
      //expect(instance).to.be();
    });

    it('should have the property websiteUrl (base name: "website_url")', function() {
      // uncomment below and update the code to test the property websiteUrl
      //var instane = new UltraCartRestApiV2.ChargebackDispute();
      //expect(instance).to.be();
    });

  });

}));