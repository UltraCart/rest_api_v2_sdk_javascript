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
 * The AutoOrderItemFutureSchedule model module.
 * @module com.ultracart.admin.v2.models/AutoOrderItemFutureSchedule
 * @version 4.0.187
 */
class AutoOrderItemFutureSchedule {
    /**
     * Constructs a new <code>AutoOrderItemFutureSchedule</code>.
     * @alias module:com.ultracart.admin.v2.models/AutoOrderItemFutureSchedule
     */
    constructor() { 
        
        AutoOrderItemFutureSchedule.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AutoOrderItemFutureSchedule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/AutoOrderItemFutureSchedule} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/AutoOrderItemFutureSchedule} The populated <code>AutoOrderItemFutureSchedule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AutoOrderItemFutureSchedule();

            if (data.hasOwnProperty('item_id')) {
                obj['item_id'] = ApiClient.convertToType(data['item_id'], 'String');
            }
            if (data.hasOwnProperty('rebill_count')) {
                obj['rebill_count'] = ApiClient.convertToType(data['rebill_count'], 'Number');
            }
            if (data.hasOwnProperty('shipment_dts')) {
                obj['shipment_dts'] = ApiClient.convertToType(data['shipment_dts'], 'String');
            }
            if (data.hasOwnProperty('unit_cost')) {
                obj['unit_cost'] = ApiClient.convertToType(data['unit_cost'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Item ID that should rebill
 * @member {String} item_id
 */
AutoOrderItemFutureSchedule.prototype['item_id'] = undefined;

/**
 * The number of times this rebill represents
 * @member {Number} rebill_count
 */
AutoOrderItemFutureSchedule.prototype['rebill_count'] = undefined;

/**
 * Date/time that this item is scheduled to rebill
 * @member {String} shipment_dts
 */
AutoOrderItemFutureSchedule.prototype['shipment_dts'] = undefined;

/**
 * The unit cost of the item rebilling
 * @member {Number} unit_cost
 */
AutoOrderItemFutureSchedule.prototype['unit_cost'] = undefined;






export default AutoOrderItemFutureSchedule;

