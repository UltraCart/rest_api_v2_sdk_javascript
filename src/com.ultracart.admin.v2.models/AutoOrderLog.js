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
 * The AutoOrderLog model module.
 * @module com.ultracart.admin.v2.models/AutoOrderLog
 * @version 4.1.16
 */
class AutoOrderLog {
    /**
     * Constructs a new <code>AutoOrderLog</code>.
     * @alias module:com.ultracart.admin.v2.models/AutoOrderLog
     */
    constructor() { 
        
        AutoOrderLog.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AutoOrderLog</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/AutoOrderLog} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/AutoOrderLog} The populated <code>AutoOrderLog</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AutoOrderLog();

            if (data.hasOwnProperty('log_dts')) {
                obj['log_dts'] = ApiClient.convertToType(data['log_dts'], 'String');
            }
            if (data.hasOwnProperty('log_message')) {
                obj['log_message'] = ApiClient.convertToType(data['log_message'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Date/time that the log message was added
 * @member {String} log_dts
 */
AutoOrderLog.prototype['log_dts'] = undefined;

/**
 * Log message
 * @member {String} log_message
 */
AutoOrderLog.prototype['log_message'] = undefined;






export default AutoOrderLog;

