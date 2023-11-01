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
 * The OrderUtm model module.
 * @module com.ultracart.admin.v2.models/OrderUtm
 * @version 4.0.185
 */
class OrderUtm {
    /**
     * Constructs a new <code>OrderUtm</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderUtm
     */
    constructor() { 
        
        OrderUtm.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderUtm</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderUtm} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderUtm} The populated <code>OrderUtm</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderUtm();

            if (data.hasOwnProperty('attribution_first_click_subtotal')) {
                obj['attribution_first_click_subtotal'] = ApiClient.convertToType(data['attribution_first_click_subtotal'], 'Number');
            }
            if (data.hasOwnProperty('attribution_first_click_total')) {
                obj['attribution_first_click_total'] = ApiClient.convertToType(data['attribution_first_click_total'], 'Number');
            }
            if (data.hasOwnProperty('attribution_last_click_subtotal')) {
                obj['attribution_last_click_subtotal'] = ApiClient.convertToType(data['attribution_last_click_subtotal'], 'Number');
            }
            if (data.hasOwnProperty('attribution_last_click_total')) {
                obj['attribution_last_click_total'] = ApiClient.convertToType(data['attribution_last_click_total'], 'Number');
            }
            if (data.hasOwnProperty('attribution_linear_subtotal')) {
                obj['attribution_linear_subtotal'] = ApiClient.convertToType(data['attribution_linear_subtotal'], 'Number');
            }
            if (data.hasOwnProperty('attribution_linear_total')) {
                obj['attribution_linear_total'] = ApiClient.convertToType(data['attribution_linear_total'], 'Number');
            }
            if (data.hasOwnProperty('attribution_position_based_subtotal')) {
                obj['attribution_position_based_subtotal'] = ApiClient.convertToType(data['attribution_position_based_subtotal'], 'Number');
            }
            if (data.hasOwnProperty('attribution_position_based_total')) {
                obj['attribution_position_based_total'] = ApiClient.convertToType(data['attribution_position_based_total'], 'Number');
            }
            if (data.hasOwnProperty('click_dts')) {
                obj['click_dts'] = ApiClient.convertToType(data['click_dts'], 'String');
            }
            if (data.hasOwnProperty('facebook_ad_id')) {
                obj['facebook_ad_id'] = ApiClient.convertToType(data['facebook_ad_id'], 'String');
            }
            if (data.hasOwnProperty('fbclid')) {
                obj['fbclid'] = ApiClient.convertToType(data['fbclid'], 'String');
            }
            if (data.hasOwnProperty('gbraid')) {
                obj['gbraid'] = ApiClient.convertToType(data['gbraid'], 'String');
            }
            if (data.hasOwnProperty('glcid')) {
                obj['glcid'] = ApiClient.convertToType(data['glcid'], 'String');
            }
            if (data.hasOwnProperty('msclkid')) {
                obj['msclkid'] = ApiClient.convertToType(data['msclkid'], 'String');
            }
            if (data.hasOwnProperty('ttclid')) {
                obj['ttclid'] = ApiClient.convertToType(data['ttclid'], 'String');
            }
            if (data.hasOwnProperty('uc_message_id')) {
                obj['uc_message_id'] = ApiClient.convertToType(data['uc_message_id'], 'String');
            }
            if (data.hasOwnProperty('utm_campaign')) {
                obj['utm_campaign'] = ApiClient.convertToType(data['utm_campaign'], 'String');
            }
            if (data.hasOwnProperty('utm_content')) {
                obj['utm_content'] = ApiClient.convertToType(data['utm_content'], 'String');
            }
            if (data.hasOwnProperty('utm_id')) {
                obj['utm_id'] = ApiClient.convertToType(data['utm_id'], 'String');
            }
            if (data.hasOwnProperty('utm_medium')) {
                obj['utm_medium'] = ApiClient.convertToType(data['utm_medium'], 'String');
            }
            if (data.hasOwnProperty('utm_source')) {
                obj['utm_source'] = ApiClient.convertToType(data['utm_source'], 'String');
            }
            if (data.hasOwnProperty('utm_term')) {
                obj['utm_term'] = ApiClient.convertToType(data['utm_term'], 'String');
            }
            if (data.hasOwnProperty('vmcid')) {
                obj['vmcid'] = ApiClient.convertToType(data['vmcid'], 'String');
            }
            if (data.hasOwnProperty('wbraid')) {
                obj['wbraid'] = ApiClient.convertToType(data['wbraid'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} attribution_first_click_subtotal
 */
OrderUtm.prototype['attribution_first_click_subtotal'] = undefined;

/**
 * @member {Number} attribution_first_click_total
 */
OrderUtm.prototype['attribution_first_click_total'] = undefined;

/**
 * @member {Number} attribution_last_click_subtotal
 */
OrderUtm.prototype['attribution_last_click_subtotal'] = undefined;

/**
 * @member {Number} attribution_last_click_total
 */
OrderUtm.prototype['attribution_last_click_total'] = undefined;

/**
 * @member {Number} attribution_linear_subtotal
 */
OrderUtm.prototype['attribution_linear_subtotal'] = undefined;

/**
 * @member {Number} attribution_linear_total
 */
OrderUtm.prototype['attribution_linear_total'] = undefined;

/**
 * @member {Number} attribution_position_based_subtotal
 */
OrderUtm.prototype['attribution_position_based_subtotal'] = undefined;

/**
 * @member {Number} attribution_position_based_total
 */
OrderUtm.prototype['attribution_position_based_total'] = undefined;

/**
 * Date/time that the click happened
 * @member {String} click_dts
 */
OrderUtm.prototype['click_dts'] = undefined;

/**
 * @member {String} facebook_ad_id
 */
OrderUtm.prototype['facebook_ad_id'] = undefined;

/**
 * @member {String} fbclid
 */
OrderUtm.prototype['fbclid'] = undefined;

/**
 * @member {String} gbraid
 */
OrderUtm.prototype['gbraid'] = undefined;

/**
 * @member {String} glcid
 */
OrderUtm.prototype['glcid'] = undefined;

/**
 * @member {String} msclkid
 */
OrderUtm.prototype['msclkid'] = undefined;

/**
 * @member {String} ttclid
 */
OrderUtm.prototype['ttclid'] = undefined;

/**
 * @member {String} uc_message_id
 */
OrderUtm.prototype['uc_message_id'] = undefined;

/**
 * @member {String} utm_campaign
 */
OrderUtm.prototype['utm_campaign'] = undefined;

/**
 * @member {String} utm_content
 */
OrderUtm.prototype['utm_content'] = undefined;

/**
 * @member {String} utm_id
 */
OrderUtm.prototype['utm_id'] = undefined;

/**
 * @member {String} utm_medium
 */
OrderUtm.prototype['utm_medium'] = undefined;

/**
 * @member {String} utm_source
 */
OrderUtm.prototype['utm_source'] = undefined;

/**
 * @member {String} utm_term
 */
OrderUtm.prototype['utm_term'] = undefined;

/**
 * @member {String} vmcid
 */
OrderUtm.prototype['vmcid'] = undefined;

/**
 * @member {String} wbraid
 */
OrderUtm.prototype['wbraid'] = undefined;






export default OrderUtm;

