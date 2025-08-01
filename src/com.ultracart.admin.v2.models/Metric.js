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
 * The Metric model module.
 * @module com.ultracart.admin.v2.models/Metric
 * @version 4.1.16
 */
class Metric {
    /**
     * Constructs a new <code>Metric</code>.
     * @alias module:com.ultracart.admin.v2.models/Metric
     */
    constructor() { 
        
        Metric.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Metric</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/Metric} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/Metric} The populated <code>Metric</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Metric();

            if (data.hasOwnProperty('all_time')) {
                obj['all_time'] = ApiClient.convertToType(data['all_time'], 'Number');
            }
            if (data.hasOwnProperty('all_time_formatted')) {
                obj['all_time_formatted'] = ApiClient.convertToType(data['all_time_formatted'], 'String');
            }
            if (data.hasOwnProperty('last_30')) {
                obj['last_30'] = ApiClient.convertToType(data['last_30'], 'Number');
            }
            if (data.hasOwnProperty('last_30_formatted')) {
                obj['last_30_formatted'] = ApiClient.convertToType(data['last_30_formatted'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('prior_30')) {
                obj['prior_30'] = ApiClient.convertToType(data['prior_30'], 'Number');
            }
            if (data.hasOwnProperty('prior_30_formatted')) {
                obj['prior_30_formatted'] = ApiClient.convertToType(data['prior_30_formatted'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} all_time
 */
Metric.prototype['all_time'] = undefined;

/**
 * @member {String} all_time_formatted
 */
Metric.prototype['all_time_formatted'] = undefined;

/**
 * @member {Number} last_30
 */
Metric.prototype['last_30'] = undefined;

/**
 * @member {String} last_30_formatted
 */
Metric.prototype['last_30_formatted'] = undefined;

/**
 * @member {String} name
 */
Metric.prototype['name'] = undefined;

/**
 * @member {Number} prior_30
 */
Metric.prototype['prior_30'] = undefined;

/**
 * @member {String} prior_30_formatted
 */
Metric.prototype['prior_30_formatted'] = undefined;

/**
 * @member {String} type
 */
Metric.prototype['type'] = undefined;






export default Metric;

