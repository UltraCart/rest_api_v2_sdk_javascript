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
import OrderTrackingNumberDetails from './OrderTrackingNumberDetails';
import Weight from './Weight';

/**
 * The OrderShipping model module.
 * @module com.ultracart.admin.v2.models/OrderShipping
 * @version 4.0.155
 */
class OrderShipping {
    /**
     * Constructs a new <code>OrderShipping</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderShipping
     */
    constructor() { 
        
        OrderShipping.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderShipping</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderShipping} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderShipping} The populated <code>OrderShipping</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderShipping();

            if (data.hasOwnProperty('address1')) {
                obj['address1'] = ApiClient.convertToType(data['address1'], 'String');
            }
            if (data.hasOwnProperty('address2')) {
                obj['address2'] = ApiClient.convertToType(data['address2'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('company')) {
                obj['company'] = ApiClient.convertToType(data['company'], 'String');
            }
            if (data.hasOwnProperty('country_code')) {
                obj['country_code'] = ApiClient.convertToType(data['country_code'], 'String');
            }
            if (data.hasOwnProperty('day_phone')) {
                obj['day_phone'] = ApiClient.convertToType(data['day_phone'], 'String');
            }
            if (data.hasOwnProperty('day_phone_e164')) {
                obj['day_phone_e164'] = ApiClient.convertToType(data['day_phone_e164'], 'String');
            }
            if (data.hasOwnProperty('delivery_date')) {
                obj['delivery_date'] = ApiClient.convertToType(data['delivery_date'], 'String');
            }
            if (data.hasOwnProperty('evening_phone')) {
                obj['evening_phone'] = ApiClient.convertToType(data['evening_phone'], 'String');
            }
            if (data.hasOwnProperty('evening_phone_e164')) {
                obj['evening_phone_e164'] = ApiClient.convertToType(data['evening_phone_e164'], 'String');
            }
            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('least_cost_route')) {
                obj['least_cost_route'] = ApiClient.convertToType(data['least_cost_route'], 'Boolean');
            }
            if (data.hasOwnProperty('least_cost_route_shipping_methods')) {
                obj['least_cost_route_shipping_methods'] = ApiClient.convertToType(data['least_cost_route_shipping_methods'], ['String']);
            }
            if (data.hasOwnProperty('lift_gate')) {
                obj['lift_gate'] = ApiClient.convertToType(data['lift_gate'], 'Boolean');
            }
            if (data.hasOwnProperty('postal_code')) {
                obj['postal_code'] = ApiClient.convertToType(data['postal_code'], 'String');
            }
            if (data.hasOwnProperty('rma')) {
                obj['rma'] = ApiClient.convertToType(data['rma'], 'String');
            }
            if (data.hasOwnProperty('ship_on_date')) {
                obj['ship_on_date'] = ApiClient.convertToType(data['ship_on_date'], 'String');
            }
            if (data.hasOwnProperty('ship_to_residential')) {
                obj['ship_to_residential'] = ApiClient.convertToType(data['ship_to_residential'], 'Boolean');
            }
            if (data.hasOwnProperty('shipping_3rd_party_account_number')) {
                obj['shipping_3rd_party_account_number'] = ApiClient.convertToType(data['shipping_3rd_party_account_number'], 'String');
            }
            if (data.hasOwnProperty('shipping_date')) {
                obj['shipping_date'] = ApiClient.convertToType(data['shipping_date'], 'String');
            }
            if (data.hasOwnProperty('shipping_department_status')) {
                obj['shipping_department_status'] = ApiClient.convertToType(data['shipping_department_status'], 'String');
            }
            if (data.hasOwnProperty('shipping_method')) {
                obj['shipping_method'] = ApiClient.convertToType(data['shipping_method'], 'String');
            }
            if (data.hasOwnProperty('shipping_method_accounting_code')) {
                obj['shipping_method_accounting_code'] = ApiClient.convertToType(data['shipping_method_accounting_code'], 'String');
            }
            if (data.hasOwnProperty('special_instructions')) {
                obj['special_instructions'] = ApiClient.convertToType(data['special_instructions'], 'String');
            }
            if (data.hasOwnProperty('state_region')) {
                obj['state_region'] = ApiClient.convertToType(data['state_region'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('tracking_number_details')) {
                obj['tracking_number_details'] = ApiClient.convertToType(data['tracking_number_details'], [OrderTrackingNumberDetails]);
            }
            if (data.hasOwnProperty('tracking_numbers')) {
                obj['tracking_numbers'] = ApiClient.convertToType(data['tracking_numbers'], ['String']);
            }
            if (data.hasOwnProperty('weight')) {
                obj['weight'] = Weight.constructFromObject(data['weight']);
            }
        }
        return obj;
    }


}

