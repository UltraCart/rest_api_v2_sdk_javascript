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
 * The ReportPageFilter model module.
 * @module com.ultracart.admin.v2.models/ReportPageFilter
 * @version 4.0.158
 */
class ReportPageFilter {
    /**
     * Constructs a new <code>ReportPageFilter</code>.
     * @alias module:com.ultracart.admin.v2.models/ReportPageFilter
     */
    constructor() { 
        
        ReportPageFilter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReportPageFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ReportPageFilter} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ReportPageFilter} The populated <code>ReportPageFilter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportPageFilter();

            if (data.hasOwnProperty('config')) {
                obj['config'] = ApiClient.convertToType(data['config'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('styles')) {
                obj['styles'] = ApiClient.convertToType(data['styles'], 'String');
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A JSON representation of the configuration for this visualization
 * @member {String} config
 */
ReportPageFilter.prototype['config'] = undefined;

/**
 * @member {String} name
 */
ReportPageFilter.prototype['name'] = undefined;

/**
 * A JSON representation of the style configuration for this visualization
 * @member {String} styles
 */
ReportPageFilter.prototype['styles'] = undefined;

/**
 * Unique UUID assigned to the filter.  Assists when returning values that the filter can use.
 * @member {String} uuid
 */
ReportPageFilter.prototype['uuid'] = undefined;






export default ReportPageFilter;

