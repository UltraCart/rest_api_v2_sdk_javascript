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
 * The ItemKitComponent model module.
 * @module com.ultracart.admin.v2.models/ItemKitComponent
 * @version 4.0.178
 */
class ItemKitComponent {
    /**
     * Constructs a new <code>ItemKitComponent</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemKitComponent
     */
    constructor() { 
        
        ItemKitComponent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemKitComponent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemKitComponent} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemKitComponent} The populated <code>ItemKitComponent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemKitComponent();

            if (data.hasOwnProperty('component_cost')) {
                obj['component_cost'] = ApiClient.convertToType(data['component_cost'], 'Number');
            }
            if (data.hasOwnProperty('component_description')) {
                obj['component_description'] = ApiClient.convertToType(data['component_description'], 'String');
            }
            if (data.hasOwnProperty('component_merchant_item_id')) {
                obj['component_merchant_item_id'] = ApiClient.convertToType(data['component_merchant_item_id'], 'String');
            }
            if (data.hasOwnProperty('component_merchant_item_oid')) {
                obj['component_merchant_item_oid'] = ApiClient.convertToType(data['component_merchant_item_oid'], 'Number');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Component item cost
 * @member {Number} component_cost
 */
ItemKitComponent.prototype['component_cost'] = undefined;

/**
 * Component item description
 * @member {String} component_description
 */
ItemKitComponent.prototype['component_description'] = undefined;

/**
 * Component item ID
 * @member {String} component_merchant_item_id
 */
ItemKitComponent.prototype['component_merchant_item_id'] = undefined;

/**
 * Component item object identifier
 * @member {Number} component_merchant_item_oid
 */
ItemKitComponent.prototype['component_merchant_item_oid'] = undefined;

/**
 * Quantity
 * @member {Number} quantity
 */
ItemKitComponent.prototype['quantity'] = undefined;






export default ItemKitComponent;

