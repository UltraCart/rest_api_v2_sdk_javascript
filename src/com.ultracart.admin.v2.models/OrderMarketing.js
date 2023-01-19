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
 * The OrderMarketing model module.
 * @module com.ultracart.admin.v2.models/OrderMarketing
 * @version 4.0.120-RC
 */
class OrderMarketing {
    /**
     * Constructs a new <code>OrderMarketing</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderMarketing
     */
    constructor() { 
        
        OrderMarketing.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderMarketing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderMarketing} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderMarketing} The populated <code>OrderMarketing</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderMarketing();

            if (data.hasOwnProperty('advertising_source')) {
                obj['advertising_source'] = ApiClient.convertToType(data['advertising_source'], 'String');
            }
            if (data.hasOwnProperty('cell_phone_opt_in')) {
                obj['cell_phone_opt_in'] = ApiClient.convertToType(data['cell_phone_opt_in'], 'Boolean');
            }
            if (data.hasOwnProperty('mailing_list')) {
                obj['mailing_list'] = ApiClient.convertToType(data['mailing_list'], 'Boolean');
            }
            if (data.hasOwnProperty('referral_code')) {
                obj['referral_code'] = ApiClient.convertToType(data['referral_code'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Advertising source
 * @member {String} advertising_source
 */
OrderMarketing.prototype['advertising_source'] = undefined;

/**
 * True if the customer has opted into SMS marketing
 * @member {Boolean} cell_phone_opt_in
 */
OrderMarketing.prototype['cell_phone_opt_in'] = undefined;

/**
 * True if the customer has opted into mailing list subscription
 * @member {Boolean} mailing_list
 */
OrderMarketing.prototype['mailing_list'] = undefined;

/**
 * Referral code
 * @member {String} referral_code
 */
OrderMarketing.prototype['referral_code'] = undefined;






export default OrderMarketing;

