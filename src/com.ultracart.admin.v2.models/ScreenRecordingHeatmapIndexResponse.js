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
import ScreenRecordingHeatmapUrl from './ScreenRecordingHeatmapUrl';
import Warning from './Warning';

/**
 * The ScreenRecordingHeatmapIndexResponse model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingHeatmapIndexResponse
 * @version 4.0.101-RC
 */
class ScreenRecordingHeatmapIndexResponse {
    /**
     * Constructs a new <code>ScreenRecordingHeatmapIndexResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/ScreenRecordingHeatmapIndexResponse
     */
    constructor() { 
        
        ScreenRecordingHeatmapIndexResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScreenRecordingHeatmapIndexResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingHeatmapIndexResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingHeatmapIndexResponse} The populated <code>ScreenRecordingHeatmapIndexResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScreenRecordingHeatmapIndexResponse();

            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('heatmap_urls')) {
                obj['heatmap_urls'] = ApiClient.convertToType(data['heatmap_urls'], [ScreenRecordingHeatmapUrl]);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
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
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */
ScreenRecordingHeatmapIndexResponse.prototype['error'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ScreenRecordingHeatmapUrl>} heatmap_urls
 */
ScreenRecordingHeatmapIndexResponse.prototype['heatmap_urls'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
ScreenRecordingHeatmapIndexResponse.prototype['metadata'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
ScreenRecordingHeatmapIndexResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
ScreenRecordingHeatmapIndexResponse.prototype['warning'] = undefined;






export default ScreenRecordingHeatmapIndexResponse;

