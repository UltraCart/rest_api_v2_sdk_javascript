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
 * The ItemEmailNotifications model module.
 * @module com.ultracart.admin.v2.models/ItemEmailNotifications
 * @version 4.0.3
 */
class ItemEmailNotifications {
    /**
     * Constructs a new <code>ItemEmailNotifications</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemEmailNotifications
     */
    constructor() { 
        
        ItemEmailNotifications.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemEmailNotifications</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemEmailNotifications} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemEmailNotifications} The populated <code>ItemEmailNotifications</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemEmailNotifications();

            if (data.hasOwnProperty('skip_receipt')) {
                obj['skip_receipt'] = ApiClient.convertToType(data['skip_receipt'], 'Boolean');
            }
            if (data.hasOwnProperty('skip_shipment_notification')) {
                obj['skip_shipment_notification'] = ApiClient.convertToType(data['skip_shipment_notification'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Skip receipt email to customer
 * @member {Boolean} skip_receipt
 */
ItemEmailNotifications.prototype['skip_receipt'] = undefined;

/**
 * Skip shipment notification to customer
 * @member {Boolean} skip_shipment_notification
 */
ItemEmailNotifications.prototype['skip_shipment_notification'] = undefined;






export default ItemEmailNotifications;

