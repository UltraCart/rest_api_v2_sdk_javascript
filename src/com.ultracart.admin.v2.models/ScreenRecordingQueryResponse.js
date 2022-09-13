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
import Error from './Error';
import ResponseMetadata from './ResponseMetadata';
import ScreenRecording from './ScreenRecording';
import ScreenRecordingFilter from './ScreenRecordingFilter';
import ScreenRecordingFilterValues from './ScreenRecordingFilterValues';
import Warning from './Warning';

/**
 * The ScreenRecordingQueryResponse model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingQueryResponse
 * @version 4.0.63-RC
 */
class ScreenRecordingQueryResponse {
    /**
     * Constructs a new <code>ScreenRecordingQueryResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/ScreenRecordingQueryResponse
     */
    constructor() { 
        
        ScreenRecordingQueryResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScreenRecordingQueryResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingQueryResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingQueryResponse} The populated <code>ScreenRecordingQueryResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScreenRecordingQueryResponse();

            if (data.hasOwnProperty('checkout_only')) {
                obj['checkout_only'] = ApiClient.convertToType(data['checkout_only'], 'Boolean');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('filter')) {
                obj['filter'] = ScreenRecordingFilter.constructFromObject(data['filter']);
            }
            if (data.hasOwnProperty('filter_values')) {
                obj['filter_values'] = ScreenRecordingFilterValues.constructFromObject(data['filter_values']);
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
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('screen_recordings')) {
                obj['screen_recordings'] = ApiClient.convertToType(data['screen_recordings'], [ScreenRecording]);
            }
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('warning')) {
                obj['warning'] = Warning.constructFromObject(data['warning']);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} checkout_only
 */
ScreenRecordingQueryResponse.prototype['checkout_only'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */
ScreenRecordingQueryResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilter} filter
 */
ScreenRecordingQueryResponse.prototype['filter'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilterValues} filter_values
 */
ScreenRecordingQueryResponse.prototype['filter_values'] = undefined;

/**
 * @member {Array.<Number>} histogram_data
 */
ScreenRecordingQueryResponse.prototype['histogram_data'] = undefined;

/**
 * @member {String} histogram_interval
 */
ScreenRecordingQueryResponse.prototype['histogram_interval'] = undefined;

/**
 * @member {String} histogram_start_dts
 */
ScreenRecordingQueryResponse.prototype['histogram_start_dts'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
ScreenRecordingQueryResponse.prototype['metadata'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ScreenRecording>} screen_recordings
 */
ScreenRecordingQueryResponse.prototype['screen_recordings'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
ScreenRecordingQueryResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
ScreenRecordingQueryResponse.prototype['warning'] = undefined;






export default ScreenRecordingQueryResponse;

