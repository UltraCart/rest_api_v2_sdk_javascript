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

/**
 * The ChannelPartnerShipToPreference model module.
 * @module com.ultracart.admin.v2.models/ChannelPartnerShipToPreference
 * @version 4.0.244
 */
class ChannelPartnerShipToPreference {
    /**
     * Constructs a new <code>ChannelPartnerShipToPreference</code>.
     * @alias module:com.ultracart.admin.v2.models/ChannelPartnerShipToPreference
     */
    constructor() { 
        
        ChannelPartnerShipToPreference.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChannelPartnerShipToPreference</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ChannelPartnerShipToPreference} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ChannelPartnerShipToPreference} The populated <code>ChannelPartnerShipToPreference</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChannelPartnerShipToPreference();

            if (data.hasOwnProperty('additional_kit_component_item_ids')) {
                obj['additional_kit_component_item_ids'] = ApiClient.convertToType(data['additional_kit_component_item_ids'], ['String']);
            }
            if (data.hasOwnProperty('channel_partner_oid')) {
                obj['channel_partner_oid'] = ApiClient.convertToType(data['channel_partner_oid'], 'Number');
            }
            if (data.hasOwnProperty('channel_partner_ship_to_preference_oid')) {
                obj['channel_partner_ship_to_preference_oid'] = ApiClient.convertToType(data['channel_partner_ship_to_preference_oid'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('merchant_id')) {
                obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
            }
            if (data.hasOwnProperty('return_policy')) {
                obj['return_policy'] = ApiClient.convertToType(data['return_policy'], 'String');
            }
            if (data.hasOwnProperty('ship_to_edi_code')) {
                obj['ship_to_edi_code'] = ApiClient.convertToType(data['ship_to_edi_code'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Additional item ids to add as kit components to the order with a zero price.
 * @member {Array.<String>} additional_kit_component_item_ids
 */
ChannelPartnerShipToPreference.prototype['additional_kit_component_item_ids'] = undefined;

/**
 * The channel partner object identifier this preference is associated with
 * @member {Number} channel_partner_oid
 */
ChannelPartnerShipToPreference.prototype['channel_partner_oid'] = undefined;

/**
 * Object identifier for the ship to preference
 * @member {Number} channel_partner_ship_to_preference_oid
 */
ChannelPartnerShipToPreference.prototype['channel_partner_ship_to_preference_oid'] = undefined;

/**
 * A description that is meaningful to the merchant.
 * @member {String} description
 */
ChannelPartnerShipToPreference.prototype['description'] = undefined;

/**
 * The merchant id that owns the channel partner
 * @member {String} merchant_id
 */
ChannelPartnerShipToPreference.prototype['merchant_id'] = undefined;

/**
 * Alternate return policy to print on the packing slip.
 * @member {String} return_policy
 */
ChannelPartnerShipToPreference.prototype['return_policy'] = undefined;

/**
 * The ship to EDI code that the preferences are for
 * @member {String} ship_to_edi_code
 */
ChannelPartnerShipToPreference.prototype['ship_to_edi_code'] = undefined;






export default ChannelPartnerShipToPreference;

