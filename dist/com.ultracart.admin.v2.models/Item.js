"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ItemAccounting = _interopRequireDefault(require("./ItemAccounting"));

var _ItemAmember = _interopRequireDefault(require("./ItemAmember"));

var _ItemAutoOrder = _interopRequireDefault(require("./ItemAutoOrder"));

var _ItemCCBill = _interopRequireDefault(require("./ItemCCBill"));

var _ItemChannelPartnerMapping = _interopRequireDefault(require("./ItemChannelPartnerMapping"));

var _ItemChargeback = _interopRequireDefault(require("./ItemChargeback"));

var _ItemCheckout = _interopRequireDefault(require("./ItemCheckout"));

var _ItemContent = _interopRequireDefault(require("./ItemContent"));

var _ItemDigitalDelivery = _interopRequireDefault(require("./ItemDigitalDelivery"));

var _ItemEbay = _interopRequireDefault(require("./ItemEbay"));

var _ItemEmailNotifications = _interopRequireDefault(require("./ItemEmailNotifications"));

var _ItemEnrollment = _interopRequireDefault(require("./ItemEnrollment123"));

var _ItemFulfillmentAddon = _interopRequireDefault(require("./ItemFulfillmentAddon"));

var _ItemGiftCertificate = _interopRequireDefault(require("./ItemGiftCertificate"));

var _ItemGoogleProductSearch = _interopRequireDefault(require("./ItemGoogleProductSearch"));

var _ItemIdentifiers = _interopRequireDefault(require("./ItemIdentifiers"));

var _ItemInstantPaymentNotifications = _interopRequireDefault(require("./ItemInstantPaymentNotifications"));

var _ItemInternal = _interopRequireDefault(require("./ItemInternal"));

var _ItemKitDefinition = _interopRequireDefault(require("./ItemKitDefinition"));

var _ItemOption = _interopRequireDefault(require("./ItemOption"));

var _ItemPaymentProcessing = _interopRequireDefault(require("./ItemPaymentProcessing"));

var _ItemPhysical = _interopRequireDefault(require("./ItemPhysical"));

var _ItemPricing = _interopRequireDefault(require("./ItemPricing"));

var _ItemProperty = _interopRequireDefault(require("./ItemProperty"));

var _ItemRealtimePricing = _interopRequireDefault(require("./ItemRealtimePricing"));

var _ItemRelated = _interopRequireDefault(require("./ItemRelated"));

var _ItemReporting = _interopRequireDefault(require("./ItemReporting"));

var _ItemRestriction = _interopRequireDefault(require("./ItemRestriction"));

var _ItemRevguard = _interopRequireDefault(require("./ItemRevguard"));

var _ItemReviews = _interopRequireDefault(require("./ItemReviews"));

var _ItemSalesforce = _interopRequireDefault(require("./ItemSalesforce"));

var _ItemShipping = _interopRequireDefault(require("./ItemShipping"));

var _ItemTags = _interopRequireDefault(require("./ItemTags"));

var _ItemTax = _interopRequireDefault(require("./ItemTax"));

var _ItemThirdPartyEmailMarketing = _interopRequireDefault(require("./ItemThirdPartyEmailMarketing"));

var _ItemVariantItem = _interopRequireDefault(require("./ItemVariantItem"));

var _ItemVariation = _interopRequireDefault(require("./ItemVariation"));

