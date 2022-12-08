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
 * The OrderBuysafe model module.
 * @module com.ultracart.admin.v2.models/OrderBuysafe
 * @version 4.0.94-RC
 */
class OrderBuysafe {
    /**
     * Constructs a new <code>OrderBuysafe</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderBuysafe
     */
    constructor() { 
        
        OrderBuysafe.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderBuysafe</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderBuysafe} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderBuysafe} The populated <code>OrderBuysafe</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderBuysafe();

            if (data.hasOwnProperty('buysafe_bond_available')) {
                obj['buysafe_bond_available'] = ApiClient.convertToType(data['buysafe_bond_available'], 'Boolean');
            }
            if (data.hasOwnProperty('buysafe_bond_cost')) {
                obj['buysafe_bond_cost'] = Currency.constructFromObject(data['buysafe_bond_cost']);
            }
            if (data.hasOwnProperty('buysafe_bond_free')) {
                obj['buysafe_bond_free'] = ApiClient.convertToType(data['buysafe_bond_free'], 'Boolean');
            }
            if (data.hasOwnProperty('buysafe_bond_refunded')) {
                obj['buysafe_bond_refunded'] = Currency.constructFromObject(data['buysafe_bond_refunded']);
            }
            if (data.hasOwnProperty('buysafe_bond_wanted')) {
                obj['buysafe_bond_wanted'] = ApiClient.convertToType(data['buysafe_bond_wanted'], 'Boolean');
            }
            if (data.hasOwnProperty('buysafe_shopping_cart_id')) {
                obj['buysafe_shopping_cart_id'] = ApiClient.convertToType(data['buysafe_shopping_cart_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * True if a buySAFE bond was available for purchase on this order
 * @member {Boolean} buysafe_bond_available
 */
OrderBuysafe.prototype['buysafe_bond_available'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} buysafe_bond_cost
 */
OrderBuysafe.prototype['buysafe_bond_cost'] = undefined;

/**
 * True if the buySAFE bond was free for this order
 * @member {Boolean} buysafe_bond_free
 */
OrderBuysafe.prototype['buysafe_bond_free'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} buysafe_bond_refunded
 */
OrderBuysafe.prototype['buysafe_bond_refunded'] = undefined;

/**
 * True if the buySAFE bond was wanted by the customer
 * @member {Boolean} buysafe_bond_wanted
 */
OrderBuysafe.prototype['buysafe_bond_wanted'] = undefined;

/**
 * Shopping cart ID associated with the buySAFE bond
 * @member {String} buysafe_shopping_cart_id
 */
OrderBuysafe.prototype['buysafe_shopping_cart_id'] = undefined;






export default OrderBuysafe;

