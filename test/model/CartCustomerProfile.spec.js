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
    instance = new UltraCartRestApiV2.CartCustomerProfile();
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

  describe('CartCustomerProfile', function() {
    it('should create an instance of CartCustomerProfile', function() {
      // uncomment below and update the code to test CartCustomerProfile
      //var instane = new UltraCartRestApiV2.CartCustomerProfile();
      //expect(instance).to.be.a(UltraCartRestApiV2.CartCustomerProfile);
    });

    it('should have the property allow3rdPartyBilling (base name: "allow_3rd_party_billing")', function() {
      // uncomment below and update the code to test the property allow3rdPartyBilling
      //var instane = new UltraCartRestApiV2.CartCustomerProfile();
      //expect(instance).to.be();
    });

    it('should have the property allowCod (base name: "allow_cod")', function() {
      // uncomment below and update the code to test the property allowCod
      //var instane = new UltraCartRestApiV2.CartCustomerProfile();
      //expect(instance).to.be();
    });

    it('should have the property allowPurchaseOrder (base name: "allow_purchase_order")', function() {
      // uncomment below and update the code to test the property allowPurchaseOrder
      //var instane = new UltraCartRestApiV2.CartCustomerProfile();
      //expect(instance).to.be();
    });

    it('should have the property billingAddresses (base name: "billing_addresses")', function() {
      // uncomment below and update the code to test the property billingAddresses
      //var instane = new UltraCartRestApiV2.CartCustomerProfile();
      //expect(instance).to.be();
    });

    it('should have the property creditCards (base name: "credit_cards")', function() {
      // uncomment below and update the code to test the property creditCards
      //var instane = new UltraCartRestApiV2.CartCustomerProfile();
      //expect(instance).to.be();
    });

    it('should have the property customerProfileOid (base name: "customer_profile_oid")', function() {
      // uncomment below and update the code to test the property customerProfileOid
      //var instane = new UltraCartRestApiV2.CartCustomerProfile();
      //expect(instance).to.be();
    });

    it('should have the property dhlAccountNumber (base name: "dhl_account_number")', function() {
      // uncomment below and update the code to test the property dhlAccountNumber
      //var instane = new UltraCartRestApiV2.CartCustomerProfile();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new UltraCartRestApiV2.CartCustomerProfile();
      //expect(instance).to.be();
    });

    it('should have the property fedexAccountNumber (base name: "fedex_account_number")', function() {
      // uncomment below and update the code to test the property fedexAccountNumber
      //var instane = new UltraCartRestApiV2.CartCustomerProfile();
      //expect(instance).to.be();
    });

    it('should have the property freeShipping (base name: "free_shipping")', function() {
      // uncomment below and update the code to test the property freeShipping
      //var instane = new UltraCartRestApiV2.CartCustomerProfile();
      //expect(instance).to.be();
    });

    it('should have the property freeShippingMinimum (base name: "free_shipping_minimum")', function() {
      // uncomment below and update the code to test the property freeShippingMinimum
      //var instane = new UltraCartRestApiV2.CartCustomerProfile();
      //expect(instance).to.be();
    });

    it('should have the property maximumItemCount (base name: "maximum_item_count")', function() {
      // uncomment below and update the code to test the property maximumItemCount
      //var instane = new UltraCartRestApiV2.CartCustomerProfile();
      //expect(instance).to.be();
    });

    it('should have the property minimumItemCount (base name: "minimum_item_count")', function() {
      // uncomment below and update the code to test the property minimumItemCount
      //var instane = new UltraCartRestApiV2.CartCustomerProfile();
      //expect(instance).to.be();
    });

    it('should have the property minimumSubtotal (base name: "minimum_subtotal")', function() {
      // uncomment below and update the code to test the property minimumSubtotal
      //var instane = new UltraCartRestApiV2.CartCustomerProfile();
      //expect(instance).to.be();
    });

    it('should have the property noCoupons (base name: "no_coupons")', function() {
      // uncomment below and update the code to test the property noCoupons
      //var instane = new UltraCartRestApiV2.CartCustomerProfile();
      //expect(instance).to.be();
    });

    it('should have the property noFreeShipping (base name: "no_free_shipping")', function() {
      // uncomment below and update the code to test the property noFreeShipping
      //var instane = new UltraCartRestApiV2.CartCustomerProfile();
      //expect(instance).to.be();
    });

    it('should have the property noRealtimeCharge (base name: "no_realtime_charge")', function() {
      // uncomment below and update the code to test the property noRealtimeCharge
      //var instane = new UltraCartRestApiV2.CartCustomerProfile();
      //expect(instance).to.be();
    });

    it('should have the property pricingTiers (base name: "pricing_tiers")', function() {
      // uncomment below and update the code to test the property pricingTiers
      //var instane = new UltraCartRestApiV2.CartCustomerProfile();
      //expect(instance).to.be();
    });

    it('should have the property shippingAddresses (base name: "shipping_addresses")', function() {
      // uncomment below and update the code to test the property shippingAddresses
      //var instane = new UltraCartRestApiV2.CartCustomerProfile();
      //expect(instance).to.be();
    });

    it('should have the property taxExempt (base name: "tax_exempt")', function() {
      // uncomment below and update the code to test the property taxExempt
      //var instane = new UltraCartRestApiV2.CartCustomerProfile();
      //expect(instance).to.be();
    });

    it('should have the property upsAccountNumber (base name: "ups_account_number")', function() {
      // uncomment below and update the code to test the property upsAccountNumber
      //var instane = new UltraCartRestApiV2.CartCustomerProfile();
      //expect(instance).to.be();
    });

  });

}));