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
import ItemPricingTier from './ItemPricingTier';

/**
 * The ItemPricing model module.
 * @module com.ultracart.admin.v2.models/ItemPricing
 * @version 4.1.16
 */
class ItemPricing {
    /**
     * Constructs a new <code>ItemPricing</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemPricing
     */
    constructor() { 
        
        ItemPricing.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemPricing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemPricing} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemPricing} The populated <code>ItemPricing</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemPricing();

            if (data.hasOwnProperty('allow_arbitrary_cost')) {
                obj['allow_arbitrary_cost'] = ApiClient.convertToType(data['allow_arbitrary_cost'], 'Boolean');
            }
            if (data.hasOwnProperty('arbitrary_cost_velocity_code')) {
                obj['arbitrary_cost_velocity_code'] = ApiClient.convertToType(data['arbitrary_cost_velocity_code'], 'String');
            }
            if (data.hasOwnProperty('auto_order_cost')) {
                obj['auto_order_cost'] = ApiClient.convertToType(data['auto_order_cost'], 'Number');
            }
            if (data.hasOwnProperty('automatic_pricing_tier_name')) {
                obj['automatic_pricing_tier_name'] = ApiClient.convertToType(data['automatic_pricing_tier_name'], 'String');
            }
            if (data.hasOwnProperty('automatic_pricing_tier_oid')) {
                obj['automatic_pricing_tier_oid'] = ApiClient.convertToType(data['automatic_pricing_tier_oid'], 'Number');
            }
            if (data.hasOwnProperty('cogs')) {
                obj['cogs'] = ApiClient.convertToType(data['cogs'], 'Number');
            }
            if (data.hasOwnProperty('cost')) {
                obj['cost'] = ApiClient.convertToType(data['cost'], 'Number');
            }
            if (data.hasOwnProperty('currency_code')) {
                obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
            }
            if (data.hasOwnProperty('manufacturer_suggested_retail_price')) {
                obj['manufacturer_suggested_retail_price'] = ApiClient.convertToType(data['manufacturer_suggested_retail_price'], 'Number');
            }
            if (data.hasOwnProperty('maximum_arbitrary_cost')) {
                obj['maximum_arbitrary_cost'] = ApiClient.convertToType(data['maximum_arbitrary_cost'], 'Number');
            }
            if (data.hasOwnProperty('minimum_advertised_price')) {
                obj['minimum_advertised_price'] = ApiClient.convertToType(data['minimum_advertised_price'], 'Number');
            }
            if (data.hasOwnProperty('minimum_arbitrary_cost')) {
                obj['minimum_arbitrary_cost'] = ApiClient.convertToType(data['minimum_arbitrary_cost'], 'Number');
            }
            if (data.hasOwnProperty('mix_and_match_group')) {
                obj['mix_and_match_group'] = ApiClient.convertToType(data['mix_and_match_group'], 'String');
            }
            if (data.hasOwnProperty('mix_and_match_group_oid')) {
                obj['mix_and_match_group_oid'] = ApiClient.convertToType(data['mix_and_match_group_oid'], 'Number');
            }
            if (data.hasOwnProperty('sale_cost')) {
                obj['sale_cost'] = ApiClient.convertToType(data['sale_cost'], 'Number');
            }
            if (data.hasOwnProperty('sale_end')) {
                obj['sale_end'] = ApiClient.convertToType(data['sale_end'], 'String');
            }
            if (data.hasOwnProperty('sale_start')) {
                obj['sale_start'] = ApiClient.convertToType(data['sale_start'], 'String');
            }
            if (data.hasOwnProperty('tiers')) {
                obj['tiers'] = ApiClient.convertToType(data['tiers'], [ItemPricingTier]);
            }
        }
        return obj;
    }


}

/**
 * Allow arbitrary cost
 * @member {Boolean} allow_arbitrary_cost
 */
ItemPricing.prototype['allow_arbitrary_cost'] = undefined;

/**
 * Arbitrary cost velocity code
 * @member {String} arbitrary_cost_velocity_code
 */
ItemPricing.prototype['arbitrary_cost_velocity_code'] = undefined;

/**
 * Cost if customer selects to receive item on auto order.  Set to zero to delete.
 * @member {Number} auto_order_cost
 */
ItemPricing.prototype['auto_order_cost'] = undefined;

/**
 * Automatic pricing tier name
 * @member {String} automatic_pricing_tier_name
 */
ItemPricing.prototype['automatic_pricing_tier_name'] = undefined;

/**
 * Automatic pricing tier object identifier
 * @member {Number} automatic_pricing_tier_oid
 */
ItemPricing.prototype['automatic_pricing_tier_oid'] = undefined;

/**
 * Cost of goods sold
 * @member {Number} cogs
 */
ItemPricing.prototype['cogs'] = undefined;

/**
 * Cost
 * @member {Number} cost
 */
ItemPricing.prototype['cost'] = undefined;

/**
 * Currency code
 * @member {String} currency_code
 */
ItemPricing.prototype['currency_code'] = undefined;

/**
 * Manufacturer suggested retail price
 * @member {Number} manufacturer_suggested_retail_price
 */
ItemPricing.prototype['manufacturer_suggested_retail_price'] = undefined;

/**
 * Maximum arbitrary cost
 * @member {Number} maximum_arbitrary_cost
 */
ItemPricing.prototype['maximum_arbitrary_cost'] = undefined;

/**
 * Minimum advertised price
 * @member {Number} minimum_advertised_price
 */
ItemPricing.prototype['minimum_advertised_price'] = undefined;

/**
 * Minimum arbitrary cost
 * @member {Number} minimum_arbitrary_cost
 */
ItemPricing.prototype['minimum_arbitrary_cost'] = undefined;

/**
 * Mix and match group
 * @member {String} mix_and_match_group
 */
ItemPricing.prototype['mix_and_match_group'] = undefined;

/**
 * Mix and match group object identifier
 * @member {Number} mix_and_match_group_oid
 */
ItemPricing.prototype['mix_and_match_group_oid'] = undefined;

/**
 * Sale cost
 * @member {Number} sale_cost
 */
ItemPricing.prototype['sale_cost'] = undefined;

/**
 * Sale end
 * @member {String} sale_end
 */
ItemPricing.prototype['sale_end'] = undefined;

/**
 * Sale start
 * @member {String} sale_start
 */
ItemPricing.prototype['sale_start'] = undefined;

/**
 * Tiers
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemPricingTier>} tiers
 */
ItemPricing.prototype['tiers'] = undefined;






export default ItemPricing;

