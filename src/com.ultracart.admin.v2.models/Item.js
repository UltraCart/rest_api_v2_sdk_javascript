/**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ItemAccounting from './ItemAccounting';
import ItemAmember from './ItemAmember';
import ItemAutoOrder from './ItemAutoOrder';
import ItemCCBill from './ItemCCBill';
import ItemChannelPartnerMapping from './ItemChannelPartnerMapping';
import ItemChargeback from './ItemChargeback';
import ItemCheckout from './ItemCheckout';
import ItemContent from './ItemContent';
import ItemDigitalDelivery from './ItemDigitalDelivery';
import ItemEbay from './ItemEbay';
import ItemEmailNotifications from './ItemEmailNotifications';
import ItemEnrollment123 from './ItemEnrollment123';
import ItemFulfillmentAddon from './ItemFulfillmentAddon';
import ItemGiftCertificate from './ItemGiftCertificate';
import ItemGoogleProductSearch from './ItemGoogleProductSearch';
import ItemIdentifiers from './ItemIdentifiers';
import ItemInstantPaymentNotifications from './ItemInstantPaymentNotifications';
import ItemInternal from './ItemInternal';
import ItemKitDefinition from './ItemKitDefinition';
import ItemOption from './ItemOption';
import ItemPaymentProcessing from './ItemPaymentProcessing';
import ItemPhysical from './ItemPhysical';
import ItemPricing from './ItemPricing';
import ItemProperty from './ItemProperty';
import ItemRealtimePricing from './ItemRealtimePricing';
import ItemRelated from './ItemRelated';
import ItemReporting from './ItemReporting';
import ItemRestriction from './ItemRestriction';
import ItemRevguard from './ItemRevguard';
import ItemReviews from './ItemReviews';
import ItemSalesforce from './ItemSalesforce';
import ItemShipping from './ItemShipping';
import ItemTags from './ItemTags';
import ItemTax from './ItemTax';
import ItemThirdPartyEmailMarketing from './ItemThirdPartyEmailMarketing';
import ItemVariantItem from './ItemVariantItem';
import ItemVariation from './ItemVariation';
import ItemWishlistMember from './ItemWishlistMember';

/**
 * The Item model module.
 * @module com.ultracart.admin.v2.models/Item
 * @version 4.0.105-RC
 */
