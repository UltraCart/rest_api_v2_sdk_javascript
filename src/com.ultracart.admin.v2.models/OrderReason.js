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
 * The OrderReason model module.
 * @module com.ultracart.admin.v2.models/OrderReason
 * @version 4.0.159
 */
class OrderReason {
    /**
     * Constructs a new <code>OrderReason</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderReason
     */
    constructor() { 
        
        OrderReason.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderReason</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderReason} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderReason} The populated <code>OrderReason</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderReason();

            if (data.hasOwnProperty('default_reason')) {
                obj['default_reason'] = ApiClient.convertToType(data['default_reason'], 'Boolean');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Default reason
 * @member {Boolean} default_reason
 */
OrderReason.prototype['default_reason'] = undefined;

/**
 * Reason description.  This is the friendly description of the reason that should be displayed to the user.
 * @member {String} description
 */
OrderReason.prototype['description'] = undefined;

/**
 * Reason value.  This is what should be submitted with a refund operation.
 * @member {String} value
 */
OrderReason.prototype['value'] = undefined;






export default OrderReason;

