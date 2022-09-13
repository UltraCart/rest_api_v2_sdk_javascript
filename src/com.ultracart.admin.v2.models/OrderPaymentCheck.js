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
 * The OrderPaymentCheck model module.
 * @module com.ultracart.admin.v2.models/OrderPaymentCheck
 * @version 4.0.63-RC
 */
class OrderPaymentCheck {
    /**
     * Constructs a new <code>OrderPaymentCheck</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderPaymentCheck
     */
    constructor() { 
        
        OrderPaymentCheck.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderPaymentCheck</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderPaymentCheck} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderPaymentCheck} The populated <code>OrderPaymentCheck</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderPaymentCheck();

            if (data.hasOwnProperty('check_number')) {
                obj['check_number'] = ApiClient.convertToType(data['check_number'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Check number
 * @member {String} check_number
 */
OrderPaymentCheck.prototype['check_number'] = undefined;






export default OrderPaymentCheck;

