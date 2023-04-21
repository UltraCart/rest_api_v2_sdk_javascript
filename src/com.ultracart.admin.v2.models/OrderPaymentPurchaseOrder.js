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
 * The OrderPaymentPurchaseOrder model module.
 * @module com.ultracart.admin.v2.models/OrderPaymentPurchaseOrder
 * @version 4.0.150
 */
class OrderPaymentPurchaseOrder {
    /**
     * Constructs a new <code>OrderPaymentPurchaseOrder</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderPaymentPurchaseOrder
     */
    constructor() { 
        
        OrderPaymentPurchaseOrder.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderPaymentPurchaseOrder</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderPaymentPurchaseOrder} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderPaymentPurchaseOrder} The populated <code>OrderPaymentPurchaseOrder</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderPaymentPurchaseOrder();

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
OrderPaymentPurchaseOrder.prototype['purchase_order_number'] = undefined;






export default OrderPaymentPurchaseOrder;

