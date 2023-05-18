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
 * The AutoOrderItemOption model module.
 * @module com.ultracart.admin.v2.models/AutoOrderItemOption
 * @version 4.0.155
 */
class AutoOrderItemOption {
    /**
     * Constructs a new <code>AutoOrderItemOption</code>.
     * @alias module:com.ultracart.admin.v2.models/AutoOrderItemOption
     */
    constructor() { 
        
        AutoOrderItemOption.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AutoOrderItemOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/AutoOrderItemOption} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/AutoOrderItemOption} The populated <code>AutoOrderItemOption</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AutoOrderItemOption();

            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Label
 * @member {String} label
 */
AutoOrderItemOption.prototype['label'] = undefined;

/**
 * Value
 * @member {String} value
 */
AutoOrderItemOption.prototype['value'] = undefined;






export default AutoOrderItemOption;

