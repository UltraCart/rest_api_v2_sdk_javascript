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
 * The ItemReporting model module.
 * @module com.ultracart.admin.v2.models/ItemReporting
 * @version 4.0.188
 */
class ItemReporting {
    /**
     * Constructs a new <code>ItemReporting</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemReporting
     */
    constructor() { 
        
        ItemReporting.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemReporting</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemReporting} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemReporting} The populated <code>ItemReporting</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemReporting();

            if (data.hasOwnProperty('report_as_upsell')) {
                obj['report_as_upsell'] = ApiClient.convertToType(data['report_as_upsell'], 'Boolean');
            }
            if (data.hasOwnProperty('report_pickable_quantities')) {
                obj['report_pickable_quantities'] = ApiClient.convertToType(data['report_pickable_quantities'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * Report as an upsell
 * @member {Boolean} report_as_upsell
 */
ItemReporting.prototype['report_as_upsell'] = undefined;

/**
 * Report pickable quantities
 * @member {Array.<Number>} report_pickable_quantities
 */
ItemReporting.prototype['report_pickable_quantities'] = undefined;






export default ItemReporting;

