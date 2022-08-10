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
 * The ItemAutoOrderStepGrandfatherPricing model module.
 * @module com.ultracart.admin.v2.models/ItemAutoOrderStepGrandfatherPricing
 * @version 4.0.53-RC
 */
class ItemAutoOrderStepGrandfatherPricing {
    /**
     * Constructs a new <code>ItemAutoOrderStepGrandfatherPricing</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemAutoOrderStepGrandfatherPricing
     */
    constructor() { 
        
        ItemAutoOrderStepGrandfatherPricing.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemAutoOrderStepGrandfatherPricing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemAutoOrderStepGrandfatherPricing} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemAutoOrderStepGrandfatherPricing} The populated <code>ItemAutoOrderStepGrandfatherPricing</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemAutoOrderStepGrandfatherPricing();

            if (data.hasOwnProperty('on_or_before_date')) {
                obj['on_or_before_date'] = ApiClient.convertToType(data['on_or_before_date'], 'String');
            }
            if (data.hasOwnProperty('unit_cost')) {
                obj['unit_cost'] = ApiClient.convertToType(data['unit_cost'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * On or before date
 * @member {String} on_or_before_date
 */
ItemAutoOrderStepGrandfatherPricing.prototype['on_or_before_date'] = undefined;

/**
 * Unit cost
 * @member {Number} unit_cost
 */
ItemAutoOrderStepGrandfatherPricing.prototype['unit_cost'] = undefined;






export default ItemAutoOrderStepGrandfatherPricing;

