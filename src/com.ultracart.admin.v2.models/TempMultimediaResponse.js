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
import TempMultimedia from './TempMultimedia';
import Warning from './Warning';

/**
 * The TempMultimediaResponse model module.
 * @module com.ultracart.admin.v2.models/TempMultimediaResponse
 * @version 4.0.92-RC
 */
class TempMultimediaResponse {
    /**
     * Constructs a new <code>TempMultimediaResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/TempMultimediaResponse
     */
    constructor() { 
        
        TempMultimediaResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TempMultimediaResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/TempMultimediaResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/TempMultimediaResponse} The populated <code>TempMultimediaResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TempMultimediaResponse();

            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('temp_multimedia')) {
                obj['temp_multimedia'] = TempMultimedia.constructFromObject(data['temp_multimedia']);
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
TempMultimediaResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
TempMultimediaResponse.prototype['metadata'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
TempMultimediaResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/TempMultimedia} temp_multimedia
 */
TempMultimediaResponse.prototype['temp_multimedia'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
TempMultimediaResponse.prototype['warning'] = undefined;






export default TempMultimediaResponse;

