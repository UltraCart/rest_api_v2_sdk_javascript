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
 * The CustomerLoyaltyRedemption model module.
 * @module com.ultracart.admin.v2.models/CustomerLoyaltyRedemption
 * @version 4.0.245
 */
class CustomerLoyaltyRedemption {
    /**
     * Constructs a new <code>CustomerLoyaltyRedemption</code>.
     * @alias module:com.ultracart.admin.v2.models/CustomerLoyaltyRedemption
     */
    constructor() { 
        
        CustomerLoyaltyRedemption.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomerLoyaltyRedemption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerLoyaltyRedemption} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerLoyaltyRedemption} The populated <code>CustomerLoyaltyRedemption</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerLoyaltyRedemption();

            if (data.hasOwnProperty('coupon_code')) {
                obj['coupon_code'] = ApiClient.convertToType(data['coupon_code'], 'String');
            }
            if (data.hasOwnProperty('coupon_code_oid')) {
                obj['coupon_code_oid'] = ApiClient.convertToType(data['coupon_code_oid'], 'Number');
            }
            if (data.hasOwnProperty('coupon_used')) {
                obj['coupon_used'] = ApiClient.convertToType(data['coupon_used'], 'Boolean');
            }
            if (data.hasOwnProperty('description_for_customer')) {
                obj['description_for_customer'] = ApiClient.convertToType(data['description_for_customer'], 'String');
            }
            if (data.hasOwnProperty('expiration_dts')) {
                obj['expiration_dts'] = ApiClient.convertToType(data['expiration_dts'], 'String');
            }
            if (data.hasOwnProperty('gift_certificate_code')) {
                obj['gift_certificate_code'] = ApiClient.convertToType(data['gift_certificate_code'], 'String');
            }
            if (data.hasOwnProperty('gift_certificate_oid')) {
                obj['gift_certificate_oid'] = ApiClient.convertToType(data['gift_certificate_oid'], 'Number');
            }
            if (data.hasOwnProperty('loyalty_ledger_oid')) {
                obj['loyalty_ledger_oid'] = ApiClient.convertToType(data['loyalty_ledger_oid'], 'Number');
            }
            if (data.hasOwnProperty('loyalty_points')) {
                obj['loyalty_points'] = ApiClient.convertToType(data['loyalty_points'], 'Number');
            }
            if (data.hasOwnProperty('loyalty_redemption_oid')) {
                obj['loyalty_redemption_oid'] = ApiClient.convertToType(data['loyalty_redemption_oid'], 'Number');
            }
            if (data.hasOwnProperty('order_id')) {
                obj['order_id'] = ApiClient.convertToType(data['order_id'], 'String');
            }
            if (data.hasOwnProperty('redemption_dts')) {
                obj['redemption_dts'] = ApiClient.convertToType(data['redemption_dts'], 'String');
            }
            if (data.hasOwnProperty('remaining_balance')) {
                obj['remaining_balance'] = ApiClient.convertToType(data['remaining_balance'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Coupon code
 * @member {String} coupon_code
 */
CustomerLoyaltyRedemption.prototype['coupon_code'] = undefined;

/**
 * Coupon code OID
 * @member {Number} coupon_code_oid
 */
CustomerLoyaltyRedemption.prototype['coupon_code_oid'] = undefined;

/**
 * Coupon used
 * @member {Boolean} coupon_used
 */
CustomerLoyaltyRedemption.prototype['coupon_used'] = undefined;

/**
 * Description for customer
 * @member {String} description_for_customer
 */
CustomerLoyaltyRedemption.prototype['description_for_customer'] = undefined;

/**
 * Expiration date
 * @member {String} expiration_dts
 */
CustomerLoyaltyRedemption.prototype['expiration_dts'] = undefined;

/**
 * Gift certificate code
 * @member {String} gift_certificate_code
 */
CustomerLoyaltyRedemption.prototype['gift_certificate_code'] = undefined;

/**
 * Gift certificate oid
 * @member {Number} gift_certificate_oid
 */
CustomerLoyaltyRedemption.prototype['gift_certificate_oid'] = undefined;

/**
 * Loyalty ledger OID
 * @member {Number} loyalty_ledger_oid
 */
CustomerLoyaltyRedemption.prototype['loyalty_ledger_oid'] = undefined;

/**
 * Loyalty points
 * @member {Number} loyalty_points
 */
CustomerLoyaltyRedemption.prototype['loyalty_points'] = undefined;

/**
 * Loyalty redemption OID
 * @member {Number} loyalty_redemption_oid
 */
CustomerLoyaltyRedemption.prototype['loyalty_redemption_oid'] = undefined;

/**
 * Order id
 * @member {String} order_id
 */
CustomerLoyaltyRedemption.prototype['order_id'] = undefined;

/**
 * Redemption date
 * @member {String} redemption_dts
 */
CustomerLoyaltyRedemption.prototype['redemption_dts'] = undefined;

/**
 * Remaining balance
 * @member {Number} remaining_balance
 */
CustomerLoyaltyRedemption.prototype['remaining_balance'] = undefined;






export default CustomerLoyaltyRedemption;

