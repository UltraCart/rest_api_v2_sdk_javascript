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
 * The EmailCommseqPostcardsRequest model module.
 * @module com.ultracart.admin.v2.models/EmailCommseqPostcardsRequest
 * @version 4.0.158
 */
class EmailCommseqPostcardsRequest {
    /**
     * Constructs a new <code>EmailCommseqPostcardsRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailCommseqPostcardsRequest
     */
    constructor() { 
        
        EmailCommseqPostcardsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailCommseqPostcardsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqPostcardsRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailCommseqPostcardsRequest} The populated <code>EmailCommseqPostcardsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailCommseqPostcardsRequest();

            if (data.hasOwnProperty('esp_commseq_postcard_uuids')) {
                obj['esp_commseq_postcard_uuids'] = ApiClient.convertToType(data['esp_commseq_postcard_uuids'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} esp_commseq_postcard_uuids
 */
EmailCommseqPostcardsRequest.prototype['esp_commseq_postcard_uuids'] = undefined;






export default EmailCommseqPostcardsRequest;

