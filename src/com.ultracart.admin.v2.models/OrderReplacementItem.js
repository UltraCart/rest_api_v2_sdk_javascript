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
 * The OrderReplacementItem model module.
 * @module com.ultracart.admin.v2.models/OrderReplacementItem
 * @version 4.0.188
 */
class OrderReplacementItem {
    /**
     * Constructs a new <code>OrderReplacementItem</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderReplacementItem
     */
    constructor() { 
        
        OrderReplacementItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderReplacementItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderReplacementItem} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderReplacementItem} The populated <code>OrderReplacementItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderReplacementItem();

            if (data.hasOwnProperty('arbitrary_unit_cost')) {
                obj['arbitrary_unit_cost'] = ApiClient.convertToType(data['arbitrary_unit_cost'], 'Number');
            }
            if (data.hasOwnProperty('merchant_item_id')) {
                obj['merchant_item_id'] = ApiClient.convertToType(data['merchant_item_id'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Cost to charge the customer if specified.  If not specified then the default item cost is used.
 * @member {Number} arbitrary_unit_cost
 */
OrderReplacementItem.prototype['arbitrary_unit_cost'] = undefined;

/**
 * Item ID
 * @member {String} merchant_item_id
 */
OrderReplacementItem.prototype['merchant_item_id'] = undefined;

/**
 * Quantity
 * @member {Number} quantity
 */
OrderReplacementItem.prototype['quantity'] = undefined;






export default OrderReplacementItem;

