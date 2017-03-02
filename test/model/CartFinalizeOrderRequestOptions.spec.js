/**
 * UltraCart Rest API V2
 * This is the next generation UltraCart REST API...
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
    instance = new UltraCartRestApiV2.CartFinalizeOrderRequestOptions();
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

  describe('CartFinalizeOrderRequestOptions', function() {
    it('should create an instance of CartFinalizeOrderRequestOptions', function() {
      // uncomment below and update the code to test CartFinalizeOrderRequestOptions
      //var instane = new UltraCartRestApiV2.CartFinalizeOrderRequestOptions();
      //expect(instance).to.be.a(UltraCartRestApiV2.CartFinalizeOrderRequestOptions);
    });

    it('should have the property autoApprovePurchaseOrder (base name: "auto_approve_purchase_order")', function() {
      // uncomment below and update the code to test the property autoApprovePurchaseOrder
      //var instane = new UltraCartRestApiV2.CartFinalizeOrderRequestOptions();
      //expect(instance).to.be();
    });

    it('should have the property channelPartnerCode (base name: "channel_partner_code")', function() {
      // uncomment below and update the code to test the property channelPartnerCode
      //var instane = new UltraCartRestApiV2.CartFinalizeOrderRequestOptions();
      //expect(instance).to.be();
    });

    it('should have the property channelPartnerOid (base name: "channel_partner_oid")', function() {
      // uncomment below and update the code to test the property channelPartnerOid
      //var instane = new UltraCartRestApiV2.CartFinalizeOrderRequestOptions();
      //expect(instance).to.be();
    });

    it('should have the property channelPartnerOrderId (base name: "channel_partner_order_id")', function() {
      // uncomment below and update the code to test the property channelPartnerOrderId
      //var instane = new UltraCartRestApiV2.CartFinalizeOrderRequestOptions();
      //expect(instance).to.be();
    });

    it('should have the property considerRecurring (base name: "consider_recurring")', function() {
      // uncomment below and update the code to test the property considerRecurring
      //var instane = new UltraCartRestApiV2.CartFinalizeOrderRequestOptions();
      //expect(instance).to.be();
    });

    it('should have the property creditCardAuthorizationAmount (base name: "credit_card_authorization_amount")', function() {
      // uncomment below and update the code to test the property creditCardAuthorizationAmount
      //var instane = new UltraCartRestApiV2.CartFinalizeOrderRequestOptions();
      //expect(instance).to.be();
    });

    it('should have the property creditCardAuthorizationDate (base name: "credit_card_authorization_date")', function() {
      // uncomment below and update the code to test the property creditCardAuthorizationDate
      //var instane = new UltraCartRestApiV2.CartFinalizeOrderRequestOptions();
      //expect(instance).to.be();
    });

    it('should have the property creditCardAuthorizationReferenceNumber (base name: "credit_card_authorization_reference_number")', function() {
      // uncomment below and update the code to test the property creditCardAuthorizationReferenceNumber
      //var instane = new UltraCartRestApiV2.CartFinalizeOrderRequestOptions();
      //expect(instance).to.be();
    });

    it('should have the property noRealtimePaymentProcessing (base name: "no_realtime_payment_processing")', function() {
      // uncomment below and update the code to test the property noRealtimePaymentProcessing
      //var instane = new UltraCartRestApiV2.CartFinalizeOrderRequestOptions();
      //expect(instance).to.be();
    });

    it('should have the property setupNextCart (base name: "setup_next_cart")', function() {
      // uncomment below and update the code to test the property setupNextCart
      //var instane = new UltraCartRestApiV2.CartFinalizeOrderRequestOptions();
      //expect(instance).to.be();
    });

    it('should have the property skipPaymentProcessing (base name: "skip_payment_processing")', function() {
      // uncomment below and update the code to test the property skipPaymentProcessing
      //var instane = new UltraCartRestApiV2.CartFinalizeOrderRequestOptions();
      //expect(instance).to.be();
    });

    it('should have the property storeCompleted (base name: "store_completed")', function() {
      // uncomment below and update the code to test the property storeCompleted
      //var instane = new UltraCartRestApiV2.CartFinalizeOrderRequestOptions();
      //expect(instance).to.be();
    });

    it('should have the property storeIfPaymentDeclines (base name: "store_if_payment_declines")', function() {
      // uncomment below and update the code to test the property storeIfPaymentDeclines
      //var instane = new UltraCartRestApiV2.CartFinalizeOrderRequestOptions();
      //expect(instance).to.be();
    });

  });

}));
