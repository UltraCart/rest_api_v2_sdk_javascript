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
 * The ItemInstantPaymentNotification model module.
 * @module com.ultracart.admin.v2.models/ItemInstantPaymentNotification
 * @version 4.0.155
 */
class ItemInstantPaymentNotification {
    /**
     * Constructs a new <code>ItemInstantPaymentNotification</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemInstantPaymentNotification
     */
    constructor() { 
        
        ItemInstantPaymentNotification.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemInstantPaymentNotification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemInstantPaymentNotification} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemInstantPaymentNotification} The populated <code>ItemInstantPaymentNotification</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemInstantPaymentNotification();

            if (data.hasOwnProperty('post_operation')) {
                obj['post_operation'] = ApiClient.convertToType(data['post_operation'], 'Boolean');
            }
            if (data.hasOwnProperty('successful_response_text')) {
                obj['successful_response_text'] = ApiClient.convertToType(data['successful_response_text'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * True for HTTP POST instead of GET
 * @member {Boolean} post_operation
 */
ItemInstantPaymentNotification.prototype['post_operation'] = undefined;

/**
 * Successful response text
 * @member {String} successful_response_text
 */
ItemInstantPaymentNotification.prototype['successful_response_text'] = undefined;

/**
 * URL
 * @member {String} url
 */
ItemInstantPaymentNotification.prototype['url'] = undefined;






export default ItemInstantPaymentNotification;

