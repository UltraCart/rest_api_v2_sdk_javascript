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
 * The EmailCommseqPostcardSendTestRequest model module.
 * @module com.ultracart.admin.v2.models/EmailCommseqPostcardSendTestRequest
 * @version 4.0.70-RC
 */
class EmailCommseqPostcardSendTestRequest {
    /**
     * Constructs a new <code>EmailCommseqPostcardSendTestRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailCommseqPostcardSendTestRequest
     */
    constructor() { 
        
        EmailCommseqPostcardSendTestRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailCommseqPostcardSendTestRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailCommseqPostcardSendTestRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailCommseqPostcardSendTestRequest} The populated <code>EmailCommseqPostcardSendTestRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailCommseqPostcardSendTestRequest();

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
            if (data.hasOwnProperty('esp_commseq_postcard_uuid')) {
                obj['esp_commseq_postcard_uuid'] = ApiClient.convertToType(data['esp_commseq_postcard_uuid'], 'String');
            }
            if (data.hasOwnProperty('esp_commseq_step_uuid')) {
                obj['esp_commseq_step_uuid'] = ApiClient.convertToType(data['esp_commseq_step_uuid'], 'String');
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
            if (data.hasOwnProperty('postal_code')) {
                obj['postal_code'] = ApiClient.convertToType(data['postal_code'], 'String');
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
EmailCommseqPostcardSendTestRequest.prototype['address_1'] = undefined;

/**
 * @member {String} address_2
 */
EmailCommseqPostcardSendTestRequest.prototype['address_2'] = undefined;

/**
 * @member {String} cart_id
 */
EmailCommseqPostcardSendTestRequest.prototype['cart_id'] = undefined;

/**
 * @member {Array.<String>} cart_item_ids
 */
EmailCommseqPostcardSendTestRequest.prototype['cart_item_ids'] = undefined;

/**
 * @member {String} city
 */
EmailCommseqPostcardSendTestRequest.prototype['city'] = undefined;

/**
 * @member {String} esp_commseq_postcard_uuid
 */
EmailCommseqPostcardSendTestRequest.prototype['esp_commseq_postcard_uuid'] = undefined;

/**
 * @member {String} esp_commseq_step_uuid
 */
EmailCommseqPostcardSendTestRequest.prototype['esp_commseq_step_uuid'] = undefined;

/**
 * @member {String} esp_commseq_uuid
 */
EmailCommseqPostcardSendTestRequest.prototype['esp_commseq_uuid'] = undefined;

/**
 * @member {Boolean} mail_card
 */
EmailCommseqPostcardSendTestRequest.prototype['mail_card'] = undefined;

/**
 * @member {String} name
 */
EmailCommseqPostcardSendTestRequest.prototype['name'] = undefined;

/**
 * @member {String} order_id
 */
EmailCommseqPostcardSendTestRequest.prototype['order_id'] = undefined;

/**
 * @member {String} postal_code
 */
EmailCommseqPostcardSendTestRequest.prototype['postal_code'] = undefined;

/**
 * @member {String} state
 */
EmailCommseqPostcardSendTestRequest.prototype['state'] = undefined;






export default EmailCommseqPostcardSendTestRequest;

