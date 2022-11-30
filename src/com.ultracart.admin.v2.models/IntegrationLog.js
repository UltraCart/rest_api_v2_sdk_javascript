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
import IntegrationLogFile from './IntegrationLogFile';
import IntegrationLogLog from './IntegrationLogLog';

/**
 * The IntegrationLog model module.
 * @module com.ultracart.admin.v2.models/IntegrationLog
 * @version 4.0.90-RC
 */
class IntegrationLog {
    /**
     * Constructs a new <code>IntegrationLog</code>.
     * @alias module:com.ultracart.admin.v2.models/IntegrationLog
     */
    constructor() { 
        
        IntegrationLog.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IntegrationLog</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/IntegrationLog} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/IntegrationLog} The populated <code>IntegrationLog</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IntegrationLog();

            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('direction')) {
                obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('files')) {
                obj['files'] = ApiClient.convertToType(data['files'], [IntegrationLogFile]);
            }
            if (data.hasOwnProperty('integration_log_oid')) {
                obj['integration_log_oid'] = ApiClient.convertToType(data['integration_log_oid'], 'Number');
            }
            if (data.hasOwnProperty('item_id')) {
                obj['item_id'] = ApiClient.convertToType(data['item_id'], 'String');
            }
            if (data.hasOwnProperty('item_ipn_oid')) {
                obj['item_ipn_oid'] = ApiClient.convertToType(data['item_ipn_oid'], 'Number');
            }
            if (data.hasOwnProperty('log_dts')) {
                obj['log_dts'] = ApiClient.convertToType(data['log_dts'], 'String');
            }
            if (data.hasOwnProperty('log_type')) {
                obj['log_type'] = ApiClient.convertToType(data['log_type'], 'String');
            }
            if (data.hasOwnProperty('logger_id')) {
                obj['logger_id'] = ApiClient.convertToType(data['logger_id'], 'String');
            }
            if (data.hasOwnProperty('logger_name')) {
                obj['logger_name'] = ApiClient.convertToType(data['logger_name'], 'String');
            }
            if (data.hasOwnProperty('logs')) {
                obj['logs'] = ApiClient.convertToType(data['logs'], [IntegrationLogLog]);
            }
            if (data.hasOwnProperty('omit_log_map')) {
                obj['omit_log_map'] = ApiClient.convertToType(data['omit_log_map'], 'Boolean');
            }
            if (data.hasOwnProperty('order_ids')) {
                obj['order_ids'] = ApiClient.convertToType(data['order_ids'], ['String']);
            }
            if (data.hasOwnProperty('pk')) {
                obj['pk'] = ApiClient.convertToType(data['pk'], 'String');
            }
            if (data.hasOwnProperty('sk')) {
                obj['sk'] = ApiClient.convertToType(data['sk'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('status_code')) {
                obj['status_code'] = ApiClient.convertToType(data['status_code'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} action
 */
IntegrationLog.prototype['action'] = undefined;

/**
 * @member {String} direction
 */
IntegrationLog.prototype['direction'] = undefined;

/**
 * @member {String} email
 */
IntegrationLog.prototype['email'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/IntegrationLogFile>} files
 */
IntegrationLog.prototype['files'] = undefined;

/**
 * @member {Number} integration_log_oid
 */
IntegrationLog.prototype['integration_log_oid'] = undefined;

/**
 * @member {String} item_id
 */
IntegrationLog.prototype['item_id'] = undefined;

/**
 * @member {Number} item_ipn_oid
 */
IntegrationLog.prototype['item_ipn_oid'] = undefined;

/**
 * Date/time the integration log was created
 * @member {String} log_dts
 */
IntegrationLog.prototype['log_dts'] = undefined;

/**
 * @member {String} log_type
 */
IntegrationLog.prototype['log_type'] = undefined;

/**
 * @member {String} logger_id
 */
IntegrationLog.prototype['logger_id'] = undefined;

/**
 * @member {String} logger_name
 */
IntegrationLog.prototype['logger_name'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/IntegrationLogLog>} logs
 */
IntegrationLog.prototype['logs'] = undefined;

/**
 * @member {Boolean} omit_log_map
 */
IntegrationLog.prototype['omit_log_map'] = undefined;

/**
 * @member {Array.<String>} order_ids
 */
IntegrationLog.prototype['order_ids'] = undefined;

/**
 * @member {String} pk
 */
IntegrationLog.prototype['pk'] = undefined;

/**
 * @member {String} sk
 */
IntegrationLog.prototype['sk'] = undefined;

/**
 * @member {String} status
 */
IntegrationLog.prototype['status'] = undefined;

/**
 * @member {Number} status_code
 */
IntegrationLog.prototype['status_code'] = undefined;






export default IntegrationLog;

