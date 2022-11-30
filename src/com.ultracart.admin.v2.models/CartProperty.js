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
 * The CartProperty model module.
 * @module com.ultracart.admin.v2.models/CartProperty
 * @version 4.0.90-RC
 */
class CartProperty {
    /**
     * Constructs a new <code>CartProperty</code>.
     * @alias module:com.ultracart.admin.v2.models/CartProperty
     */
    constructor() { 
        
        CartProperty.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartProperty</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartProperty} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartProperty} The populated <code>CartProperty</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartProperty();

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
CartProperty.prototype['display'] = undefined;

/**
 * The date/time that the property expires and is deleted
 * @member {String} expiration_dts
 */
CartProperty.prototype['expiration_dts'] = undefined;

/**
 * Name
 * @member {String} name
 */
CartProperty.prototype['name'] = undefined;

/**
 * Value
 * @member {String} value
 */
CartProperty.prototype['value'] = undefined;






export default CartProperty;

