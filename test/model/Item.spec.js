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
    instance = new UltraCartRestApiV2.Item();
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

  describe('Item', function() {
    it('should create an instance of Item', function() {
      // uncomment below and update the code to test Item
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be.a(UltraCartRestApiV2.Item);
    });

    it('should have the property accounting (base name: "accounting")', function() {
      // uncomment below and update the code to test the property accounting
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property amember (base name: "amember")', function() {
      // uncomment below and update the code to test the property amember
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property autoOrder (base name: "auto_order")', function() {
      // uncomment below and update the code to test the property autoOrder
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property ccbill (base name: "ccbill")', function() {
      // uncomment below and update the code to test the property ccbill
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property channelPartnerMappings (base name: "channelPartnerMappings")', function() {
      // uncomment below and update the code to test the property channelPartnerMappings
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property chargeback (base name: "chargeback")', function() {
      // uncomment below and update the code to test the property chargeback
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property checkout (base name: "checkout")', function() {
      // uncomment below and update the code to test the property checkout
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property content (base name: "content")', function() {
      // uncomment below and update the code to test the property content
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property creationDts (base name: "creation_dts")', function() {
      // uncomment below and update the code to test the property creationDts
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property descriptionTranslatedTextInstanceOid (base name: "description_translated_text_instance_oid")', function() {
      // uncomment below and update the code to test the property descriptionTranslatedTextInstanceOid
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property digitalDelivery (base name: "digital_delivery")', function() {
      // uncomment below and update the code to test the property digitalDelivery
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property ebay (base name: "ebay")', function() {
      // uncomment below and update the code to test the property ebay
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property emailNotifications (base name: "email_notifications")', function() {
      // uncomment below and update the code to test the property emailNotifications
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property enrollment123 (base name: "enrollment123")', function() {
      // uncomment below and update the code to test the property enrollment123
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property giftCertificate (base name: "gift_certificate")', function() {
      // uncomment below and update the code to test the property giftCertificate
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property googleProductSearch (base name: "google_product_search")', function() {
      // uncomment below and update the code to test the property googleProductSearch
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property identifiers (base name: "identifiers")', function() {
      // uncomment below and update the code to test the property identifiers
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property inactive (base name: "inactive")', function() {
      // uncomment below and update the code to test the property inactive
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property instantPaymentNotifications (base name: "instant_payment_notifications")', function() {
      // uncomment below and update the code to test the property instantPaymentNotifications
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property internal (base name: "internal")', function() {
      // uncomment below and update the code to test the property internal
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property kit (base name: "kit")', function() {
      // uncomment below and update the code to test the property kit
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property kitDefinition (base name: "kit_definition")', function() {
      // uncomment below and update the code to test the property kitDefinition
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property lastModifiedDts (base name: "last_modified_dts")', function() {
      // uncomment below and update the code to test the property lastModifiedDts
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property merchantId (base name: "merchant_id")', function() {
      // uncomment below and update the code to test the property merchantId
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property merchantItemId (base name: "merchant_item_id")', function() {
      // uncomment below and update the code to test the property merchantItemId
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property merchantItemOid (base name: "merchant_item_oid")', function() {
      // uncomment below and update the code to test the property merchantItemOid
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property options (base name: "options")', function() {
      // uncomment below and update the code to test the property options
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property parentCategoryId (base name: "parent_category_id")', function() {
      // uncomment below and update the code to test the property parentCategoryId
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property paymentProcessing (base name: "payment_processing")', function() {
      // uncomment below and update the code to test the property paymentProcessing
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property physical (base name: "physical")', function() {
      // uncomment below and update the code to test the property physical
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property pricing (base name: "pricing")', function() {
      // uncomment below and update the code to test the property pricing
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property realtimePricing (base name: "realtime_pricing")', function() {
      // uncomment below and update the code to test the property realtimePricing
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property related (base name: "related")', function() {
      // uncomment below and update the code to test the property related
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property reporting (base name: "reporting")', function() {
      // uncomment below and update the code to test the property reporting
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property restriction (base name: "restriction")', function() {
      // uncomment below and update the code to test the property restriction
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property revguard (base name: "revguard")', function() {
      // uncomment below and update the code to test the property revguard
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property reviews (base name: "reviews")', function() {
      // uncomment below and update the code to test the property reviews
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property salesforce (base name: "salesforce")', function() {
      // uncomment below and update the code to test the property salesforce
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property shipping (base name: "shipping")', function() {
      // uncomment below and update the code to test the property shipping
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property tax (base name: "tax")', function() {
      // uncomment below and update the code to test the property tax
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property thirdPartyEmailMarketing (base name: "third_party_email_marketing")', function() {
      // uncomment below and update the code to test the property thirdPartyEmailMarketing
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property variantItems (base name: "variant_items")', function() {
      // uncomment below and update the code to test the property variantItems
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property variations (base name: "variations")', function() {
      // uncomment below and update the code to test the property variations
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

    it('should have the property wishlistMember (base name: "wishlist_member")', function() {
      // uncomment below and update the code to test the property wishlistMember
      //var instane = new UltraCartRestApiV2.Item();
      //expect(instance).to.be();
    });

  });

}));
