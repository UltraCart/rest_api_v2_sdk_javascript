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
 * The AccountsReceivableRetryStatMetrics model module.
 * @module com.ultracart.admin.v2.models/AccountsReceivableRetryStatMetrics
 * @version 4.0.159
 */
class AccountsReceivableRetryStatMetrics {
    /**
     * Constructs a new <code>AccountsReceivableRetryStatMetrics</code>.
     * @alias module:com.ultracart.admin.v2.models/AccountsReceivableRetryStatMetrics
     */
    constructor() { 
        
        AccountsReceivableRetryStatMetrics.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AccountsReceivableRetryStatMetrics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/AccountsReceivableRetryStatMetrics} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/AccountsReceivableRetryStatMetrics} The populated <code>AccountsReceivableRetryStatMetrics</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountsReceivableRetryStatMetrics();

            if (data.hasOwnProperty('attempts')) {
                obj['attempts'] = ApiClient.convertToType(data['attempts'], 'Number');
            }
            if (data.hasOwnProperty('attempts_formatted')) {
                obj['attempts_formatted'] = ApiClient.convertToType(data['attempts_formatted'], 'String');
            }
            if (data.hasOwnProperty('conversion_rate')) {
                obj['conversion_rate'] = ApiClient.convertToType(data['conversion_rate'], 'Number');
            }
            if (data.hasOwnProperty('conversion_rate_formatted')) {
                obj['conversion_rate_formatted'] = ApiClient.convertToType(data['conversion_rate_formatted'], 'String');
            }
            if (data.hasOwnProperty('day')) {
                obj['day'] = ApiClient.convertToType(data['day'], 'Number');
            }
            if (data.hasOwnProperty('discounts')) {
                obj['discounts'] = ApiClient.convertToType(data['discounts'], 'Number');
            }
            if (data.hasOwnProperty('discounts_formatted')) {
                obj['discounts_formatted'] = ApiClient.convertToType(data['discounts_formatted'], 'String');
            }
            if (data.hasOwnProperty('revenue')) {
                obj['revenue'] = ApiClient.convertToType(data['revenue'], 'Number');
            }
            if (data.hasOwnProperty('revenue_formatted')) {
                obj['revenue_formatted'] = ApiClient.convertToType(data['revenue_formatted'], 'String');
            }
            if (data.hasOwnProperty('successes')) {
                obj['successes'] = ApiClient.convertToType(data['successes'], 'Number');
            }
            if (data.hasOwnProperty('successes_formatted')) {
                obj['successes_formatted'] = ApiClient.convertToType(data['successes_formatted'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} attempts
 */
AccountsReceivableRetryStatMetrics.prototype['attempts'] = undefined;

/**
 * @member {String} attempts_formatted
 */
AccountsReceivableRetryStatMetrics.prototype['attempts_formatted'] = undefined;

/**
 * @member {Number} conversion_rate
 */
AccountsReceivableRetryStatMetrics.prototype['conversion_rate'] = undefined;

/**
 * @member {String} conversion_rate_formatted
 */
AccountsReceivableRetryStatMetrics.prototype['conversion_rate_formatted'] = undefined;

/**
 * @member {Number} day
 */
AccountsReceivableRetryStatMetrics.prototype['day'] = undefined;

/**
 * @member {Number} discounts
 */
AccountsReceivableRetryStatMetrics.prototype['discounts'] = undefined;

/**
 * @member {String} discounts_formatted
 */
AccountsReceivableRetryStatMetrics.prototype['discounts_formatted'] = undefined;

/**
 * @member {Number} revenue
 */
AccountsReceivableRetryStatMetrics.prototype['revenue'] = undefined;

/**
 * @member {String} revenue_formatted
 */
AccountsReceivableRetryStatMetrics.prototype['revenue_formatted'] = undefined;

/**
 * @member {Number} successes
 */
AccountsReceivableRetryStatMetrics.prototype['successes'] = undefined;

/**
 * @member {String} successes_formatted
 */
AccountsReceivableRetryStatMetrics.prototype['successes_formatted'] = undefined;






export default AccountsReceivableRetryStatMetrics;

