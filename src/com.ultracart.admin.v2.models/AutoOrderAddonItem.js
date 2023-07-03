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
import AutoOrderAddonItemOption from './AutoOrderAddonItemOption';

/**
 * The AutoOrderAddonItem model module.
 * @module com.ultracart.admin.v2.models/AutoOrderAddonItem
 * @version 4.0.165
 */
class AutoOrderAddonItem {
    /**
     * Constructs a new <code>AutoOrderAddonItem</code>.
     * @alias module:com.ultracart.admin.v2.models/AutoOrderAddonItem
     */
    constructor() { 
        
        AutoOrderAddonItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AutoOrderAddonItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/AutoOrderAddonItem} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/AutoOrderAddonItem} The populated <code>AutoOrderAddonItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AutoOrderAddonItem();

            if (data.hasOwnProperty('arbitrary_unit_cost')) {
                obj['arbitrary_unit_cost'] = ApiClient.convertToType(data['arbitrary_unit_cost'], 'Number');
            }
            if (data.hasOwnProperty('free_shipping')) {
                obj['free_shipping'] = ApiClient.convertToType(data['free_shipping'], 'Boolean');
            }
            if (data.hasOwnProperty('item_id')) {
                obj['item_id'] = ApiClient.convertToType(data['item_id'], 'String');
            }
            if (data.hasOwnProperty('next_x_orders')) {
                obj['next_x_orders'] = ApiClient.convertToType(data['next_x_orders'], 'Number');
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], [AutoOrderAddonItemOption]);
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} arbitrary_unit_cost
 */
AutoOrderAddonItem.prototype['arbitrary_unit_cost'] = undefined;

/**
 * @member {Boolean} free_shipping
 */
AutoOrderAddonItem.prototype['free_shipping'] = undefined;

/**
 * @member {String} item_id
 */
AutoOrderAddonItem.prototype['item_id'] = undefined;

/**
 * @member {Number} next_x_orders
 */
AutoOrderAddonItem.prototype['next_x_orders'] = undefined;

/**
 * Options associated with this item
 * @member {Array.<module:com.ultracart.admin.v2.models/AutoOrderAddonItemOption>} options
 */
AutoOrderAddonItem.prototype['options'] = undefined;

/**
 * @member {Number} quantity
 */
AutoOrderAddonItem.prototype['quantity'] = undefined;






export default AutoOrderAddonItem;

