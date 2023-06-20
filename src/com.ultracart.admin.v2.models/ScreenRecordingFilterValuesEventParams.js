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
 * The ScreenRecordingFilterValuesEventParams model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingFilterValuesEventParams
 * @version 4.0.163
 */
class ScreenRecordingFilterValuesEventParams {
    /**
     * Constructs a new <code>ScreenRecordingFilterValuesEventParams</code>.
     * @alias module:com.ultracart.admin.v2.models/ScreenRecordingFilterValuesEventParams
     */
    constructor() { 
        
        ScreenRecordingFilterValuesEventParams.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScreenRecordingFilterValuesEventParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingFilterValuesEventParams} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingFilterValuesEventParams} The populated <code>ScreenRecordingFilterValuesEventParams</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScreenRecordingFilterValuesEventParams();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('values_bd')) {
                obj['values_bd'] = ApiClient.convertToType(data['values_bd'], ['Number']);
            }
            if (data.hasOwnProperty('values_bool')) {
                obj['values_bool'] = ApiClient.convertToType(data['values_bool'], ['Boolean']);
            }
            if (data.hasOwnProperty('values_num')) {
                obj['values_num'] = ApiClient.convertToType(data['values_num'], ['Number']);
            }
            if (data.hasOwnProperty('values_text')) {
                obj['values_text'] = ApiClient.convertToType(data['values_text'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
ScreenRecordingFilterValuesEventParams.prototype['name'] = undefined;

/**
 * @member {Array.<Number>} values_bd
 */
ScreenRecordingFilterValuesEventParams.prototype['values_bd'] = undefined;

/**
 * @member {Array.<Boolean>} values_bool
 */
ScreenRecordingFilterValuesEventParams.prototype['values_bool'] = undefined;

/**
 * @member {Array.<Number>} values_num
 */
ScreenRecordingFilterValuesEventParams.prototype['values_num'] = undefined;

/**
 * @member {Array.<String>} values_text
 */
ScreenRecordingFilterValuesEventParams.prototype['values_text'] = undefined;






export default ScreenRecordingFilterValuesEventParams;

