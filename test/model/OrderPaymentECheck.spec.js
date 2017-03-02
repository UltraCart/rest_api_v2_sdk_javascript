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
    instance = new UltraCartRestApiV2.OrderPaymentECheck();
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

  describe('OrderPaymentECheck', function() {
    it('should create an instance of OrderPaymentECheck', function() {
      // uncomment below and update the code to test OrderPaymentECheck
      //var instane = new UltraCartRestApiV2.OrderPaymentECheck();
      //expect(instance).to.be.a(UltraCartRestApiV2.OrderPaymentECheck);
    });

    it('should have the property bankAbaCode (base name: "bank_aba_code")', function() {
      // uncomment below and update the code to test the property bankAbaCode
      //var instane = new UltraCartRestApiV2.OrderPaymentECheck();
      //expect(instance).to.be();
    });

    it('should have the property bankAccountName (base name: "bank_account_name")', function() {
      // uncomment below and update the code to test the property bankAccountName
      //var instane = new UltraCartRestApiV2.OrderPaymentECheck();
      //expect(instance).to.be();
    });

    it('should have the property bankAccountNumber (base name: "bank_account_number")', function() {
      // uncomment below and update the code to test the property bankAccountNumber
      //var instane = new UltraCartRestApiV2.OrderPaymentECheck();
      //expect(instance).to.be();
    });

    it('should have the property bankAccountType (base name: "bank_account_type")', function() {
      // uncomment below and update the code to test the property bankAccountType
      //var instane = new UltraCartRestApiV2.OrderPaymentECheck();
      //expect(instance).to.be();
    });

    it('should have the property bankName (base name: "bank_name")', function() {
      // uncomment below and update the code to test the property bankName
      //var instane = new UltraCartRestApiV2.OrderPaymentECheck();
      //expect(instance).to.be();
    });

    it('should have the property bankOwnerType (base name: "bank_owner_type")', function() {
      // uncomment below and update the code to test the property bankOwnerType
      //var instane = new UltraCartRestApiV2.OrderPaymentECheck();
      //expect(instance).to.be();
    });

    it('should have the property customerTaxId (base name: "customer_tax_id")', function() {
      // uncomment below and update the code to test the property customerTaxId
      //var instane = new UltraCartRestApiV2.OrderPaymentECheck();
      //expect(instance).to.be();
    });

    it('should have the property driversLicenseDob (base name: "drivers_license_dob")', function() {
      // uncomment below and update the code to test the property driversLicenseDob
      //var instane = new UltraCartRestApiV2.OrderPaymentECheck();
      //expect(instance).to.be();
    });

    it('should have the property driversLicenseNumber (base name: "drivers_license_number")', function() {
      // uncomment below and update the code to test the property driversLicenseNumber
      //var instane = new UltraCartRestApiV2.OrderPaymentECheck();
      //expect(instance).to.be();
    });

    it('should have the property driversLicenseState (base name: "drivers_license_state")', function() {
      // uncomment below and update the code to test the property driversLicenseState
      //var instane = new UltraCartRestApiV2.OrderPaymentECheck();
      //expect(instance).to.be();
    });

  });

}));
