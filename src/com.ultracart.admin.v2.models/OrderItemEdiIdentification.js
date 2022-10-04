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
 * The OrderItemEdiIdentification model module.
 * @module com.ultracart.admin.v2.models/OrderItemEdiIdentification
 * @version 4.0.71-RC
 */
class OrderItemEdiIdentification {
    /**
     * Constructs a new <code>OrderItemEdiIdentification</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderItemEdiIdentification
     */
    constructor() { 
        
        OrderItemEdiIdentification.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderItemEdiIdentification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderItemEdiIdentification} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderItemEdiIdentification} The populated <code>OrderItemEdiIdentification</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderItemEdiIdentification();

            if (data.hasOwnProperty('identification')) {
                obj['identification'] = ApiClient.convertToType(data['identification'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Identification value
 * @member {String} identification
 */
OrderItemEdiIdentification.prototype['identification'] = undefined;

/**
 * Quantity associated with this identifier
 * @member {Number} quantity
 */
OrderItemEdiIdentification.prototype['quantity'] = undefined;






export default OrderItemEdiIdentification;

