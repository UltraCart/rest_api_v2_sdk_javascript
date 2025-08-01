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
 * The OrderItemEdiLot model module.
 * @module com.ultracart.admin.v2.models/OrderItemEdiLot
 * @version 4.1.16
 */
class OrderItemEdiLot {
    /**
     * Constructs a new <code>OrderItemEdiLot</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderItemEdiLot
     */
    constructor() { 
        
        OrderItemEdiLot.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderItemEdiLot</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderItemEdiLot} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderItemEdiLot} The populated <code>OrderItemEdiLot</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderItemEdiLot();

            if (data.hasOwnProperty('lot_expiration')) {
                obj['lot_expiration'] = ApiClient.convertToType(data['lot_expiration'], 'String');
            }
            if (data.hasOwnProperty('lot_number')) {
                obj['lot_number'] = ApiClient.convertToType(data['lot_number'], 'String');
            }
            if (data.hasOwnProperty('lot_quantity')) {
                obj['lot_quantity'] = ApiClient.convertToType(data['lot_quantity'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Log expiration
 * @member {String} lot_expiration
 */
OrderItemEdiLot.prototype['lot_expiration'] = undefined;

/**
 * Lot number
 * @member {String} lot_number
 */
OrderItemEdiLot.prototype['lot_number'] = undefined;

/**
 * Lot quantity
 * @member {Number} lot_quantity
 */
OrderItemEdiLot.prototype['lot_quantity'] = undefined;






export default OrderItemEdiLot;

