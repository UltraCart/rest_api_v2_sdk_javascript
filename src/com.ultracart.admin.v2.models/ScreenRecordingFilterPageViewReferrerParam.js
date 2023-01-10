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
import ScreenRecordingFilterStringSearch from './ScreenRecordingFilterStringSearch';

/**
 * The ScreenRecordingFilterPageViewReferrerParam model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewReferrerParam
 * @version 4.0.109-RC
 */
class ScreenRecordingFilterPageViewReferrerParam {
    /**
     * Constructs a new <code>ScreenRecordingFilterPageViewReferrerParam</code>.
     * @alias module:com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewReferrerParam
     */
    constructor() { 
        
        ScreenRecordingFilterPageViewReferrerParam.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScreenRecordingFilterPageViewReferrerParam</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewReferrerParam} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewReferrerParam} The populated <code>ScreenRecordingFilterPageViewReferrerParam</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScreenRecordingFilterPageViewReferrerParam();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ScreenRecordingFilterStringSearch.constructFromObject(data['value']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
ScreenRecordingFilterPageViewReferrerParam.prototype['name'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilterStringSearch} value
 */
ScreenRecordingFilterPageViewReferrerParam.prototype['value'] = undefined;






export default ScreenRecordingFilterPageViewReferrerParam;

