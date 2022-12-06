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
 * The Error model module.
 * @module com.ultracart.admin.v2.models/Error
 * @version 4.0.92-RC
 */
class Error {
    /**
     * Constructs a new <code>Error</code>.
     * @alias module:com.ultracart.admin.v2.models/Error
     */
    constructor() { 
        
        Error.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/Error} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/Error} The populated <code>Error</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Error();

            if (data.hasOwnProperty('developer_message')) {
                obj['developer_message'] = ApiClient.convertToType(data['developer_message'], 'String');
            }
            if (data.hasOwnProperty('error_code')) {
                obj['error_code'] = ApiClient.convertToType(data['error_code'], 'String');
            }
            if (data.hasOwnProperty('more_info')) {
                obj['more_info'] = ApiClient.convertToType(data['more_info'], 'String');
            }
            if (data.hasOwnProperty('object_id')) {
                obj['object_id'] = ApiClient.convertToType(data['object_id'], 'String');
            }
            if (data.hasOwnProperty('user_message')) {
                obj['user_message'] = ApiClient.convertToType(data['user_message'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A technical message meant to be read by a developer
 * @member {String} developer_message
 */
Error.prototype['developer_message'] = undefined;

/**
 * HTTP status code
 * @member {String} error_code
 */
Error.prototype['error_code'] = undefined;

/**
 * Additional information often a link to additional documentation
 * @member {String} more_info
 */
Error.prototype['more_info'] = undefined;

/**
 * Object id that the error is associated with
 * @member {String} object_id
 */
Error.prototype['object_id'] = undefined;

/**
 * An end-user friendly message suitable for display to the customer
 * @member {String} user_message
 */
Error.prototype['user_message'] = undefined;






export default Error;

