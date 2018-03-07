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
    instance = new UltraCartRestApiV2.OrderLinkedShipment();
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

  describe('OrderLinkedShipment', function() {
    it('should create an instance of OrderLinkedShipment', function() {
      // uncomment below and update the code to test OrderLinkedShipment
      //var instane = new UltraCartRestApiV2.OrderLinkedShipment();
      //expect(instance).to.be.a(UltraCartRestApiV2.OrderLinkedShipment);
    });

    it('should have the property hasLinkedShipment (base name: "has_linked_shipment")', function() {
      // uncomment below and update the code to test the property hasLinkedShipment
      //var instane = new UltraCartRestApiV2.OrderLinkedShipment();
      //expect(instance).to.be();
    });

    it('should have the property linkedShipment (base name: "linked_shipment")', function() {
      // uncomment below and update the code to test the property linkedShipment
      //var instane = new UltraCartRestApiV2.OrderLinkedShipment();
      //expect(instance).to.be();
    });

    it('should have the property linkedShipmentChannelPartnerOrderIds (base name: "linked_shipment_channel_partner_order_ids")', function() {
      // uncomment below and update the code to test the property linkedShipmentChannelPartnerOrderIds
      //var instane = new UltraCartRestApiV2.OrderLinkedShipment();
      //expect(instance).to.be();
    });

    it('should have the property linkedShipmentOrderIds (base name: "linked_shipment_order_ids")', function() {
      // uncomment below and update the code to test the property linkedShipmentOrderIds
      //var instane = new UltraCartRestApiV2.OrderLinkedShipment();
      //expect(instance).to.be();
    });

    it('should have the property linkedShipmentToOrderId (base name: "linked_shipment_to_order_id")', function() {
      // uncomment below and update the code to test the property linkedShipmentToOrderId
      //var instane = new UltraCartRestApiV2.OrderLinkedShipment();
      //expect(instance).to.be();
    });

  });

}));
