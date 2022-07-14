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
 * The CouponTierItemDiscount model module.
 * @module com.ultracart.admin.v2.models/CouponTierItemDiscount
 * @version 4.0.35-RC
 */
class CouponTierItemDiscount {
    /**
     * Constructs a new <code>CouponTierItemDiscount</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponTierItemDiscount
     */
    constructor() { 
        
        CouponTierItemDiscount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponTierItemDiscount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponTierItemDiscount} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponTierItemDiscount} The populated <code>CouponTierItemDiscount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponTierItemDiscount();

            if (data.hasOwnProperty('discount_amount')) {
                obj['discount_amount'] = ApiClient.convertToType(data['discount_amount'], 'Number');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * The amount of subtotal discount
 * @member {Number} discount_amount
 */
CouponTierItemDiscount.prototype['discount_amount'] = undefined;

/**
 * A list of items which will receive this discount.
 * @member {Array.<String>} items
 */
CouponTierItemDiscount.prototype['items'] = undefined;






export default CouponTierItemDiscount;

