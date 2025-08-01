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
 * The CartAffiliate model module.
 * @module com.ultracart.admin.v2.models/CartAffiliate
 * @version 4.1.16
 */
class CartAffiliate {
    /**
     * Constructs a new <code>CartAffiliate</code>.
     * @alias module:com.ultracart.admin.v2.models/CartAffiliate
     */
    constructor() { 
        
        CartAffiliate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartAffiliate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartAffiliate} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartAffiliate} The populated <code>CartAffiliate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartAffiliate();

            if (data.hasOwnProperty('affiliate_id')) {
                obj['affiliate_id'] = ApiClient.convertToType(data['affiliate_id'], 'Number');
            }
            if (data.hasOwnProperty('affiliate_sub_id')) {
                obj['affiliate_sub_id'] = ApiClient.convertToType(data['affiliate_sub_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Affiliate id associated with the cart
 * @member {Number} affiliate_id
 */
CartAffiliate.prototype['affiliate_id'] = undefined;

/**
 * Affiliate sub id associated with the cart
 * @member {String} affiliate_sub_id
 */
CartAffiliate.prototype['affiliate_sub_id'] = undefined;






export default CartAffiliate;

