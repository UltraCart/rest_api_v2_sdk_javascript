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
 * The CouponTierQuantityPercent model module.
 * @module com.ultracart.admin.v2.models/CouponTierQuantityPercent
 * @version 4.0.34-RC
 */
class CouponTierQuantityPercent {
    /**
     * Constructs a new <code>CouponTierQuantityPercent</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponTierQuantityPercent
     */
    constructor() { 
        
        CouponTierQuantityPercent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponTierQuantityPercent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponTierQuantityPercent} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponTierQuantityPercent} The populated <code>CouponTierQuantityPercent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponTierQuantityPercent();

            if (data.hasOwnProperty('discount_percent')) {
                obj['discount_percent'] = ApiClient.convertToType(data['discount_percent'], 'Number');
            }
            if (data.hasOwnProperty('item_quantity')) {
                obj['item_quantity'] = ApiClient.convertToType(data['item_quantity'], 'Number');
            }
            if (data.hasOwnProperty('quickbooks_code')) {
                obj['quickbooks_code'] = ApiClient.convertToType(data['quickbooks_code'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The percent of discount per item.
 * @member {Number} discount_percent
 */
CouponTierQuantityPercent.prototype['discount_percent'] = undefined;

/**
 * The quantity of item purchased (in units)
 * @member {Number} item_quantity
 */
CouponTierQuantityPercent.prototype['item_quantity'] = undefined;

/**
 * Quickbooks accounting code.
 * @member {String} quickbooks_code
 */
CouponTierQuantityPercent.prototype['quickbooks_code'] = undefined;






export default CouponTierQuantityPercent;

