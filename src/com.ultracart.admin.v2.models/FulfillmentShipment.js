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
 * The FulfillmentShipment model module.
 * @module com.ultracart.admin.v2.models/FulfillmentShipment
 * @version 4.0.102-RC
 */
class FulfillmentShipment {
    /**
     * Constructs a new <code>FulfillmentShipment</code>.
     * @alias module:com.ultracart.admin.v2.models/FulfillmentShipment
     */
    constructor() { 
        
        FulfillmentShipment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FulfillmentShipment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/FulfillmentShipment} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/FulfillmentShipment} The populated <code>FulfillmentShipment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FulfillmentShipment();

            if (data.hasOwnProperty('fulfillment_fee')) {
                obj['fulfillment_fee'] = ApiClient.convertToType(data['fulfillment_fee'], 'Number');
            }
            if (data.hasOwnProperty('order_id')) {
                obj['order_id'] = ApiClient.convertToType(data['order_id'], 'String');
            }
            if (data.hasOwnProperty('package_cost')) {
                obj['package_cost'] = ApiClient.convertToType(data['package_cost'], 'Number');
            }
            if (data.hasOwnProperty('shipping_cost')) {
                obj['shipping_cost'] = ApiClient.convertToType(data['shipping_cost'], 'Number');
            }
            if (data.hasOwnProperty('tracking_numbers')) {
                obj['tracking_numbers'] = ApiClient.convertToType(data['tracking_numbers'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Fees charged by the fulfillment company other than the shipping cost to process the order.
 * @member {Number} fulfillment_fee
 */
FulfillmentShipment.prototype['fulfillment_fee'] = undefined;

/**
 * Order ID that was shipped
 * @member {String} order_id
 */
FulfillmentShipment.prototype['order_id'] = undefined;

/**
 * The cost of the packaging used to sent this shipment
 * @member {Number} package_cost
 */
FulfillmentShipment.prototype['package_cost'] = undefined;

/**
 * The actual total cost of shipping this order
 * @member {Number} shipping_cost
 */
FulfillmentShipment.prototype['shipping_cost'] = undefined;

/**
 * Tracking numbers associated with the shipment
 * @member {Array.<String>} tracking_numbers
 */
FulfillmentShipment.prototype['tracking_numbers'] = undefined;






export default FulfillmentShipment;

