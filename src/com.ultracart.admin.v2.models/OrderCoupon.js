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
 * The OrderCoupon model module.
 * @module com.ultracart.admin.v2.models/OrderCoupon
 * @version 4.0.146
 */
class OrderCoupon {
    /**
     * Constructs a new <code>OrderCoupon</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderCoupon
     */
    constructor() { 
        
        OrderCoupon.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderCoupon</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderCoupon} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderCoupon} The populated <code>OrderCoupon</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderCoupon();

            if (data.hasOwnProperty('accounting_code')) {
                obj['accounting_code'] = ApiClient.convertToType(data['accounting_code'], 'String');
            }
            if (data.hasOwnProperty('automatically_applied')) {
                obj['automatically_applied'] = ApiClient.convertToType(data['automatically_applied'], 'Boolean');
            }
            if (data.hasOwnProperty('base_coupon_code')) {
                obj['base_coupon_code'] = ApiClient.convertToType(data['base_coupon_code'], 'String');
            }
            if (data.hasOwnProperty('coupon_code')) {
                obj['coupon_code'] = ApiClient.convertToType(data['coupon_code'], 'String');
            }
            if (data.hasOwnProperty('hdie_from_customer')) {
                obj['hdie_from_customer'] = ApiClient.convertToType(data['hdie_from_customer'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * QuickBooks accounting code for this coupon
 * @member {String} accounting_code
 */
OrderCoupon.prototype['accounting_code'] = undefined;

/**
 * Whether or not the coupon was automatically applied to the order
 * @member {Boolean} automatically_applied
 */
OrderCoupon.prototype['automatically_applied'] = undefined;

/**
 * Coupon code configured by the merchant.  Will differ if the customer used a one time coupon code generated off this base coupon
 * @member {String} base_coupon_code
 */
OrderCoupon.prototype['base_coupon_code'] = undefined;

/**
 * Coupon code entered by the customer
 * @member {String} coupon_code
 */
OrderCoupon.prototype['coupon_code'] = undefined;

/**
 * True if this coupon is hidde from the customer
 * @member {Boolean} hdie_from_customer
 */
OrderCoupon.prototype['hdie_from_customer'] = undefined;






export default OrderCoupon;

