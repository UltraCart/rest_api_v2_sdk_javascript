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
import ScreenRecordingFilterRangeDate from './ScreenRecordingFilterRangeDate';

/**
 * The ScreenRecordingHeatmapRequest model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingHeatmapRequest
 * @version 4.0.146
 */
class ScreenRecordingHeatmapRequest {
    /**
     * Constructs a new <code>ScreenRecordingHeatmapRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/ScreenRecordingHeatmapRequest
     */
    constructor() { 
        
        ScreenRecordingHeatmapRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScreenRecordingHeatmapRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingHeatmapRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingHeatmapRequest} The populated <code>ScreenRecordingHeatmapRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScreenRecordingHeatmapRequest();

            if (data.hasOwnProperty('range')) {
                obj['range'] = ScreenRecordingFilterRangeDate.constructFromObject(data['range']);
            }
            if (data.hasOwnProperty('screen_sizes')) {
                obj['screen_sizes'] = ApiClient.convertToType(data['screen_sizes'], ['String']);
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/ScreenRecordingFilterRangeDate} range
 */
ScreenRecordingHeatmapRequest.prototype['range'] = undefined;

/**
 * @member {Array.<String>} screen_sizes
 */
ScreenRecordingHeatmapRequest.prototype['screen_sizes'] = undefined;

/**
 * @member {String} url
 */
ScreenRecordingHeatmapRequest.prototype['url'] = undefined;






export default ScreenRecordingHeatmapRequest;

