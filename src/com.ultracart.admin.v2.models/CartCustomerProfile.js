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
import CartCustomerProfileAddress from './CartCustomerProfileAddress';
import CartCustomerProfileCreditCard from './CartCustomerProfileCreditCard';

/**
 * The CartCustomerProfile model module.
 * @module com.ultracart.admin.v2.models/CartCustomerProfile
 * @version 4.0.188
 */
class CartCustomerProfile {
    /**
     * Constructs a new <code>CartCustomerProfile</code>.
     * @alias module:com.ultracart.admin.v2.models/CartCustomerProfile
     */
    constructor() { 
        
        CartCustomerProfile.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartCustomerProfile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartCustomerProfile} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartCustomerProfile} The populated <code>CartCustomerProfile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartCustomerProfile();

            if (data.hasOwnProperty('allow_3rd_party_billing')) {
                obj['allow_3rd_party_billing'] = ApiClient.convertToType(data['allow_3rd_party_billing'], 'Boolean');
            }
            if (data.hasOwnProperty('allow_cod')) {
                obj['allow_cod'] = ApiClient.convertToType(data['allow_cod'], 'Boolean');
            }
            if (data.hasOwnProperty('allow_purchase_order')) {
                obj['allow_purchase_order'] = ApiClient.convertToType(data['allow_purchase_order'], 'Boolean');
            }
            if (data.hasOwnProperty('billing_addresses')) {
                obj['billing_addresses'] = ApiClient.convertToType(data['billing_addresses'], [CartCustomerProfileAddress]);
            }
            if (data.hasOwnProperty('credit_cards')) {
                obj['credit_cards'] = ApiClient.convertToType(data['credit_cards'], [CartCustomerProfileCreditCard]);
            }
            if (data.hasOwnProperty('customer_profile_oid')) {
                obj['customer_profile_oid'] = ApiClient.convertToType(data['customer_profile_oid'], 'Number');
            }
            if (data.hasOwnProperty('dhl_account_number')) {
                obj['dhl_account_number'] = ApiClient.convertToType(data['dhl_account_number'], 'String');
            }
            if (data.hasOwnProperty('dhl_duty_account_number')) {
                obj['dhl_duty_account_number'] = ApiClient.convertToType(data['dhl_duty_account_number'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('fedex_account_number')) {
                obj['fedex_account_number'] = ApiClient.convertToType(data['fedex_account_number'], 'String');
            }
            if (data.hasOwnProperty('free_shipping')) {
                obj['free_shipping'] = ApiClient.convertToType(data['free_shipping'], 'Boolean');
            }
            if (data.hasOwnProperty('free_shipping_minimum')) {
                obj['free_shipping_minimum'] = ApiClient.convertToType(data['free_shipping_minimum'], 'Number');
            }
            if (data.hasOwnProperty('maximum_item_count')) {
                obj['maximum_item_count'] = ApiClient.convertToType(data['maximum_item_count'], 'Number');
            }
            if (data.hasOwnProperty('minimum_item_count')) {
                obj['minimum_item_count'] = ApiClient.convertToType(data['minimum_item_count'], 'Number');
            }
            if (data.hasOwnProperty('minimum_subtotal')) {
                obj['minimum_subtotal'] = ApiClient.convertToType(data['minimum_subtotal'], 'Number');
            }
            if (data.hasOwnProperty('no_coupons')) {
                obj['no_coupons'] = ApiClient.convertToType(data['no_coupons'], 'Boolean');
            }
            if (data.hasOwnProperty('no_free_shipping')) {
                obj['no_free_shipping'] = ApiClient.convertToType(data['no_free_shipping'], 'Boolean');
            }
            if (data.hasOwnProperty('no_realtime_charge')) {
                obj['no_realtime_charge'] = ApiClient.convertToType(data['no_realtime_charge'], 'Boolean');
            }
            if (data.hasOwnProperty('pricing_tiers')) {
                obj['pricing_tiers'] = ApiClient.convertToType(data['pricing_tiers'], ['String']);
            }
            if (data.hasOwnProperty('shipping_addresses')) {
                obj['shipping_addresses'] = ApiClient.convertToType(data['shipping_addresses'], [CartCustomerProfileAddress]);
            }
            if (data.hasOwnProperty('signup_dts')) {
                obj['signup_dts'] = ApiClient.convertToType(data['signup_dts'], 'String');
            }
            if (data.hasOwnProperty('tax_exempt')) {
                obj['tax_exempt'] = ApiClient.convertToType(data['tax_exempt'], 'Boolean');
            }
            if (data.hasOwnProperty('ups_account_number')) {
                obj['ups_account_number'] = ApiClient.convertToType(data['ups_account_number'], 'String');
            }
        }
        return obj;
    }


}

