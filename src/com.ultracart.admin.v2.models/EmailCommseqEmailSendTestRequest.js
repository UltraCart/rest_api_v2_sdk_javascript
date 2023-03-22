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
 * The EmailCommseqEmailSendTestRequest model module.
 * @module com.ultracart.admin.v2.models/EmailCommseqEmailSendTestRequest
 * @version 4.0.141
 */
class EmailCommseqEmailSendTestRequest {
    /**
     * Constructs a new <code>EmailCommseqEmailSendTestRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailCommseqEmailSendTestRequest
     */
    constructor() { 
        
        EmailCommseqEmailSendTestRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailCommseqEmailSendTestRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqEmailSendTestRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailCommseqEmailSendTestRequest} The populated <code>EmailCommseqEmailSendTestRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailCommseqEmailSendTestRequest();

            if (data.hasOwnProperty('cart_id')) {
                obj['cart_id'] = ApiClient.convertToType(data['cart_id'], 'String');
            }
            if (data.hasOwnProperty('cart_item_ids')) {
                obj['cart_item_ids'] = ApiClient.convertToType(data['cart_item_ids'], ['String']);
            }
            if (data.hasOwnProperty('esp_commseq_email_uuid')) {
                obj['esp_commseq_email_uuid'] = ApiClient.convertToType(data['esp_commseq_email_uuid'], 'String');
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
            if (data.hasOwnProperty('please_review')) {
                obj['please_review'] = ApiClient.convertToType(data['please_review'], 'Boolean');
            }
            if (data.hasOwnProperty('send_to_additional_emails')) {
                obj['send_to_additional_emails'] = ApiClient.convertToType(data['send_to_additional_emails'], ['String']);
            }
            if (data.hasOwnProperty('send_to_logged_in_user')) {
                obj['send_to_logged_in_user'] = ApiClient.convertToType(data['send_to_logged_in_user'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} cart_id
 */
EmailCommseqEmailSendTestRequest.prototype['cart_id'] = undefined;

/**
 * @member {Array.<String>} cart_item_ids
 */
EmailCommseqEmailSendTestRequest.prototype['cart_item_ids'] = undefined;

/**
 * @member {String} esp_commseq_email_uuid
 */
EmailCommseqEmailSendTestRequest.prototype['esp_commseq_email_uuid'] = undefined;

/**
 * @member {String} esp_commseq_step_uuid
 */
EmailCommseqEmailSendTestRequest.prototype['esp_commseq_step_uuid'] = undefined;

/**
 * @member {String} esp_commseq_uuid
 */
EmailCommseqEmailSendTestRequest.prototype['esp_commseq_uuid'] = undefined;

/**
 * @member {String} name
 */
EmailCommseqEmailSendTestRequest.prototype['name'] = undefined;

/**
 * @member {String} order_id
 */
EmailCommseqEmailSendTestRequest.prototype['order_id'] = undefined;

/**
 * @member {Boolean} please_review
 */
EmailCommseqEmailSendTestRequest.prototype['please_review'] = undefined;

/**
 * @member {Array.<String>} send_to_additional_emails
 */
EmailCommseqEmailSendTestRequest.prototype['send_to_additional_emails'] = undefined;

/**
 * @member {Boolean} send_to_logged_in_user
 */
EmailCommseqEmailSendTestRequest.prototype['send_to_logged_in_user'] = undefined;






export default EmailCommseqEmailSendTestRequest;

