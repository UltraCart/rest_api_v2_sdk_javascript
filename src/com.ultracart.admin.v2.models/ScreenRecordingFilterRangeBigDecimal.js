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
 * The ScreenRecordingFilterRangeBigDecimal model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingFilterRangeBigDecimal
 * @version 4.0.158
 */
class ScreenRecordingFilterRangeBigDecimal {
    /**
     * Constructs a new <code>ScreenRecordingFilterRangeBigDecimal</code>.
     * @alias module:com.ultracart.admin.v2.models/ScreenRecordingFilterRangeBigDecimal
     */
    constructor() { 
        
        ScreenRecordingFilterRangeBigDecimal.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScreenRecordingFilterRangeBigDecimal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingFilterRangeBigDecimal} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingFilterRangeBigDecimal} The populated <code>ScreenRecordingFilterRangeBigDecimal</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScreenRecordingFilterRangeBigDecimal();

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
ScreenRecordingFilterRangeBigDecimal.prototype['eq'] = undefined;

/**
 * @member {Number} gt
 */
ScreenRecordingFilterRangeBigDecimal.prototype['gt'] = undefined;

/**
 * @member {Number} gte
 */
ScreenRecordingFilterRangeBigDecimal.prototype['gte'] = undefined;

/**
 * @member {Number} lt
 */
ScreenRecordingFilterRangeBigDecimal.prototype['lt'] = undefined;

/**
 * @member {Number} lte
 */
ScreenRecordingFilterRangeBigDecimal.prototype['lte'] = undefined;






export default ScreenRecordingFilterRangeBigDecimal;

