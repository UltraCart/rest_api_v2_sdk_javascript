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
 * The ScreenRecordingHeatmapReset model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingHeatmapReset
 * @version 4.0.39-RC
 */
class ScreenRecordingHeatmapReset {
    /**
     * Constructs a new <code>ScreenRecordingHeatmapReset</code>.
     * @alias module:com.ultracart.admin.v2.models/ScreenRecordingHeatmapReset
     */
    constructor() { 
        
        ScreenRecordingHeatmapReset.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScreenRecordingHeatmapReset</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingHeatmapReset} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingHeatmapReset} The populated <code>ScreenRecordingHeatmapReset</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScreenRecordingHeatmapReset();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} url
 */
ScreenRecordingHeatmapReset.prototype['url'] = undefined;






export default ScreenRecordingHeatmapReset;

