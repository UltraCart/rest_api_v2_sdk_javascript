/*
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'com.ultracart.admin.v2.models/ItemAccounting', 'com.ultracart.admin.v2.models/ItemAmember', 'com.ultracart.admin.v2.models/ItemAutoOrder', 'com.ultracart.admin.v2.models/ItemCCBill', 'com.ultracart.admin.v2.models/ItemChannelPartnerMapping', 'com.ultracart.admin.v2.models/ItemChargeback', 'com.ultracart.admin.v2.models/ItemCheckout', 'com.ultracart.admin.v2.models/ItemContent', 'com.ultracart.admin.v2.models/ItemDigitalDelivery', 'com.ultracart.admin.v2.models/ItemEbay', 'com.ultracart.admin.v2.models/ItemEmailNotifications', 'com.ultracart.admin.v2.models/ItemEnrollment123', 'com.ultracart.admin.v2.models/ItemFulfillmentAddon', 'com.ultracart.admin.v2.models/ItemGiftCertificate', 'com.ultracart.admin.v2.models/ItemGoogleProductSearch', 'com.ultracart.admin.v2.models/ItemIdentifiers', 'com.ultracart.admin.v2.models/ItemInstantPaymentNotifications', 'com.ultracart.admin.v2.models/ItemInternal', 'com.ultracart.admin.v2.models/ItemKitDefinition', 'com.ultracart.admin.v2.models/ItemOption', 'com.ultracart.admin.v2.models/ItemPaymentProcessing', 'com.ultracart.admin.v2.models/ItemPhysical', 'com.ultracart.admin.v2.models/ItemPricing', 'com.ultracart.admin.v2.models/ItemProperty', 'com.ultracart.admin.v2.models/ItemRealtimePricing', 'com.ultracart.admin.v2.models/ItemRelated', 'com.ultracart.admin.v2.models/ItemReporting', 'com.ultracart.admin.v2.models/ItemRestriction', 'com.ultracart.admin.v2.models/ItemRevguard', 'com.ultracart.admin.v2.models/ItemReviews', 'com.ultracart.admin.v2.models/ItemSalesforce', 'com.ultracart.admin.v2.models/ItemShipping', 'com.ultracart.admin.v2.models/ItemTags', 'com.ultracart.admin.v2.models/ItemTax', 'com.ultracart.admin.v2.models/ItemThirdPartyEmailMarketing', 'com.ultracart.admin.v2.models/ItemVariantItem', 'com.ultracart.admin.v2.models/ItemVariation', 'com.ultracart.admin.v2.models/ItemWishlistMember'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ItemAccounting'), require('./ItemAmember'), require('./ItemAutoOrder'), require('./ItemCCBill'), require('./ItemChannelPartnerMapping'), require('./ItemChargeback'), require('./ItemCheckout'), require('./ItemContent'), require('./ItemDigitalDelivery'), require('./ItemEbay'), require('./ItemEmailNotifications'), require('./ItemEnrollment123'), require('./ItemFulfillmentAddon'), require('./ItemGiftCertificate'), require('./ItemGoogleProductSearch'), require('./ItemIdentifiers'), require('./ItemInstantPaymentNotifications'), require('./ItemInternal'), require('./ItemKitDefinition'), require('./ItemOption'), require('./ItemPaymentProcessing'), require('./ItemPhysical'), require('./ItemPricing'), require('./ItemProperty'), require('./ItemRealtimePricing'), require('./ItemRelated'), require('./ItemReporting'), require('./ItemRestriction'), require('./ItemRevguard'), require('./ItemReviews'), require('./ItemSalesforce'), require('./ItemShipping'), require('./ItemTags'), require('./ItemTax'), require('./ItemThirdPartyEmailMarketing'), require('./ItemVariantItem'), require('./ItemVariation'), require('./ItemWishlistMember'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.Item = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ItemAccounting, root.UltraCartRestApiV2.ItemAmember, root.UltraCartRestApiV2.ItemAutoOrder, root.UltraCartRestApiV2.ItemCCBill, root.UltraCartRestApiV2.ItemChannelPartnerMapping, root.UltraCartRestApiV2.ItemChargeback, root.UltraCartRestApiV2.ItemCheckout, root.UltraCartRestApiV2.ItemContent, root.UltraCartRestApiV2.ItemDigitalDelivery, root.UltraCartRestApiV2.ItemEbay, root.UltraCartRestApiV2.ItemEmailNotifications, root.UltraCartRestApiV2.ItemEnrollment123, root.UltraCartRestApiV2.ItemFulfillmentAddon, root.UltraCartRestApiV2.ItemGiftCertificate, root.UltraCartRestApiV2.ItemGoogleProductSearch, root.UltraCartRestApiV2.ItemIdentifiers, root.UltraCartRestApiV2.ItemInstantPaymentNotifications, root.UltraCartRestApiV2.ItemInternal, root.UltraCartRestApiV2.ItemKitDefinition, root.UltraCartRestApiV2.ItemOption, root.UltraCartRestApiV2.ItemPaymentProcessing, root.UltraCartRestApiV2.ItemPhysical, root.UltraCartRestApiV2.ItemPricing, root.UltraCartRestApiV2.ItemProperty, root.UltraCartRestApiV2.ItemRealtimePricing, root.UltraCartRestApiV2.ItemRelated, root.UltraCartRestApiV2.ItemReporting, root.UltraCartRestApiV2.ItemRestriction, root.UltraCartRestApiV2.ItemRevguard, root.UltraCartRestApiV2.ItemReviews, root.UltraCartRestApiV2.ItemSalesforce, root.UltraCartRestApiV2.ItemShipping, root.UltraCartRestApiV2.ItemTags, root.UltraCartRestApiV2.ItemTax, root.UltraCartRestApiV2.ItemThirdPartyEmailMarketing, root.UltraCartRestApiV2.ItemVariantItem, root.UltraCartRestApiV2.ItemVariation, root.UltraCartRestApiV2.ItemWishlistMember);
  }
}(this, function(ApiClient, ItemAccounting, ItemAmember, ItemAutoOrder, ItemCCBill, ItemChannelPartnerMapping, ItemChargeback, ItemCheckout, ItemContent, ItemDigitalDelivery, ItemEbay, ItemEmailNotifications, ItemEnrollment123, ItemFulfillmentAddon, ItemGiftCertificate, ItemGoogleProductSearch, ItemIdentifiers, ItemInstantPaymentNotifications, ItemInternal, ItemKitDefinition, ItemOption, ItemPaymentProcessing, ItemPhysical, ItemPricing, ItemProperty, ItemRealtimePricing, ItemRelated, ItemReporting, ItemRestriction, ItemRevguard, ItemReviews, ItemSalesforce, ItemShipping, ItemTags, ItemTax, ItemThirdPartyEmailMarketing, ItemVariantItem, ItemVariation, ItemWishlistMember) {
  'use strict';

  /**
   * The Item model module.
   * @module com.ultracart.admin.v2.models/Item
   * @version 3.10.55
   */

  /**
   * Constructs a new <code>Item</code>.
   * @alias module:com.ultracart.admin.v2.models/Item
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Item</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/Item} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/Item} The populated <code>Item</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('accounting'))
        obj.accounting = ItemAccounting.constructFromObject(data['accounting']);
      if (data.hasOwnProperty('amember'))
        obj.amember = ItemAmember.constructFromObject(data['amember']);
      if (data.hasOwnProperty('auto_order'))
        obj.auto_order = ItemAutoOrder.constructFromObject(data['auto_order']);
      if (data.hasOwnProperty('ccbill'))
        obj.ccbill = ItemCCBill.constructFromObject(data['ccbill']);
      if (data.hasOwnProperty('channel_partner_item_mappings'))
        obj.channel_partner_item_mappings = ApiClient.convertToType(data['channel_partner_item_mappings'], [ItemChannelPartnerMapping]);
      if (data.hasOwnProperty('chargeback'))
        obj.chargeback = ItemChargeback.constructFromObject(data['chargeback']);
      if (data.hasOwnProperty('checkout'))
        obj.checkout = ItemCheckout.constructFromObject(data['checkout']);
      if (data.hasOwnProperty('content'))
        obj.content = ItemContent.constructFromObject(data['content']);
      if (data.hasOwnProperty('creation_dts'))
        obj.creation_dts = ApiClient.convertToType(data['creation_dts'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('description_translated_text_instance_oid'))
        obj.description_translated_text_instance_oid = ApiClient.convertToType(data['description_translated_text_instance_oid'], 'Number');
      if (data.hasOwnProperty('digital_delivery'))
        obj.digital_delivery = ItemDigitalDelivery.constructFromObject(data['digital_delivery']);
      if (data.hasOwnProperty('ebay'))
        obj.ebay = ItemEbay.constructFromObject(data['ebay']);
      if (data.hasOwnProperty('email_notifications'))
        obj.email_notifications = ItemEmailNotifications.constructFromObject(data['email_notifications']);
      if (data.hasOwnProperty('enrollment123'))
        obj.enrollment123 = ItemEnrollment123.constructFromObject(data['enrollment123']);
      if (data.hasOwnProperty('fulfillment_addons'))
        obj.fulfillment_addons = ApiClient.convertToType(data['fulfillment_addons'], [ItemFulfillmentAddon]);
      if (data.hasOwnProperty('gift_certificate'))
        obj.gift_certificate = ItemGiftCertificate.constructFromObject(data['gift_certificate']);
      if (data.hasOwnProperty('google_product_search'))
        obj.google_product_search = ItemGoogleProductSearch.constructFromObject(data['google_product_search']);
      if (data.hasOwnProperty('identifiers'))
        obj.identifiers = ItemIdentifiers.constructFromObject(data['identifiers']);
      if (data.hasOwnProperty('inactive'))
        obj.inactive = ApiClient.convertToType(data['inactive'], 'Boolean');
      if (data.hasOwnProperty('instant_payment_notifications'))
        obj.instant_payment_notifications = ItemInstantPaymentNotifications.constructFromObject(data['instant_payment_notifications']);
      if (data.hasOwnProperty('internal'))
        obj.internal = ItemInternal.constructFromObject(data['internal']);
      if (data.hasOwnProperty('kit'))
        obj.kit = ApiClient.convertToType(data['kit'], 'Boolean');
      if (data.hasOwnProperty('kit_component_only'))
        obj.kit_component_only = ApiClient.convertToType(data['kit_component_only'], 'Boolean');
      if (data.hasOwnProperty('kit_definition'))
        obj.kit_definition = ItemKitDefinition.constructFromObject(data['kit_definition']);
      if (data.hasOwnProperty('last_modified_dts'))
        obj.last_modified_dts = ApiClient.convertToType(data['last_modified_dts'], 'String');
      if (data.hasOwnProperty('merchant_id'))
        obj.merchant_id = ApiClient.convertToType(data['merchant_id'], 'String');
      if (data.hasOwnProperty('merchant_item_id'))
        obj.merchant_item_id = ApiClient.convertToType(data['merchant_item_id'], 'String');
      if (data.hasOwnProperty('merchant_item_oid'))
        obj.merchant_item_oid = ApiClient.convertToType(data['merchant_item_oid'], 'Number');
      if (data.hasOwnProperty('options'))
        obj.options = ApiClient.convertToType(data['options'], [ItemOption]);
      if (data.hasOwnProperty('parent_category_id'))
        obj.parent_category_id = ApiClient.convertToType(data['parent_category_id'], 'Number');
      if (data.hasOwnProperty('parent_category_path'))
        obj.parent_category_path = ApiClient.convertToType(data['parent_category_path'], 'String');
      if (data.hasOwnProperty('payment_processing'))
        obj.payment_processing = ItemPaymentProcessing.constructFromObject(data['payment_processing']);
      if (data.hasOwnProperty('physical'))
        obj.physical = ItemPhysical.constructFromObject(data['physical']);
      if (data.hasOwnProperty('pricing'))
        obj.pricing = ItemPricing.constructFromObject(data['pricing']);
      if (data.hasOwnProperty('properties'))
        obj.properties = ApiClient.convertToType(data['properties'], [ItemProperty]);
      if (data.hasOwnProperty('realtime_pricing'))
        obj.realtime_pricing = ItemRealtimePricing.constructFromObject(data['realtime_pricing']);
      if (data.hasOwnProperty('recommend_replenishment_days'))
        obj.recommend_replenishment_days = ApiClient.convertToType(data['recommend_replenishment_days'], 'Number');
      if (data.hasOwnProperty('related'))
        obj.related = ItemRelated.constructFromObject(data['related']);
      if (data.hasOwnProperty('reporting'))
        obj.reporting = ItemReporting.constructFromObject(data['reporting']);
      if (data.hasOwnProperty('restriction'))
        obj.restriction = ItemRestriction.constructFromObject(data['restriction']);
      if (data.hasOwnProperty('revguard'))
        obj.revguard = ItemRevguard.constructFromObject(data['revguard']);
      if (data.hasOwnProperty('reviews'))
        obj.reviews = ItemReviews.constructFromObject(data['reviews']);
      if (data.hasOwnProperty('salesforce'))
        obj.salesforce = ItemSalesforce.constructFromObject(data['salesforce']);
      if (data.hasOwnProperty('shipping'))
        obj.shipping = ItemShipping.constructFromObject(data['shipping']);
      if (data.hasOwnProperty('tags'))
        obj.tags = ItemTags.constructFromObject(data['tags']);
      if (data.hasOwnProperty('tax'))
        obj.tax = ItemTax.constructFromObject(data['tax']);
      if (data.hasOwnProperty('third_party_email_marketing'))
        obj.third_party_email_marketing = ApiClient.convertToType(data['third_party_email_marketing'], [ItemThirdPartyEmailMarketing]);
      if (data.hasOwnProperty('variant_items'))
        obj.variant_items = ApiClient.convertToType(data['variant_items'], [ItemVariantItem]);
      if (data.hasOwnProperty('variations'))
        obj.variations = ApiClient.convertToType(data['variations'], [ItemVariation]);
      if (data.hasOwnProperty('wishlist_member'))
        obj.wishlist_member = ItemWishlistMember.constructFromObject(data['wishlist_member']);
    }
    return obj;
  }

  /**
   * @member {module:com.ultracart.admin.v2.models/ItemAccounting} accounting
   */
  exports.prototype.accounting = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ItemAmember} amember
   */
  exports.prototype.amember = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ItemAutoOrder} auto_order
   */
  exports.prototype.auto_order = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ItemCCBill} ccbill
   */
  exports.prototype.ccbill = undefined;

  /**
   * Channel Partner Item Mapping
   * @member {Array.<module:com.ultracart.admin.v2.models/ItemChannelPartnerMapping>} channel_partner_item_mappings
   */
  exports.prototype.channel_partner_item_mappings = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ItemChargeback} chargeback
   */
  exports.prototype.chargeback = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ItemCheckout} checkout
   */
  exports.prototype.checkout = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ItemContent} content
   */
  exports.prototype.content = undefined;

  /**
   * Date/time of creation
   * @member {String} creation_dts
   */
  exports.prototype.creation_dts = undefined;

  /**
   * Description of the item up to 500 characters.
   * @member {String} description
   */
  exports.prototype.description = undefined;

  /**
   * Description translated text instance id
   * @member {Number} description_translated_text_instance_oid
   */
  exports.prototype.description_translated_text_instance_oid = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ItemDigitalDelivery} digital_delivery
   */
  exports.prototype.digital_delivery = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ItemEbay} ebay
   */
  exports.prototype.ebay = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ItemEmailNotifications} email_notifications
   */
  exports.prototype.email_notifications = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ItemEnrollment123} enrollment123
   */
  exports.prototype.enrollment123 = undefined;

  /**
   * Fulfillment Add-ons
   * @member {Array.<module:com.ultracart.admin.v2.models/ItemFulfillmentAddon>} fulfillment_addons
   */
  exports.prototype.fulfillment_addons = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ItemGiftCertificate} gift_certificate
   */
  exports.prototype.gift_certificate = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ItemGoogleProductSearch} google_product_search
   */
  exports.prototype.google_product_search = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ItemIdentifiers} identifiers
   */
  exports.prototype.identifiers = undefined;

  /**
   * True if this item is inactive and can not be purchased
   * @member {Boolean} inactive
   */
  exports.prototype.inactive = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ItemInstantPaymentNotifications} instant_payment_notifications
   */
  exports.prototype.instant_payment_notifications = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ItemInternal} internal
   */
  exports.prototype.internal = undefined;

  /**
   * True if this item is a kit
   * @member {Boolean} kit
   */
  exports.prototype.kit = undefined;

  /**
   * True if this item can only be usd as a kit component
   * @member {Boolean} kit_component_only
   */
  exports.prototype.kit_component_only = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ItemKitDefinition} kit_definition
   */
  exports.prototype.kit_definition = undefined;

  /**
   * Date/time of last modification
   * @member {String} last_modified_dts
   */
  exports.prototype.last_modified_dts = undefined;

  /**
   * UltraCart merchant ID owning item
   * @member {String} merchant_id
   */
  exports.prototype.merchant_id = undefined;

  /**
   * Unique item id assigned to this item
   * @member {String} merchant_item_id
   */
  exports.prototype.merchant_item_id = undefined;

  /**
   * Unique object identifier for this item
   * @member {Number} merchant_item_oid
   */
  exports.prototype.merchant_item_oid = undefined;

  /**
   * Options
   * @member {Array.<module:com.ultracart.admin.v2.models/ItemOption>} options
   */
  exports.prototype.options = undefined;

  /**
   * Parent category of the item.  Zero indicates the root folder.
   * @member {Number} parent_category_id
   */
  exports.prototype.parent_category_id = undefined;

  /**
   * Parent category path.  / indicates the root folder.
   * @member {String} parent_category_path
   */
  exports.prototype.parent_category_path = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ItemPaymentProcessing} payment_processing
   */
  exports.prototype.payment_processing = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ItemPhysical} physical
   */
  exports.prototype.physical = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ItemPricing} pricing
   */
  exports.prototype.pricing = undefined;

  /**
   * Properties
   * @member {Array.<module:com.ultracart.admin.v2.models/ItemProperty>} properties
   */
  exports.prototype.properties = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ItemRealtimePricing} realtime_pricing
   */
  exports.prototype.realtime_pricing = undefined;

  /**
   * Number of days to recommend replenishment after.  Null is not configured.  Set to zero to disable.
   * @member {Number} recommend_replenishment_days
   */
  exports.prototype.recommend_replenishment_days = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ItemRelated} related
   */
  exports.prototype.related = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ItemReporting} reporting
   */
  exports.prototype.reporting = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ItemRestriction} restriction
   */
  exports.prototype.restriction = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ItemRevguard} revguard
   */
  exports.prototype.revguard = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ItemReviews} reviews
   */
  exports.prototype.reviews = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ItemSalesforce} salesforce
   */
  exports.prototype.salesforce = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ItemShipping} shipping
   */
  exports.prototype.shipping = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ItemTags} tags
   */
  exports.prototype.tags = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ItemTax} tax
   */
  exports.prototype.tax = undefined;

  /**
   * 3rd Party Email Marketing
   * @member {Array.<module:com.ultracart.admin.v2.models/ItemThirdPartyEmailMarketing>} third_party_email_marketing
   */
  exports.prototype.third_party_email_marketing = undefined;

  /**
   * Variant Items
   * @member {Array.<module:com.ultracart.admin.v2.models/ItemVariantItem>} variant_items
   */
  exports.prototype.variant_items = undefined;

  /**
   * Variations
   * @member {Array.<module:com.ultracart.admin.v2.models/ItemVariation>} variations
   */
  exports.prototype.variations = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/ItemWishlistMember} wishlist_member
   */
  exports.prototype.wishlist_member = undefined;

  return exports;

}));
