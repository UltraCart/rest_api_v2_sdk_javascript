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
 * The ScreenRecordingHeatmapUrl model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingHeatmapUrl
 * @version 4.0.63-RC
 */
class ScreenRecordingHeatmapUrl {
    /**
     * Constructs a new <code>ScreenRecordingHeatmapUrl</code>.
     * @alias module:com.ultracart.admin.v2.models/ScreenRecordingHeatmapUrl
     */
    constructor() { 
        
        ScreenRecordingHeatmapUrl.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScreenRecordingHeatmapUrl</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingHeatmapUrl} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingHeatmapUrl} The populated <code>ScreenRecordingHeatmapUrl</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScreenRecordingHeatmapUrl();

            if (data.hasOwnProperty('histogram_data')) {
                obj['histogram_data'] = ApiClient.convertToType(data['histogram_data'], ['Number']);
            }
            if (data.hasOwnProperty('histogram_interval')) {
                obj['histogram_interval'] = ApiClient.convertToType(data['histogram_interval'], 'String');
            }
            if (data.hasOwnProperty('histogram_start_dts')) {
                obj['histogram_start_dts'] = ApiClient.convertToType(data['histogram_start_dts'], 'String');
            }
            if (data.hasOwnProperty('page_rank')) {
                obj['page_rank'] = ApiClient.convertToType(data['page_rank'], 'Number');
            }
            if (data.hasOwnProperty('session_count')) {
                obj['session_count'] = ApiClient.convertToType(data['session_count'], 'Number');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<Number>} histogram_data
 */
ScreenRecordingHeatmapUrl.prototype['histogram_data'] = undefined;

/**
 * @member {String} histogram_interval
 */
ScreenRecordingHeatmapUrl.prototype['histogram_interval'] = undefined;

/**
 * @member {String} histogram_start_dts
 */
ScreenRecordingHeatmapUrl.prototype['histogram_start_dts'] = undefined;

/**
 * @member {Number} page_rank
 */
ScreenRecordingHeatmapUrl.prototype['page_rank'] = undefined;

/**
 * @member {Number} session_count
 */
ScreenRecordingHeatmapUrl.prototype['session_count'] = undefined;

/**
 * @member {String} url
 */
ScreenRecordingHeatmapUrl.prototype['url'] = undefined;






export default ScreenRecordingHeatmapUrl;

