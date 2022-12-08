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
 * The CouponFreeShippingSpecificItems model module.
 * @module com.ultracart.admin.v2.models/CouponFreeShippingSpecificItems
 * @version 4.0.94-RC
 */
class CouponFreeShippingSpecificItems {
    /**
     * Constructs a new <code>CouponFreeShippingSpecificItems</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponFreeShippingSpecificItems
     */
    constructor() { 
        
        CouponFreeShippingSpecificItems.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponFreeShippingSpecificItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponFreeShippingSpecificItems} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponFreeShippingSpecificItems} The populated <code>CouponFreeShippingSpecificItems</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponFreeShippingSpecificItems();

            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * A list of items of which at least one must be purchased for coupon to be valid.
 * @member {Array.<String>} items
 */
CouponFreeShippingSpecificItems.prototype['items'] = undefined;






export default CouponFreeShippingSpecificItems;

