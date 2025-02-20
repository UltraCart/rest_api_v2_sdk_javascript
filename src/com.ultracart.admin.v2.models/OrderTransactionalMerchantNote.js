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
 * The OrderTransactionalMerchantNote model module.
 * @module com.ultracart.admin.v2.models/OrderTransactionalMerchantNote
 * @version 4.0.245
 */
class OrderTransactionalMerchantNote {
    /**
     * Constructs a new <code>OrderTransactionalMerchantNote</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderTransactionalMerchantNote
     */
    constructor() { 
        
        OrderTransactionalMerchantNote.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderTransactionalMerchantNote</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderTransactionalMerchantNote} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderTransactionalMerchantNote} The populated <code>OrderTransactionalMerchantNote</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderTransactionalMerchantNote();

            if (data.hasOwnProperty('ip_address')) {
                obj['ip_address'] = ApiClient.convertToType(data['ip_address'], 'String');
            }
            if (data.hasOwnProperty('note')) {
                obj['note'] = ApiClient.convertToType(data['note'], 'String');
            }
            if (data.hasOwnProperty('note_dts')) {
                obj['note_dts'] = ApiClient.convertToType(data['note_dts'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'String');
            }
        }
        return obj;
    }


}

/**
 * IP Address
 * @member {String} ip_address
 */
OrderTransactionalMerchantNote.prototype['ip_address'] = undefined;

/**
 * note
 * @member {String} note
 */
OrderTransactionalMerchantNote.prototype['note'] = undefined;

/**
 * Timestamp when the note was added
 * @member {String} note_dts
 */
OrderTransactionalMerchantNote.prototype['note_dts'] = undefined;

/**
 * User that wrote the merchant note
 * @member {String} user
 */
OrderTransactionalMerchantNote.prototype['user'] = undefined;






export default OrderTransactionalMerchantNote;

