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
    instance = new UltraCartRestApiV2.CartItemMultimedia();
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

  describe('CartItemMultimedia', function() {
    it('should create an instance of CartItemMultimedia', function() {
      // uncomment below and update the code to test CartItemMultimedia
      //var instane = new UltraCartRestApiV2.CartItemMultimedia();
      //expect(instance).to.be.a(UltraCartRestApiV2.CartItemMultimedia);
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instane = new UltraCartRestApiV2.CartItemMultimedia();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new UltraCartRestApiV2.CartItemMultimedia();
      //expect(instance).to.be();
    });

    it('should have the property excludeFromGallery (base name: "exclude_from_gallery")', function() {
      // uncomment below and update the code to test the property excludeFromGallery
      //var instane = new UltraCartRestApiV2.CartItemMultimedia();
      //expect(instance).to.be();
    });

    it('should have the property imageHeight (base name: "image_height")', function() {
      // uncomment below and update the code to test the property imageHeight
      //var instane = new UltraCartRestApiV2.CartItemMultimedia();
      //expect(instance).to.be();
    });

    it('should have the property imageWidth (base name: "image_width")', function() {
      // uncomment below and update the code to test the property imageWidth
      //var instane = new UltraCartRestApiV2.CartItemMultimedia();
      //expect(instance).to.be();
    });

    it('should have the property isDefault (base name: "is_default")', function() {
      // uncomment below and update the code to test the property isDefault
      //var instane = new UltraCartRestApiV2.CartItemMultimedia();
      //expect(instance).to.be();
    });

    it('should have the property thumbnails (base name: "thumbnails")', function() {
      // uncomment below and update the code to test the property thumbnails
      //var instane = new UltraCartRestApiV2.CartItemMultimedia();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new UltraCartRestApiV2.CartItemMultimedia();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new UltraCartRestApiV2.CartItemMultimedia();
      //expect(instance).to.be();
    });

  });

}));