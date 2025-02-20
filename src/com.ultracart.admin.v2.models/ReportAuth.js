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
 * The ReportAuth model module.
 * @module com.ultracart.admin.v2.models/ReportAuth
 * @version 4.0.244
 */
class ReportAuth {
    /**
     * Constructs a new <code>ReportAuth</code>.
     * @alias module:com.ultracart.admin.v2.models/ReportAuth
     */
    constructor() { 
        
        ReportAuth.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReportAuth</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ReportAuth} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ReportAuth} The populated <code>ReportAuth</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReportAuth();

            if (data.hasOwnProperty('client_uuid')) {
                obj['client_uuid'] = ApiClient.convertToType(data['client_uuid'], 'String');
            }
            if (data.hasOwnProperty('jwt')) {
                obj['jwt'] = ApiClient.convertToType(data['jwt'], 'String');
            }
            if (data.hasOwnProperty('merchant_id')) {
                obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
            }
            if (data.hasOwnProperty('websocket_url')) {
                obj['websocket_url'] = ApiClient.convertToType(data['websocket_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Unique UUID assigned to this client
 * @member {String} client_uuid
 */
ReportAuth.prototype['client_uuid'] = undefined;

/**
 * @member {String} jwt
 */
ReportAuth.prototype['jwt'] = undefined;

/**
 * @member {String} merchant_id
 */
ReportAuth.prototype['merchant_id'] = undefined;

/**
 * @member {String} websocket_url
 */
ReportAuth.prototype['websocket_url'] = undefined;






export default ReportAuth;

