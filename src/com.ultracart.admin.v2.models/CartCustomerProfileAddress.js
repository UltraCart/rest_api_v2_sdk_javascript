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
 * The CartCustomerProfileAddress model module.
 * @module com.ultracart.admin.v2.models/CartCustomerProfileAddress
 * @version 4.0.53-RC
 */
class CartCustomerProfileAddress {
    /**
     * Constructs a new <code>CartCustomerProfileAddress</code>.
     * @alias module:com.ultracart.admin.v2.models/CartCustomerProfileAddress
     */
    constructor() { 
        
        CartCustomerProfileAddress.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartCustomerProfileAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartCustomerProfileAddress} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartCustomerProfileAddress} The populated <code>CartCustomerProfileAddress</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartCustomerProfileAddress();

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
            if (data.hasOwnProperty('evening_phone')) {
                obj['evening_phone'] = ApiClient.convertToType(data['evening_phone'], 'String');
            }
            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('oid')) {
                obj['oid'] = ApiClient.convertToType(data['oid'], 'Number');
            }
            if (data.hasOwnProperty('postal_code')) {
                obj['postal_code'] = ApiClient.convertToType(data['postal_code'], 'String');
            }
            if (data.hasOwnProperty('state_region')) {
                obj['state_region'] = ApiClient.convertToType(data['state_region'], 'String');
            }
            if (data.hasOwnProperty('tax_county')) {
                obj['tax_county'] = ApiClient.convertToType(data['tax_county'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Address 1
 * @member {String} address1
 */
CartCustomerProfileAddress.prototype['address1'] = undefined;

/**
 * Address 2
 * @member {String} address2
 */
CartCustomerProfileAddress.prototype['address2'] = undefined;

/**
 * City
 * @member {String} city
 */
CartCustomerProfileAddress.prototype['city'] = undefined;

/**
 * Company
 * @member {String} company
 */
CartCustomerProfileAddress.prototype['company'] = undefined;

/**
 * ISO-3166 Country code
 * @member {String} country_code
 */
CartCustomerProfileAddress.prototype['country_code'] = undefined;

/**
 * Day phone
 * @member {String} day_phone
 */
CartCustomerProfileAddress.prototype['day_phone'] = undefined;

/**
 * Evening phone
 * @member {String} evening_phone
 */
CartCustomerProfileAddress.prototype['evening_phone'] = undefined;

/**
 * First name
 * @member {String} first_name
 */
CartCustomerProfileAddress.prototype['first_name'] = undefined;

/**
 * Last name
 * @member {String} last_name
 */
CartCustomerProfileAddress.prototype['last_name'] = undefined;

/**
 * Unique identifier for this address
 * @member {Number} oid
 */
CartCustomerProfileAddress.prototype['oid'] = undefined;

/**
 * Postal code
 * @member {String} postal_code
 */
CartCustomerProfileAddress.prototype['postal_code'] = undefined;

/**
 * State for United States otherwise region or province for other countries
 * @member {String} state_region
 */
CartCustomerProfileAddress.prototype['state_region'] = undefined;

/**
 * Tax county if a billing address
 * @member {String} tax_county
 */
CartCustomerProfileAddress.prototype['tax_county'] = undefined;

/**
 * Title
 * @member {String} title
 */
CartCustomerProfileAddress.prototype['title'] = undefined;






export default CartCustomerProfileAddress;

