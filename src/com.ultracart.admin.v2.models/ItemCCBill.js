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
 * The ItemCCBill model module.
 * @module com.ultracart.admin.v2.models/ItemCCBill
 * @version 4.0.129
 */
class ItemCCBill {
    /**
     * Constructs a new <code>ItemCCBill</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemCCBill
     */
    constructor() { 
        
        ItemCCBill.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemCCBill</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemCCBill} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemCCBill} The populated <code>ItemCCBill</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemCCBill();

            if (data.hasOwnProperty('ccbill_allowed_currencies')) {
                obj['ccbill_allowed_currencies'] = ApiClient.convertToType(data['ccbill_allowed_currencies'], 'String');
            }
            if (data.hasOwnProperty('ccbill_allowed_types')) {
                obj['ccbill_allowed_types'] = ApiClient.convertToType(data['ccbill_allowed_types'], 'String');
            }
            if (data.hasOwnProperty('ccbill_currency_code')) {
                obj['ccbill_currency_code'] = ApiClient.convertToType(data['ccbill_currency_code'], 'String');
            }
            if (data.hasOwnProperty('ccbill_form_name')) {
                obj['ccbill_form_name'] = ApiClient.convertToType(data['ccbill_form_name'], 'String');
            }
            if (data.hasOwnProperty('ccbill_subaccount_id')) {
                obj['ccbill_subaccount_id'] = ApiClient.convertToType(data['ccbill_subaccount_id'], 'String');
            }
            if (data.hasOwnProperty('ccbill_subscription_type_id')) {
                obj['ccbill_subscription_type_id'] = ApiClient.convertToType(data['ccbill_subscription_type_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Allowed currencies
 * @member {String} ccbill_allowed_currencies
 */
ItemCCBill.prototype['ccbill_allowed_currencies'] = undefined;

/**
 * Allowed types
 * @member {String} ccbill_allowed_types
 */
ItemCCBill.prototype['ccbill_allowed_types'] = undefined;

/**
 * Currency code
 * @member {String} ccbill_currency_code
 */
ItemCCBill.prototype['ccbill_currency_code'] = undefined;

/**
 * Form name
 * @member {String} ccbill_form_name
 */
ItemCCBill.prototype['ccbill_form_name'] = undefined;

/**
 * Sub-account id
 * @member {String} ccbill_subaccount_id
 */
ItemCCBill.prototype['ccbill_subaccount_id'] = undefined;

/**
 * Subscription type id
 * @member {String} ccbill_subscription_type_id
 */
ItemCCBill.prototype['ccbill_subscription_type_id'] = undefined;






export default ItemCCBill;

