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
 * The CouponType model module.
 * @module com.ultracart.admin.v2.models/CouponType
 * @version 4.0.123-RC
 */
class CouponType {
    /**
     * Constructs a new <code>CouponType</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponType
     */
    constructor() { 
        
        CouponType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponType} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponType} The populated <code>CouponType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponType();

            if (data.hasOwnProperty('localized')) {
                obj['localized'] = ApiClient.convertToType(data['localized'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A friendly display of the coupon type suitable for human reading
 * @member {String} localized
 */
CouponType.prototype['localized'] = undefined;

/**
 * The name of the coupon type
 * @member {String} name
 */
CouponType.prototype['name'] = undefined;






export default CouponType;

