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
 * The ItemIdentifiers model module.
 * @module com.ultracart.admin.v2.models/ItemIdentifiers
 * @version 4.0.129
 */
class ItemIdentifiers {
    /**
     * Constructs a new <code>ItemIdentifiers</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemIdentifiers
     */
    constructor() { 
        
        ItemIdentifiers.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemIdentifiers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemIdentifiers} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemIdentifiers} The populated <code>ItemIdentifiers</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemIdentifiers();

            if (data.hasOwnProperty('barcode')) {
                obj['barcode'] = ApiClient.convertToType(data['barcode'], 'String');
            }
            if (data.hasOwnProperty('manufacturer_name')) {
                obj['manufacturer_name'] = ApiClient.convertToType(data['manufacturer_name'], 'String');
            }
            if (data.hasOwnProperty('manufacturer_sku')) {
                obj['manufacturer_sku'] = ApiClient.convertToType(data['manufacturer_sku'], 'String');
            }
            if (data.hasOwnProperty('unspsc')) {
                obj['unspsc'] = ApiClient.convertToType(data['unspsc'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Barcode
 * @member {String} barcode
 */
ItemIdentifiers.prototype['barcode'] = undefined;

/**
 * Manufacturer Name
 * @member {String} manufacturer_name
 */
ItemIdentifiers.prototype['manufacturer_name'] = undefined;

/**
 * Manufacturer SKU
 * @member {String} manufacturer_sku
 */
ItemIdentifiers.prototype['manufacturer_sku'] = undefined;

/**
 * UNSPSC
 * @member {String} unspsc
 */
ItemIdentifiers.prototype['unspsc'] = undefined;






export default ItemIdentifiers;

