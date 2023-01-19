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
import ScreenRecordingFilterRangeBigDecimal from './ScreenRecordingFilterRangeBigDecimal';
import ScreenRecordingFilterRangeInteger from './ScreenRecordingFilterRangeInteger';
import ScreenRecordingFilterStringSearch from './ScreenRecordingFilterStringSearch';

/**
 * The ScreenRecordingFilterPageViewEventParam model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewEventParam
 * @version 4.0.120-RC
 */
class ScreenRecordingFilterPageViewEventParam {
    /**
     * Constructs a new <code>ScreenRecordingFilterPageViewEventParam</code>.
     * @alias module:com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewEventParam
     */
    constructor() { 
        
        ScreenRecordingFilterPageViewEventParam.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScreenRecordingFilterPageViewEventParam</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewEventParam} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingFilterPageViewEventParam} The populated <code>ScreenRecordingFilterPageViewEventParam</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScreenRecordingFilterPageViewEventParam();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('value_bd')) {
                obj['value_bd'] = ScreenRecordingFilterRangeBigDecimal.constructFromObject(data['value_bd']);
            }
            if (data.hasOwnProperty('value_bool')) {
                obj['value_bool'] = ApiClient.convertToType(data['value_bool'], 'Boolean');
            }
            if (data.hasOwnProperty('value_num')) {
                obj['value_num'] = ScreenRecordingFilterRangeInteger.constructFromObject(data['value_num']);
            }
            if (data.hasOwnProperty('value_text')) {
                obj['value_text'] = ScreenRecordingFilterStringSearch.constructFromObject(data['value_text']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
ScreenRecordingFilterPageViewEventParam.prototype['name'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilterRangeBigDecimal} value_bd
 */
ScreenRecordingFilterPageViewEventParam.prototype['value_bd'] = undefined;

/**
 * @member {Boolean} value_bool
 */
ScreenRecordingFilterPageViewEventParam.prototype['value_bool'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilterRangeInteger} value_num
 */
ScreenRecordingFilterPageViewEventParam.prototype['value_num'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilterStringSearch} value_text
 */
ScreenRecordingFilterPageViewEventParam.prototype['value_text'] = undefined;






export default ScreenRecordingFilterPageViewEventParam;

