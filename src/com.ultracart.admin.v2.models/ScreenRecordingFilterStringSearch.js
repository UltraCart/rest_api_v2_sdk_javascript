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
 * The ScreenRecordingFilterStringSearch model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingFilterStringSearch
 * @version 4.1.16
 */
class ScreenRecordingFilterStringSearch {
    /**
     * Constructs a new <code>ScreenRecordingFilterStringSearch</code>.
     * @alias module:com.ultracart.admin.v2.models/ScreenRecordingFilterStringSearch
     */
    constructor() { 
        
        ScreenRecordingFilterStringSearch.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScreenRecordingFilterStringSearch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingFilterStringSearch} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingFilterStringSearch} The populated <code>ScreenRecordingFilterStringSearch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScreenRecordingFilterStringSearch();

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
            if (data.hasOwnProperty('starts_with')) {
                obj['starts_with'] = ApiClient.convertToType(data['starts_with'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} does_not_exist
 */
ScreenRecordingFilterStringSearch.prototype['does_not_exist'] = undefined;

/**
 * @member {Boolean} exists
 */
ScreenRecordingFilterStringSearch.prototype['exists'] = undefined;

/**
 * @member {String} is
 */
ScreenRecordingFilterStringSearch.prototype['is'] = undefined;

/**
 * @member {String} is_not
 */
ScreenRecordingFilterStringSearch.prototype['is_not'] = undefined;

/**
 * @member {String} starts_with
 */
ScreenRecordingFilterStringSearch.prototype['starts_with'] = undefined;






export default ScreenRecordingFilterStringSearch;

