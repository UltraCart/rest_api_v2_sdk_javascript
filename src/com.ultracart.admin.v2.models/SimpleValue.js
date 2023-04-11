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
 * The SimpleValue model module.
 * @module com.ultracart.admin.v2.models/SimpleValue
 * @version 4.0.146
 */
class SimpleValue {
    /**
     * Constructs a new <code>SimpleValue</code>.
     * @alias module:com.ultracart.admin.v2.models/SimpleValue
     */
    constructor() { 
        
        SimpleValue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SimpleValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/SimpleValue} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/SimpleValue} The populated <code>SimpleValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SimpleValue();

            if (data.hasOwnProperty('display')) {
                obj['display'] = ApiClient.convertToType(data['display'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A friendly display of this value suitable for human reading
 * @member {String} display
 */
SimpleValue.prototype['display'] = undefined;

/**
 * The actual value
 * @member {String} value
 */
SimpleValue.prototype['value'] = undefined;






export default SimpleValue;

