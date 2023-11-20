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
 * The KeyValue model module.
 * @module com.ultracart.admin.v2.models/KeyValue
 * @version 4.0.190
 */
class KeyValue {
    /**
     * Constructs a new <code>KeyValue</code>.
     * @alias module:com.ultracart.admin.v2.models/KeyValue
     */
    constructor() { 
        
        KeyValue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>KeyValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/KeyValue} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/KeyValue} The populated <code>KeyValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KeyValue();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Optional description of the lookup value
 * @member {String} description
 */
KeyValue.prototype['description'] = undefined;

/**
 * The key or id of this lookup value
 * @member {String} key
 */
KeyValue.prototype['key'] = undefined;

/**
 * The value of this lookup value
 * @member {String} value
 */
KeyValue.prototype['value'] = undefined;






export default KeyValue;

