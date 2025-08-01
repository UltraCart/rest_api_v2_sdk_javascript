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
 * The ItemEbayMarketListing model module.
 * @module com.ultracart.admin.v2.models/ItemEbayMarketListing
 * @version 4.1.16
 */
class ItemEbayMarketListing {
    /**
     * Constructs a new <code>ItemEbayMarketListing</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemEbayMarketListing
     */
    constructor() { 
        
        ItemEbayMarketListing.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemEbayMarketListing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemEbayMarketListing} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemEbayMarketListing} The populated <code>ItemEbayMarketListing</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemEbayMarketListing();

            if (data.hasOwnProperty('auction_id')) {
                obj['auction_id'] = ApiClient.convertToType(data['auction_id'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('seller')) {
                obj['seller'] = ApiClient.convertToType(data['seller'], 'String');
            }
            if (data.hasOwnProperty('shipping')) {
                obj['shipping'] = ApiClient.convertToType(data['shipping'], 'Number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Auction ID
 * @member {String} auction_id
 */
ItemEbayMarketListing.prototype['auction_id'] = undefined;

/**
 * Price
 * @member {Number} price
 */
ItemEbayMarketListing.prototype['price'] = undefined;

/**
 * Seller
 * @member {String} seller
 */
ItemEbayMarketListing.prototype['seller'] = undefined;

/**
 * Shipping
 * @member {Number} shipping
 */
ItemEbayMarketListing.prototype['shipping'] = undefined;

/**
 * Total
 * @member {Number} total
 */
ItemEbayMarketListing.prototype['total'] = undefined;






export default ItemEbayMarketListing;

