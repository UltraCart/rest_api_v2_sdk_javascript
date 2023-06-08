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
import CartSettingsBilling from './CartSettingsBilling';
import CartSettingsGift from './CartSettingsGift';
import CartSettingsPayment from './CartSettingsPayment';
import CartSettingsShipping from './CartSettingsShipping';
import CartSettingsTaxes from './CartSettingsTaxes';
import CartSettingsTerms from './CartSettingsTerms';

/**
 * The CartSettings model module.
 * @module com.ultracart.admin.v2.models/CartSettings
 * @version 4.0.158
 */
class CartSettings {
    /**
     * Constructs a new <code>CartSettings</code>.
     * @alias module:com.ultracart.admin.v2.models/CartSettings
     */
    constructor() { 
        
        CartSettings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartSettings} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartSettings} The populated <code>CartSettings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartSettings();

            if (data.hasOwnProperty('billing')) {
                obj['billing'] = CartSettingsBilling.constructFromObject(data['billing']);
            }
            if (data.hasOwnProperty('gift')) {
                obj['gift'] = CartSettingsGift.constructFromObject(data['gift']);
            }
            if (data.hasOwnProperty('payment')) {
                obj['payment'] = CartSettingsPayment.constructFromObject(data['payment']);
            }
            if (data.hasOwnProperty('shipping')) {
                obj['shipping'] = CartSettingsShipping.constructFromObject(data['shipping']);
            }
            if (data.hasOwnProperty('taxes')) {
                obj['taxes'] = CartSettingsTaxes.constructFromObject(data['taxes']);
            }
            if (data.hasOwnProperty('terms')) {
                obj['terms'] = CartSettingsTerms.constructFromObject(data['terms']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/CartSettingsBilling} billing
 */
CartSettings.prototype['billing'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/CartSettingsGift} gift
 */
CartSettings.prototype['gift'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/CartSettingsPayment} payment
 */
CartSettings.prototype['payment'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/CartSettingsShipping} shipping
 */
CartSettings.prototype['shipping'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/CartSettingsTaxes} taxes
 */
CartSettings.prototype['taxes'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/CartSettingsTerms} terms
 */
CartSettings.prototype['terms'] = undefined;






export default CartSettings;

