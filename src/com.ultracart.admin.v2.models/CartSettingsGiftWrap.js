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
import Currency from './Currency';

/**
 * The CartSettingsGiftWrap model module.
 * @module com.ultracart.admin.v2.models/CartSettingsGiftWrap
 * @version 4.0.165
 */
class CartSettingsGiftWrap {
    /**
     * Constructs a new <code>CartSettingsGiftWrap</code>.
     * @alias module:com.ultracart.admin.v2.models/CartSettingsGiftWrap
     */
    constructor() { 
        
        CartSettingsGiftWrap.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartSettingsGiftWrap</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartSettingsGiftWrap} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartSettingsGiftWrap} The populated <code>CartSettingsGiftWrap</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartSettingsGiftWrap();

            if (data.hasOwnProperty('cost')) {
                obj['cost'] = Currency.constructFromObject(data['cost']);
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} cost
 */
CartSettingsGiftWrap.prototype['cost'] = undefined;

/**
 * Title of the gift wrap
 * @member {String} title
 */
CartSettingsGiftWrap.prototype['title'] = undefined;

/**
 * URL for the sample of the gift wrap
 * @member {String} url
 */
CartSettingsGiftWrap.prototype['url'] = undefined;






export default CartSettingsGiftWrap;

