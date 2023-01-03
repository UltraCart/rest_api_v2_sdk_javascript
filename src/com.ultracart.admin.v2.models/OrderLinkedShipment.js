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
 * The OrderLinkedShipment model module.
 * @module com.ultracart.admin.v2.models/OrderLinkedShipment
 * @version 4.0.105-RC
 */
class OrderLinkedShipment {
    /**
     * Constructs a new <code>OrderLinkedShipment</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderLinkedShipment
     */
    constructor() { 
        
        OrderLinkedShipment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderLinkedShipment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderLinkedShipment} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderLinkedShipment} The populated <code>OrderLinkedShipment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderLinkedShipment();

            if (data.hasOwnProperty('has_linked_shipment')) {
                obj['has_linked_shipment'] = ApiClient.convertToType(data['has_linked_shipment'], 'Boolean');
            }
            if (data.hasOwnProperty('linked_shipment')) {
                obj['linked_shipment'] = ApiClient.convertToType(data['linked_shipment'], 'Boolean');
            }
            if (data.hasOwnProperty('linked_shipment_channel_partner_order_ids')) {
                obj['linked_shipment_channel_partner_order_ids'] = ApiClient.convertToType(data['linked_shipment_channel_partner_order_ids'], ['String']);
            }
            if (data.hasOwnProperty('linked_shipment_order_ids')) {
                obj['linked_shipment_order_ids'] = ApiClient.convertToType(data['linked_shipment_order_ids'], ['String']);
            }
            if (data.hasOwnProperty('linked_shipment_to_order_id')) {
                obj['linked_shipment_to_order_id'] = ApiClient.convertToType(data['linked_shipment_to_order_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * True if this order has child linked shipments
 * @member {Boolean} has_linked_shipment
 */
OrderLinkedShipment.prototype['has_linked_shipment'] = undefined;

/**
 * True if this order is linked to another parent order
 * @member {Boolean} linked_shipment
 */
OrderLinkedShipment.prototype['linked_shipment'] = undefined;

/**
 * The child linked shipment channel partner order ids
 * @member {Array.<String>} linked_shipment_channel_partner_order_ids
 */
OrderLinkedShipment.prototype['linked_shipment_channel_partner_order_ids'] = undefined;

/**
 * The child linked shipment order ids
 * @member {Array.<String>} linked_shipment_order_ids
 */
OrderLinkedShipment.prototype['linked_shipment_order_ids'] = undefined;

/**
 * The parent order id that this one is linked to
 * @member {String} linked_shipment_to_order_id
 */
OrderLinkedShipment.prototype['linked_shipment_to_order_id'] = undefined;






export default OrderLinkedShipment;

