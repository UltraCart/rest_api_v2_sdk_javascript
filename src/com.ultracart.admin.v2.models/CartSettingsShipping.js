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
import CartSettingsShippingCalendar from './CartSettingsShippingCalendar';
import CartSettingsShippingEstimate from './CartSettingsShippingEstimate';

/**
 * The CartSettingsShipping model module.
 * @module com.ultracart.admin.v2.models/CartSettingsShipping
 * @version 4.0.144
 */
class CartSettingsShipping {
    /**
     * Constructs a new <code>CartSettingsShipping</code>.
     * @alias module:com.ultracart.admin.v2.models/CartSettingsShipping
     */
    constructor() { 
        
        CartSettingsShipping.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartSettingsShipping</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartSettingsShipping} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartSettingsShipping} The populated <code>CartSettingsShipping</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartSettingsShipping();

            if (data.hasOwnProperty('deliver_on_date')) {
                obj['deliver_on_date'] = CartSettingsShippingCalendar.constructFromObject(data['deliver_on_date']);
            }
            if (data.hasOwnProperty('estimates')) {
                obj['estimates'] = ApiClient.convertToType(data['estimates'], [CartSettingsShippingEstimate]);
            }
            if (data.hasOwnProperty('need_shipping')) {
                obj['need_shipping'] = ApiClient.convertToType(data['need_shipping'], 'Boolean');
            }
            if (data.hasOwnProperty('provinces')) {
                obj['provinces'] = ApiClient.convertToType(data['provinces'], [CartSettingsProvince]);
            }
            if (data.hasOwnProperty('ship_on_date')) {
                obj['ship_on_date'] = CartSettingsShippingCalendar.constructFromObject(data['ship_on_date']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/CartSettingsShippingCalendar} deliver_on_date
 */
CartSettingsShipping.prototype['deliver_on_date'] = undefined;

/**
 * Estimates for this cart
 * @member {Array.<module:com.ultracart.admin.v2.models/CartSettingsShippingEstimate>} estimates
 */
CartSettingsShipping.prototype['estimates'] = undefined;

/**
 * True if this order needs shipping
 * @member {Boolean} need_shipping
 */
CartSettingsShipping.prototype['need_shipping'] = undefined;

/**
 * Provinces
 * @member {Array.<module:com.ultracart.admin.v2.models/CartSettingsProvince>} provinces
 */
CartSettingsShipping.prototype['provinces'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/CartSettingsShippingCalendar} ship_on_date
 */
CartSettingsShipping.prototype['ship_on_date'] = undefined;






export default CartSettingsShipping;

