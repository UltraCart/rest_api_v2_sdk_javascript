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
 * The CustomerStoreCreditLedgerEntry model module.
 * @module com.ultracart.admin.v2.models/CustomerStoreCreditLedgerEntry
 * @version 4.0.34-RC
 */
class CustomerStoreCreditLedgerEntry {
    /**
     * Constructs a new <code>CustomerStoreCreditLedgerEntry</code>.
     * @alias module:com.ultracart.admin.v2.models/CustomerStoreCreditLedgerEntry
     */
    constructor() { 
        
        CustomerStoreCreditLedgerEntry.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomerStoreCreditLedgerEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerStoreCreditLedgerEntry} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerStoreCreditLedgerEntry} The populated <code>CustomerStoreCreditLedgerEntry</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerStoreCreditLedgerEntry();

            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('entry_dts')) {
                obj['entry_dts'] = ApiClient.convertToType(data['entry_dts'], 'String');
            }
            if (data.hasOwnProperty('gift_certificate_ledger_oid')) {
                obj['gift_certificate_ledger_oid'] = ApiClient.convertToType(data['gift_certificate_ledger_oid'], 'Number');
            }
            if (data.hasOwnProperty('gift_certificate_oid')) {
                obj['gift_certificate_oid'] = ApiClient.convertToType(data['gift_certificate_oid'], 'Number');
            }
            if (data.hasOwnProperty('reference_order_id')) {
                obj['reference_order_id'] = ApiClient.convertToType(data['reference_order_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Identifies the state of this ledger entry whether the entry is Vesting or Expiring
 * @member {String} action
 */
CustomerStoreCreditLedgerEntry.prototype['action'] = undefined;

/**
 * The amount of the activity.
 * @member {Number} amount
 */
CustomerStoreCreditLedgerEntry.prototype['amount'] = undefined;

/**
 * Description of what this ledger entry is used.
 * @member {String} description
 */
CustomerStoreCreditLedgerEntry.prototype['description'] = undefined;

/**
 * Date time of this ledger activity.
 * @member {String} entry_dts
 */
CustomerStoreCreditLedgerEntry.prototype['entry_dts'] = undefined;

/**
 * Gift certificate ledger oid is a primary key for this object, used internally.
 * @member {Number} gift_certificate_ledger_oid
 */
CustomerStoreCreditLedgerEntry.prototype['gift_certificate_ledger_oid'] = undefined;

/**
 * Gift certificate oid.
 * @member {Number} gift_certificate_oid
 */
CustomerStoreCreditLedgerEntry.prototype['gift_certificate_oid'] = undefined;

/**
 * The order id if this gift certificate was used as part of the payment.
 * @member {String} reference_order_id
 */
CustomerStoreCreditLedgerEntry.prototype['reference_order_id'] = undefined;






export default CustomerStoreCreditLedgerEntry;

