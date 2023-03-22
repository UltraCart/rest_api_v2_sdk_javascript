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
 * The ScreenRecordingHeatmapIndexRequest model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingHeatmapIndexRequest
 * @version 4.0.141
 */
class ScreenRecordingHeatmapIndexRequest {
    /**
     * Constructs a new <code>ScreenRecordingHeatmapIndexRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/ScreenRecordingHeatmapIndexRequest
     */
    constructor() { 
        
        ScreenRecordingHeatmapIndexRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScreenRecordingHeatmapIndexRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingHeatmapIndexRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingHeatmapIndexRequest} The populated <code>ScreenRecordingHeatmapIndexRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScreenRecordingHeatmapIndexRequest();

            if (data.hasOwnProperty('url_contains')) {
                obj['url_contains'] = ApiClient.convertToType(data['url_contains'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} url_contains
 */
ScreenRecordingHeatmapIndexRequest.prototype['url_contains'] = undefined;






export default ScreenRecordingHeatmapIndexRequest;

