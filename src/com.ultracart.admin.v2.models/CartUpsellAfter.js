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
 * The CartUpsellAfter model module.
 * @module com.ultracart.admin.v2.models/CartUpsellAfter
 * @version 4.0.120-RC
 */
class CartUpsellAfter {
    /**
     * Constructs a new <code>CartUpsellAfter</code>.
     * @alias module:com.ultracart.admin.v2.models/CartUpsellAfter
     */
    constructor() { 
        
        CartUpsellAfter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartUpsellAfter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartUpsellAfter} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartUpsellAfter} The populated <code>CartUpsellAfter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartUpsellAfter();

            if (data.hasOwnProperty('finalize_after_dts')) {
                obj['finalize_after_dts'] = ApiClient.convertToType(data['finalize_after_dts'], 'String');
            }
            if (data.hasOwnProperty('finalize_after_minutes')) {
                obj['finalize_after_minutes'] = ApiClient.convertToType(data['finalize_after_minutes'], 'Number');
            }
            if (data.hasOwnProperty('upsell_path_code')) {
                obj['upsell_path_code'] = ApiClient.convertToType(data['upsell_path_code'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The date/time after which the cart will finalize into an order.
 * @member {String} finalize_after_dts
 */
CartUpsellAfter.prototype['finalize_after_dts'] = undefined;

/**
 * The amount of inactivity in minutes after which the cart should be finalized into an order.  This will calculate the finalize_after_dts field.
 * @member {Number} finalize_after_minutes
 */
CartUpsellAfter.prototype['finalize_after_minutes'] = undefined;

/**
 * Upsell path code
 * @member {String} upsell_path_code
 */
CartUpsellAfter.prototype['upsell_path_code'] = undefined;






export default CartUpsellAfter;

