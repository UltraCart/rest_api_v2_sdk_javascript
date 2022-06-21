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
import ScreenRecordingFilter from './ScreenRecordingFilter';

/**
 * The ScreenRecordingSegment model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingSegment
 * @version 4.0.6-RC
 */
class ScreenRecordingSegment {
    /**
     * Constructs a new <code>ScreenRecordingSegment</code>.
     * @alias module:com.ultracart.admin.v2.models/ScreenRecordingSegment
     */
    constructor() { 
        
        ScreenRecordingSegment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScreenRecordingSegment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingSegment} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingSegment} The populated <code>ScreenRecordingSegment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScreenRecordingSegment();

            if (data.hasOwnProperty('create_dts')) {
                obj['create_dts'] = ApiClient.convertToType(data['create_dts'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('filter')) {
                obj['filter'] = ScreenRecordingFilter.constructFromObject(data['filter']);
            }
            if (data.hasOwnProperty('histogram_data')) {
                obj['histogram_data'] = ApiClient.convertToType(data['histogram_data'], ['Number']);
            }
            if (data.hasOwnProperty('histogram_interval')) {
                obj['histogram_interval'] = ApiClient.convertToType(data['histogram_interval'], 'String');
            }
            if (data.hasOwnProperty('histogram_start_dts')) {
                obj['histogram_start_dts'] = ApiClient.convertToType(data['histogram_start_dts'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('screen_recording_segment_oid')) {
                obj['screen_recording_segment_oid'] = ApiClient.convertToType(data['screen_recording_segment_oid'], 'Number');
            }
            if (data.hasOwnProperty('session_count')) {
                obj['session_count'] = ApiClient.convertToType(data['session_count'], 'Number');
            }
            if (data.hasOwnProperty('session_count_last_update_dts')) {
                obj['session_count_last_update_dts'] = ApiClient.convertToType(data['session_count_last_update_dts'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} create_dts
 */
ScreenRecordingSegment.prototype['create_dts'] = undefined;

/**
 * @member {String} description
 */
ScreenRecordingSegment.prototype['description'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilter} filter
 */
ScreenRecordingSegment.prototype['filter'] = undefined;

/**
 * @member {Array.<Number>} histogram_data
 */
ScreenRecordingSegment.prototype['histogram_data'] = undefined;

/**
 * @member {String} histogram_interval
 */
ScreenRecordingSegment.prototype['histogram_interval'] = undefined;

/**
 * @member {String} histogram_start_dts
 */
ScreenRecordingSegment.prototype['histogram_start_dts'] = undefined;

/**
 * @member {String} name
 */
ScreenRecordingSegment.prototype['name'] = undefined;

/**
 * @member {Number} screen_recording_segment_oid
 */
ScreenRecordingSegment.prototype['screen_recording_segment_oid'] = undefined;

/**
 * @member {Number} session_count
 */
ScreenRecordingSegment.prototype['session_count'] = undefined;

/**
 * @member {String} session_count_last_update_dts
 */
ScreenRecordingSegment.prototype['session_count_last_update_dts'] = undefined;






export default ScreenRecordingSegment;

