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
 * The CouponPercentMoreLoyaltyPoints model module.
 * @module com.ultracart.admin.v2.models/CouponPercentMoreLoyaltyPoints
 * @version 4.0.163
 */
class CouponPercentMoreLoyaltyPoints {
    /**
     * Constructs a new <code>CouponPercentMoreLoyaltyPoints</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponPercentMoreLoyaltyPoints
     */
    constructor() { 
        
        CouponPercentMoreLoyaltyPoints.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponPercentMoreLoyaltyPoints</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponPercentMoreLoyaltyPoints} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponPercentMoreLoyaltyPoints} The populated <code>CouponPercentMoreLoyaltyPoints</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponPercentMoreLoyaltyPoints();

            if (data.hasOwnProperty('percent_more_loyalty_points')) {
                obj['percent_more_loyalty_points'] = ApiClient.convertToType(data['percent_more_loyalty_points'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The percentage of additional loyalty points
 * @member {Number} percent_more_loyalty_points
 */
CouponPercentMoreLoyaltyPoints.prototype['percent_more_loyalty_points'] = undefined;






export default CouponPercentMoreLoyaltyPoints;

