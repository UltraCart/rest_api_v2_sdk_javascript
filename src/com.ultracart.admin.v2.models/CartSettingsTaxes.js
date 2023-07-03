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
 * The CartSettingsTaxes model module.
 * @module com.ultracart.admin.v2.models/CartSettingsTaxes
 * @version 4.0.165
 */
class CartSettingsTaxes {
    /**
     * Constructs a new <code>CartSettingsTaxes</code>.
     * @alias module:com.ultracart.admin.v2.models/CartSettingsTaxes
     */
    constructor() { 
        
        CartSettingsTaxes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartSettingsTaxes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartSettingsTaxes} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartSettingsTaxes} The populated <code>CartSettingsTaxes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartSettingsTaxes();

            if (data.hasOwnProperty('counties')) {
                obj['counties'] = ApiClient.convertToType(data['counties'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} counties
 */
CartSettingsTaxes.prototype['counties'] = undefined;






export default CartSettingsTaxes;

