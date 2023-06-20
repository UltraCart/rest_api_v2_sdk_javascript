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
 * The CartShipping model module.
 * @module com.ultracart.admin.v2.models/CartShipping
 * @version 4.0.163
 */
class CartShipping {
    /**
     * Constructs a new <code>CartShipping</code>.
     * @alias module:com.ultracart.admin.v2.models/CartShipping
     */
    constructor() { 
        
        CartShipping.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartShipping</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartShipping} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartShipping} The populated <code>CartShipping</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartShipping();

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
            if (data.hasOwnProperty('delivery_date')) {
                obj['delivery_date'] = ApiClient.convertToType(data['delivery_date'], 'String');
            }
            if (data.hasOwnProperty('evening_phone')) {
                obj['evening_phone'] = ApiClient.convertToType(data['evening_phone'], 'String');
            }
            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('lift_gate')) {
                obj['lift_gate'] = ApiClient.convertToType(data['lift_gate'], 'Boolean');
            }
            if (data.hasOwnProperty('postal_code')) {
                obj['postal_code'] = ApiClient.convertToType(data['postal_code'], 'String');
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
            if (data.hasOwnProperty('shipping_method')) {
                obj['shipping_method'] = ApiClient.convertToType(data['shipping_method'], 'String');
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
        }
        return obj;
    }


}

/**
 * Address line 1
 * @member {String} address1
 */
CartShipping.prototype['address1'] = undefined;

/**
 * Address line 2
 * @member {String} address2
 */
CartShipping.prototype['address2'] = undefined;

/**
 * City
 * @member {String} city
 */
CartShipping.prototype['city'] = undefined;

/**
 * Company
 * @member {String} company
 */
CartShipping.prototype['company'] = undefined;

/**
 * ISO-3166 two letter country code
 * @member {String} country_code
 */
CartShipping.prototype['country_code'] = undefined;

/**
 * Day time phone
 * @member {String} day_phone
 */
CartShipping.prototype['day_phone'] = undefined;

/**
 * Date the customer is requesting delivery on. Typically used for perishable product delivery.
 * @member {String} delivery_date
 */
CartShipping.prototype['delivery_date'] = undefined;

/**
 * Evening phone
 * @member {String} evening_phone
 */
CartShipping.prototype['evening_phone'] = undefined;

/**
 * First name
 * @member {String} first_name
 */
CartShipping.prototype['first_name'] = undefined;

/**
 * Last name
 * @member {String} last_name
 */
CartShipping.prototype['last_name'] = undefined;

/**
 * Lift gate requested (LTL shipping methods only)
 * @member {Boolean} lift_gate
 */
CartShipping.prototype['lift_gate'] = undefined;

/**
 * Postal code
 * @member {String} postal_code
 */
CartShipping.prototype['postal_code'] = undefined;

/**
 * Date the customer is requesting that the order ship on.  Typically used for perishable product delivery.
 * @member {String} ship_on_date
 */
CartShipping.prototype['ship_on_date'] = undefined;

/**
 * True if the shipping adress is residential.  Effects the methods that are available to the customer as well as the price of the shipping method.
 * @member {Boolean} ship_to_residential
 */
CartShipping.prototype['ship_to_residential'] = undefined;

/**
 * 3rd party account number to ship against for UPS or FedEx
 * @member {String} shipping_3rd_party_account_number
 */
CartShipping.prototype['shipping_3rd_party_account_number'] = undefined;

/**
 * Shipping method
 * @member {String} shipping_method
 */
CartShipping.prototype['shipping_method'] = undefined;

/**
 * Special instructions from the customer regarding shipping
 * @member {String} special_instructions
 */
CartShipping.prototype['special_instructions'] = undefined;

/**
 * State/Region
 * @member {String} state_region
 */
CartShipping.prototype['state_region'] = undefined;

/**
 * Title
 * @member {String} title
 */
CartShipping.prototype['title'] = undefined;






export default CartShipping;

