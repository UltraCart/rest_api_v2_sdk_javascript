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
 * The ItemFulfillmentAddon model module.
 * @module com.ultracart.admin.v2.models/ItemFulfillmentAddon
 * @version 4.0.53-RC
 */
class ItemFulfillmentAddon {
    /**
     * Constructs a new <code>ItemFulfillmentAddon</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemFulfillmentAddon
     */
    constructor() { 
        
        ItemFulfillmentAddon.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemFulfillmentAddon</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemFulfillmentAddon} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemFulfillmentAddon} The populated <code>ItemFulfillmentAddon</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemFulfillmentAddon();

            if (data.hasOwnProperty('add_item_id')) {
                obj['add_item_id'] = ApiClient.convertToType(data['add_item_id'], 'String');
            }
            if (data.hasOwnProperty('add_item_oid')) {
                obj['add_item_oid'] = ApiClient.convertToType(data['add_item_oid'], 'Number');
            }
            if (data.hasOwnProperty('once_per_order')) {
                obj['once_per_order'] = ApiClient.convertToType(data['once_per_order'], 'Boolean');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Add Item Id
 * @member {String} add_item_id
 */
ItemFulfillmentAddon.prototype['add_item_id'] = undefined;

/**
 * Add Item object identifier
 * @member {Number} add_item_oid
 */
ItemFulfillmentAddon.prototype['add_item_oid'] = undefined;

/**
 * Quantity
 * @member {Boolean} once_per_order
 */
ItemFulfillmentAddon.prototype['once_per_order'] = undefined;

/**
 * Quantity
 * @member {Number} quantity
 */
ItemFulfillmentAddon.prototype['quantity'] = undefined;






export default ItemFulfillmentAddon;

