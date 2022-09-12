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
 * The ItemProperty model module.
 * @module com.ultracart.admin.v2.models/ItemProperty
 * @version 4.0.62-RC
 */
class ItemProperty {
    /**
     * Constructs a new <code>ItemProperty</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemProperty
     */
    constructor() { 
        
        ItemProperty.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemProperty</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemProperty} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemProperty} The populated <code>ItemProperty</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemProperty();

            if (data.hasOwnProperty('expirationDts')) {
                obj['expirationDts'] = ApiClient.convertToType(data['expirationDts'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Expiration of the property
 * @member {String} expirationDts
 */
ItemProperty.prototype['expirationDts'] = undefined;

/**
 * Property name
 * @member {String} name
 */
ItemProperty.prototype['name'] = undefined;

/**
 * Property value
 * @member {String} value
 */
ItemProperty.prototype['value'] = undefined;






export default ItemProperty;

