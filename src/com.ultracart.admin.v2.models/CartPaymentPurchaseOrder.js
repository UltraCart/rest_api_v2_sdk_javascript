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
 * The CartPaymentPurchaseOrder model module.
 * @module com.ultracart.admin.v2.models/CartPaymentPurchaseOrder
 * @version 4.0.92-RC
 */
class CartPaymentPurchaseOrder {
    /**
     * Constructs a new <code>CartPaymentPurchaseOrder</code>.
     * @alias module:com.ultracart.admin.v2.models/CartPaymentPurchaseOrder
     */
    constructor() { 
        
        CartPaymentPurchaseOrder.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartPaymentPurchaseOrder</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartPaymentPurchaseOrder} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartPaymentPurchaseOrder} The populated <code>CartPaymentPurchaseOrder</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartPaymentPurchaseOrder();

            if (data.hasOwnProperty('purchase_order_number')) {
                obj['purchase_order_number'] = ApiClient.convertToType(data['purchase_order_number'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Purchase order number
 * @member {String} purchase_order_number
 */
CartPaymentPurchaseOrder.prototype['purchase_order_number'] = undefined;






export default CartPaymentPurchaseOrder;

