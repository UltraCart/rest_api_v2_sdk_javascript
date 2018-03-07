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
    instance = new UltraCartRestApiV2.ItemOption();
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

  describe('ItemOption', function() {
    it('should create an instance of ItemOption', function() {
      // uncomment below and update the code to test ItemOption
      //var instane = new UltraCartRestApiV2.ItemOption();
      //expect(instance).to.be.a(UltraCartRestApiV2.ItemOption);
    });

    it('should have the property costIfSpecified (base name: "cost_if_specified")', function() {
      // uncomment below and update the code to test the property costIfSpecified
      //var instane = new UltraCartRestApiV2.ItemOption();
      //expect(instance).to.be();
    });

    it('should have the property costPerLetter (base name: "cost_per_letter")', function() {
      // uncomment below and update the code to test the property costPerLetter
      //var instane = new UltraCartRestApiV2.ItemOption();
      //expect(instance).to.be();
    });

    it('should have the property costPerLine (base name: "cost_per_line")', function() {
      // uncomment below and update the code to test the property costPerLine
      //var instane = new UltraCartRestApiV2.ItemOption();
      //expect(instance).to.be();
    });

    it('should have the property ignoreIfDefault (base name: "ignore_if_default")', function() {
      // uncomment below and update the code to test the property ignoreIfDefault
      //var instane = new UltraCartRestApiV2.ItemOption();
      //expect(instance).to.be();
    });

    it('should have the property label (base name: "label")', function() {
      // uncomment below and update the code to test the property label
      //var instane = new UltraCartRestApiV2.ItemOption();
      //expect(instance).to.be();
    });

    it('should have the property labelTranslatedTextInstanceOid (base name: "label_translated_text_instance_oid")', function() {
      // uncomment below and update the code to test the property labelTranslatedTextInstanceOid
      //var instane = new UltraCartRestApiV2.ItemOption();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new UltraCartRestApiV2.ItemOption();
      //expect(instance).to.be();
    });

    it('should have the property nameTranslatedTextInstanceOid (base name: "name_translated_text_instance_oid")', function() {
      // uncomment below and update the code to test the property nameTranslatedTextInstanceOid
      //var instane = new UltraCartRestApiV2.ItemOption();
      //expect(instance).to.be();
    });

    it('should have the property oneTimeFee (base name: "one_time_fee")', function() {
      // uncomment below and update the code to test the property oneTimeFee
      //var instane = new UltraCartRestApiV2.ItemOption();
      //expect(instance).to.be();
    });

    it('should have the property optionOid (base name: "option_oid")', function() {
      // uncomment below and update the code to test the property optionOid
      //var instane = new UltraCartRestApiV2.ItemOption();
      //expect(instance).to.be();
    });

    it('should have the property required (base name: "required")', function() {
      // uncomment below and update the code to test the property required
      //var instane = new UltraCartRestApiV2.ItemOption();
      //expect(instance).to.be();
    });

    it('should have the property systemOption (base name: "system_option")', function() {
      // uncomment below and update the code to test the property systemOption
      //var instane = new UltraCartRestApiV2.ItemOption();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new UltraCartRestApiV2.ItemOption();
      //expect(instance).to.be();
    });

    it('should have the property values (base name: "values")', function() {
      // uncomment below and update the code to test the property values
      //var instane = new UltraCartRestApiV2.ItemOption();
      //expect(instance).to.be();
    });

  });

}));
