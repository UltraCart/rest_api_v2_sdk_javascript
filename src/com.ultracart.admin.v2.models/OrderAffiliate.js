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
import OrderAffiliateLedger from './OrderAffiliateLedger';

/**
 * The OrderAffiliate model module.
 * @module com.ultracart.admin.v2.models/OrderAffiliate
 * @version 4.0.163
 */
class OrderAffiliate {
    /**
     * Constructs a new <code>OrderAffiliate</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderAffiliate
     */
    constructor() { 
        
        OrderAffiliate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderAffiliate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderAffiliate} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderAffiliate} The populated <code>OrderAffiliate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderAffiliate();

            if (data.hasOwnProperty('affiliate_oid')) {
                obj['affiliate_oid'] = ApiClient.convertToType(data['affiliate_oid'], 'Number');
            }
            if (data.hasOwnProperty('ledger_entries')) {
                obj['ledger_entries'] = ApiClient.convertToType(data['ledger_entries'], [OrderAffiliateLedger]);
            }
            if (data.hasOwnProperty('sub_id')) {
                obj['sub_id'] = ApiClient.convertToType(data['sub_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Affiliate ID
 * @member {Number} affiliate_oid
 */
OrderAffiliate.prototype['affiliate_oid'] = undefined;

/**
 * Ledger entries associated with all the commissions earned on this order
 * @member {Array.<module:com.ultracart.admin.v2.models/OrderAffiliateLedger>} ledger_entries
 */
OrderAffiliate.prototype['ledger_entries'] = undefined;

/**
 * Sub identifier provided by the affiliate on the click that generated this order
 * @member {String} sub_id
 */
OrderAffiliate.prototype['sub_id'] = undefined;






export default OrderAffiliate;

