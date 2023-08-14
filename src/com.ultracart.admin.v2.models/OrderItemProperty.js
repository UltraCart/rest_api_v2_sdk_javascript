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
 * The OrderItemProperty model module.
 * @module com.ultracart.admin.v2.models/OrderItemProperty
 * @version 4.0.170
 */
class OrderItemProperty {
    /**
     * Constructs a new <code>OrderItemProperty</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderItemProperty
     */
    constructor() { 
        
        OrderItemProperty.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderItemProperty</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderItemProperty} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderItemProperty} The populated <code>OrderItemProperty</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderItemProperty();

            if (data.hasOwnProperty('display')) {
                obj['display'] = ApiClient.convertToType(data['display'], 'Boolean');
            }
            if (data.hasOwnProperty('expiration_dts')) {
                obj['expiration_dts'] = ApiClient.convertToType(data['expiration_dts'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * True if this property is displayed to the customer
 * @member {Boolean} display
 */
OrderItemProperty.prototype['display'] = undefined;

/**
 * The date/time that the property expires and is deleted
 * @member {String} expiration_dts
 */
OrderItemProperty.prototype['expiration_dts'] = undefined;

/**
 * Name
 * @member {String} name
 */
OrderItemProperty.prototype['name'] = undefined;

/**
 * Value
 * @member {String} value
 */
OrderItemProperty.prototype['value'] = undefined;






export default OrderItemProperty;

