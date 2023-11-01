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
 * The IntegrationLogQueryFilterValues model module.
 * @module com.ultracart.admin.v2.models/IntegrationLogQueryFilterValues
 * @version 4.0.185
 */
class IntegrationLogQueryFilterValues {
    /**
     * Constructs a new <code>IntegrationLogQueryFilterValues</code>.
     * @alias module:com.ultracart.admin.v2.models/IntegrationLogQueryFilterValues
     */
    constructor() { 
        
        IntegrationLogQueryFilterValues.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IntegrationLogQueryFilterValues</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/IntegrationLogQueryFilterValues} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/IntegrationLogQueryFilterValues} The populated <code>IntegrationLogQueryFilterValues</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IntegrationLogQueryFilterValues();

            if (data.hasOwnProperty('actions')) {
                obj['actions'] = ApiClient.convertToType(data['actions'], ['String']);
            }
            if (data.hasOwnProperty('directions')) {
                obj['directions'] = ApiClient.convertToType(data['directions'], ['String']);
            }
            if (data.hasOwnProperty('emails')) {
                obj['emails'] = ApiClient.convertToType(data['emails'], ['String']);
            }
            if (data.hasOwnProperty('file_names')) {
                obj['file_names'] = ApiClient.convertToType(data['file_names'], ['String']);
            }
            if (data.hasOwnProperty('item_ids')) {
                obj['item_ids'] = ApiClient.convertToType(data['item_ids'], ['String']);
            }
            if (data.hasOwnProperty('item_ipn_oids')) {
                obj['item_ipn_oids'] = ApiClient.convertToType(data['item_ipn_oids'], ['Number']);
            }
            if (data.hasOwnProperty('log_dts_max')) {
                obj['log_dts_max'] = ApiClient.convertToType(data['log_dts_max'], 'String');
            }
            if (data.hasOwnProperty('log_dts_min')) {
                obj['log_dts_min'] = ApiClient.convertToType(data['log_dts_min'], 'String');
            }
            if (data.hasOwnProperty('log_types')) {
                obj['log_types'] = ApiClient.convertToType(data['log_types'], ['String']);
            }
            if (data.hasOwnProperty('logger_names')) {
                obj['logger_names'] = ApiClient.convertToType(data['logger_names'], ['String']);
            }
            if (data.hasOwnProperty('order_ids')) {
                obj['order_ids'] = ApiClient.convertToType(data['order_ids'], ['String']);
            }
            if (data.hasOwnProperty('statuses')) {
                obj['statuses'] = ApiClient.convertToType(data['statuses'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} actions
 */
IntegrationLogQueryFilterValues.prototype['actions'] = undefined;

/**
 * @member {Array.<String>} directions
 */
IntegrationLogQueryFilterValues.prototype['directions'] = undefined;

/**
 * @member {Array.<String>} emails
 */
IntegrationLogQueryFilterValues.prototype['emails'] = undefined;

/**
 * @member {Array.<String>} file_names
 */
IntegrationLogQueryFilterValues.prototype['file_names'] = undefined;

/**
 * @member {Array.<String>} item_ids
 */
IntegrationLogQueryFilterValues.prototype['item_ids'] = undefined;

/**
 * @member {Array.<Number>} item_ipn_oids
 */
IntegrationLogQueryFilterValues.prototype['item_ipn_oids'] = undefined;

/**
 * Maximum date/time log date/time
 * @member {String} log_dts_max
 */
IntegrationLogQueryFilterValues.prototype['log_dts_max'] = undefined;

/**
 * Minimum date/time log date/time
 * @member {String} log_dts_min
 */
IntegrationLogQueryFilterValues.prototype['log_dts_min'] = undefined;

/**
 * @member {Array.<String>} log_types
 */
IntegrationLogQueryFilterValues.prototype['log_types'] = undefined;

/**
 * @member {Array.<String>} logger_names
 */
IntegrationLogQueryFilterValues.prototype['logger_names'] = undefined;

/**
 * @member {Array.<String>} order_ids
 */
IntegrationLogQueryFilterValues.prototype['order_ids'] = undefined;

/**
 * @member {Array.<String>} statuses
 */
IntegrationLogQueryFilterValues.prototype['statuses'] = undefined;






export default IntegrationLogQueryFilterValues;

