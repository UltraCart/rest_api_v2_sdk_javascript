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
import Twilio from './Twilio';
import Warning from './Warning';

/**
 * The TwilioResponse model module.
 * @module com.ultracart.admin.v2.models/TwilioResponse
 * @version 4.0.244
 */
class TwilioResponse {
    /**
     * Constructs a new <code>TwilioResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/TwilioResponse
     */
    constructor() { 
        
        TwilioResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TwilioResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/TwilioResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/TwilioResponse} The populated <code>TwilioResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TwilioResponse();

            if (data.hasOwnProperty('diagnostics')) {
                obj['diagnostics'] = ApiClient.convertToType(data['diagnostics'], 'String');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('twilio')) {
                obj['twilio'] = Twilio.constructFromObject(data['twilio']);
            }
            if (data.hasOwnProperty('warning')) {
                obj['warning'] = Warning.constructFromObject(data['warning']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} diagnostics
 */
TwilioResponse.prototype['diagnostics'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */
TwilioResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
TwilioResponse.prototype['metadata'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
TwilioResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Twilio} twilio
 */
TwilioResponse.prototype['twilio'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
TwilioResponse.prototype['warning'] = undefined;






export default TwilioResponse;

