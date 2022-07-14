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
 * The ScreenRecordingFilterIpSearch model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingFilterIpSearch
 * @version 4.0.35-RC
 */
class ScreenRecordingFilterIpSearch {
    /**
     * Constructs a new <code>ScreenRecordingFilterIpSearch</code>.
     * @alias module:com.ultracart.admin.v2.models/ScreenRecordingFilterIpSearch
     */
    constructor() { 
        
        ScreenRecordingFilterIpSearch.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScreenRecordingFilterIpSearch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingFilterIpSearch} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingFilterIpSearch} The populated <code>ScreenRecordingFilterIpSearch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScreenRecordingFilterIpSearch();

            if (data.hasOwnProperty('does_not_exist')) {
                obj['does_not_exist'] = ApiClient.convertToType(data['does_not_exist'], 'Boolean');
            }
            if (data.hasOwnProperty('exists')) {
                obj['exists'] = ApiClient.convertToType(data['exists'], 'Boolean');
            }
            if (data.hasOwnProperty('is')) {
                obj['is'] = ApiClient.convertToType(data['is'], 'String');
            }
            if (data.hasOwnProperty('is_not')) {
                obj['is_not'] = ApiClient.convertToType(data['is_not'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} does_not_exist
 */
ScreenRecordingFilterIpSearch.prototype['does_not_exist'] = undefined;

/**
 * @member {Boolean} exists
 */
ScreenRecordingFilterIpSearch.prototype['exists'] = undefined;

/**
 * @member {String} is
 */
ScreenRecordingFilterIpSearch.prototype['is'] = undefined;

/**
 * @member {String} is_not
 */
ScreenRecordingFilterIpSearch.prototype['is_not'] = undefined;






export default ScreenRecordingFilterIpSearch;

