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
import CartSettingsProvince from './CartSettingsProvince';

/**
 * The CartSettingsBilling model module.
 * @module com.ultracart.admin.v2.models/CartSettingsBilling
 * @version 4.0.185
 */
class CartSettingsBilling {
    /**
     * Constructs a new <code>CartSettingsBilling</code>.
     * @alias module:com.ultracart.admin.v2.models/CartSettingsBilling
     */
    constructor() { 
        
        CartSettingsBilling.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartSettingsBilling</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartSettingsBilling} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartSettingsBilling} The populated <code>CartSettingsBilling</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartSettingsBilling();

            if (data.hasOwnProperty('provinces')) {
                obj['provinces'] = ApiClient.convertToType(data['provinces'], [CartSettingsProvince]);
            }
        }
        return obj;
    }


}

/**
 * Provinces
 * @member {Array.<module:com.ultracart.admin.v2.models/CartSettingsProvince>} provinces
 */
CartSettingsBilling.prototype['provinces'] = undefined;






export default CartSettingsBilling;

