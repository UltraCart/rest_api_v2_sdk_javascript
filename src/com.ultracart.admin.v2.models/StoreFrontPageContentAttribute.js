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
 * The StoreFrontPageContentAttribute model module.
 * @module com.ultracart.admin.v2.models/StoreFrontPageContentAttribute
 * @version 4.1.0
 */
class StoreFrontPageContentAttribute {
    /**
     * Constructs a new <code>StoreFrontPageContentAttribute</code>.
     * @alias module:com.ultracart.admin.v2.models/StoreFrontPageContentAttribute
     */
    constructor() { 
        
        StoreFrontPageContentAttribute.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StoreFrontPageContentAttribute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/StoreFrontPageContentAttribute} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/StoreFrontPageContentAttribute} The populated <code>StoreFrontPageContentAttribute</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StoreFrontPageContentAttribute();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('translated_text_instance_oid')) {
                obj['translated_text_instance_oid'] = ApiClient.convertToType(data['translated_text_instance_oid'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Attribute name
 * @member {String} name
 */
StoreFrontPageContentAttribute.prototype['name'] = undefined;

/**
 * Attribute translated text instance identifier
 * @member {Number} translated_text_instance_oid
 */
StoreFrontPageContentAttribute.prototype['translated_text_instance_oid'] = undefined;

/**
 * Attribute type
 * @member {String} type
 */
StoreFrontPageContentAttribute.prototype['type'] = undefined;

/**
 * Attribute value
 * @member {String} value
 */
StoreFrontPageContentAttribute.prototype['value'] = undefined;






export default StoreFrontPageContentAttribute;

