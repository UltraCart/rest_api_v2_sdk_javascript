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
 * The ItemPricingTierLimit model module.
 * @module com.ultracart.admin.v2.models/ItemPricingTierLimit
 * @version 4.0.63-RC
 */
class ItemPricingTierLimit {
    /**
     * Constructs a new <code>ItemPricingTierLimit</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemPricingTierLimit
     */
    constructor() { 
        
        ItemPricingTierLimit.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemPricingTierLimit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemPricingTierLimit} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemPricingTierLimit} The populated <code>ItemPricingTierLimit</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemPricingTierLimit();

            if (data.hasOwnProperty('cumulative_order_limit')) {
                obj['cumulative_order_limit'] = ApiClient.convertToType(data['cumulative_order_limit'], 'Number');
            }
            if (data.hasOwnProperty('individual_order_limit')) {
                obj['individual_order_limit'] = ApiClient.convertToType(data['individual_order_limit'], 'Number');
            }
            if (data.hasOwnProperty('multiple_quantity')) {
                obj['multiple_quantity'] = ApiClient.convertToType(data['multiple_quantity'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Cumulative order limit
 * @member {Number} cumulative_order_limit
 */
ItemPricingTierLimit.prototype['cumulative_order_limit'] = undefined;

/**
 * Individual order limit
 * @member {Number} individual_order_limit
 */
ItemPricingTierLimit.prototype['individual_order_limit'] = undefined;

/**
 * Multiple quantity
 * @member {Number} multiple_quantity
 */
ItemPricingTierLimit.prototype['multiple_quantity'] = undefined;






export default ItemPricingTierLimit;

