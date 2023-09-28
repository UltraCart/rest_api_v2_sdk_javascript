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
 * The EmailCommseqStepLog model module.
 * @module com.ultracart.admin.v2.models/EmailCommseqStepLog
 * @version 4.0.179
 */
class EmailCommseqStepLog {
    /**
     * Constructs a new <code>EmailCommseqStepLog</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailCommseqStepLog
     */
    constructor() { 
        
        EmailCommseqStepLog.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailCommseqStepLog</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqStepLog} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailCommseqStepLog} The populated <code>EmailCommseqStepLog</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailCommseqStepLog();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('log')) {
                obj['log'] = ApiClient.convertToType(data['log'], 'String');
            }
            if (data.hasOwnProperty('log_dts')) {
                obj['log_dts'] = ApiClient.convertToType(data['log_dts'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Email
 * @member {String} email
 */
EmailCommseqStepLog.prototype['email'] = undefined;

/**
 * Log text
 * @member {String} log
 */
EmailCommseqStepLog.prototype['log'] = undefined;

/**
 * Log date/time
 * @member {String} log_dts
 */
EmailCommseqStepLog.prototype['log_dts'] = undefined;






export default EmailCommseqStepLog;

