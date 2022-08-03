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
 * The CouponPercentOffSubtotalWithItemsPurchase model module.
 * @module com.ultracart.admin.v2.models/CouponPercentOffSubtotalWithItemsPurchase
 * @version 4.0.50-RC
 */
class CouponPercentOffSubtotalWithItemsPurchase {
    /**
     * Constructs a new <code>CouponPercentOffSubtotalWithItemsPurchase</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponPercentOffSubtotalWithItemsPurchase
     */
    constructor() { 
        
        CouponPercentOffSubtotalWithItemsPurchase.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponPercentOffSubtotalWithItemsPurchase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponPercentOffSubtotalWithItemsPurchase} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponPercentOffSubtotalWithItemsPurchase} The populated <code>CouponPercentOffSubtotalWithItemsPurchase</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponPercentOffSubtotalWithItemsPurchase();

            if (data.hasOwnProperty('discount_percent')) {
                obj['discount_percent'] = ApiClient.convertToType(data['discount_percent'], 'Number');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * The percentage of subtotal discount
 * @member {Number} discount_percent
 */
CouponPercentOffSubtotalWithItemsPurchase.prototype['discount_percent'] = undefined;

/**
 * A list of items of which at least one must be purchased for coupon to be valid.
 * @member {Array.<String>} items
 */
CouponPercentOffSubtotalWithItemsPurchase.prototype['items'] = undefined;






export default CouponPercentOffSubtotalWithItemsPurchase;

