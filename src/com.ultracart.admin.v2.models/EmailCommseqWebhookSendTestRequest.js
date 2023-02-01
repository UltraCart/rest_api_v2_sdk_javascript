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
 * The EmailCommseqWebhookSendTestRequest model module.
 * @module com.ultracart.admin.v2.models/EmailCommseqWebhookSendTestRequest
 * @version 4.0.129
 */
class EmailCommseqWebhookSendTestRequest {
    /**
     * Constructs a new <code>EmailCommseqWebhookSendTestRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailCommseqWebhookSendTestRequest
     */
    constructor() { 
        
        EmailCommseqWebhookSendTestRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailCommseqWebhookSendTestRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqWebhookSendTestRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailCommseqWebhookSendTestRequest} The populated <code>EmailCommseqWebhookSendTestRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailCommseqWebhookSendTestRequest();

            if (data.hasOwnProperty('cart_id')) {
                obj['cart_id'] = ApiClient.convertToType(data['cart_id'], 'String');
            }
            if (data.hasOwnProperty('cart_item_ids')) {
                obj['cart_item_ids'] = ApiClient.convertToType(data['cart_item_ids'], ['String']);
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('esp_commseq_step_uuid')) {
                obj['esp_commseq_step_uuid'] = ApiClient.convertToType(data['esp_commseq_step_uuid'], 'String');
            }
            if (data.hasOwnProperty('esp_commseq_uuid')) {
                obj['esp_commseq_uuid'] = ApiClient.convertToType(data['esp_commseq_uuid'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('order_id')) {
                obj['order_id'] = ApiClient.convertToType(data['order_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} cart_id
 */
EmailCommseqWebhookSendTestRequest.prototype['cart_id'] = undefined;

/**
 * @member {Array.<String>} cart_item_ids
 */
EmailCommseqWebhookSendTestRequest.prototype['cart_item_ids'] = undefined;

/**
 * @member {String} email
 */
EmailCommseqWebhookSendTestRequest.prototype['email'] = undefined;

/**
 * @member {String} esp_commseq_step_uuid
 */
EmailCommseqWebhookSendTestRequest.prototype['esp_commseq_step_uuid'] = undefined;

/**
 * @member {String} esp_commseq_uuid
 */
EmailCommseqWebhookSendTestRequest.prototype['esp_commseq_uuid'] = undefined;

/**
 * @member {String} name
 */
EmailCommseqWebhookSendTestRequest.prototype['name'] = undefined;

/**
 * @member {String} order_id
 */
EmailCommseqWebhookSendTestRequest.prototype['order_id'] = undefined;






export default EmailCommseqWebhookSendTestRequest;