/**
 * True if profile is allowed to bill to their 3rd party shipping account
 * @member {Boolean} allow_3rd_party_billing
 */
CartCustomerProfile.prototype['allow_3rd_party_billing'] = undefined;

/**
 * True if this profile is allowed to use a COD
 * @member {Boolean} allow_cod
 */
CartCustomerProfile.prototype['allow_cod'] = undefined;

/**
 * True if this profile is allowed to use a purchase order
 * @member {Boolean} allow_purchase_order
 */
CartCustomerProfile.prototype['allow_purchase_order'] = undefined;

/**
 * Billing addresses on file for this profile
 * @member {Array.<module:com.ultracart.admin.v2.models/CartCustomerProfileAddress>} billing_addresses
 */
CartCustomerProfile.prototype['billing_addresses'] = undefined;

/**
 * Credit cards on file for this profile (masked)
 * @member {Array.<module:com.ultracart.admin.v2.models/CartCustomerProfileCreditCard>} credit_cards
 */
CartCustomerProfile.prototype['credit_cards'] = undefined;

/**
 * Unique identifier
 * @member {Number} customer_profile_oid
 */
CartCustomerProfile.prototype['customer_profile_oid'] = undefined;

/**
 * DHL account number on file
 * @member {String} dhl_account_number
 */
CartCustomerProfile.prototype['dhl_account_number'] = undefined;

/**
 * DHL duty account number on file
 * @member {String} dhl_duty_account_number
 */
CartCustomerProfile.prototype['dhl_duty_account_number'] = undefined;

/**
 * Email
 * @member {String} email
 */
CartCustomerProfile.prototype['email'] = undefined;

/**
 * FedEx account number on file
 * @member {String} fedex_account_number
 */
CartCustomerProfile.prototype['fedex_account_number'] = undefined;

/**
 * True if this profile always qualifies for free shipping
 * @member {Boolean} free_shipping
 */
CartCustomerProfile.prototype['free_shipping'] = undefined;

/**
 * The minimum amount that this profile has to purchase to qualify for free shipping
 * @member {Number} free_shipping_minimum
 */
CartCustomerProfile.prototype['free_shipping_minimum'] = undefined;

/**
 * Maximum item count this profile can purchase
 * @member {Number} maximum_item_count
 */
CartCustomerProfile.prototype['maximum_item_count'] = undefined;

/**
 * Minimum item count this profile must purchase
 * @member {Number} minimum_item_count
 */
CartCustomerProfile.prototype['minimum_item_count'] = undefined;

/**
 * Minimum subtotal this profile must purchase
 * @member {Number} minimum_subtotal
 */
CartCustomerProfile.prototype['minimum_subtotal'] = undefined;

/**
 * True if this profile is prevented from using coupons
 * @member {Boolean} no_coupons
 */
CartCustomerProfile.prototype['no_coupons'] = undefined;

/**
 * True if this profile is never given free shipping
 * @member {Boolean} no_free_shipping
 */
CartCustomerProfile.prototype['no_free_shipping'] = undefined;

/**
 * True if this customers orders are not charged in real-time
 * @member {Boolean} no_realtime_charge
 */
CartCustomerProfile.prototype['no_realtime_charge'] = undefined;

/**
 * Pricing tier names this profile qualifies for
 * @member {Array.<String>} pricing_tiers
 */
CartCustomerProfile.prototype['pricing_tiers'] = undefined;

/**
 * Shipping addresses on file for this profile
 * @member {Array.<module:com.ultracart.admin.v2.models/CartCustomerProfileAddress>} shipping_addresses
 */
CartCustomerProfile.prototype['shipping_addresses'] = undefined;

/**
 * Signup date
 * @member {String} signup_dts
 */
CartCustomerProfile.prototype['signup_dts'] = undefined;

/**
 * True if this profile is exempt from sales tax
 * @member {Boolean} tax_exempt
 */
CartCustomerProfile.prototype['tax_exempt'] = undefined;

/**
 * UPS account number on file
 * @member {String} ups_account_number
 */
CartCustomerProfile.prototype['ups_account_number'] = undefined;






export default CartCustomerProfile;

