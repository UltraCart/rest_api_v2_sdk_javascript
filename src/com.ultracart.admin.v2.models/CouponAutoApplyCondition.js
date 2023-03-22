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
 * The CouponAutoApplyCondition model module.
 * @module com.ultracart.admin.v2.models/CouponAutoApplyCondition
 * @version 4.0.142
 */
class CouponAutoApplyCondition {
    /**
     * Constructs a new <code>CouponAutoApplyCondition</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponAutoApplyCondition
     */
    constructor() { 
        
        CouponAutoApplyCondition.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponAutoApplyCondition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponAutoApplyCondition} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponAutoApplyCondition} The populated <code>CouponAutoApplyCondition</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponAutoApplyCondition();

            if (data.hasOwnProperty('coupon_code')) {
                obj['coupon_code'] = ApiClient.convertToType(data['coupon_code'], 'String');
            }
            if (data.hasOwnProperty('minimum_subtotal')) {
                obj['minimum_subtotal'] = ApiClient.convertToType(data['minimum_subtotal'], 'Number');
            }
            if (data.hasOwnProperty('required_item_id')) {
                obj['required_item_id'] = ApiClient.convertToType(data['required_item_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} coupon_code
 */
CouponAutoApplyCondition.prototype['coupon_code'] = undefined;

/**
 * The minimum subtotal that must be purchased to receive this coupon. Item and subtotal are exclusive.  Only one can be populated.
 * @member {Number} minimum_subtotal
 */
CouponAutoApplyCondition.prototype['minimum_subtotal'] = undefined;

/**
 * The item that must be purchased to receive this coupon. Item and subtotal are exclusive.  Only one can be populated.
 * @member {String} required_item_id
 */
CouponAutoApplyCondition.prototype['required_item_id'] = undefined;






export default CouponAutoApplyCondition;

