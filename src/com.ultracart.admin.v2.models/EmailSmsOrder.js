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
import Currency from './Currency';

/**
 * The EmailSmsOrder model module.
 * @module com.ultracart.admin.v2.models/EmailSmsOrder
 * @version 4.1.16
 */
class EmailSmsOrder {
    /**
     * Constructs a new <code>EmailSmsOrder</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailSmsOrder
     */
    constructor() { 
        
        EmailSmsOrder.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailSmsOrder</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailSmsOrder} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailSmsOrder} The populated <code>EmailSmsOrder</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailSmsOrder();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('order_dts')) {
                obj['order_dts'] = ApiClient.convertToType(data['order_dts'], 'String');
            }
            if (data.hasOwnProperty('order_id')) {
                obj['order_id'] = ApiClient.convertToType(data['order_id'], 'String');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = Currency.constructFromObject(data['total']);
            }
        }
        return obj;
    }


}

/**
 * email
 * @member {String} email
 */
EmailSmsOrder.prototype['email'] = undefined;

/**
 * order_dts
 * @member {String} order_dts
 */
EmailSmsOrder.prototype['order_dts'] = undefined;

/**
 * order_id
 * @member {String} order_id
 */
EmailSmsOrder.prototype['order_id'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} total
 */
EmailSmsOrder.prototype['total'] = undefined;






export default EmailSmsOrder;

