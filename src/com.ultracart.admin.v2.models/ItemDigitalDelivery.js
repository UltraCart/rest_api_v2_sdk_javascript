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
import ItemDigitalItem from './ItemDigitalItem';

/**
 * The ItemDigitalDelivery model module.
 * @module com.ultracart.admin.v2.models/ItemDigitalDelivery
 * @version 4.0.71-RC
 */
class ItemDigitalDelivery {
    /**
     * Constructs a new <code>ItemDigitalDelivery</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemDigitalDelivery
     */
    constructor() { 
        
        ItemDigitalDelivery.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemDigitalDelivery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemDigitalDelivery} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemDigitalDelivery} The populated <code>ItemDigitalDelivery</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemDigitalDelivery();

            if (data.hasOwnProperty('activation_code_description')) {
                obj['activation_code_description'] = ApiClient.convertToType(data['activation_code_description'], 'String');
            }
            if (data.hasOwnProperty('activation_code_low_warning')) {
                obj['activation_code_low_warning'] = ApiClient.convertToType(data['activation_code_low_warning'], 'Number');
            }
            if (data.hasOwnProperty('activation_code_realtime_url')) {
                obj['activation_code_realtime_url'] = ApiClient.convertToType(data['activation_code_realtime_url'], 'String');
            }
            if (data.hasOwnProperty('activation_code_shared_secret')) {
                obj['activation_code_shared_secret'] = ApiClient.convertToType(data['activation_code_shared_secret'], 'String');
            }
            if (data.hasOwnProperty('activation_code_type')) {
                obj['activation_code_type'] = ApiClient.convertToType(data['activation_code_type'], 'String');
            }
            if (data.hasOwnProperty('digital_items')) {
                obj['digital_items'] = ApiClient.convertToType(data['digital_items'], [ItemDigitalItem]);
            }
        }
        return obj;
    }


}

/**
 * Description of the activation code
 * @member {String} activation_code_description
 */
ItemDigitalDelivery.prototype['activation_code_description'] = undefined;

/**
 * The number of activation codes whcih should generate a warning email
 * @member {Number} activation_code_low_warning
 */
ItemDigitalDelivery.prototype['activation_code_low_warning'] = undefined;

/**
 * The URL to retrieve activation codes from in real-time
 * @member {String} activation_code_realtime_url
 */
ItemDigitalDelivery.prototype['activation_code_realtime_url'] = undefined;

/**
 * Shared secret used when communicating with the real-time URL
 * @member {String} activation_code_shared_secret
 */
ItemDigitalDelivery.prototype['activation_code_shared_secret'] = undefined;

/**
 * Type of activation code
 * @member {String} activation_code_type
 */
ItemDigitalDelivery.prototype['activation_code_type'] = undefined;

/**
 * Digital items that customer can download when this item is purchased
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemDigitalItem>} digital_items
 */
ItemDigitalDelivery.prototype['digital_items'] = undefined;






export default ItemDigitalDelivery;

