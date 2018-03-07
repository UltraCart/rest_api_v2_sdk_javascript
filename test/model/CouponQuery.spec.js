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
    instance = new UltraCartRestApiV2.CouponQuery();
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

  describe('CouponQuery', function() {
    it('should create an instance of CouponQuery', function() {
      // uncomment below and update the code to test CouponQuery
      //var instane = new UltraCartRestApiV2.CouponQuery();
      //expect(instance).to.be.a(UltraCartRestApiV2.CouponQuery);
    });

    it('should have the property affiliateOid (base name: "affiliate_oid")', function() {
      // uncomment below and update the code to test the property affiliateOid
      //var instane = new UltraCartRestApiV2.CouponQuery();
      //expect(instance).to.be();
    });

    it('should have the property couponType (base name: "coupon_type")', function() {
      // uncomment below and update the code to test the property couponType
      //var instane = new UltraCartRestApiV2.CouponQuery();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new UltraCartRestApiV2.CouponQuery();
      //expect(instance).to.be();
    });

    it('should have the property excludeExpired (base name: "exclude_expired")', function() {
      // uncomment below and update the code to test the property excludeExpired
      //var instane = new UltraCartRestApiV2.CouponQuery();
      //expect(instance).to.be();
    });

    it('should have the property expirationDtsBegin (base name: "expiration_dts_begin")', function() {
      // uncomment below and update the code to test the property expirationDtsBegin
      //var instane = new UltraCartRestApiV2.CouponQuery();
      //expect(instance).to.be();
    });

    it('should have the property expirationDtsEnd (base name: "expiration_dts_end")', function() {
      // uncomment below and update the code to test the property expirationDtsEnd
      //var instane = new UltraCartRestApiV2.CouponQuery();
      //expect(instance).to.be();
    });

    it('should have the property merchantCode (base name: "merchant_code")', function() {
      // uncomment below and update the code to test the property merchantCode
      //var instane = new UltraCartRestApiV2.CouponQuery();
      //expect(instance).to.be();
    });

    it('should have the property startDtsBegin (base name: "start_dts_begin")', function() {
      // uncomment below and update the code to test the property startDtsBegin
      //var instane = new UltraCartRestApiV2.CouponQuery();
      //expect(instance).to.be();
    });

    it('should have the property startDtsEnd (base name: "start_dts_end")', function() {
      // uncomment below and update the code to test the property startDtsEnd
      //var instane = new UltraCartRestApiV2.CouponQuery();
      //expect(instance).to.be();
    });

  });

}));
