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
import CartItemAttribute from './CartItemAttribute';
import CartItemMultimedia from './CartItemMultimedia';
import CartItemOption from './CartItemOption';
import CartItemPhysical from './CartItemPhysical';
import CartItemProperty from './CartItemProperty';
import CartItemVariationSelection from './CartItemVariationSelection';
import CartKitComponentOption from './CartKitComponentOption';
import Currency from './Currency';

/**
 * The CartItem model module.
 * @module com.ultracart.admin.v2.models/CartItem
 * @version 4.1.16
 */
class CartItem {
    /**
     * Constructs a new <code>CartItem</code>.
     * @alias module:com.ultracart.admin.v2.models/CartItem
     */
    constructor() { 
        
        CartItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartItem} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartItem} The populated <code>CartItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartItem();

            if (data.hasOwnProperty('arbitrary_unit_cost')) {
                obj['arbitrary_unit_cost'] = Currency.constructFromObject(data['arbitrary_unit_cost']);
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], [CartItemAttribute]);
            }
            if (data.hasOwnProperty('auto_order_schedule')) {
                obj['auto_order_schedule'] = ApiClient.convertToType(data['auto_order_schedule'], 'String');
            }
            if (data.hasOwnProperty('default_image_url')) {
                obj['default_image_url'] = ApiClient.convertToType(data['default_image_url'], 'String');
            }
            if (data.hasOwnProperty('default_thumbnail_url')) {
                obj['default_thumbnail_url'] = ApiClient.convertToType(data['default_thumbnail_url'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('discount')) {
                obj['discount'] = Currency.constructFromObject(data['discount']);
            }
            if (data.hasOwnProperty('extended_description')) {
                obj['extended_description'] = ApiClient.convertToType(data['extended_description'], 'String');
            }
            if (data.hasOwnProperty('item_id')) {
                obj['item_id'] = ApiClient.convertToType(data['item_id'], 'String');
            }
            if (data.hasOwnProperty('item_oid')) {
                obj['item_oid'] = ApiClient.convertToType(data['item_oid'], 'Number');
            }
            if (data.hasOwnProperty('kit')) {
                obj['kit'] = ApiClient.convertToType(data['kit'], 'Boolean');
            }
            if (data.hasOwnProperty('kit_component_options')) {
                obj['kit_component_options'] = ApiClient.convertToType(data['kit_component_options'], [CartKitComponentOption]);
            }
            if (data.hasOwnProperty('manufacturer_suggested_retail_price')) {
                obj['manufacturer_suggested_retail_price'] = Currency.constructFromObject(data['manufacturer_suggested_retail_price']);
            }
            if (data.hasOwnProperty('maximum_quantity')) {
                obj['maximum_quantity'] = ApiClient.convertToType(data['maximum_quantity'], 'Number');
            }
            if (data.hasOwnProperty('minimum_quantity')) {
                obj['minimum_quantity'] = ApiClient.convertToType(data['minimum_quantity'], 'Number');
            }
            if (data.hasOwnProperty('multimedia')) {
                obj['multimedia'] = ApiClient.convertToType(data['multimedia'], [CartItemMultimedia]);
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], [CartItemOption]);
            }
            if (data.hasOwnProperty('phsyical')) {
                obj['phsyical'] = CartItemPhysical.constructFromObject(data['phsyical']);
            }
            if (data.hasOwnProperty('position')) {
                obj['position'] = ApiClient.convertToType(data['position'], 'Number');
            }
            if (data.hasOwnProperty('preorder')) {
                obj['preorder'] = ApiClient.convertToType(data['preorder'], 'Boolean');
            }
            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], [CartItemProperty]);
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('schedules')) {
                obj['schedules'] = ApiClient.convertToType(data['schedules'], ['String']);
            }
            if (data.hasOwnProperty('total_cost')) {
                obj['total_cost'] = Currency.constructFromObject(data['total_cost']);
            }
            if (data.hasOwnProperty('total_cost_with_discount')) {
                obj['total_cost_with_discount'] = Currency.constructFromObject(data['total_cost_with_discount']);
            }
            if (data.hasOwnProperty('unit_cost')) {
                obj['unit_cost'] = Currency.constructFromObject(data['unit_cost']);
            }
            if (data.hasOwnProperty('unit_cost_with_discount')) {
                obj['unit_cost_with_discount'] = Currency.constructFromObject(data['unit_cost_with_discount']);
            }
            if (data.hasOwnProperty('upsell')) {
                obj['upsell'] = ApiClient.convertToType(data['upsell'], 'Boolean');
            }
            if (data.hasOwnProperty('variations')) {
                obj['variations'] = ApiClient.convertToType(data['variations'], [CartItemVariationSelection]);
            }
            if (data.hasOwnProperty('view_url')) {
                obj['view_url'] = ApiClient.convertToType(data['view_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} arbitrary_unit_cost
 */
CartItem.prototype['arbitrary_unit_cost'] = undefined;

/**
 * Attributes
 * @member {Array.<module:com.ultracart.admin.v2.models/CartItemAttribute>} attributes
 */
CartItem.prototype['attributes'] = undefined;

/**
 * Auto order schedule the customer selected
 * @member {String} auto_order_schedule
 */
CartItem.prototype['auto_order_schedule'] = undefined;

/**
 * URL to the default multimedia image
 * @member {String} default_image_url
 */
CartItem.prototype['default_image_url'] = undefined;

/**
 * URL to the default multimedia thumbnail
 * @member {String} default_thumbnail_url
 */
CartItem.prototype['default_thumbnail_url'] = undefined;

/**
 * Description of the item
 * @member {String} description
 */
CartItem.prototype['description'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} discount
 */
CartItem.prototype['discount'] = undefined;

/**
 * Extended description of the item
 * @member {String} extended_description
 */
CartItem.prototype['extended_description'] = undefined;

/**
 * Item ID
 * @member {String} item_id
 */
CartItem.prototype['item_id'] = undefined;

/**
 * Item object identifier
 * @member {Number} item_oid
 */
CartItem.prototype['item_oid'] = undefined;

/**
 * True if this item is a kit
 * @member {Boolean} kit
 */
CartItem.prototype['kit'] = undefined;

/**
 * Options associated with the kit components
 * @member {Array.<module:com.ultracart.admin.v2.models/CartKitComponentOption>} kit_component_options
 */
CartItem.prototype['kit_component_options'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} manufacturer_suggested_retail_price
 */
CartItem.prototype['manufacturer_suggested_retail_price'] = undefined;

/**
 * Maximum quantity the customer can purchase
 * @member {Number} maximum_quantity
 */
CartItem.prototype['maximum_quantity'] = undefined;

/**
 * Minimum quantity the customer can purchase
 * @member {Number} minimum_quantity
 */
CartItem.prototype['minimum_quantity'] = undefined;

/**
 * Multimedia
 * @member {Array.<module:com.ultracart.admin.v2.models/CartItemMultimedia>} multimedia
 */
CartItem.prototype['multimedia'] = undefined;

/**
 * Options
 * @member {Array.<module:com.ultracart.admin.v2.models/CartItemOption>} options
 */
CartItem.prototype['options'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/CartItemPhysical} phsyical
 */
CartItem.prototype['phsyical'] = undefined;

/**
 * Position of the item in the cart
 * @member {Number} position
 */
CartItem.prototype['position'] = undefined;

/**
 * True if this item is on pre-order
 * @member {Boolean} preorder
 */
CartItem.prototype['preorder'] = undefined;

/**
 * Properties associated with the item
 * @member {Array.<module:com.ultracart.admin.v2.models/CartItemProperty>} properties
 */
CartItem.prototype['properties'] = undefined;

/**
 * quantity
 * @member {Number} quantity
 */
CartItem.prototype['quantity'] = undefined;

/**
 * Customer selectable auto order schedules
 * @member {Array.<String>} schedules
 */
CartItem.prototype['schedules'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} total_cost
 */
CartItem.prototype['total_cost'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} total_cost_with_discount
 */
CartItem.prototype['total_cost_with_discount'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} unit_cost
 */
CartItem.prototype['unit_cost'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} unit_cost_with_discount
 */
CartItem.prototype['unit_cost_with_discount'] = undefined;

/**
 * True if this item was added to the cart as part of an upsell
 * @member {Boolean} upsell
 */
CartItem.prototype['upsell'] = undefined;

/**
 * Variations
 * @member {Array.<module:com.ultracart.admin.v2.models/CartItemVariationSelection>} variations
 */
CartItem.prototype['variations'] = undefined;

/**
 * URL to view the product on the site
 * @member {String} view_url
 */
CartItem.prototype['view_url'] = undefined;






export default CartItem;

