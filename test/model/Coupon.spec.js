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
    instance = new UltraCartRestApiV2.Coupon();
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

  describe('Coupon', function() {
    it('should create an instance of Coupon', function() {
      // uncomment below and update the code to test Coupon
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be.a(UltraCartRestApiV2.Coupon);
    });

    it('should have the property affiliateOid (base name: "affiliate_oid")', function() {
      // uncomment below and update the code to test the property affiliateOid
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property amountOffItems (base name: "amount_off_items")', function() {
      // uncomment below and update the code to test the property amountOffItems
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property amountOffShipping (base name: "amount_off_shipping")', function() {
      // uncomment below and update the code to test the property amountOffShipping
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property amountOffShippingWithItemsPurchase (base name: "amount_off_shipping_with_items_purchase")', function() {
      // uncomment below and update the code to test the property amountOffShippingWithItemsPurchase
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property amountOffSubtotal (base name: "amount_off_subtotal")', function() {
      // uncomment below and update the code to test the property amountOffSubtotal
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property amountOffSubtotalAndFreeShipping (base name: "amount_off_subtotal_and_free_shipping")', function() {
      // uncomment below and update the code to test the property amountOffSubtotalAndFreeShipping
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property amountOffSubtotalAndShipping (base name: "amount_off_subtotal_and_shipping")', function() {
      // uncomment below and update the code to test the property amountOffSubtotalAndShipping
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property amountOffSubtotalWithBlockPurchase (base name: "amount_off_subtotal_with_block_purchase")', function() {
      // uncomment below and update the code to test the property amountOffSubtotalWithBlockPurchase
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property amountOffSubtotalWithItemsPurchase (base name: "amount_off_subtotal_with_items_purchase")', function() {
      // uncomment below and update the code to test the property amountOffSubtotalWithItemsPurchase
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property canBeUsedWithOtherCoupons (base name: "can_be_used_with_other_coupons")', function() {
      // uncomment below and update the code to test the property canBeUsedWithOtherCoupons
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property couponOid (base name: "coupon_oid")', function() {
      // uncomment below and update the code to test the property couponOid
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property couponType (base name: "coupon_type")', function() {
      // uncomment below and update the code to test the property couponType
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property discountItemWithItemPurchase (base name: "discount_item_with_item_purchase")', function() {
      // uncomment below and update the code to test the property discountItemWithItemPurchase
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property discountItems (base name: "discount_items")', function() {
      // uncomment below and update the code to test the property discountItems
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property expirationDts (base name: "expiration_dts")', function() {
      // uncomment below and update the code to test the property expirationDts
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property freeItemAndShippingWithSubtotal (base name: "free_item_and_shipping_with_subtotal")', function() {
      // uncomment below and update the code to test the property freeItemAndShippingWithSubtotal
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property freeItemWithItemPurchase (base name: "free_item_with_item_purchase")', function() {
      // uncomment below and update the code to test the property freeItemWithItemPurchase
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property freeItemWithSubtotal (base name: "free_item_with_subtotal")', function() {
      // uncomment below and update the code to test the property freeItemWithSubtotal
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property freeItemsWithItemPurchase (base name: "free_items_with_item_purchase")', function() {
      // uncomment below and update the code to test the property freeItemsWithItemPurchase
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property freeItemsWithMixmatchPurchase (base name: "free_items_with_mixmatch_purchase")', function() {
      // uncomment below and update the code to test the property freeItemsWithMixmatchPurchase
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property freeShipping (base name: "free_shipping")', function() {
      // uncomment below and update the code to test the property freeShipping
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property freeShippingSpecificItems (base name: "free_shipping_specific_items")', function() {
      // uncomment below and update the code to test the property freeShippingSpecificItems
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property freeShippingWithItemsPurchase (base name: "free_shipping_with_items_purchase")', function() {
      // uncomment below and update the code to test the property freeShippingWithItemsPurchase
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property freeShippingWithSubtotal (base name: "free_shipping_with_subtotal")', function() {
      // uncomment below and update the code to test the property freeShippingWithSubtotal
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property merchantCode (base name: "merchant_code")', function() {
      // uncomment below and update the code to test the property merchantCode
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property multipleAmountsOffItems (base name: "multiple_amounts_off_items")', function() {
      // uncomment below and update the code to test the property multipleAmountsOffItems
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property noDiscount (base name: "no_discount")', function() {
      // uncomment below and update the code to test the property noDiscount
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property percentOffItemWithItemsQuantityPurchase (base name: "percent_off_item_with_items_quantity_purchase")', function() {
      // uncomment below and update the code to test the property percentOffItemWithItemsQuantityPurchase
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property percentOffItems (base name: "percent_off_items")', function() {
      // uncomment below and update the code to test the property percentOffItems
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property percentOffItemsAndFreeShipping (base name: "percent_off_items_and_free_shipping")', function() {
      // uncomment below and update the code to test the property percentOffItemsAndFreeShipping
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property percentOffItemsWithItemsPurchase (base name: "percent_off_items_with_items_purchase")', function() {
      // uncomment below and update the code to test the property percentOffItemsWithItemsPurchase
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property percentOffRetailPriceItems (base name: "percent_off_retail_price_items")', function() {
      // uncomment below and update the code to test the property percentOffRetailPriceItems
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property percentOffShipping (base name: "percent_off_shipping")', function() {
      // uncomment below and update the code to test the property percentOffShipping
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property percentOffSubtotal (base name: "percent_off_subtotal")', function() {
      // uncomment below and update the code to test the property percentOffSubtotal
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property percentOffSubtotalAndFreeShipping (base name: "percent_off_subtotal_and_free_shipping")', function() {
      // uncomment below and update the code to test the property percentOffSubtotalAndFreeShipping
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property percentOffSubtotalLimit (base name: "percent_off_subtotal_limit")', function() {
      // uncomment below and update the code to test the property percentOffSubtotalLimit
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property percentOffSubtotalWithItemsPurchase (base name: "percent_off_subtotal_with_items purchase")', function() {
      // uncomment below and update the code to test the property percentOffSubtotalWithItemsPurchase
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property percentOffSubtotalWithSubtotal (base name: "percent_off_subtotal_with_subtotal")', function() {
      // uncomment below and update the code to test the property percentOffSubtotalWithSubtotal
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property quickbooksCode (base name: "quickbooks_code")', function() {
      // uncomment below and update the code to test the property quickbooksCode
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property startDts (base name: "start_dts")', function() {
      // uncomment below and update the code to test the property startDts
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property tieredAmountOffItem (base name: "tiered_amount_off_item")', function() {
      // uncomment below and update the code to test the property tieredAmountOffItem
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property tieredAmountOffSubtotal (base name: "tiered_amount_off_subtotal")', function() {
      // uncomment below and update the code to test the property tieredAmountOffSubtotal
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property tieredPercentOffItems (base name: "tiered_percent_off_items")', function() {
      // uncomment below and update the code to test the property tieredPercentOffItems
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property tieredPercentOffShipping (base name: "tiered_percent_off_shipping")', function() {
      // uncomment below and update the code to test the property tieredPercentOffShipping
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property tieredPercentOffSubtotal (base name: "tiered_percent_off_subtotal")', function() {
      // uncomment below and update the code to test the property tieredPercentOffSubtotal
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

    it('should have the property usableBy (base name: "usable_by")', function() {
      // uncomment below and update the code to test the property usableBy
      //var instane = new UltraCartRestApiV2.Coupon();
      //expect(instance).to.be();
    });

  });

}));
