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
 * The CouponTierAmount model module.
 * @module com.ultracart.admin.v2.models/CouponTierAmount
 * @version 4.0.5
 */
class CouponTierAmount {
    /**
     * Constructs a new <code>CouponTierAmount</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponTierAmount
     */
    constructor() { 
        
        CouponTierAmount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponTierAmount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponTierAmount} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponTierAmount} The populated <code>CouponTierAmount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponTierAmount();

            if (data.hasOwnProperty('discount_amount')) {
                obj['discount_amount'] = ApiClient.convertToType(data['discount_amount'], 'Number');
            }
            if (data.hasOwnProperty('quickbooks_code')) {
                obj['quickbooks_code'] = ApiClient.convertToType(data['quickbooks_code'], 'String');
            }
            if (data.hasOwnProperty('subtotal_amount')) {
                obj['subtotal_amount'] = ApiClient.convertToType(data['subtotal_amount'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The amount of subtotal discount
 * @member {Number} discount_amount
 */
CouponTierAmount.prototype['discount_amount'] = undefined;

/**
 * Quickbooks accounting code.
 * @member {String} quickbooks_code
 */
CouponTierAmount.prototype['quickbooks_code'] = undefined;

/**
 * The amount of subtotal required to receive the discount amount
 * @member {Number} subtotal_amount
 */
CouponTierAmount.prototype['subtotal_amount'] = undefined;






export default CouponTierAmount;

