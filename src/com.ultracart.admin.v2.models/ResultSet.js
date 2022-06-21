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
 * The ResultSet model module.
 * @module com.ultracart.admin.v2.models/ResultSet
 * @version 4.0.6-RC
 */
class ResultSet {
    /**
     * Constructs a new <code>ResultSet</code>.
     * @alias module:com.ultracart.admin.v2.models/ResultSet
     */
    constructor() { 
        
        ResultSet.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ResultSet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ResultSet} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ResultSet} The populated <code>ResultSet</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResultSet();

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('more')) {
                obj['more'] = ApiClient.convertToType(data['more'], 'Boolean');
            }
            if (data.hasOwnProperty('next_offset')) {
                obj['next_offset'] = ApiClient.convertToType(data['next_offset'], 'Number');
            }
            if (data.hasOwnProperty('offset')) {
                obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
            }
            if (data.hasOwnProperty('total_records')) {
                obj['total_records'] = ApiClient.convertToType(data['total_records'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Number of results in this set
 * @member {Number} count
 */
ResultSet.prototype['count'] = undefined;

/**
 * Maximum number of results that can be returned in a set
 * @member {Number} limit
 */
ResultSet.prototype['limit'] = undefined;

/**
 * True if there are more results to query
 * @member {Boolean} more
 */
ResultSet.prototype['more'] = undefined;

/**
 * The next offset that you should query to retrieve more results
 * @member {Number} next_offset
 */
ResultSet.prototype['next_offset'] = undefined;

/**
 * Offset of this result set (zero based)
 * @member {Number} offset
 */
ResultSet.prototype['offset'] = undefined;

/**
 * The total number of records in the result set.  May be null if the number is not known and the client should continue iterating as long as more is true.
 * @member {Number} total_records
 */
ResultSet.prototype['total_records'] = undefined;






export default ResultSet;

