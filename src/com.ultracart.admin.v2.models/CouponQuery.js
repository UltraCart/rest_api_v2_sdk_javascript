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
 * The CouponQuery model module.
 * @module com.ultracart.admin.v2.models/CouponQuery
 * @version 4.0.123-RC
 */
class CouponQuery {
    /**
     * Constructs a new <code>CouponQuery</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponQuery
     */
    constructor() { 
        
        CouponQuery.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponQuery} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponQuery} The populated <code>CouponQuery</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponQuery();

            if (data.hasOwnProperty('affiliate_oid')) {
                obj['affiliate_oid'] = ApiClient.convertToType(data['affiliate_oid'], 'Number');
            }
            if (data.hasOwnProperty('coupon_type')) {
                obj['coupon_type'] = ApiClient.convertToType(data['coupon_type'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('exclude_expired')) {
                obj['exclude_expired'] = ApiClient.convertToType(data['exclude_expired'], 'Boolean');
            }
            if (data.hasOwnProperty('expiration_dts_begin')) {
                obj['expiration_dts_begin'] = ApiClient.convertToType(data['expiration_dts_begin'], 'String');
            }
            if (data.hasOwnProperty('expiration_dts_end')) {
                obj['expiration_dts_end'] = ApiClient.convertToType(data['expiration_dts_end'], 'String');
            }
            if (data.hasOwnProperty('merchant_code')) {
                obj['merchant_code'] = ApiClient.convertToType(data['merchant_code'], 'String');
            }
            if (data.hasOwnProperty('merchant_code_or_description')) {
                obj['merchant_code_or_description'] = ApiClient.convertToType(data['merchant_code_or_description'], 'String');
            }
            if (data.hasOwnProperty('start_dts_begin')) {
                obj['start_dts_begin'] = ApiClient.convertToType(data['start_dts_begin'], 'String');
            }
            if (data.hasOwnProperty('start_dts_end')) {
                obj['start_dts_end'] = ApiClient.convertToType(data['start_dts_end'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Affiliate oid
 * @member {Number} affiliate_oid
 */
CouponQuery.prototype['affiliate_oid'] = undefined;

/**
 * The type of coupon.
 * @member {String} coupon_type
 */
CouponQuery.prototype['coupon_type'] = undefined;

/**
 * Description of this coupon
 * @member {String} description
 */
CouponQuery.prototype['description'] = undefined;

/**
 * Exclude expired coupons if true
 * @member {Boolean} exclude_expired
 */
CouponQuery.prototype['exclude_expired'] = undefined;

/**
 * Expiration date begin
 * @member {String} expiration_dts_begin
 */
CouponQuery.prototype['expiration_dts_begin'] = undefined;

/**
 * Expiration date begin
 * @member {String} expiration_dts_end
 */
CouponQuery.prototype['expiration_dts_end'] = undefined;

/**
 * Merchant code is a unique character string for this coupon.
 * @member {String} merchant_code
 */
CouponQuery.prototype['merchant_code'] = undefined;

/**
 * Merchant code description used for searching
 * @member {String} merchant_code_or_description
 */
CouponQuery.prototype['merchant_code_or_description'] = undefined;

/**
 * Start date begin
 * @member {String} start_dts_begin
 */
CouponQuery.prototype['start_dts_begin'] = undefined;

/**
 * Start date end
 * @member {String} start_dts_end
 */
CouponQuery.prototype['start_dts_end'] = undefined;






export default CouponQuery;

