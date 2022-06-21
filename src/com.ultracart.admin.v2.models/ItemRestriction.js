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
import ItemRestrictionItem from './ItemRestrictionItem';

/**
 * The ItemRestriction model module.
 * @module com.ultracart.admin.v2.models/ItemRestriction
 * @version 4.0.3
 */
class ItemRestriction {
    /**
     * Constructs a new <code>ItemRestriction</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemRestriction
     */
    constructor() { 
        
        ItemRestriction.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemRestriction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemRestriction} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemRestriction} The populated <code>ItemRestriction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemRestriction();

            if (data.hasOwnProperty('exclude_coupon')) {
                obj['exclude_coupon'] = ApiClient.convertToType(data['exclude_coupon'], 'Boolean');
            }
            if (data.hasOwnProperty('exclude_from_free_promotion')) {
                obj['exclude_from_free_promotion'] = ApiClient.convertToType(data['exclude_from_free_promotion'], 'Boolean');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [ItemRestrictionItem]);
            }
            if (data.hasOwnProperty('maximum_quantity')) {
                obj['maximum_quantity'] = ApiClient.convertToType(data['maximum_quantity'], 'Number');
            }
            if (data.hasOwnProperty('minimum_quantity')) {
                obj['minimum_quantity'] = ApiClient.convertToType(data['minimum_quantity'], 'Number');
            }
            if (data.hasOwnProperty('multiple_quantity')) {
                obj['multiple_quantity'] = ApiClient.convertToType(data['multiple_quantity'], 'Number');
            }
            if (data.hasOwnProperty('one_per_customer')) {
                obj['one_per_customer'] = ApiClient.convertToType(data['one_per_customer'], 'Boolean');
            }
            if (data.hasOwnProperty('purchase_separately')) {
                obj['purchase_separately'] = ApiClient.convertToType(data['purchase_separately'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Exclude coupons
 * @member {Boolean} exclude_coupon
 */
ItemRestriction.prototype['exclude_coupon'] = undefined;

/**
 * Exclude from free promotion
 * @member {Boolean} exclude_from_free_promotion
 */
ItemRestriction.prototype['exclude_from_free_promotion'] = undefined;

/**
 * Items
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemRestrictionItem>} items
 */
ItemRestriction.prototype['items'] = undefined;

/**
 * Maximum quantity
 * @member {Number} maximum_quantity
 */
ItemRestriction.prototype['maximum_quantity'] = undefined;

/**
 * Minimum quantity (defaults to 1)
 * @member {Number} minimum_quantity
 */
ItemRestriction.prototype['minimum_quantity'] = undefined;

/**
 * Multiple of quantity
 * @member {Number} multiple_quantity
 */
ItemRestriction.prototype['multiple_quantity'] = undefined;

/**
 * One per customer
 * @member {Boolean} one_per_customer
 */
ItemRestriction.prototype['one_per_customer'] = undefined;

/**
 * Purchase separately
 * @member {Boolean} purchase_separately
 */
ItemRestriction.prototype['purchase_separately'] = undefined;






export default ItemRestriction;

