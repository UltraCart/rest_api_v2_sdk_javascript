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
 * The CouponPercentOffSubtotalAndFreeShipping model module.
 * @module com.ultracart.admin.v2.models/CouponPercentOffSubtotalAndFreeShipping
 * @version 4.0.47-RC
 */
class CouponPercentOffSubtotalAndFreeShipping {
    /**
     * Constructs a new <code>CouponPercentOffSubtotalAndFreeShipping</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponPercentOffSubtotalAndFreeShipping
     */
    constructor() { 
        
        CouponPercentOffSubtotalAndFreeShipping.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponPercentOffSubtotalAndFreeShipping</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponPercentOffSubtotalAndFreeShipping} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponPercentOffSubtotalAndFreeShipping} The populated <code>CouponPercentOffSubtotalAndFreeShipping</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponPercentOffSubtotalAndFreeShipping();

            if (data.hasOwnProperty('discount_percent')) {
                obj['discount_percent'] = ApiClient.convertToType(data['discount_percent'], 'Number');
            }
            if (data.hasOwnProperty('shipping_methods')) {
                obj['shipping_methods'] = ApiClient.convertToType(data['shipping_methods'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * The percentage of subtotal discount
 * @member {Number} discount_percent
 */
CouponPercentOffSubtotalAndFreeShipping.prototype['discount_percent'] = undefined;

/**
 * One or more shipping methods that may be free
 * @member {Array.<String>} shipping_methods
 */
CouponPercentOffSubtotalAndFreeShipping.prototype['shipping_methods'] = undefined;






export default CouponPercentOffSubtotalAndFreeShipping;

