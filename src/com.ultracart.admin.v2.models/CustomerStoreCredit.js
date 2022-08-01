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
import CustomerStoreCreditLedgerEntry from './CustomerStoreCreditLedgerEntry';

/**
 * The CustomerStoreCredit model module.
 * @module com.ultracart.admin.v2.models/CustomerStoreCredit
 * @version 4.0.47-RC
 */
class CustomerStoreCredit {
    /**
     * Constructs a new <code>CustomerStoreCredit</code>.
     * @alias module:com.ultracart.admin.v2.models/CustomerStoreCredit
     */
    constructor() { 
        
        CustomerStoreCredit.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomerStoreCredit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerStoreCredit} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerStoreCredit} The populated <code>CustomerStoreCredit</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerStoreCredit();

            if (data.hasOwnProperty('available')) {
                obj['available'] = ApiClient.convertToType(data['available'], 'Number');
            }
            if (data.hasOwnProperty('expiring')) {
                obj['expiring'] = ApiClient.convertToType(data['expiring'], 'Number');
            }
            if (data.hasOwnProperty('future_ledgers')) {
                obj['future_ledgers'] = ApiClient.convertToType(data['future_ledgers'], [CustomerStoreCreditLedgerEntry]);
            }
            if (data.hasOwnProperty('past_ledgers')) {
                obj['past_ledgers'] = ApiClient.convertToType(data['past_ledgers'], [CustomerStoreCreditLedgerEntry]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('vesting')) {
                obj['vesting'] = ApiClient.convertToType(data['vesting'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Available store credit which is defined as unused and vested
 * @member {Number} available
 */
CustomerStoreCredit.prototype['available'] = undefined;

/**
 * Amount of store credit expiring within 30 days
 * @member {Number} expiring
 */
CustomerStoreCredit.prototype['expiring'] = undefined;

/**
 * Array of future ledger entries including expiring entries
 * @member {Array.<module:com.ultracart.admin.v2.models/CustomerStoreCreditLedgerEntry>} future_ledgers
 */
CustomerStoreCredit.prototype['future_ledgers'] = undefined;

/**
 * Array of past ledger entries including accrual, usage, and expiring entries
 * @member {Array.<module:com.ultracart.admin.v2.models/CustomerStoreCreditLedgerEntry>} past_ledgers
 */
CustomerStoreCredit.prototype['past_ledgers'] = undefined;

/**
 * Total lifetime store credit for this customer.
 * @member {Number} total
 */
CustomerStoreCredit.prototype['total'] = undefined;

/**
 * Amount of store credit vesting
 * @member {Number} vesting
 */
CustomerStoreCredit.prototype['vesting'] = undefined;






export default CustomerStoreCredit;

