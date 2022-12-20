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
 * The CouponTierQuantityAmount model module.
 * @module com.ultracart.admin.v2.models/CouponTierQuantityAmount
 * @version 4.0.101-RC
 */
class CouponTierQuantityAmount {
    /**
     * Constructs a new <code>CouponTierQuantityAmount</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponTierQuantityAmount
     */
    constructor() { 
        
        CouponTierQuantityAmount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponTierQuantityAmount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponTierQuantityAmount} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponTierQuantityAmount} The populated <code>CouponTierQuantityAmount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponTierQuantityAmount();

            if (data.hasOwnProperty('discount_amount')) {
                obj['discount_amount'] = ApiClient.convertToType(data['discount_amount'], 'Number');
            }
            if (data.hasOwnProperty('item_quantity')) {
                obj['item_quantity'] = ApiClient.convertToType(data['item_quantity'], 'Number');
            }
            if (data.hasOwnProperty('quickbooks_code')) {
                obj['quickbooks_code'] = ApiClient.convertToType(data['quickbooks_code'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The amount of discount per item.
 * @member {Number} discount_amount
 */
CouponTierQuantityAmount.prototype['discount_amount'] = undefined;

/**
 * The quantity of item purchased (in units)
 * @member {Number} item_quantity
 */
CouponTierQuantityAmount.prototype['item_quantity'] = undefined;

/**
 * Quickbooks accounting code.
 * @member {String} quickbooks_code
 */
CouponTierQuantityAmount.prototype['quickbooks_code'] = undefined;






export default CouponTierQuantityAmount;

