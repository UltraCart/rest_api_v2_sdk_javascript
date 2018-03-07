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
    instance = new UltraCartRestApiV2.CartCheckout();
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

  describe('CartCheckout', function() {
    it('should create an instance of CartCheckout', function() {
      // uncomment below and update the code to test CartCheckout
      //var instane = new UltraCartRestApiV2.CartCheckout();
      //expect(instance).to.be.a(UltraCartRestApiV2.CartCheckout);
    });

    it('should have the property comments (base name: "comments")', function() {
      // uncomment below and update the code to test the property comments
      //var instane = new UltraCartRestApiV2.CartCheckout();
      //expect(instance).to.be();
    });

    it('should have the property customField1 (base name: "custom_field1")', function() {
      // uncomment below and update the code to test the property customField1
      //var instane = new UltraCartRestApiV2.CartCheckout();
      //expect(instance).to.be();
    });

    it('should have the property customField2 (base name: "custom_field2")', function() {
      // uncomment below and update the code to test the property customField2
      //var instane = new UltraCartRestApiV2.CartCheckout();
      //expect(instance).to.be();
    });

    it('should have the property customField3 (base name: "custom_field3")', function() {
      // uncomment below and update the code to test the property customField3
      //var instane = new UltraCartRestApiV2.CartCheckout();
      //expect(instance).to.be();
    });

    it('should have the property customField4 (base name: "custom_field4")', function() {
      // uncomment below and update the code to test the property customField4
      //var instane = new UltraCartRestApiV2.CartCheckout();
      //expect(instance).to.be();
    });

    it('should have the property customField5 (base name: "custom_field5")', function() {
      // uncomment below and update the code to test the property customField5
      //var instane = new UltraCartRestApiV2.CartCheckout();
      //expect(instance).to.be();
    });

    it('should have the property customField6 (base name: "custom_field6")', function() {
      // uncomment below and update the code to test the property customField6
      //var instane = new UltraCartRestApiV2.CartCheckout();
      //expect(instance).to.be();
    });

    it('should have the property customField7 (base name: "custom_field7")', function() {
      // uncomment below and update the code to test the property customField7
      //var instane = new UltraCartRestApiV2.CartCheckout();
      //expect(instance).to.be();
    });

    it('should have the property ipAddress (base name: "ip_address")', function() {
      // uncomment below and update the code to test the property ipAddress
      //var instane = new UltraCartRestApiV2.CartCheckout();
      //expect(instance).to.be();
    });

    it('should have the property screenBrandingThemeCode (base name: "screen_branding_theme_code")', function() {
      // uncomment below and update the code to test the property screenBrandingThemeCode
      //var instane = new UltraCartRestApiV2.CartCheckout();
      //expect(instance).to.be();
    });

  });

}));
