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
    instance = new UltraCartRestApiV2.OrderAffiliateLedger();
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

  describe('OrderAffiliateLedger', function() {
    it('should create an instance of OrderAffiliateLedger', function() {
      // uncomment below and update the code to test OrderAffiliateLedger
      //var instane = new UltraCartRestApiV2.OrderAffiliateLedger();
      //expect(instance).to.be.a(UltraCartRestApiV2.OrderAffiliateLedger);
    });

    it('should have the property assignedByUser (base name: "assigned_by_user")', function() {
      // uncomment below and update the code to test the property assignedByUser
      //var instane = new UltraCartRestApiV2.OrderAffiliateLedger();
      //expect(instance).to.be();
    });

    it('should have the property itemId (base name: "item_id")', function() {
      // uncomment below and update the code to test the property itemId
      //var instane = new UltraCartRestApiV2.OrderAffiliateLedger();
      //expect(instance).to.be();
    });

    it('should have the property tierNumber (base name: "tier_number")', function() {
      // uncomment below and update the code to test the property tierNumber
      //var instane = new UltraCartRestApiV2.OrderAffiliateLedger();
      //expect(instance).to.be();
    });

    it('should have the property transactionAmount (base name: "transaction_amount")', function() {
      // uncomment below and update the code to test the property transactionAmount
      //var instane = new UltraCartRestApiV2.OrderAffiliateLedger();
      //expect(instance).to.be();
    });

    it('should have the property transactionAmountPaid (base name: "transaction_amount_paid")', function() {
      // uncomment below and update the code to test the property transactionAmountPaid
      //var instane = new UltraCartRestApiV2.OrderAffiliateLedger();
      //expect(instance).to.be();
    });

    it('should have the property transactionDts (base name: "transaction_dts")', function() {
      // uncomment below and update the code to test the property transactionDts
      //var instane = new UltraCartRestApiV2.OrderAffiliateLedger();
      //expect(instance).to.be();
    });

    it('should have the property transactionMemo (base name: "transaction_memo")', function() {
      // uncomment below and update the code to test the property transactionMemo
      //var instane = new UltraCartRestApiV2.OrderAffiliateLedger();
      //expect(instance).to.be();
    });

    it('should have the property transactionPercentage (base name: "transaction_percentage")', function() {
      // uncomment below and update the code to test the property transactionPercentage
      //var instane = new UltraCartRestApiV2.OrderAffiliateLedger();
      //expect(instance).to.be();
    });

    it('should have the property transactionState (base name: "transaction_state")', function() {
      // uncomment below and update the code to test the property transactionState
      //var instane = new UltraCartRestApiV2.OrderAffiliateLedger();
      //expect(instance).to.be();
    });

  });

}));
