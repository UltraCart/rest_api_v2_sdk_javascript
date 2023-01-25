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
 * The CouponMoreLoyaltyPoints model module.
 * @module com.ultracart.admin.v2.models/CouponMoreLoyaltyPoints
 * @version 4.0.123-RC
 */
class CouponMoreLoyaltyPoints {
    /**
     * Constructs a new <code>CouponMoreLoyaltyPoints</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponMoreLoyaltyPoints
     */
    constructor() { 
        
        CouponMoreLoyaltyPoints.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponMoreLoyaltyPoints</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponMoreLoyaltyPoints} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponMoreLoyaltyPoints} The populated <code>CouponMoreLoyaltyPoints</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponMoreLoyaltyPoints();

            if (data.hasOwnProperty('loyalty_points')) {
                obj['loyalty_points'] = ApiClient.convertToType(data['loyalty_points'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The additional loyalty points
 * @member {Number} loyalty_points
 */
CouponMoreLoyaltyPoints.prototype['loyalty_points'] = undefined;






export default CouponMoreLoyaltyPoints;

