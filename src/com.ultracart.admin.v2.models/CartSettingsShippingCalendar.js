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
 * The CartSettingsShippingCalendar model module.
 * @module com.ultracart.admin.v2.models/CartSettingsShippingCalendar
 * @version 4.0.163
 */
class CartSettingsShippingCalendar {
    /**
     * Constructs a new <code>CartSettingsShippingCalendar</code>.
     * @alias module:com.ultracart.admin.v2.models/CartSettingsShippingCalendar
     */
    constructor() { 
        
        CartSettingsShippingCalendar.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartSettingsShippingCalendar</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartSettingsShippingCalendar} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartSettingsShippingCalendar} The populated <code>CartSettingsShippingCalendar</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartSettingsShippingCalendar();

            if (data.hasOwnProperty('blackouts')) {
                obj['blackouts'] = ApiClient.convertToType(data['blackouts'], ['String']);
            }
            if (data.hasOwnProperty('days_of_week')) {
                obj['days_of_week'] = ApiClient.convertToType(data['days_of_week'], ['Boolean']);
            }
            if (data.hasOwnProperty('earliest')) {
                obj['earliest'] = ApiClient.convertToType(data['earliest'], 'String');
            }
            if (data.hasOwnProperty('require')) {
                obj['require'] = ApiClient.convertToType(data['require'], 'Boolean');
            }
            if (data.hasOwnProperty('show')) {
                obj['show'] = ApiClient.convertToType(data['show'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Specified dates that are blacked out on the calendar in ISO8601 format
 * @member {Array.<String>} blackouts
 */
CartSettingsShippingCalendar.prototype['blackouts'] = undefined;

/**
 * Days of week that should be enabled on the calendar (0 - Sunday through 6 - Saturday)
 * @member {Array.<Boolean>} days_of_week
 */
CartSettingsShippingCalendar.prototype['days_of_week'] = undefined;

/**
 * The earliest date that can be selected on the calendar
 * @member {String} earliest
 */
CartSettingsShippingCalendar.prototype['earliest'] = undefined;

/**
 * True if the customer is required to select a date
 * @member {Boolean} require
 */
CartSettingsShippingCalendar.prototype['require'] = undefined;

/**
 * True if this calendar should be shown to the customer
 * @member {Boolean} show
 */
CartSettingsShippingCalendar.prototype['show'] = undefined;






export default CartSettingsShippingCalendar;

