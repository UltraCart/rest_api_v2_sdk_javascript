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
import ItemEbayMarketListing from './ItemEbayMarketListing';

/**
 * The ItemEbayMarketPlaceAnalysis model module.
 * @module com.ultracart.admin.v2.models/ItemEbayMarketPlaceAnalysis
 * @version 4.0.141
 */
class ItemEbayMarketPlaceAnalysis {
    /**
     * Constructs a new <code>ItemEbayMarketPlaceAnalysis</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemEbayMarketPlaceAnalysis
     */
    constructor() { 
        
        ItemEbayMarketPlaceAnalysis.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemEbayMarketPlaceAnalysis</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemEbayMarketPlaceAnalysis} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemEbayMarketPlaceAnalysis} The populated <code>ItemEbayMarketPlaceAnalysis</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemEbayMarketPlaceAnalysis();

            if (data.hasOwnProperty('adjusted_price')) {
                obj['adjusted_price'] = ApiClient.convertToType(data['adjusted_price'], 'Number');
            }
            if (data.hasOwnProperty('adjusted_shipping')) {
                obj['adjusted_shipping'] = ApiClient.convertToType(data['adjusted_shipping'], 'Number');
            }
            if (data.hasOwnProperty('adjusted_total')) {
                obj['adjusted_total'] = ApiClient.convertToType(data['adjusted_total'], 'Number');
            }
            if (data.hasOwnProperty('cogs')) {
                obj['cogs'] = ApiClient.convertToType(data['cogs'], 'Number');
            }
            if (data.hasOwnProperty('final_value_fee')) {
                obj['final_value_fee'] = ApiClient.convertToType(data['final_value_fee'], 'Number');
            }
            if (data.hasOwnProperty('minimum_advertised_price')) {
                obj['minimum_advertised_price'] = ApiClient.convertToType(data['minimum_advertised_price'], 'Number');
            }
            if (data.hasOwnProperty('other_listings')) {
                obj['other_listings'] = ApiClient.convertToType(data['other_listings'], [ItemEbayMarketListing]);
            }
            if (data.hasOwnProperty('our_listing')) {
                obj['our_listing'] = ItemEbayMarketListing.constructFromObject(data['our_listing']);
            }
            if (data.hasOwnProperty('overhead')) {
                obj['overhead'] = ApiClient.convertToType(data['overhead'], 'Number');
            }
            if (data.hasOwnProperty('profit_potential')) {
                obj['profit_potential'] = ApiClient.convertToType(data['profit_potential'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Adjusted price
 * @member {Number} adjusted_price
 */
ItemEbayMarketPlaceAnalysis.prototype['adjusted_price'] = undefined;

/**
 * Adjusted shipping
 * @member {Number} adjusted_shipping
 */
ItemEbayMarketPlaceAnalysis.prototype['adjusted_shipping'] = undefined;

/**
 * Adjusted total
 * @member {Number} adjusted_total
 */
ItemEbayMarketPlaceAnalysis.prototype['adjusted_total'] = undefined;

/**
 * Cost of goods sold
 * @member {Number} cogs
 */
ItemEbayMarketPlaceAnalysis.prototype['cogs'] = undefined;

/**
 * Final value fee
 * @member {Number} final_value_fee
 */
ItemEbayMarketPlaceAnalysis.prototype['final_value_fee'] = undefined;

/**
 * Minimum advertised price
 * @member {Number} minimum_advertised_price
 */
ItemEbayMarketPlaceAnalysis.prototype['minimum_advertised_price'] = undefined;

/**
 * Other listings
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemEbayMarketListing>} other_listings
 */
ItemEbayMarketPlaceAnalysis.prototype['other_listings'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ItemEbayMarketListing} our_listing
 */
ItemEbayMarketPlaceAnalysis.prototype['our_listing'] = undefined;

/**
 * Overhead
 * @member {Number} overhead
 */
ItemEbayMarketPlaceAnalysis.prototype['overhead'] = undefined;

/**
 * Profit potential
 * @member {Number} profit_potential
 */
ItemEbayMarketPlaceAnalysis.prototype['profit_potential'] = undefined;






export default ItemEbayMarketPlaceAnalysis;

