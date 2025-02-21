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
import Order from './Order';

/**
 * The OrderValidationRequest model module.
 * @module com.ultracart.admin.v2.models/OrderValidationRequest
 * @version 4.1.0
 */
class OrderValidationRequest {
    /**
     * Constructs a new <code>OrderValidationRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderValidationRequest
     */
    constructor() { 
        
        OrderValidationRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderValidationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderValidationRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderValidationRequest} The populated <code>OrderValidationRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderValidationRequest();

            if (data.hasOwnProperty('checks')) {
                obj['checks'] = ApiClient.convertToType(data['checks'], ['String']);
            }
            if (data.hasOwnProperty('order')) {
                obj['order'] = Order.constructFromObject(data['order']);
            }
        }
        return obj;
    }


}

/**
 * Checks to perform
 * @member {Array.<String>} checks
 */
OrderValidationRequest.prototype['checks'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Order} order
 */
OrderValidationRequest.prototype['order'] = undefined;






export default OrderValidationRequest;

