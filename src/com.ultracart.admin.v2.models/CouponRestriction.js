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
 * The CouponRestriction model module.
 * @module com.ultracart.admin.v2.models/CouponRestriction
 * @version 4.0.170
 */
class CouponRestriction {
    /**
     * Constructs a new <code>CouponRestriction</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponRestriction
     */
    constructor() { 
        
        CouponRestriction.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponRestriction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponRestriction} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponRestriction} The populated <code>CouponRestriction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponRestriction();

            if (data.hasOwnProperty('invalidForThis')) {
                obj['invalidForThis'] = ApiClient.convertToType(data['invalidForThis'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('validForThis')) {
                obj['validForThis'] = ApiClient.convertToType(data['validForThis'], 'Boolean');
            }
            if (data.hasOwnProperty('validOnlyForThis')) {
                obj['validOnlyForThis'] = ApiClient.convertToType(data['validOnlyForThis'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} invalidForThis
 */
CouponRestriction.prototype['invalidForThis'] = undefined;

/**
 * @member {String} name
 */
CouponRestriction.prototype['name'] = undefined;

/**
 * @member {Boolean} validForThis
 */
CouponRestriction.prototype['validForThis'] = undefined;

/**
 * @member {Boolean} validOnlyForThis
 */
CouponRestriction.prototype['validOnlyForThis'] = undefined;






export default CouponRestriction;

