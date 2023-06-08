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
import CouponAutoApplyCondition from './CouponAutoApplyCondition';
import Error from './Error';
import ResponseMetadata from './ResponseMetadata';
import Warning from './Warning';

/**
 * The CouponAutoApplyConditions model module.
 * @module com.ultracart.admin.v2.models/CouponAutoApplyConditions
 * @version 4.0.158
 */
class CouponAutoApplyConditions {
    /**
     * Constructs a new <code>CouponAutoApplyConditions</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponAutoApplyConditions
     */
    constructor() { 
        
        CouponAutoApplyConditions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponAutoApplyConditions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponAutoApplyConditions} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponAutoApplyConditions} The populated <code>CouponAutoApplyConditions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponAutoApplyConditions();

            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('required_items')) {
                obj['required_items'] = ApiClient.convertToType(data['required_items'], [CouponAutoApplyCondition]);
            }
            if (data.hasOwnProperty('subtotal_levels')) {
                obj['subtotal_levels'] = ApiClient.convertToType(data['subtotal_levels'], [CouponAutoApplyCondition]);
            }
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('warning')) {
                obj['warning'] = Warning.constructFromObject(data['warning']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */
CouponAutoApplyConditions.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
CouponAutoApplyConditions.prototype['metadata'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/CouponAutoApplyCondition>} required_items
 */
CouponAutoApplyConditions.prototype['required_items'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/CouponAutoApplyCondition>} subtotal_levels
 */
CouponAutoApplyConditions.prototype['subtotal_levels'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
CouponAutoApplyConditions.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
CouponAutoApplyConditions.prototype['warning'] = undefined;






export default CouponAutoApplyConditions;

