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
 * The WebhookLogSummary model module.
 * @module com.ultracart.admin.v2.models/WebhookLogSummary
 * @version 4.0.105-RC
 */
class WebhookLogSummary {
    /**
     * Constructs a new <code>WebhookLogSummary</code>.
     * @alias module:com.ultracart.admin.v2.models/WebhookLogSummary
     */
    constructor() { 
        
        WebhookLogSummary.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookLogSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/WebhookLogSummary} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/WebhookLogSummary} The populated <code>WebhookLogSummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookLogSummary();

            if (data.hasOwnProperty('delivery_dts')) {
                obj['delivery_dts'] = ApiClient.convertToType(data['delivery_dts'], 'String');
            }
            if (data.hasOwnProperty('request_id')) {
                obj['request_id'] = ApiClient.convertToType(data['request_id'], 'String');
            }
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Date/time of the delivery
 * @member {String} delivery_dts
 */
WebhookLogSummary.prototype['delivery_dts'] = undefined;

/**
 * Request id
 * @member {String} request_id
 */
WebhookLogSummary.prototype['request_id'] = undefined;

/**
 * True if the notification was successful
 * @member {Boolean} success
 */
WebhookLogSummary.prototype['success'] = undefined;






export default WebhookLogSummary;

