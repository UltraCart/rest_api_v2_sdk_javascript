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
import ReportFilterConnection from './ReportFilterConnection';

/**
 * The ReportFilter model module.
 * @module com.ultracart.admin.v2.models/ReportFilter
 * @version 4.0.155
 */
class ReportFilter {
    /**
     * Constructs a new <code>ReportFilter</code>.
     * @alias module:com.ultracart.admin.v2.models/ReportFilter
     */
    constructor() { 
        
        ReportFilter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReportFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ReportFilter} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ReportFilter} The populated <code>ReportFilter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportFilter();

            if (data.hasOwnProperty('connections')) {
                obj['connections'] = ApiClient.convertToType(data['connections'], [ReportFilterConnection]);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('timezone')) {
                obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * How this filter connects to the data sources and columns
 * @member {Array.<module:com.ultracart.admin.v2.models/ReportFilterConnection>} connections
 */
ReportFilter.prototype['connections'] = undefined;

/**
 * @member {String} name
 */
ReportFilter.prototype['name'] = undefined;

/**
 * The timezone that the date range is querying on.
 * @member {String} timezone
 */
ReportFilter.prototype['timezone'] = undefined;

/**
 * Type of filter
 * @member {module:com.ultracart.admin.v2.models/ReportFilter.TypeEnum} type
 */
ReportFilter.prototype['type'] = undefined;

/**
 * Unique UUID assigned to the filter.  Assists when returning values that the filter can use.
 * @member {String} uuid
 */
ReportFilter.prototype['uuid'] = undefined;

/**
 * The selected values for the filter.  When used, some type conversion will need to occur.
 * @member {Array.<String>} values
 */
ReportFilter.prototype['values'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
ReportFilter['TypeEnum'] = {

    /**
     * value: "date range"
     * @const
     */
    "date range": "date range",

    /**
     * value: "date comparison"
     * @const
     */
    "date comparison": "date comparison",

    /**
     * value: "single value"
     * @const
     */
    "single value": "single value",

    /**
     * value: "multiple values"
     * @const
     */
    "multiple values": "multiple values"
};



export default ReportFilter;

