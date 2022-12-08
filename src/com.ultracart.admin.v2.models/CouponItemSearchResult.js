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
 * The CouponItemSearchResult model module.
 * @module com.ultracart.admin.v2.models/CouponItemSearchResult
 * @version 4.0.94-RC
 */
class CouponItemSearchResult {
    /**
     * Constructs a new <code>CouponItemSearchResult</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponItemSearchResult
     */
    constructor() { 
        
        CouponItemSearchResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponItemSearchResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponItemSearchResult} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponItemSearchResult} The populated <code>CouponItemSearchResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponItemSearchResult();

            if (data.hasOwnProperty('cost')) {
                obj['cost'] = ApiClient.convertToType(data['cost'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('manufacturer_name')) {
                obj['manufacturer_name'] = ApiClient.convertToType(data['manufacturer_name'], 'String');
            }
            if (data.hasOwnProperty('manufacturer_sku')) {
                obj['manufacturer_sku'] = ApiClient.convertToType(data['manufacturer_sku'], 'String');
            }
            if (data.hasOwnProperty('merchant_item_id')) {
                obj['merchant_item_id'] = ApiClient.convertToType(data['merchant_item_id'], 'String');
            }
            if (data.hasOwnProperty('merchant_item_oid')) {
                obj['merchant_item_oid'] = ApiClient.convertToType(data['merchant_item_oid'], 'Number');
            }
            if (data.hasOwnProperty('score')) {
                obj['score'] = ApiClient.convertToType(data['score'], 'String');
            }
            if (data.hasOwnProperty('thumbnail_url')) {
                obj['thumbnail_url'] = ApiClient.convertToType(data['thumbnail_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The cost of this item.
 * @member {String} cost
 */
CouponItemSearchResult.prototype['cost'] = undefined;

/**
 * A human readable description of this item.
 * @member {String} description
 */
CouponItemSearchResult.prototype['description'] = undefined;

/**
 * The manufacturer of this item.
 * @member {String} manufacturer_name
 */
CouponItemSearchResult.prototype['manufacturer_name'] = undefined;

/**
 * The manufacturer sku of this item.
 * @member {String} manufacturer_sku
 */
CouponItemSearchResult.prototype['manufacturer_sku'] = undefined;

/**
 * The merchant item identifier, which is unique for this merchant, but not across all of UltraCart.
 * @member {String} merchant_item_id
 */
CouponItemSearchResult.prototype['merchant_item_id'] = undefined;

/**
 * The unique internal identifier used by UltraCart to manage this item.
 * @member {Number} merchant_item_oid
 */
CouponItemSearchResult.prototype['merchant_item_oid'] = undefined;

/**
 * The search score of this item.  Larger scores mean more accurate matches against the search term.
 * @member {String} score
 */
CouponItemSearchResult.prototype['score'] = undefined;

/**
 * A url for displaying a thumbnail of this item
 * @member {String} thumbnail_url
 */
CouponItemSearchResult.prototype['thumbnail_url'] = undefined;






export default CouponItemSearchResult;

