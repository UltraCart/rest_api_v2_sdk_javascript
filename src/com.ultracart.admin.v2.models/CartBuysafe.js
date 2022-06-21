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
 * The CartBuysafe model module.
 * @module com.ultracart.admin.v2.models/CartBuysafe
 * @version 4.0.6-RC
 */
class CartBuysafe {
    /**
     * Constructs a new <code>CartBuysafe</code>.
     * @alias module:com.ultracart.admin.v2.models/CartBuysafe
     */
    constructor() { 
        
        CartBuysafe.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartBuysafe</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartBuysafe} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartBuysafe} The populated <code>CartBuysafe</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartBuysafe();

            if (data.hasOwnProperty('bond_available')) {
                obj['bond_available'] = ApiClient.convertToType(data['bond_available'], 'Boolean');
            }
            if (data.hasOwnProperty('bond_cost')) {
                obj['bond_cost'] = Currency.constructFromObject(data['bond_cost']);
            }
            if (data.hasOwnProperty('bond_free')) {
                obj['bond_free'] = ApiClient.convertToType(data['bond_free'], 'Boolean');
            }
            if (data.hasOwnProperty('bond_wanted')) {
                obj['bond_wanted'] = ApiClient.convertToType(data['bond_wanted'], 'Boolean');
            }
            if (data.hasOwnProperty('cart_display_text')) {
                obj['cart_display_text'] = ApiClient.convertToType(data['cart_display_text'], 'String');
            }
            if (data.hasOwnProperty('cart_display_url')) {
                obj['cart_display_url'] = ApiClient.convertToType(data['cart_display_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * True if buySAFE is willing to bond the order
 * @member {Boolean} bond_available
 */
CartBuysafe.prototype['bond_available'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} bond_cost
 */
CartBuysafe.prototype['bond_cost'] = undefined;

/**
 * True if the bond is free (merchant paying for it)
 * @member {Boolean} bond_free
 */
CartBuysafe.prototype['bond_free'] = undefined;

/**
 * True if the customer wants the bond
 * @member {Boolean} bond_wanted
 */
CartBuysafe.prototype['bond_wanted'] = undefined;

/**
 * Recommend text to display to the customer
 * @member {String} cart_display_text
 */
CartBuysafe.prototype['cart_display_text'] = undefined;

/**
 * URL associated with the recommended text
 * @member {String} cart_display_url
 */
CartBuysafe.prototype['cart_display_url'] = undefined;






export default CartBuysafe;

