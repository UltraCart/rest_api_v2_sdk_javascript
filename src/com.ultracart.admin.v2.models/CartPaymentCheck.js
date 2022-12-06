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
 * The CartPaymentCheck model module.
 * @module com.ultracart.admin.v2.models/CartPaymentCheck
 * @version 4.0.92-RC
 */
class CartPaymentCheck {
    /**
     * Constructs a new <code>CartPaymentCheck</code>.
     * @alias module:com.ultracart.admin.v2.models/CartPaymentCheck
     */
    constructor() { 
        
        CartPaymentCheck.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartPaymentCheck</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartPaymentCheck} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartPaymentCheck} The populated <code>CartPaymentCheck</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartPaymentCheck();

            if (data.hasOwnProperty('check_number')) {
                obj['check_number'] = ApiClient.convertToType(data['check_number'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Check number they are paying with
 * @member {Number} check_number
 */
CartPaymentCheck.prototype['check_number'] = undefined;






export default CartPaymentCheck;

