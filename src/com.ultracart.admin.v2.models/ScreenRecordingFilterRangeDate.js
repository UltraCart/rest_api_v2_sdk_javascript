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
 * The ScreenRecordingFilterRangeDate model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingFilterRangeDate
 * @version 4.0.146
 */
class ScreenRecordingFilterRangeDate {
    /**
     * Constructs a new <code>ScreenRecordingFilterRangeDate</code>.
     * @alias module:com.ultracart.admin.v2.models/ScreenRecordingFilterRangeDate
     */
    constructor() { 
        
        ScreenRecordingFilterRangeDate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScreenRecordingFilterRangeDate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingFilterRangeDate} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingFilterRangeDate} The populated <code>ScreenRecordingFilterRangeDate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScreenRecordingFilterRangeDate();

            if (data.hasOwnProperty('end')) {
                obj['end'] = ApiClient.convertToType(data['end'], 'String');
            }
            if (data.hasOwnProperty('start')) {
                obj['start'] = ApiClient.convertToType(data['start'], 'String');
            }
        }
        return obj;
    }


}

/**
 * End of the range
 * @member {String} end
 */
ScreenRecordingFilterRangeDate.prototype['end'] = undefined;

/**
 * Start of the range
 * @member {String} start
 */
ScreenRecordingFilterRangeDate.prototype['start'] = undefined;






export default ScreenRecordingFilterRangeDate;

