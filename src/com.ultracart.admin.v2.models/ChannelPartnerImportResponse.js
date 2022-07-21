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
import Warning from './Warning';

/**
 * The ChannelPartnerImportResponse model module.
 * @module com.ultracart.admin.v2.models/ChannelPartnerImportResponse
 * @version 4.0.39-RC
 */
class ChannelPartnerImportResponse {
    /**
     * Constructs a new <code>ChannelPartnerImportResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/ChannelPartnerImportResponse
     */
    constructor() { 
        
        ChannelPartnerImportResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChannelPartnerImportResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ChannelPartnerImportResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ChannelPartnerImportResponse} The populated <code>ChannelPartnerImportResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChannelPartnerImportResponse();

            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('import_errors')) {
                obj['import_errors'] = ApiClient.convertToType(data['import_errors'], ['String']);
            }
            if (data.hasOwnProperty('import_warnings')) {
                obj['import_warnings'] = ApiClient.convertToType(data['import_warnings'], ['String']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('order_id')) {
                obj['order_id'] = ApiClient.convertToType(data['order_id'], 'String');
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
ChannelPartnerImportResponse.prototype['error'] = undefined;

/**
 * Array of errors if errors occurred
 * @member {Array.<String>} import_errors
 */
ChannelPartnerImportResponse.prototype['import_errors'] = undefined;

/**
 * Array of warnings if warnings occurred
 * @member {Array.<String>} import_warnings
 */
ChannelPartnerImportResponse.prototype['import_warnings'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
ChannelPartnerImportResponse.prototype['metadata'] = undefined;

/**
 * The order id of the newly imported order if successful
 * @member {String} order_id
 */
ChannelPartnerImportResponse.prototype['order_id'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
ChannelPartnerImportResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
ChannelPartnerImportResponse.prototype['warning'] = undefined;






export default ChannelPartnerImportResponse;

