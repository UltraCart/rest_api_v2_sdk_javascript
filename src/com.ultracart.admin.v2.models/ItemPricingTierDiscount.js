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
 * The ItemPricingTierDiscount model module.
 * @module com.ultracart.admin.v2.models/ItemPricingTierDiscount
 * @version 4.0.105-RC
 */
class ItemPricingTierDiscount {
    /**
     * Constructs a new <code>ItemPricingTierDiscount</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemPricingTierDiscount
     */
    constructor() { 
        
        ItemPricingTierDiscount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemPricingTierDiscount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemPricingTierDiscount} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemPricingTierDiscount} The populated <code>ItemPricingTierDiscount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemPricingTierDiscount();

            if (data.hasOwnProperty('cost')) {
                obj['cost'] = ApiClient.convertToType(data['cost'], 'Number');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Cost
 * @member {Number} cost
 */
ItemPricingTierDiscount.prototype['cost'] = undefined;

/**
 * Quantity
 * @member {Number} quantity
 */
ItemPricingTierDiscount.prototype['quantity'] = undefined;






export default ItemPricingTierDiscount;