var _ItemWishlistMember = _interopRequireDefault(require("./ItemWishlistMember"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Item model module.
 * @module com.ultracart.admin.v2.models/Item
 * @version 4.0.55-RC
 */
var Item = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Item</code>.
   * @alias module:com.ultracart.admin.v2.models/Item
   */
  function Item() {
    _classCallCheck(this, Item);

    Item.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Item, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Item</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/Item} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/Item} The populated <code>Item</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Item();

        if (data.hasOwnProperty('accounting')) {
          obj['accounting'] = _ItemAccounting["default"].constructFromObject(data['accounting']);
        }

        if (data.hasOwnProperty('amember')) {
          obj['amember'] = _ItemAmember["default"].constructFromObject(data['amember']);
        }

        if (data.hasOwnProperty('auto_order')) {
          obj['auto_order'] = _ItemAutoOrder["default"].constructFromObject(data['auto_order']);
        }

        if (data.hasOwnProperty('ccbill')) {
          obj['ccbill'] = _ItemCCBill["default"].constructFromObject(data['ccbill']);
        }

        if (data.hasOwnProperty('channel_partner_item_mappings')) {
          obj['channel_partner_item_mappings'] = _ApiClient["default"].convertToType(data['channel_partner_item_mappings'], [_ItemChannelPartnerMapping["default"]]);
        }

        if (data.hasOwnProperty('chargeback')) {
          obj['chargeback'] = _ItemChargeback["default"].constructFromObject(data['chargeback']);
        }

        if (data.hasOwnProperty('checkout')) {
          obj['checkout'] = _ItemCheckout["default"].constructFromObject(data['checkout']);
        }

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ItemContent["default"].constructFromObject(data['content']);
        }

        if (data.hasOwnProperty('creation_dts')) {
          obj['creation_dts'] = _ApiClient["default"].convertToType(data['creation_dts'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('description_translated_text_instance_oid')) {
          obj['description_translated_text_instance_oid'] = _ApiClient["default"].convertToType(data['description_translated_text_instance_oid'], 'Number');
        }

        if (data.hasOwnProperty('digital_delivery')) {
          obj['digital_delivery'] = _ItemDigitalDelivery["default"].constructFromObject(data['digital_delivery']);
        }

        if (data.hasOwnProperty('ebay')) {
          obj['ebay'] = _ItemEbay["default"].constructFromObject(data['ebay']);
        }

        if (data.hasOwnProperty('email_notifications')) {
          obj['email_notifications'] = _ItemEmailNotifications["default"].constructFromObject(data['email_notifications']);
        }

        if (data.hasOwnProperty('enrollment123')) {
          obj['enrollment123'] = _ItemEnrollment["default"].constructFromObject(data['enrollment123']);
        }

        if (data.hasOwnProperty('fulfillment_addons')) {
          obj['fulfillment_addons'] = _ApiClient["default"].convertToType(data['fulfillment_addons'], [_ItemFulfillmentAddon["default"]]);
        }

        if (data.hasOwnProperty('gift_certificate')) {
          obj['gift_certificate'] = _ItemGiftCertificate["default"].constructFromObject(data['gift_certificate']);
        }

        if (data.hasOwnProperty('google_product_search')) {
          obj['google_product_search'] = _ItemGoogleProductSearch["default"].constructFromObject(data['google_product_search']);
        }

        if (data.hasOwnProperty('identifiers')) {
          obj['identifiers'] = _ItemIdentifiers["default"].constructFromObject(data['identifiers']);
        }

        if (data.hasOwnProperty('inactive')) {
          obj['inactive'] = _ApiClient["default"].convertToType(data['inactive'], 'Boolean');
        }

        if (data.hasOwnProperty('instant_payment_notifications')) {
          obj['instant_payment_notifications'] = _ItemInstantPaymentNotifications["default"].constructFromObject(data['instant_payment_notifications']);
        }

        if (data.hasOwnProperty('internal')) {
          obj['internal'] = _ItemInternal["default"].constructFromObject(data['internal']);
        }

        if (data.hasOwnProperty('kit')) {
          obj['kit'] = _ApiClient["default"].convertToType(data['kit'], 'Boolean');
        }

        if (data.hasOwnProperty('kit_component_only')) {
          obj['kit_component_only'] = _ApiClient["default"].convertToType(data['kit_component_only'], 'Boolean');
        }

        if (data.hasOwnProperty('kit_definition')) {
          obj['kit_definition'] = _ItemKitDefinition["default"].constructFromObject(data['kit_definition']);
        }

        if (data.hasOwnProperty('last_modified_dts')) {
          obj['last_modified_dts'] = _ApiClient["default"].convertToType(data['last_modified_dts'], 'String');
        }

        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }

        if (data.hasOwnProperty('merchant_item_id')) {
          obj['merchant_item_id'] = _ApiClient["default"].convertToType(data['merchant_item_id'], 'String');
        }

        if (data.hasOwnProperty('merchant_item_oid')) {
          obj['merchant_item_oid'] = _ApiClient["default"].convertToType(data['merchant_item_oid'], 'Number');
        }

        if (data.hasOwnProperty('options')) {
          obj['options'] = _ApiClient["default"].convertToType(data['options'], [_ItemOption["default"]]);
        }

        if (data.hasOwnProperty('parent_category_id')) {
          obj['parent_category_id'] = _ApiClient["default"].convertToType(data['parent_category_id'], 'Number');
        }

        if (data.hasOwnProperty('parent_category_path')) {
          obj['parent_category_path'] = _ApiClient["default"].convertToType(data['parent_category_path'], 'String');
        }

        if (data.hasOwnProperty('payment_processing')) {
          obj['payment_processing'] = _ItemPaymentProcessing["default"].constructFromObject(data['payment_processing']);
        }

        if (data.hasOwnProperty('physical')) {
          obj['physical'] = _ItemPhysical["default"].constructFromObject(data['physical']);
        }

        if (data.hasOwnProperty('pricing')) {
          obj['pricing'] = _ItemPricing["default"].constructFromObject(data['pricing']);
        }

        if (data.hasOwnProperty('properties')) {
          obj['properties'] = _ApiClient["default"].convertToType(data['properties'], [_ItemProperty["default"]]);
        }

        if (data.hasOwnProperty('realtime_pricing')) {
          obj['realtime_pricing'] = _ItemRealtimePricing["default"].constructFromObject(data['realtime_pricing']);
        }

        if (data.hasOwnProperty('recommend_replenishment_days')) {
          obj['recommend_replenishment_days'] = _ApiClient["default"].convertToType(data['recommend_replenishment_days'], 'Number');
        }

        if (data.hasOwnProperty('related')) {
          obj['related'] = _ItemRelated["default"].constructFromObject(data['related']);
        }

        if (data.hasOwnProperty('reporting')) {
          obj['reporting'] = _ItemReporting["default"].constructFromObject(data['reporting']);
        }

        if (data.hasOwnProperty('restriction')) {
          obj['restriction'] = _ItemRestriction["default"].constructFromObject(data['restriction']);
        }

        if (data.hasOwnProperty('revguard')) {
          obj['revguard'] = _ItemRevguard["default"].constructFromObject(data['revguard']);
        }

        if (data.hasOwnProperty('reviews')) {
          obj['reviews'] = _ItemReviews["default"].constructFromObject(data['reviews']);
        }

        if (data.hasOwnProperty('salesforce')) {
          obj['salesforce'] = _ItemSalesforce["default"].constructFromObject(data['salesforce']);
        }

        if (data.hasOwnProperty('shipping')) {
          obj['shipping'] = _ItemShipping["default"].constructFromObject(data['shipping']);
        }

        if (data.hasOwnProperty('tags')) {
          obj['tags'] = _ItemTags["default"].constructFromObject(data['tags']);
        }

        if (data.hasOwnProperty('tax')) {
          obj['tax'] = _ItemTax["default"].constructFromObject(data['tax']);
        }

        if (data.hasOwnProperty('third_party_email_marketing')) {
          obj['third_party_email_marketing'] = _ApiClient["default"].convertToType(data['third_party_email_marketing'], [_ItemThirdPartyEmailMarketing["default"]]);
        }

        if (data.hasOwnProperty('variant_items')) {
          obj['variant_items'] = _ApiClient["default"].convertToType(data['variant_items'], [_ItemVariantItem["default"]]);
        }

        if (data.hasOwnProperty('variations')) {
          obj['variations'] = _ApiClient["default"].convertToType(data['variations'], [_ItemVariation["default"]]);
        }

        if (data.hasOwnProperty('wishlist_member')) {
          obj['wishlist_member'] = _ItemWishlistMember["default"].constructFromObject(data['wishlist_member']);
        }
      }

      return obj;
    }
  }]);

  return Item;
}();
/**
 * @member {module:com.ultracart.admin.v2.models/ItemAccounting} accounting
 */


