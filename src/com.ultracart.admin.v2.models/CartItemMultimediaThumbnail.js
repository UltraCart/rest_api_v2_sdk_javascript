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
 * The CartItemMultimediaThumbnail model module.
 * @module com.ultracart.admin.v2.models/CartItemMultimediaThumbnail
 * @version 4.1.16
 */
class CartItemMultimediaThumbnail {
    /**
     * Constructs a new <code>CartItemMultimediaThumbnail</code>.
     * @alias module:com.ultracart.admin.v2.models/CartItemMultimediaThumbnail
     */
    constructor() { 
        
        CartItemMultimediaThumbnail.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartItemMultimediaThumbnail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartItemMultimediaThumbnail} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartItemMultimediaThumbnail} The populated <code>CartItemMultimediaThumbnail</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartItemMultimediaThumbnail();

            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
            if (data.hasOwnProperty('png')) {
                obj['png'] = ApiClient.convertToType(data['png'], 'Boolean');
            }
            if (data.hasOwnProperty('square')) {
                obj['square'] = ApiClient.convertToType(data['square'], 'Boolean');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('width')) {
                obj['width'] = ApiClient.convertToType(data['width'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Height in pixels
 * @member {Number} height
 */
CartItemMultimediaThumbnail.prototype['height'] = undefined;

/**
 * True if thumbnail is a PNG, otherwise its a JPEG
 * @member {Boolean} png
 */
CartItemMultimediaThumbnail.prototype['png'] = undefined;

/**
 * True if the thumbnail is square
 * @member {Boolean} square
 */
CartItemMultimediaThumbnail.prototype['square'] = undefined;

/**
 * URL for the thumbnail
 * @member {String} url
 */
CartItemMultimediaThumbnail.prototype['url'] = undefined;

/**
 * Width in pixels
 * @member {Number} width
 */
CartItemMultimediaThumbnail.prototype['width'] = undefined;






export default CartItemMultimediaThumbnail;