/**
 * Address line 1
 * @member {String} address1
 */
OrderShipping.prototype['address1'] = undefined;

/**
 * Address line 2
 * @member {String} address2
 */
OrderShipping.prototype['address2'] = undefined;

/**
 * City
 * @member {String} city
 */
OrderShipping.prototype['city'] = undefined;

/**
 * Company
 * @member {String} company
 */
OrderShipping.prototype['company'] = undefined;

/**
 * ISO-3166 two letter country code
 * @member {String} country_code
 */
OrderShipping.prototype['country_code'] = undefined;

/**
 * Day time phone
 * @member {String} day_phone
 */
OrderShipping.prototype['day_phone'] = undefined;

/**
 * Day time phone (E164 format)
 * @member {String} day_phone_e164
 */
OrderShipping.prototype['day_phone_e164'] = undefined;

/**
 * Date the customer is requesting delivery on.  Typically used for perishable product delivery.
 * @member {String} delivery_date
 */
OrderShipping.prototype['delivery_date'] = undefined;

/**
 * Evening phone
 * @member {String} evening_phone
 */
OrderShipping.prototype['evening_phone'] = undefined;

/**
 * Evening phone (E164 format)
 * @member {String} evening_phone_e164
 */
OrderShipping.prototype['evening_phone_e164'] = undefined;

/**
 * First name
 * @member {String} first_name
 */
OrderShipping.prototype['first_name'] = undefined;

/**
 * Last name
 * @member {String} last_name
 */
OrderShipping.prototype['last_name'] = undefined;

/**
 * If true, instructs UltraCart to apply the cheapest shipping method to this order.  Used only for channel partner order inserts.
 * @member {Boolean} least_cost_route
 */
OrderShipping.prototype['least_cost_route'] = undefined;

/**
 * List of shipping methods to consider if least_code_route is true. Used only for channel parter order inserts.
 * @member {Array.<String>} least_cost_route_shipping_methods
 */
OrderShipping.prototype['least_cost_route_shipping_methods'] = undefined;

/**
 * Lift gate requested (LTL shipping methods only)
 * @member {Boolean} lift_gate
 */
OrderShipping.prototype['lift_gate'] = undefined;

/**
 * Postal code
 * @member {String} postal_code
 */
OrderShipping.prototype['postal_code'] = undefined;

/**
 * RMA number
 * @member {String} rma
 */
OrderShipping.prototype['rma'] = undefined;

/**
 * Date the customer is requesting that the order ship on.  Typically used for perishable product delivery.
 * @member {String} ship_on_date
 */
OrderShipping.prototype['ship_on_date'] = undefined;

/**
 * True if the shipping address is residential.  Effects the methods that are available to the customer as well as the price of the shipping method.
 * @member {Boolean} ship_to_residential
 */
OrderShipping.prototype['ship_to_residential'] = undefined;

/**
 * Shipping 3rd party account number
 * @member {String} shipping_3rd_party_account_number
 */
OrderShipping.prototype['shipping_3rd_party_account_number'] = undefined;

/**
 * Date/time the order shipped on.  This date is set once the first shipment is sent to the customer.
 * @member {String} shipping_date
 */
OrderShipping.prototype['shipping_date'] = undefined;

/**
 * Shipping department status
 * @member {String} shipping_department_status
 */
OrderShipping.prototype['shipping_department_status'] = undefined;

/**
 * Shipping method
 * @member {String} shipping_method
 */
OrderShipping.prototype['shipping_method'] = undefined;

/**
 * Shipping method accounting code
 * @member {String} shipping_method_accounting_code
 */
OrderShipping.prototype['shipping_method_accounting_code'] = undefined;

/**
 * Special instructions from the customer regarding shipping
 * @member {String} special_instructions
 */
OrderShipping.prototype['special_instructions'] = undefined;

/**
 * State
 * @member {String} state_region
 */
OrderShipping.prototype['state_region'] = undefined;

/**
 * Title
 * @member {String} title
 */
OrderShipping.prototype['title'] = undefined;

/**
 * Tracking number details
 * @member {Array.<module:com.ultracart.admin.v2.models/OrderTrackingNumberDetails>} tracking_number_details
 */
OrderShipping.prototype['tracking_number_details'] = undefined;

/**
 * Tracking numbers
 * @member {Array.<String>} tracking_numbers
 */
OrderShipping.prototype['tracking_numbers'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Weight} weight
 */
OrderShipping.prototype['weight'] = undefined;






export default OrderShipping;

