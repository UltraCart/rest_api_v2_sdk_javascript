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
 * The ItemRealtimePricing model module.
 * @module com.ultracart.admin.v2.models/ItemRealtimePricing
 * @version 4.0.120-RC
 */
class ItemRealtimePricing {
    /**
     * Constructs a new <code>ItemRealtimePricing</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemRealtimePricing
     */
    constructor() { 
        
        ItemRealtimePricing.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemRealtimePricing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemRealtimePricing} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemRealtimePricing} The populated <code>ItemRealtimePricing</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemRealtimePricing();

            if (data.hasOwnProperty('realtime_pricing_parameter')) {
                obj['realtime_pricing_parameter'] = ApiClient.convertToType(data['realtime_pricing_parameter'], 'String');
            }
            if (data.hasOwnProperty('realtime_pricing_provider')) {
                obj['realtime_pricing_provider'] = ApiClient.convertToType(data['realtime_pricing_provider'], 'String');
            }
            if (data.hasOwnProperty('realtime_pricing_provider_oid')) {
                obj['realtime_pricing_provider_oid'] = ApiClient.convertToType(data['realtime_pricing_provider_oid'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Real-time pricing provider parameters
 * @member {String} realtime_pricing_parameter
 */
ItemRealtimePricing.prototype['realtime_pricing_parameter'] = undefined;

/**
 * Real-time pricing provider name
 * @member {String} realtime_pricing_provider
 */
ItemRealtimePricing.prototype['realtime_pricing_provider'] = undefined;

/**
 * Real-time pricing provide object identifier
 * @member {Number} realtime_pricing_provider_oid
 */
ItemRealtimePricing.prototype['realtime_pricing_provider_oid'] = undefined;






export default ItemRealtimePricing;

