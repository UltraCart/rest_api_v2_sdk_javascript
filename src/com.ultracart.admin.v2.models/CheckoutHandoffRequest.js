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
import Cart from './Cart';

/**
 * The CheckoutHandoffRequest model module.
 * @module com.ultracart.admin.v2.models/CheckoutHandoffRequest
 * @version 4.0.188
 */
class CheckoutHandoffRequest {
    /**
     * Constructs a new <code>CheckoutHandoffRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/CheckoutHandoffRequest
     */
    constructor() { 
        
        CheckoutHandoffRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CheckoutHandoffRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CheckoutHandoffRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CheckoutHandoffRequest} The populated <code>CheckoutHandoffRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CheckoutHandoffRequest();

            if (data.hasOwnProperty('cart')) {
                obj['cart'] = Cart.constructFromObject(data['cart']);
            }
            if (data.hasOwnProperty('error_parameter_name')) {
                obj['error_parameter_name'] = ApiClient.convertToType(data['error_parameter_name'], 'String');
            }
            if (data.hasOwnProperty('error_return_url')) {
                obj['error_return_url'] = ApiClient.convertToType(data['error_return_url'], 'String');
            }
            if (data.hasOwnProperty('operation')) {
                obj['operation'] = ApiClient.convertToType(data['operation'], 'String');
            }
            if (data.hasOwnProperty('paypal_maximum_upsell_revenue')) {
                obj['paypal_maximum_upsell_revenue'] = ApiClient.convertToType(data['paypal_maximum_upsell_revenue'], 'Number');
            }
            if (data.hasOwnProperty('paypal_return_url')) {
                obj['paypal_return_url'] = ApiClient.convertToType(data['paypal_return_url'], 'String');
            }
            if (data.hasOwnProperty('secure_host_name')) {
                obj['secure_host_name'] = ApiClient.convertToType(data['secure_host_name'], 'String');
            }
            if (data.hasOwnProperty('ucacid')) {
                obj['ucacid'] = ApiClient.convertToType(data['ucacid'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/Cart} cart
 */
CheckoutHandoffRequest.prototype['cart'] = undefined;

/**
 * If any error happen during the processing on the UltraCart side, the browser will be redirected to your error_return_url with the error passed in this parameter name.
 * @member {String} error_parameter_name
 */
CheckoutHandoffRequest.prototype['error_parameter_name'] = undefined;

/**
 * The URL to return the browser to if there are processing errors on the UltraCart side.
 * @member {String} error_return_url
 */
CheckoutHandoffRequest.prototype['error_return_url'] = undefined;

/**
 * The type of handoff operation to perform
 * @member {module:com.ultracart.admin.v2.models/CheckoutHandoffRequest.OperationEnum} operation
 */
CheckoutHandoffRequest.prototype['operation'] = undefined;

/**
 * The maximum amount of revenue that you think the customer could add during a custom upsell after sequence on your checkout.
 * @member {Number} paypal_maximum_upsell_revenue
 */
CheckoutHandoffRequest.prototype['paypal_maximum_upsell_revenue'] = undefined;

/**
 * The URl to return the customers browser to after they have completed the PayPal process.
 * @member {String} paypal_return_url
 */
CheckoutHandoffRequest.prototype['paypal_return_url'] = undefined;

/**
 * The desired secure host name to perform the handoff on.  This should match the desired StoreFront.
 * @member {String} secure_host_name
 */
CheckoutHandoffRequest.prototype['secure_host_name'] = undefined;

/**
 * The UltraCart Analytics cookie value.  Populate this if you're handing off from a different domain than the checkout.
 * @member {String} ucacid
 */
CheckoutHandoffRequest.prototype['ucacid'] = undefined;





/**
 * Allowed values for the <code>operation</code> property.
 * @enum {String}
 * @readonly
 */
CheckoutHandoffRequest['OperationEnum'] = {

    /**
     * value: "checkout"
     * @const
     */
    "checkout": "checkout",

    /**
     * value: "payPal"
     * @const
     */
    "payPal": "payPal",

    /**
     * value: "payPalCredit"
     * @const
     */
    "payPalCredit": "payPalCredit",

    /**
     * value: "view"
     * @const
     */
    "view": "view",

    /**
     * value: "affirm"
     * @const
     */
    "affirm": "affirm",

    /**
     * value: "sezzle"
     * @const
     */
    "sezzle": "sezzle"
};



export default CheckoutHandoffRequest;

