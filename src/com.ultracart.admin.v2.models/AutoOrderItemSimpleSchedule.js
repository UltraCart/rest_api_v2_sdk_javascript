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
 * The AutoOrderItemSimpleSchedule model module.
 * @module com.ultracart.admin.v2.models/AutoOrderItemSimpleSchedule
 * @version 4.0.50-RC
 */
class AutoOrderItemSimpleSchedule {
    /**
     * Constructs a new <code>AutoOrderItemSimpleSchedule</code>.
     * @alias module:com.ultracart.admin.v2.models/AutoOrderItemSimpleSchedule
     */
    constructor() { 
        
        AutoOrderItemSimpleSchedule.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AutoOrderItemSimpleSchedule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/AutoOrderItemSimpleSchedule} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/AutoOrderItemSimpleSchedule} The populated <code>AutoOrderItemSimpleSchedule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AutoOrderItemSimpleSchedule();

            if (data.hasOwnProperty('frequency')) {
                obj['frequency'] = ApiClient.convertToType(data['frequency'], 'String');
            }
            if (data.hasOwnProperty('item_id')) {
                obj['item_id'] = ApiClient.convertToType(data['item_id'], 'String');
            }
            if (data.hasOwnProperty('repeat_count')) {
                obj['repeat_count'] = ApiClient.convertToType(data['repeat_count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Frequency of the rebill if not a fixed schedule
 * @member {module:com.ultracart.admin.v2.models/AutoOrderItemSimpleSchedule.FrequencyEnum} frequency
 */
AutoOrderItemSimpleSchedule.prototype['frequency'] = undefined;

/**
 * Item ID that should rebill
 * @member {String} item_id
 */
AutoOrderItemSimpleSchedule.prototype['item_id'] = undefined;

/**
 * The number of times this simple schedule is configured for
 * @member {Number} repeat_count
 */
AutoOrderItemSimpleSchedule.prototype['repeat_count'] = undefined;





/**
 * Allowed values for the <code>frequency</code> property.
 * @enum {String}
 * @readonly
 */
AutoOrderItemSimpleSchedule['FrequencyEnum'] = {

    /**
     * value: "Weekly"
     * @const
     */
    "Weekly": "Weekly",

    /**
     * value: "Biweekly"
     * @const
     */
    "Biweekly": "Biweekly",

    /**
     * value: "Every..."
     * @const
     */
    "Every...": "Every...",

    /**
     * value: "Every 10 Days"
     * @const
     */
    "Every 10 Days": "Every 10 Days",

    /**
     * value: "Every 24 Days"
     * @const
     */
    "Every 24 Days": "Every 24 Days",

    /**
     * value: "Every 28 Days"
     * @const
     */
    "Every 28 Days": "Every 28 Days",

    /**
     * value: "Monthly"
     * @const
     */
    "Monthly": "Monthly",

    /**
     * value: "Every 45 Days"
     * @const
     */
    "Every 45 Days": "Every 45 Days",

    /**
     * value: "Every 2 Months"
     * @const
     */
    "Every 2 Months": "Every 2 Months",

    /**
     * value: "Every 3 Months"
     * @const
     */
    "Every 3 Months": "Every 3 Months",

    /**
     * value: "Every 4 Months"
     * @const
     */
    "Every 4 Months": "Every 4 Months",

    /**
     * value: "Every 6 Months"
     * @const
     */
    "Every 6 Months": "Every 6 Months",

    /**
     * value: "Yearly"
     * @const
     */
    "Yearly": "Yearly"
};



export default AutoOrderItemSimpleSchedule;