Item.prototype['accounting'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ItemAmember} amember
 */

Item.prototype['amember'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ItemAutoOrder} auto_order
 */

Item.prototype['auto_order'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ItemCCBill} ccbill
 */

Item.prototype['ccbill'] = undefined;
/**
 * Channel Partner Item Mapping
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemChannelPartnerMapping>} channel_partner_item_mappings
 */

Item.prototype['channel_partner_item_mappings'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ItemChargeback} chargeback
 */

Item.prototype['chargeback'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ItemCheckout} checkout
 */

Item.prototype['checkout'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ItemContent} content
 */

Item.prototype['content'] = undefined;
/**
 * Date/time of creation
 * @member {String} creation_dts
 */

Item.prototype['creation_dts'] = undefined;
/**
 * Description of the item up to 500 characters.
 * @member {String} description
 */

Item.prototype['description'] = undefined;
/**
 * Description translated text instance id
 * @member {Number} description_translated_text_instance_oid
 */

Item.prototype['description_translated_text_instance_oid'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ItemDigitalDelivery} digital_delivery
 */

Item.prototype['digital_delivery'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ItemEbay} ebay
 */

Item.prototype['ebay'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ItemEmailNotifications} email_notifications
 */

Item.prototype['email_notifications'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ItemEnrollment123} enrollment123
 */

