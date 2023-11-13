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
 * The PricingTierNotification model module.
 * @module com.ultracart.admin.v2.models/PricingTierNotification
 * @version 4.0.188
 */
class PricingTierNotification {
    /**
     * Constructs a new <code>PricingTierNotification</code>.
     * @alias module:com.ultracart.admin.v2.models/PricingTierNotification
     */
    constructor() { 
        
        PricingTierNotification.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PricingTierNotification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/PricingTierNotification} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/PricingTierNotification} The populated <code>PricingTierNotification</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PricingTierNotification();

            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Notification format
 * @member {String} format
 */
PricingTierNotification.prototype['format'] = undefined;

/**
 * Notification subject
 * @member {String} subject
 */
PricingTierNotification.prototype['subject'] = undefined;

/**
 * Notification text
 * @member {String} text
 */
PricingTierNotification.prototype['text'] = undefined;






export default PricingTierNotification;

