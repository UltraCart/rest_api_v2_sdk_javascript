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
 * The CouponPercentOffMsrpItems model module.
 * @module com.ultracart.admin.v2.models/CouponPercentOffMsrpItems
 * @version 4.0.163
 */
class CouponPercentOffMsrpItems {
    /**
     * Constructs a new <code>CouponPercentOffMsrpItems</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponPercentOffMsrpItems
     */
    constructor() { 
        
        CouponPercentOffMsrpItems.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponPercentOffMsrpItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponPercentOffMsrpItems} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponPercentOffMsrpItems} The populated <code>CouponPercentOffMsrpItems</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponPercentOffMsrpItems();

            if (data.hasOwnProperty('discount_percent')) {
                obj['discount_percent'] = ApiClient.convertToType(data['discount_percent'], 'Number');
            }
            if (data.hasOwnProperty('excluded_items')) {
                obj['excluded_items'] = ApiClient.convertToType(data['excluded_items'], ['String']);
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], ['String']);
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
            if (data.hasOwnProperty('minimum_cumulative_msrp')) {
                obj['minimum_cumulative_msrp'] = ApiClient.convertToType(data['minimum_cumulative_msrp'], 'Number');
            }
            if (data.hasOwnProperty('minimum_subtotal')) {
                obj['minimum_subtotal'] = ApiClient.convertToType(data['minimum_subtotal'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The percentage of subtotal discount
 * @member {Number} discount_percent
 */
CouponPercentOffMsrpItems.prototype['discount_percent'] = undefined;

/**
 * A list of items which cannot be discounted.
 * @member {Array.<String>} excluded_items
 */
CouponPercentOffMsrpItems.prototype['excluded_items'] = undefined;

/**
 * An list of items which will receive a discount.
 * @member {Array.<String>} items
 */
CouponPercentOffMsrpItems.prototype['items'] = undefined;

/**
 * The (optional) maximum quantity of discounted items.
 * @member {Number} limit
 */
CouponPercentOffMsrpItems.prototype['limit'] = undefined;

/**
 * The (optional) minimum cumulative msrp of qualifying items.
 * @member {Number} minimum_cumulative_msrp
 */
CouponPercentOffMsrpItems.prototype['minimum_cumulative_msrp'] = undefined;

/**
 * The (optional) minimum subtotal of qualifying items.
 * @member {Number} minimum_subtotal
 */
CouponPercentOffMsrpItems.prototype['minimum_subtotal'] = undefined;






export default CouponPercentOffMsrpItems;

