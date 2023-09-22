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
 * The OrderValidationResponse model module.
 * @module com.ultracart.admin.v2.models/OrderValidationResponse
 * @version 4.0.178
 */
class OrderValidationResponse {
    /**
     * Constructs a new <code>OrderValidationResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderValidationResponse
     */
    constructor() { 
        
        OrderValidationResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderValidationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderValidationResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderValidationResponse} The populated <code>OrderValidationResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderValidationResponse();

            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], ['String']);
            }
            if (data.hasOwnProperty('messages')) {
                obj['messages'] = ApiClient.convertToType(data['messages'], ['String']);
            }
            if (data.hasOwnProperty('order_was_updated')) {
                obj['order_was_updated'] = ApiClient.convertToType(data['order_was_updated'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Errors to display to the merchant if they failed any of the validations checked
 * @member {Array.<String>} errors
 */
OrderValidationResponse.prototype['errors'] = undefined;

/**
 * Informational messages
 * @member {Array.<String>} messages
 */
OrderValidationResponse.prototype['messages'] = undefined;

/**
 * If true, this order was updated during the validation call.  This may happen during address standardization fixes.
 * @member {Boolean} order_was_updated
 */
OrderValidationResponse.prototype['order_was_updated'] = undefined;






export default OrderValidationResponse;

