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
import EmailOrder from './EmailOrder';
import Error from './Error';
import ResponseMetadata from './ResponseMetadata';
import Warning from './Warning';

/**
 * The EmailOrdersResponse model module.
 * @module com.ultracart.admin.v2.models/EmailOrdersResponse
 * @version 4.0.82-RC
 */
class EmailOrdersResponse {
    /**
     * Constructs a new <code>EmailOrdersResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailOrdersResponse
     */
    constructor() { 
        
        EmailOrdersResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailOrdersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailOrdersResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailOrdersResponse} The populated <code>EmailOrdersResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailOrdersResponse();

            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('orders')) {
                obj['orders'] = ApiClient.convertToType(data['orders'], [EmailOrder]);
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
EmailOrdersResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
EmailOrdersResponse.prototype['metadata'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/EmailOrder>} orders
 */
EmailOrdersResponse.prototype['orders'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
EmailOrdersResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
EmailOrdersResponse.prototype['warning'] = undefined;






export default EmailOrdersResponse;