Item.prototype['enrollment123'] = undefined;
/**
 * Fulfillment Add-ons
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemFulfillmentAddon>} fulfillment_addons
 */

Item.prototype['fulfillment_addons'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ItemGiftCertificate} gift_certificate
 */

Item.prototype['gift_certificate'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ItemGoogleProductSearch} google_product_search
 */

Item.prototype['google_product_search'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ItemIdentifiers} identifiers
 */

Item.prototype['identifiers'] = undefined;
/**
 * True if this item is inactive and can not be purchased
 * @member {Boolean} inactive
 */

Item.prototype['inactive'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ItemInstantPaymentNotifications} instant_payment_notifications
 */

Item.prototype['instant_payment_notifications'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ItemInternal} internal
 */

Item.prototype['internal'] = undefined;
/**
 * True if this item is a kit
 * @member {Boolean} kit
 */

Item.prototype['kit'] = undefined;
/**
 * True if this item can only be usd as a kit component
 * @member {Boolean} kit_component_only
 */

Item.prototype['kit_component_only'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ItemKitDefinition} kit_definition
 */

Item.prototype['kit_definition'] = undefined;
/**
 * Date/time of last modification
 * @member {String} last_modified_dts
 */

Item.prototype['last_modified_dts'] = undefined;
/**
 * UltraCart merchant ID owning item
 * @member {String} merchant_id
 */

Item.prototype['merchant_id'] = undefined;
/**
 * Unique item id assigned to this item
 * @member {String} merchant_item_id
 */

Item.prototype['merchant_item_id'] = undefined;
/**
 * Unique object identifier for this item
 * @member {Number} merchant_item_oid
 */

Item.prototype['merchant_item_oid'] = undefined;
/**
 * Options
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemOption>} options
 */

Item.prototype['options'] = undefined;
/**
 * Parent category of the item.  Zero indicates the root folder.
 * @member {Number} parent_category_id
 */

Item.prototype['parent_category_id'] = undefined;
/**
 * Parent category path.  / indicates the root folder.
 * @member {String} parent_category_path
 */

Item.prototype['parent_category_path'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ItemPaymentProcessing} payment_processing
 */

Item.prototype['payment_processing'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ItemPhysical} physical
 */

Item.prototype['physical'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ItemPricing} pricing
 */

Item.prototype['pricing'] = undefined;
/**
 * Properties
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemProperty>} properties
 */

Item.prototype['properties'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ItemRealtimePricing} realtime_pricing
 */

Item.prototype['realtime_pricing'] = undefined;
/**
 * Number of days to recommend replenishment after.  Null is not configured.  Set to zero to disable.
 * @member {Number} recommend_replenishment_days
 */

Item.prototype['recommend_replenishment_days'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ItemRelated} related
 */

Item.prototype['related'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ItemReporting} reporting
 */

Item.prototype['reporting'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ItemRestriction} restriction
 */

Item.prototype['restriction'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ItemRevguard} revguard
 */

Item.prototype['revguard'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ItemReviews} reviews
 */

Item.prototype['reviews'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ItemSalesforce} salesforce
 */

Item.prototype['salesforce'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ItemShipping} shipping
 */

Item.prototype['shipping'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ItemTags} tags
 */

Item.prototype['tags'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ItemTax} tax
 */

Item.prototype['tax'] = undefined;
/**
 * 3rd Party Email Marketing
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemThirdPartyEmailMarketing>} third_party_email_marketing
 */

Item.prototype['third_party_email_marketing'] = undefined;
/**
 * Variant Items
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemVariantItem>} variant_items
 */

Item.prototype['variant_items'] = undefined;
/**
 * Variations
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemVariation>} variations
 */

Item.prototype['variations'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ItemWishlistMember} wishlist_member
 */

Item.prototype['wishlist_member'] = undefined;
var _default = Item;
exports["default"] = _default;