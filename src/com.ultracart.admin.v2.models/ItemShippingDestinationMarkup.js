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
 * The ItemShippingDestinationMarkup model module.
 * @module com.ultracart.admin.v2.models/ItemShippingDestinationMarkup
 * @version 4.0.126-RC
 */
class ItemShippingDestinationMarkup {
    /**
     * Constructs a new <code>ItemShippingDestinationMarkup</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemShippingDestinationMarkup
     */
    constructor() { 
        
        ItemShippingDestinationMarkup.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemShippingDestinationMarkup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemShippingDestinationMarkup} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemShippingDestinationMarkup} The populated <code>ItemShippingDestinationMarkup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemShippingDestinationMarkup();

            if (data.hasOwnProperty('country_code')) {
                obj['country_code'] = ApiClient.convertToType(data['country_code'], 'String');
            }
            if (data.hasOwnProperty('flat_fee')) {
                obj['flat_fee'] = ApiClient.convertToType(data['flat_fee'], 'Number');
            }
            if (data.hasOwnProperty('per_item')) {
                obj['per_item'] = ApiClient.convertToType(data['per_item'], 'Number');
            }
            if (data.hasOwnProperty('postal_code')) {
                obj['postal_code'] = ApiClient.convertToType(data['postal_code'], 'String');
            }
            if (data.hasOwnProperty('shipping_method')) {
                obj['shipping_method'] = ApiClient.convertToType(data['shipping_method'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Country code (ISO-3166 two letter)
 * @member {String} country_code
 */
ItemShippingDestinationMarkup.prototype['country_code'] = undefined;

/**
 * Flat fee
 * @member {Number} flat_fee
 */
ItemShippingDestinationMarkup.prototype['flat_fee'] = undefined;

/**
 * Per item
 * @member {Number} per_item
 */
ItemShippingDestinationMarkup.prototype['per_item'] = undefined;

/**
 * Postal code
 * @member {String} postal_code
 */
ItemShippingDestinationMarkup.prototype['postal_code'] = undefined;

/**
 * Shipping method
 * @member {String} shipping_method
 */
ItemShippingDestinationMarkup.prototype['shipping_method'] = undefined;

/**
 * State
 * @member {String} state
 */
ItemShippingDestinationMarkup.prototype['state'] = undefined;






export default ItemShippingDestinationMarkup;

