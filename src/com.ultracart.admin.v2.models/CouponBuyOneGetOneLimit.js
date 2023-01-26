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
 * The CouponBuyOneGetOneLimit model module.
 * @module com.ultracart.admin.v2.models/CouponBuyOneGetOneLimit
 * @version 4.0.126-RC
 */
class CouponBuyOneGetOneLimit {
    /**
     * Constructs a new <code>CouponBuyOneGetOneLimit</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponBuyOneGetOneLimit
     */
    constructor() { 
        
        CouponBuyOneGetOneLimit.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponBuyOneGetOneLimit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponBuyOneGetOneLimit} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponBuyOneGetOneLimit} The populated <code>CouponBuyOneGetOneLimit</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponBuyOneGetOneLimit();

            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], ['String']);
            }
            if (data.hasOwnProperty('limit')) {
                obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * An optional list of items of which one must be purchased to receive free quantity of the same item.
 * @member {Array.<String>} items
 */
CouponBuyOneGetOneLimit.prototype['items'] = undefined;

/**
 * The limit of free items that may be received when purchasing multiple items
 * @member {Number} limit
 */
CouponBuyOneGetOneLimit.prototype['limit'] = undefined;






export default CouponBuyOneGetOneLimit;