class Item {
    /**
     * Constructs a new <code>Item</code>.
     * @alias module:com.ultracart.admin.v2.models/Item
     */
    constructor() { 
        
        Item.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Item</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/Item} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/Item} The populated <code>Item</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Item();

            if (data.hasOwnProperty('accounting')) {
                obj['accounting'] = ItemAccounting.constructFromObject(data['accounting']);
            }
            if (data.hasOwnProperty('amember')) {
                obj['amember'] = ItemAmember.constructFromObject(data['amember']);
            }
            if (data.hasOwnProperty('auto_order')) {
                obj['auto_order'] = ItemAutoOrder.constructFromObject(data['auto_order']);
            }
            if (data.hasOwnProperty('ccbill')) {
                obj['ccbill'] = ItemCCBill.constructFromObject(data['ccbill']);
            }
            if (data.hasOwnProperty('channel_partner_item_mappings')) {
                obj['channel_partner_item_mappings'] = ApiClient.convertToType(data['channel_partner_item_mappings'], [ItemChannelPartnerMapping]);
            }
            if (data.hasOwnProperty('chargeback')) {
                obj['chargeback'] = ItemChargeback.constructFromObject(data['chargeback']);
            }
            if (data.hasOwnProperty('checkout')) {
                obj['checkout'] = ItemCheckout.constructFromObject(data['checkout']);
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ItemContent.constructFromObject(data['content']);
            }
            if (data.hasOwnProperty('creation_dts')) {
                obj['creation_dts'] = ApiClient.convertToType(data['creation_dts'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('description_translated_text_instance_oid')) {
                obj['description_translated_text_instance_oid'] = ApiClient.convertToType(data['description_translated_text_instance_oid'], 'Number');
            }
            if (data.hasOwnProperty('digital_delivery')) {
                obj['digital_delivery'] = ItemDigitalDelivery.constructFromObject(data['digital_delivery']);
            }
            if (data.hasOwnProperty('ebay')) {
                obj['ebay'] = ItemEbay.constructFromObject(data['ebay']);
            }
            if (data.hasOwnProperty('email_notifications')) {
                obj['email_notifications'] = ItemEmailNotifications.constructFromObject(data['email_notifications']);
            }
            if (data.hasOwnProperty('enrollment123')) {
                obj['enrollment123'] = ItemEnrollment123.constructFromObject(data['enrollment123']);
            }
            if (data.hasOwnProperty('fulfillment_addons')) {
                obj['fulfillment_addons'] = ApiClient.convertToType(data['fulfillment_addons'], [ItemFulfillmentAddon]);
            }
            if (data.hasOwnProperty('gift_certificate')) {
                obj['gift_certificate'] = ItemGiftCertificate.constructFromObject(data['gift_certificate']);
            }
            if (data.hasOwnProperty('google_product_search')) {
                obj['google_product_search'] = ItemGoogleProductSearch.constructFromObject(data['google_product_search']);
            }
            if (data.hasOwnProperty('identifiers')) {
                obj['identifiers'] = ItemIdentifiers.constructFromObject(data['identifiers']);
            }
            if (data.hasOwnProperty('inactive')) {
                obj['inactive'] = ApiClient.convertToType(data['inactive'], 'Boolean');
            }
            if (data.hasOwnProperty('instant_payment_notifications')) {
                obj['instant_payment_notifications'] = ItemInstantPaymentNotifications.constructFromObject(data['instant_payment_notifications']);
            }
            if (data.hasOwnProperty('internal')) {
                obj['internal'] = ItemInternal.constructFromObject(data['internal']);
            }
            if (data.hasOwnProperty('kit')) {
                obj['kit'] = ApiClient.convertToType(data['kit'], 'Boolean');
            }
            if (data.hasOwnProperty('kit_component_only')) {
                obj['kit_component_only'] = ApiClient.convertToType(data['kit_component_only'], 'Boolean');
            }
            if (data.hasOwnProperty('kit_definition')) {
                obj['kit_definition'] = ItemKitDefinition.constructFromObject(data['kit_definition']);
            }
            if (data.hasOwnProperty('last_modified_dts')) {
                obj['last_modified_dts'] = ApiClient.convertToType(data['last_modified_dts'], 'String');
            }
            if (data.hasOwnProperty('merchant_id')) {
                obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
            }
            if (data.hasOwnProperty('merchant_item_id')) {
                obj['merchant_item_id'] = ApiClient.convertToType(data['merchant_item_id'], 'String');
            }
            if (data.hasOwnProperty('merchant_item_oid')) {
                obj['merchant_item_oid'] = ApiClient.convertToType(data['merchant_item_oid'], 'Number');
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], [ItemOption]);
            }
            if (data.hasOwnProperty('parent_category_id')) {
                obj['parent_category_id'] = ApiClient.convertToType(data['parent_category_id'], 'Number');
            }
            if (data.hasOwnProperty('parent_category_path')) {
                obj['parent_category_path'] = ApiClient.convertToType(data['parent_category_path'], 'String');
            }
            if (data.hasOwnProperty('payment_processing')) {
                obj['payment_processing'] = ItemPaymentProcessing.constructFromObject(data['payment_processing']);
            }
            if (data.hasOwnProperty('physical')) {
                obj['physical'] = ItemPhysical.constructFromObject(data['physical']);
            }
            if (data.hasOwnProperty('pricing')) {
                obj['pricing'] = ItemPricing.constructFromObject(data['pricing']);
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], [ItemProperty]);
            }
            if (data.hasOwnProperty('realtime_pricing')) {
                obj['realtime_pricing'] = ItemRealtimePricing.constructFromObject(data['realtime_pricing']);
            }
            if (data.hasOwnProperty('recommend_replenishment_days')) {
                obj['recommend_replenishment_days'] = ApiClient.convertToType(data['recommend_replenishment_days'], 'Number');
            }
            if (data.hasOwnProperty('related')) {
                obj['related'] = ItemRelated.constructFromObject(data['related']);
            }
            if (data.hasOwnProperty('reporting')) {
                obj['reporting'] = ItemReporting.constructFromObject(data['reporting']);
            }
            if (data.hasOwnProperty('restriction')) {
                obj['restriction'] = ItemRestriction.constructFromObject(data['restriction']);
            }
            if (data.hasOwnProperty('revguard')) {
                obj['revguard'] = ItemRevguard.constructFromObject(data['revguard']);
            }
            if (data.hasOwnProperty('reviews')) {
                obj['reviews'] = ItemReviews.constructFromObject(data['reviews']);
            }
            if (data.hasOwnProperty('salesforce')) {
                obj['salesforce'] = ItemSalesforce.constructFromObject(data['salesforce']);
            }
            if (data.hasOwnProperty('shipping')) {
                obj['shipping'] = ItemShipping.constructFromObject(data['shipping']);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ItemTags.constructFromObject(data['tags']);
            }
            if (data.hasOwnProperty('tax')) {
                obj['tax'] = ItemTax.constructFromObject(data['tax']);
            }
            if (data.hasOwnProperty('third_party_email_marketing')) {
                obj['third_party_email_marketing'] = ApiClient.convertToType(data['third_party_email_marketing'], [ItemThirdPartyEmailMarketing]);
            }
            if (data.hasOwnProperty('variant_items')) {
                obj['variant_items'] = ApiClient.convertToType(data['variant_items'], [ItemVariantItem]);
            }
            if (data.hasOwnProperty('variations')) {
                obj['variations'] = ApiClient.convertToType(data['variations'], [ItemVariation]);
            }
            if (data.hasOwnProperty('wishlist_member')) {
                obj['wishlist_member'] = ItemWishlistMember.constructFromObject(data['wishlist_member']);
            }
        }
        return obj;
    }


}

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






export default Item;

