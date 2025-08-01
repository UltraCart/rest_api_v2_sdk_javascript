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
 * The EmailCommseqSequenceTestRequest model module.
 * @module com.ultracart.admin.v2.models/EmailCommseqSequenceTestRequest
 * @version 4.1.16
 */
class EmailCommseqSequenceTestRequest {
    /**
     * Constructs a new <code>EmailCommseqSequenceTestRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailCommseqSequenceTestRequest
     */
    constructor() { 
        
        EmailCommseqSequenceTestRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailCommseqSequenceTestRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqSequenceTestRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailCommseqSequenceTestRequest} The populated <code>EmailCommseqSequenceTestRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailCommseqSequenceTestRequest();

            if (data.hasOwnProperty('address_1')) {
                obj['address_1'] = ApiClient.convertToType(data['address_1'], 'String');
            }
            if (data.hasOwnProperty('address_2')) {
                obj['address_2'] = ApiClient.convertToType(data['address_2'], 'String');
            }
            if (data.hasOwnProperty('cart_id')) {
                obj['cart_id'] = ApiClient.convertToType(data['cart_id'], 'String');
            }
            if (data.hasOwnProperty('cart_item_ids')) {
                obj['cart_item_ids'] = ApiClient.convertToType(data['cart_item_ids'], ['String']);
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('esp_commseq_uuid')) {
                obj['esp_commseq_uuid'] = ApiClient.convertToType(data['esp_commseq_uuid'], 'String');
            }
            if (data.hasOwnProperty('mail_card')) {
                obj['mail_card'] = ApiClient.convertToType(data['mail_card'], 'Boolean');
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
            if (data.hasOwnProperty('postal_code')) {
                obj['postal_code'] = ApiClient.convertToType(data['postal_code'], 'String');
            }
            if (data.hasOwnProperty('send_to_cellphone_e164')) {
                obj['send_to_cellphone_e164'] = ApiClient.convertToType(data['send_to_cellphone_e164'], 'String');
            }
            if (data.hasOwnProperty('send_to_email')) {
                obj['send_to_email'] = ApiClient.convertToType(data['send_to_email'], 'String');
            }
            if (data.hasOwnProperty('send_to_logged_in_user')) {
                obj['send_to_logged_in_user'] = ApiClient.convertToType(data['send_to_logged_in_user'], 'Boolean');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} address_1
 */
EmailCommseqSequenceTestRequest.prototype['address_1'] = undefined;

/**
 * @member {String} address_2
 */
EmailCommseqSequenceTestRequest.prototype['address_2'] = undefined;

/**
 * @member {String} cart_id
 */
EmailCommseqSequenceTestRequest.prototype['cart_id'] = undefined;

/**
 * @member {Array.<String>} cart_item_ids
 */
EmailCommseqSequenceTestRequest.prototype['cart_item_ids'] = undefined;

/**
 * @member {String} city
 */
EmailCommseqSequenceTestRequest.prototype['city'] = undefined;

/**
 * @member {String} esp_commseq_uuid
 */
EmailCommseqSequenceTestRequest.prototype['esp_commseq_uuid'] = undefined;

/**
 * @member {Boolean} mail_card
 */
EmailCommseqSequenceTestRequest.prototype['mail_card'] = undefined;

/**
 * @member {String} name
 */
EmailCommseqSequenceTestRequest.prototype['name'] = undefined;

/**
 * @member {String} order_id
 */
EmailCommseqSequenceTestRequest.prototype['order_id'] = undefined;

/**
 * @member {Boolean} please_review
 */
EmailCommseqSequenceTestRequest.prototype['please_review'] = undefined;

/**
 * @member {String} postal_code
 */
EmailCommseqSequenceTestRequest.prototype['postal_code'] = undefined;

/**
 * @member {String} send_to_cellphone_e164
 */
EmailCommseqSequenceTestRequest.prototype['send_to_cellphone_e164'] = undefined;

/**
 * @member {String} send_to_email
 */
EmailCommseqSequenceTestRequest.prototype['send_to_email'] = undefined;

/**
 * @member {Boolean} send_to_logged_in_user
 */
EmailCommseqSequenceTestRequest.prototype['send_to_logged_in_user'] = undefined;

/**
 * @member {String} state
 */
EmailCommseqSequenceTestRequest.prototype['state'] = undefined;






export default EmailCommseqSequenceTestRequest;

