/**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
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
    instance = new UltraCartRestApiV2.ItemAutoOrder();
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

  describe('ItemAutoOrder', function() {
    it('should create an instance of ItemAutoOrder', function() {
      // uncomment below and update the code to test ItemAutoOrder
      //var instane = new UltraCartRestApiV2.ItemAutoOrder();
      //expect(instance).to.be.a(UltraCartRestApiV2.ItemAutoOrder);
    });

    it('should have the property authFutureAmount (base name: "auth_future_amount")', function() {
      // uncomment below and update the code to test the property authFutureAmount
      //var instane = new UltraCartRestApiV2.ItemAutoOrder();
      //expect(instance).to.be();
    });

    it('should have the property authTestAmount (base name: "auth_test_amount")', function() {
      // uncomment below and update the code to test the property authTestAmount
      //var instane = new UltraCartRestApiV2.ItemAutoOrder();
      //expect(instance).to.be();
    });

    it('should have the property autoOrderCancelItemId (base name: "auto_order_cancel_item_id")', function() {
      // uncomment below and update the code to test the property autoOrderCancelItemId
      //var instane = new UltraCartRestApiV2.ItemAutoOrder();
      //expect(instance).to.be();
    });

    it('should have the property autoOrderCancelItemOid (base name: "auto_order_cancel_item_oid")', function() {
      // uncomment below and update the code to test the property autoOrderCancelItemOid
      //var instane = new UltraCartRestApiV2.ItemAutoOrder();
      //expect(instance).to.be();
    });

    it('should have the property autoOrderDowngradeItems (base name: "auto_order_downgrade_items")', function() {
      // uncomment below and update the code to test the property autoOrderDowngradeItems
      //var instane = new UltraCartRestApiV2.ItemAutoOrder();
      //expect(instance).to.be();
    });

    it('should have the property autoOrderPaused (base name: "auto_order_paused")', function() {
      // uncomment below and update the code to test the property autoOrderPaused
      //var instane = new UltraCartRestApiV2.ItemAutoOrder();
      //expect(instance).to.be();
    });

    it('should have the property autoOrderSchedules (base name: "auto_order_schedules")', function() {
      // uncomment below and update the code to test the property autoOrderSchedules
      //var instane = new UltraCartRestApiV2.ItemAutoOrder();
      //expect(instance).to.be();
    });

    it('should have the property autoOrderUpgradeItems (base name: "auto_order_upgrade_items")', function() {
      // uncomment below and update the code to test the property autoOrderUpgradeItems
      //var instane = new UltraCartRestApiV2.ItemAutoOrder();
      //expect(instance).to.be();
    });

    it('should have the property autoOrderUpsell (base name: "auto_order_upsell")', function() {
      // uncomment below and update the code to test the property autoOrderUpsell
      //var instane = new UltraCartRestApiV2.ItemAutoOrder();
      //expect(instance).to.be();
    });

    it('should have the property autoOrderUpsellNoEasyCancel (base name: "auto_order_upsell_no_easy_cancel")', function() {
      // uncomment below and update the code to test the property autoOrderUpsellNoEasyCancel
      //var instane = new UltraCartRestApiV2.ItemAutoOrder();
      //expect(instance).to.be();
    });

    it('should have the property autoOrderUpsellOnePerCustomer (base name: "auto_order_upsell_one_per_customer")', function() {
      // uncomment below and update the code to test the property autoOrderUpsellOnePerCustomer
      //var instane = new UltraCartRestApiV2.ItemAutoOrder();
      //expect(instance).to.be();
    });

    it('should have the property autoOrderable (base name: "auto_orderable")', function() {
      // uncomment below and update the code to test the property autoOrderable
      //var instane = new UltraCartRestApiV2.ItemAutoOrder();
      //expect(instance).to.be();
    });

    it('should have the property cancelOtherAutoOrders (base name: "cancel_other_auto_orders")', function() {
      // uncomment below and update the code to test the property cancelOtherAutoOrders
      //var instane = new UltraCartRestApiV2.ItemAutoOrder();
      //expect(instance).to.be();
    });

    it('should have the property freeShippingAutoOrder (base name: "free_shipping_auto_order")', function() {
      // uncomment below and update the code to test the property freeShippingAutoOrder
      //var instane = new UltraCartRestApiV2.ItemAutoOrder();
      //expect(instance).to.be();
    });

    it('should have the property steps (base name: "steps")', function() {
      // uncomment below and update the code to test the property steps
      //var instane = new UltraCartRestApiV2.ItemAutoOrder();
      //expect(instance).to.be();
    });

  });

}));
