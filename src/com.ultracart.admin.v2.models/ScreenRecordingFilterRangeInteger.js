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
 * The ScreenRecordingFilterRangeInteger model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingFilterRangeInteger
 * @version 4.0.155
 */
class ScreenRecordingFilterRangeInteger {
    /**
     * Constructs a new <code>ScreenRecordingFilterRangeInteger</code>.
     * @alias module:com.ultracart.admin.v2.models/ScreenRecordingFilterRangeInteger
     */
    constructor() { 
        
        ScreenRecordingFilterRangeInteger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScreenRecordingFilterRangeInteger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingFilterRangeInteger} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingFilterRangeInteger} The populated <code>ScreenRecordingFilterRangeInteger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScreenRecordingFilterRangeInteger();

            if (data.hasOwnProperty('eq')) {
                obj['eq'] = ApiClient.convertToType(data['eq'], 'Number');
            }
            if (data.hasOwnProperty('gt')) {
                obj['gt'] = ApiClient.convertToType(data['gt'], 'Number');
            }
            if (data.hasOwnProperty('gte')) {
                obj['gte'] = ApiClient.convertToType(data['gte'], 'Number');
            }
            if (data.hasOwnProperty('lt')) {
                obj['lt'] = ApiClient.convertToType(data['lt'], 'Number');
            }
            if (data.hasOwnProperty('lte')) {
                obj['lte'] = ApiClient.convertToType(data['lte'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} eq
 */
ScreenRecordingFilterRangeInteger.prototype['eq'] = undefined;

/**
 * @member {Number} gt
 */
ScreenRecordingFilterRangeInteger.prototype['gt'] = undefined;

/**
 * @member {Number} gte
 */
ScreenRecordingFilterRangeInteger.prototype['gte'] = undefined;

/**
 * @member {Number} lt
 */
ScreenRecordingFilterRangeInteger.prototype['lt'] = undefined;

/**
 * @member {Number} lte
 */
ScreenRecordingFilterRangeInteger.prototype['lte'] = undefined;






export default ScreenRecordingFilterRangeInteger;

