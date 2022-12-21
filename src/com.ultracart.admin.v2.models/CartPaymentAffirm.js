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
 * The CartPaymentAffirm model module.
 * @module com.ultracart.admin.v2.models/CartPaymentAffirm
 * @version 4.0.102-RC
 */
class CartPaymentAffirm {
    /**
     * Constructs a new <code>CartPaymentAffirm</code>.
     * @alias module:com.ultracart.admin.v2.models/CartPaymentAffirm
     */
    constructor() { 
        
        CartPaymentAffirm.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartPaymentAffirm</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartPaymentAffirm} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartPaymentAffirm} The populated <code>CartPaymentAffirm</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartPaymentAffirm();

            if (data.hasOwnProperty('affirm_checkout_token')) {
                obj['affirm_checkout_token'] = ApiClient.convertToType(data['affirm_checkout_token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Affirm checkout token
 * @member {String} affirm_checkout_token
 */
CartPaymentAffirm.prototype['affirm_checkout_token'] = undefined;






export default CartPaymentAffirm;

