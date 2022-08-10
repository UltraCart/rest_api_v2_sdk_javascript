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
 * The ItemAutoOrderStepArbitraryUnitCostSchedule model module.
 * @module com.ultracart.admin.v2.models/ItemAutoOrderStepArbitraryUnitCostSchedule
 * @version 4.0.53-RC
 */
class ItemAutoOrderStepArbitraryUnitCostSchedule {
    /**
     * Constructs a new <code>ItemAutoOrderStepArbitraryUnitCostSchedule</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemAutoOrderStepArbitraryUnitCostSchedule
     */
    constructor() { 
        
        ItemAutoOrderStepArbitraryUnitCostSchedule.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemAutoOrderStepArbitraryUnitCostSchedule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemAutoOrderStepArbitraryUnitCostSchedule} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemAutoOrderStepArbitraryUnitCostSchedule} The populated <code>ItemAutoOrderStepArbitraryUnitCostSchedule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemAutoOrderStepArbitraryUnitCostSchedule();

            if (data.hasOwnProperty('arbitrary_unit_cost')) {
                obj['arbitrary_unit_cost'] = ApiClient.convertToType(data['arbitrary_unit_cost'], 'Number');
            }
            if (data.hasOwnProperty('retry_days')) {
                obj['retry_days'] = ApiClient.convertToType(data['retry_days'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Arbitrary unit cost
 * @member {Number} arbitrary_unit_cost
 */
ItemAutoOrderStepArbitraryUnitCostSchedule.prototype['arbitrary_unit_cost'] = undefined;

/**
 * Retry days
 * @member {Number} retry_days
 */
ItemAutoOrderStepArbitraryUnitCostSchedule.prototype['retry_days'] = undefined;






export default ItemAutoOrderStepArbitraryUnitCostSchedule;

