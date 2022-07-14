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
 * The IntegrationLogSummary model module.
 * @module com.ultracart.admin.v2.models/IntegrationLogSummary
 * @version 4.0.35-RC
 */
class IntegrationLogSummary {
    /**
     * Constructs a new <code>IntegrationLogSummary</code>.
     * @alias module:com.ultracart.admin.v2.models/IntegrationLogSummary
     */
    constructor() { 
        
        IntegrationLogSummary.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IntegrationLogSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/IntegrationLogSummary} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/IntegrationLogSummary} The populated <code>IntegrationLogSummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IntegrationLogSummary();

            if (data.hasOwnProperty('critical')) {
                obj['critical'] = ApiClient.convertToType(data['critical'], 'Number');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'Number');
            }
            if (data.hasOwnProperty('events')) {
                obj['events'] = ApiClient.convertToType(data['events'], 'Number');
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
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Number');
            }
            if (data.hasOwnProperty('view_url')) {
                obj['view_url'] = ApiClient.convertToType(data['view_url'], 'String');
            }
            if (data.hasOwnProperty('warning')) {
                obj['warning'] = ApiClient.convertToType(data['warning'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} critical
 */
IntegrationLogSummary.prototype['critical'] = undefined;

/**
 * @member {Number} error
 */
IntegrationLogSummary.prototype['error'] = undefined;

/**
 * @member {Number} events
 */
IntegrationLogSummary.prototype['events'] = undefined;

/**
 * @member {String} log_type
 */
IntegrationLogSummary.prototype['log_type'] = undefined;

/**
 * @member {String} logger_id
 */
IntegrationLogSummary.prototype['logger_id'] = undefined;

/**
 * @member {String} logger_name
 */
IntegrationLogSummary.prototype['logger_name'] = undefined;

/**
 * @member {Number} success
 */
IntegrationLogSummary.prototype['success'] = undefined;

/**
 * @member {String} view_url
 */
IntegrationLogSummary.prototype['view_url'] = undefined;

/**
 * @member {Number} warning
 */
IntegrationLogSummary.prototype['warning'] = undefined;






export default IntegrationLogSummary;

