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
 * The EmailCommseqPostcardSendTestResponse model module.
 * @module com.ultracart.admin.v2.models/EmailCommseqPostcardSendTestResponse
 * @version 4.0.116-RC
 */
class EmailCommseqPostcardSendTestResponse {
    /**
     * Constructs a new <code>EmailCommseqPostcardSendTestResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailCommseqPostcardSendTestResponse
     */
    constructor() { 
        
        EmailCommseqPostcardSendTestResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailCommseqPostcardSendTestResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqPostcardSendTestResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailCommseqPostcardSendTestResponse} The populated <code>EmailCommseqPostcardSendTestResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailCommseqPostcardSendTestResponse();

            if (data.hasOwnProperty('backThumbnail')) {
                obj['backThumbnail'] = ApiClient.convertToType(data['backThumbnail'], 'String');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('frontThumbnail')) {
                obj['frontThumbnail'] = ApiClient.convertToType(data['frontThumbnail'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('renderedPdf')) {
                obj['renderedPdf'] = ApiClient.convertToType(data['renderedPdf'], 'String');
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
 * @member {String} backThumbnail
 */
EmailCommseqPostcardSendTestResponse.prototype['backThumbnail'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */
EmailCommseqPostcardSendTestResponse.prototype['error'] = undefined;

/**
 * @member {String} frontThumbnail
 */
EmailCommseqPostcardSendTestResponse.prototype['frontThumbnail'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
EmailCommseqPostcardSendTestResponse.prototype['metadata'] = undefined;

/**
 * @member {String} renderedPdf
 */
EmailCommseqPostcardSendTestResponse.prototype['renderedPdf'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
EmailCommseqPostcardSendTestResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
EmailCommseqPostcardSendTestResponse.prototype['warning'] = undefined;






export default EmailCommseqPostcardSendTestResponse;

