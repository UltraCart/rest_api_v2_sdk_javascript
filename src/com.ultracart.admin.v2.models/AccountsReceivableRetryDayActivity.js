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
 * The AccountsReceivableRetryDayActivity model module.
 * @module com.ultracart.admin.v2.models/AccountsReceivableRetryDayActivity
 * @version 4.1.16
 */
class AccountsReceivableRetryDayActivity {
    /**
     * Constructs a new <code>AccountsReceivableRetryDayActivity</code>.
     * @alias module:com.ultracart.admin.v2.models/AccountsReceivableRetryDayActivity
     */
    constructor() { 
        
        AccountsReceivableRetryDayActivity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AccountsReceivableRetryDayActivity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/AccountsReceivableRetryDayActivity} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/AccountsReceivableRetryDayActivity} The populated <code>AccountsReceivableRetryDayActivity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountsReceivableRetryDayActivity();

            if (data.hasOwnProperty('charge')) {
                obj['charge'] = ApiClient.convertToType(data['charge'], 'Boolean');
            }
            if (data.hasOwnProperty('coupon_code')) {
                obj['coupon_code'] = ApiClient.convertToType(data['coupon_code'], 'String');
            }
            if (data.hasOwnProperty('day')) {
                obj['day'] = ApiClient.convertToType(data['day'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * True if a charge attempt should be made on this day.  False means the order should be rejected on this day.
 * @member {Boolean} charge
 */
AccountsReceivableRetryDayActivity.prototype['charge'] = undefined;

/**
 * The coupon code that should be applied to this order.
 * @member {String} coupon_code
 */
AccountsReceivableRetryDayActivity.prototype['coupon_code'] = undefined;

/**
 * The number of days since the order placed in Accounts Receivable
 * @member {Number} day
 */
AccountsReceivableRetryDayActivity.prototype['day'] = undefined;






export default AccountsReceivableRetryDayActivity;

