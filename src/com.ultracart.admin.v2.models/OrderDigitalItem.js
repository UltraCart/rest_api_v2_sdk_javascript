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
 * The OrderDigitalItem model module.
 * @module com.ultracart.admin.v2.models/OrderDigitalItem
 * @version 4.0.179
 */
class OrderDigitalItem {
    /**
     * Constructs a new <code>OrderDigitalItem</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderDigitalItem
     */
    constructor() { 
        
        OrderDigitalItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderDigitalItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderDigitalItem} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderDigitalItem} The populated <code>OrderDigitalItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderDigitalItem();

            if (data.hasOwnProperty('file_size')) {
                obj['file_size'] = ApiClient.convertToType(data['file_size'], 'Number');
            }
            if (data.hasOwnProperty('last_download')) {
                obj['last_download'] = ApiClient.convertToType(data['last_download'], 'String');
            }
            if (data.hasOwnProperty('last_download_ip_address')) {
                obj['last_download_ip_address'] = ApiClient.convertToType(data['last_download_ip_address'], 'String');
            }
            if (data.hasOwnProperty('original_filename')) {
                obj['original_filename'] = ApiClient.convertToType(data['original_filename'], 'String');
            }
            if (data.hasOwnProperty('product_code')) {
                obj['product_code'] = ApiClient.convertToType(data['product_code'], 'String');
            }
            if (data.hasOwnProperty('product_description')) {
                obj['product_description'] = ApiClient.convertToType(data['product_description'], 'String');
            }
            if (data.hasOwnProperty('remaining_downloads')) {
                obj['remaining_downloads'] = ApiClient.convertToType(data['remaining_downloads'], 'Number');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * File size
 * @member {Number} file_size
 */
OrderDigitalItem.prototype['file_size'] = undefined;

/**
 * Last download
 * @member {String} last_download
 */
OrderDigitalItem.prototype['last_download'] = undefined;

/**
 * IP address that performed the last download
 * @member {String} last_download_ip_address
 */
OrderDigitalItem.prototype['last_download_ip_address'] = undefined;

/**
 * Original file name
 * @member {String} original_filename
 */
OrderDigitalItem.prototype['original_filename'] = undefined;

/**
 * Item id associated with this item
 * @member {String} product_code
 */
OrderDigitalItem.prototype['product_code'] = undefined;

/**
 * Item description associated with this item
 * @member {String} product_description
 */
OrderDigitalItem.prototype['product_description'] = undefined;

/**
 * Remaining number of downloads
 * @member {Number} remaining_downloads
 */
OrderDigitalItem.prototype['remaining_downloads'] = undefined;

/**
 * URL that the customer can click to download the specific digital item
 * @member {String} url
 */
OrderDigitalItem.prototype['url'] = undefined;






export default OrderDigitalItem;

