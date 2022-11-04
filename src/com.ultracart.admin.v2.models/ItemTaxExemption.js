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
 * The ItemTaxExemption model module.
 * @module com.ultracart.admin.v2.models/ItemTaxExemption
 * @version 4.0.78-RC
 */
class ItemTaxExemption {
    /**
     * Constructs a new <code>ItemTaxExemption</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemTaxExemption
     */
    constructor() { 
        
        ItemTaxExemption.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemTaxExemption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemTaxExemption} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemTaxExemption} The populated <code>ItemTaxExemption</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemTaxExemption();

            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('country_code')) {
                obj['country_code'] = ApiClient.convertToType(data['country_code'], 'String');
            }
            if (data.hasOwnProperty('county')) {
                obj['county'] = ApiClient.convertToType(data['county'], 'String');
            }
            if (data.hasOwnProperty('postal_code')) {
                obj['postal_code'] = ApiClient.convertToType(data['postal_code'], 'String');
            }
            if (data.hasOwnProperty('state_code')) {
                obj['state_code'] = ApiClient.convertToType(data['state_code'], 'String');
            }
        }
        return obj;
    }


}

/**
 * City
 * @member {String} city
 */
ItemTaxExemption.prototype['city'] = undefined;

/**
 * Country code (ISO-3166 two letter)
 * @member {String} country_code
 */
ItemTaxExemption.prototype['country_code'] = undefined;

/**
 * County
 * @member {String} county
 */
ItemTaxExemption.prototype['county'] = undefined;

/**
 * Postal code
 * @member {String} postal_code
 */
ItemTaxExemption.prototype['postal_code'] = undefined;

/**
 * State code
 * @member {String} state_code
 */
ItemTaxExemption.prototype['state_code'] = undefined;






export default ItemTaxExemption;

