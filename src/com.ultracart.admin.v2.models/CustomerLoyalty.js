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
import CustomerLoyaltyLedger from './CustomerLoyaltyLedger';
import CustomerLoyaltyRedemption from './CustomerLoyaltyRedemption';
import GiftCertificate from './GiftCertificate';

/**
 * The CustomerLoyalty model module.
 * @module com.ultracart.admin.v2.models/CustomerLoyalty
 * @version 4.0.179
 */
class CustomerLoyalty {
    /**
     * Constructs a new <code>CustomerLoyalty</code>.
     * @alias module:com.ultracart.admin.v2.models/CustomerLoyalty
     */
    constructor() { 
        
        CustomerLoyalty.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomerLoyalty</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerLoyalty} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerLoyalty} The populated <code>CustomerLoyalty</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerLoyalty();

            if (data.hasOwnProperty('current_points')) {
                obj['current_points'] = ApiClient.convertToType(data['current_points'], 'Number');
            }
            if (data.hasOwnProperty('internal_gift_certificate')) {
                obj['internal_gift_certificate'] = GiftCertificate.constructFromObject(data['internal_gift_certificate']);
            }
            if (data.hasOwnProperty('internal_gift_certificate_balance')) {
                obj['internal_gift_certificate_balance'] = ApiClient.convertToType(data['internal_gift_certificate_balance'], 'String');
            }
            if (data.hasOwnProperty('internal_gift_certificate_oid')) {
                obj['internal_gift_certificate_oid'] = ApiClient.convertToType(data['internal_gift_certificate_oid'], 'Number');
            }
            if (data.hasOwnProperty('ledger_entries')) {
                obj['ledger_entries'] = ApiClient.convertToType(data['ledger_entries'], [CustomerLoyaltyLedger]);
            }
            if (data.hasOwnProperty('pending_points')) {
                obj['pending_points'] = ApiClient.convertToType(data['pending_points'], 'Number');
            }
            if (data.hasOwnProperty('redemptions')) {
                obj['redemptions'] = ApiClient.convertToType(data['redemptions'], [CustomerLoyaltyRedemption]);
            }
        }
        return obj;
    }


}

/**
 * Current points
 * @member {Number} current_points
 */
CustomerLoyalty.prototype['current_points'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/GiftCertificate} internal_gift_certificate
 */
CustomerLoyalty.prototype['internal_gift_certificate'] = undefined;

/**
 * Loyalty Cashback / Store credit balance (internal gift certificate balance)
 * @member {String} internal_gift_certificate_balance
 */
CustomerLoyalty.prototype['internal_gift_certificate_balance'] = undefined;

/**
 * Internal gift certificate oid used to tracking loyalty cashback / store credit.
 * @member {Number} internal_gift_certificate_oid
 */
CustomerLoyalty.prototype['internal_gift_certificate_oid'] = undefined;

/**
 * Ledger entries
 * @member {Array.<module:com.ultracart.admin.v2.models/CustomerLoyaltyLedger>} ledger_entries
 */
CustomerLoyalty.prototype['ledger_entries'] = undefined;

/**
 * Pending Points
 * @member {Number} pending_points
 */
CustomerLoyalty.prototype['pending_points'] = undefined;

/**
 * Redemptions
 * @member {Array.<module:com.ultracart.admin.v2.models/CustomerLoyaltyRedemption>} redemptions
 */
CustomerLoyalty.prototype['redemptions'] = undefined;






export default CustomerLoyalty;

