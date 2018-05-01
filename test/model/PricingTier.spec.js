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
    instance = new UltraCartRestApiV2.PricingTier();
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

  describe('PricingTier', function() {
    it('should create an instance of PricingTier', function() {
      // uncomment below and update the code to test PricingTier
      //var instane = new UltraCartRestApiV2.PricingTier();
      //expect(instance).to.be.a(UltraCartRestApiV2.PricingTier);
    });

    it('should have the property allow3rdPartyBilling (base name: "allow_3rd_party_billing")', function() {
      // uncomment below and update the code to test the property allow3rdPartyBilling
      //var instane = new UltraCartRestApiV2.PricingTier();
      //expect(instance).to.be();
    });

    it('should have the property allowCod (base name: "allow_cod")', function() {
      // uncomment below and update the code to test the property allowCod
      //var instane = new UltraCartRestApiV2.PricingTier();
      //expect(instance).to.be();
    });

    it('should have the property allowPurchaseOrder (base name: "allow_purchase_order")', function() {
      // uncomment below and update the code to test the property allowPurchaseOrder
      //var instane = new UltraCartRestApiV2.PricingTier();
      //expect(instance).to.be();
    });

    it('should have the property allowQuoteRequest (base name: "allow_quote_request")', function() {
      // uncomment below and update the code to test the property allowQuoteRequest
      //var instane = new UltraCartRestApiV2.PricingTier();
      //expect(instance).to.be();
    });

    it('should have the property approvalNotification (base name: "approval_notification")', function() {
      // uncomment below and update the code to test the property approvalNotification
      //var instane = new UltraCartRestApiV2.PricingTier();
      //expect(instance).to.be();
    });

    it('should have the property autoApproveCod (base name: "auto_approve_cod")', function() {
      // uncomment below and update the code to test the property autoApproveCod
      //var instane = new UltraCartRestApiV2.PricingTier();
      //expect(instance).to.be();
    });

    it('should have the property autoApprovePurchaseOrder (base name: "auto_approve_purchase_order")', function() {
      // uncomment below and update the code to test the property autoApprovePurchaseOrder
      //var instane = new UltraCartRestApiV2.PricingTier();
      //expect(instance).to.be();
    });

    it('should have the property defaultOnWholesaleSignup (base name: "default_on_wholesale_signup")', function() {
      // uncomment below and update the code to test the property defaultOnWholesaleSignup
      //var instane = new UltraCartRestApiV2.PricingTier();
      //expect(instance).to.be();
    });

    it('should have the property defaultPercentageDiscount (base name: "default_percentage_discount")', function() {
      // uncomment below and update the code to test the property defaultPercentageDiscount
      //var instane = new UltraCartRestApiV2.PricingTier();
      //expect(instance).to.be();
    });

    it('should have the property defaultShippingMethodOid (base name: "default_shipping_method_oid")', function() {
      // uncomment below and update the code to test the property defaultShippingMethodOid
      //var instane = new UltraCartRestApiV2.PricingTier();
      //expect(instance).to.be();
    });

    it('should have the property defaultTier (base name: "default_tier")', function() {
      // uncomment below and update the code to test the property defaultTier
      //var instane = new UltraCartRestApiV2.PricingTier();
      //expect(instance).to.be();
    });

    it('should have the property displayOnWholesaleSignup (base name: "display_on_wholesale_signup")', function() {
      // uncomment below and update the code to test the property displayOnWholesaleSignup
      //var instane = new UltraCartRestApiV2.PricingTier();
      //expect(instance).to.be();
    });

    it('should have the property excludeFromFreePromotion (base name: "exclude_from_free_promotion")', function() {
      // uncomment below and update the code to test the property excludeFromFreePromotion
      //var instane = new UltraCartRestApiV2.PricingTier();
      //expect(instance).to.be();
    });

    it('should have the property exemptShippingHandlingCharge (base name: "exempt_shipping_handling_charge")', function() {
      // uncomment below and update the code to test the property exemptShippingHandlingCharge
      //var instane = new UltraCartRestApiV2.PricingTier();
      //expect(instance).to.be();
    });

    it('should have the property freeShipping (base name: "free_shipping")', function() {
      // uncomment below and update the code to test the property freeShipping
      //var instane = new UltraCartRestApiV2.PricingTier();
      //expect(instance).to.be();
    });

    it('should have the property freeShippingMinimum (base name: "free_shipping_minimum")', function() {
      // uncomment below and update the code to test the property freeShippingMinimum
      //var instane = new UltraCartRestApiV2.PricingTier();
      //expect(instance).to.be();
    });

    it('should have the property maximumItemCount (base name: "maximum_item_count")', function() {
      // uncomment below and update the code to test the property maximumItemCount
      //var instane = new UltraCartRestApiV2.PricingTier();
      //expect(instance).to.be();
    });

    it('should have the property minimumItemCount (base name: "minimum_item_count")', function() {
      // uncomment below and update the code to test the property minimumItemCount
      //var instane = new UltraCartRestApiV2.PricingTier();
      //expect(instance).to.be();
    });

    it('should have the property minimumSubtotal (base name: "minimum_subtotal")', function() {
      // uncomment below and update the code to test the property minimumSubtotal
      //var instane = new UltraCartRestApiV2.PricingTier();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new UltraCartRestApiV2.PricingTier();
      //expect(instance).to.be();
    });

    it('should have the property noCoupons (base name: "no_coupons")', function() {
      // uncomment below and update the code to test the property noCoupons
      //var instane = new UltraCartRestApiV2.PricingTier();
      //expect(instance).to.be();
    });

    it('should have the property noFreeShipping (base name: "no_free_shipping")', function() {
      // uncomment below and update the code to test the property noFreeShipping
      //var instane = new UltraCartRestApiV2.PricingTier();
      //expect(instance).to.be();
    });

    it('should have the property noRealtimeCharge (base name: "no_realtime_charge")', function() {
      // uncomment below and update the code to test the property noRealtimeCharge
      //var instane = new UltraCartRestApiV2.PricingTier();
      //expect(instance).to.be();
    });

    it('should have the property notValidWhenCouponPresent (base name: "not_valid_when_coupon_present")', function() {
      // uncomment below and update the code to test the property notValidWhenCouponPresent
      //var instane = new UltraCartRestApiV2.PricingTier();
      //expect(instance).to.be();
    });

    it('should have the property pricingTierOid (base name: "pricing_tier_oid")', function() {
      // uncomment below and update the code to test the property pricingTierOid
      //var instane = new UltraCartRestApiV2.PricingTier();
      //expect(instance).to.be();
    });

    it('should have the property realtimePercentageDiscount (base name: "realtime_percentage_discount")', function() {
      // uncomment below and update the code to test the property realtimePercentageDiscount
      //var instane = new UltraCartRestApiV2.PricingTier();
      //expect(instance).to.be();
    });

    it('should have the property signupNotification (base name: "signup_notification")', function() {
      // uncomment below and update the code to test the property signupNotification
      //var instane = new UltraCartRestApiV2.PricingTier();
      //expect(instance).to.be();
    });

    it('should have the property suppressBuysafe (base name: "suppress_buysafe")', function() {
      // uncomment below and update the code to test the property suppressBuysafe
      //var instane = new UltraCartRestApiV2.PricingTier();
      //expect(instance).to.be();
    });

    it('should have the property taxExempt (base name: "tax_exempt")', function() {
      // uncomment below and update the code to test the property taxExempt
      //var instane = new UltraCartRestApiV2.PricingTier();
      //expect(instance).to.be();
    });

    it('should have the property trackSeparately (base name: "track_separately")', function() {
      // uncomment below and update the code to test the property trackSeparately
      //var instane = new UltraCartRestApiV2.PricingTier();
      //expect(instance).to.be();
    });

  });

}));
