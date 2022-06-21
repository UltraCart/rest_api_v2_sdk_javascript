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
 * The CartSettingsProvince model module.
 * @module com.ultracart.admin.v2.models/CartSettingsProvince
 * @version 4.0.3
 */
class CartSettingsProvince {
    /**
     * Constructs a new <code>CartSettingsProvince</code>.
     * @alias module:com.ultracart.admin.v2.models/CartSettingsProvince
     */
    constructor() { 
        
        CartSettingsProvince.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartSettingsProvince</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartSettingsProvince} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartSettingsProvince} The populated <code>CartSettingsProvince</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartSettingsProvince();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('province')) {
                obj['province'] = ApiClient.convertToType(data['province'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} code
 */
CartSettingsProvince.prototype['code'] = undefined;

/**
 * @member {String} province
 */
CartSettingsProvince.prototype['province'] = undefined;






export default CartSettingsProvince;

