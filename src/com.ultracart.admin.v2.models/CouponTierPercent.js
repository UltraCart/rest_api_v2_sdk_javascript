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
 * The CouponTierPercent model module.
 * @module com.ultracart.admin.v2.models/CouponTierPercent
 * @version 4.0.188
 */
class CouponTierPercent {
    /**
     * Constructs a new <code>CouponTierPercent</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponTierPercent
     */
    constructor() { 
        
        CouponTierPercent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponTierPercent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponTierPercent} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponTierPercent} The populated <code>CouponTierPercent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponTierPercent();

            if (data.hasOwnProperty('discount_percent')) {
                obj['discount_percent'] = ApiClient.convertToType(data['discount_percent'], 'Number');
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
 * The percent of subtotal discount
 * @member {Number} discount_percent
 */
CouponTierPercent.prototype['discount_percent'] = undefined;

/**
 * Quickbooks accounting code.
 * @member {String} quickbooks_code
 */
CouponTierPercent.prototype['quickbooks_code'] = undefined;

/**
 * The amount of subtotal required to receive the discount percent
 * @member {Number} subtotal_amount
 */
CouponTierPercent.prototype['subtotal_amount'] = undefined;






export default CouponTierPercent;

