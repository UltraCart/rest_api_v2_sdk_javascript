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
 * The CartMarketing model module.
 * @module com.ultracart.admin.v2.models/CartMarketing
 * @version 4.0.129
 */
class CartMarketing {
    /**
     * Constructs a new <code>CartMarketing</code>.
     * @alias module:com.ultracart.admin.v2.models/CartMarketing
     */
    constructor() { 
        
        CartMarketing.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartMarketing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartMarketing} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartMarketing} The populated <code>CartMarketing</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartMarketing();

            if (data.hasOwnProperty('advertising_source')) {
                obj['advertising_source'] = ApiClient.convertToType(data['advertising_source'], 'String');
            }
            if (data.hasOwnProperty('cell_phone_opt_in')) {
                obj['cell_phone_opt_in'] = ApiClient.convertToType(data['cell_phone_opt_in'], 'Boolean');
            }
            if (data.hasOwnProperty('mailing_list_opt_in')) {
                obj['mailing_list_opt_in'] = ApiClient.convertToType(data['mailing_list_opt_in'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * The advertising source the customer indicated
 * @member {String} advertising_source
 */
CartMarketing.prototype['advertising_source'] = undefined;

/**
 * True if the customer agrees to receiving marketing SMS messages
 * @member {Boolean} cell_phone_opt_in
 */
CartMarketing.prototype['cell_phone_opt_in'] = undefined;

/**
 * True if the customer agrees to receiving marketing emails
 * @member {Boolean} mailing_list_opt_in
 */
CartMarketing.prototype['mailing_list_opt_in'] = undefined;






export default CartMarketing;

