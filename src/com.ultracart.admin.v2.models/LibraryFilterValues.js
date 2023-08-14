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
 * The LibraryFilterValues model module.
 * @module com.ultracart.admin.v2.models/LibraryFilterValues
 * @version 4.0.170
 */
class LibraryFilterValues {
    /**
     * Constructs a new <code>LibraryFilterValues</code>.
     * @alias module:com.ultracart.admin.v2.models/LibraryFilterValues
     */
    constructor() { 
        
        LibraryFilterValues.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LibraryFilterValues</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/LibraryFilterValues} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/LibraryFilterValues} The populated <code>LibraryFilterValues</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LibraryFilterValues();

            if (data.hasOwnProperty('categories')) {
                obj['categories'] = ApiClient.convertToType(data['categories'], ['String']);
            }
            if (data.hasOwnProperty('industries')) {
                obj['industries'] = ApiClient.convertToType(data['industries'], ['String']);
            }
            if (data.hasOwnProperty('styles')) {
                obj['styles'] = ApiClient.convertToType(data['styles'], ['String']);
            }
            if (data.hasOwnProperty('types')) {
                obj['types'] = ApiClient.convertToType(data['types'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} categories
 */
LibraryFilterValues.prototype['categories'] = undefined;

/**
 * @member {Array.<String>} industries
 */
LibraryFilterValues.prototype['industries'] = undefined;

/**
 * @member {Array.<String>} styles
 */
LibraryFilterValues.prototype['styles'] = undefined;

/**
 * @member {Array.<String>} types
 */
LibraryFilterValues.prototype['types'] = undefined;






export default LibraryFilterValues;

