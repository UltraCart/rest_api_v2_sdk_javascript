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
import ItemPricingTierDiscount from './ItemPricingTierDiscount';
import ItemPricingTierLimit from './ItemPricingTierLimit';

/**
 * The ItemPricingTier model module.
 * @module com.ultracart.admin.v2.models/ItemPricingTier
 * @version 4.0.245
 */
class ItemPricingTier {
    /**
     * Constructs a new <code>ItemPricingTier</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemPricingTier
     */
    constructor() { 
        
        ItemPricingTier.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemPricingTier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemPricingTier} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemPricingTier} The populated <code>ItemPricingTier</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemPricingTier();

            if (data.hasOwnProperty('default_tier')) {
                obj['default_tier'] = ApiClient.convertToType(data['default_tier'], 'Boolean');
            }
            if (data.hasOwnProperty('discounts')) {
                obj['discounts'] = ApiClient.convertToType(data['discounts'], [ItemPricingTierDiscount]);
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ItemPricingTierLimit.constructFromObject(data['limit']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('pricing_tier_oid')) {
                obj['pricing_tier_oid'] = ApiClient.convertToType(data['pricing_tier_oid'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * True if this is the default tier
 * @member {Boolean} default_tier
 */
ItemPricingTier.prototype['default_tier'] = undefined;

/**
 * Discounts
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemPricingTierDiscount>} discounts
 */
ItemPricingTier.prototype['discounts'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ItemPricingTierLimit} limit
 */
ItemPricingTier.prototype['limit'] = undefined;

/**
 * Pricing tier name
 * @member {String} name
 */
ItemPricingTier.prototype['name'] = undefined;

/**
 * Pricing tier object identifier
 * @member {Number} pricing_tier_oid
 */
ItemPricingTier.prototype['pricing_tier_oid'] = undefined;






export default ItemPricingTier;

