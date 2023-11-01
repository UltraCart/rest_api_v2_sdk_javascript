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
 * The EmailOrder model module.
 * @module com.ultracart.admin.v2.models/EmailOrder
 * @version 4.0.185
 */
class EmailOrder {
    /**
     * Constructs a new <code>EmailOrder</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailOrder
     */
    constructor() { 
        
        EmailOrder.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailOrder</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailOrder} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailOrder} The populated <code>EmailOrder</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailOrder();

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
EmailOrder.prototype['email'] = undefined;

/**
 * order_dts
 * @member {String} order_dts
 */
EmailOrder.prototype['order_dts'] = undefined;

/**
 * order_id
 * @member {String} order_id
 */
EmailOrder.prototype['order_id'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} total
 */
EmailOrder.prototype['total'] = undefined;






export default EmailOrder;

