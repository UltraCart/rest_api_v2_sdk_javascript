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
 * The CartTaxes model module.
 * @module com.ultracart.admin.v2.models/CartTaxes
 * @version 4.0.170
 */
class CartTaxes {
    /**
     * Constructs a new <code>CartTaxes</code>.
     * @alias module:com.ultracart.admin.v2.models/CartTaxes
     */
    constructor() { 
        
        CartTaxes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartTaxes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartTaxes} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartTaxes} The populated <code>CartTaxes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartTaxes();

            if (data.hasOwnProperty('county')) {
                obj['county'] = ApiClient.convertToType(data['county'], 'String');
            }
            if (data.hasOwnProperty('exempt')) {
                obj['exempt'] = ApiClient.convertToType(data['exempt'], 'Boolean');
            }
            if (data.hasOwnProperty('rate')) {
                obj['rate'] = ApiClient.convertToType(data['rate'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Tax county if the state requires it.
 * @member {String} county
 */
CartTaxes.prototype['county'] = undefined;

/**
 * True if tax exempt
 * @member {Boolean} exempt
 */
CartTaxes.prototype['exempt'] = undefined;

/**
 * Tax rate
 * @member {Number} rate
 */
CartTaxes.prototype['rate'] = undefined;






export default CartTaxes;

