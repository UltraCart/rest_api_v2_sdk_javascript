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
 * The Warning model module.
 * @module com.ultracart.admin.v2.models/Warning
 * @version 4.0.105-RC
 */
class Warning {
    /**
     * Constructs a new <code>Warning</code>.
     * @alias module:com.ultracart.admin.v2.models/Warning
     */
    constructor() { 
        
        Warning.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Warning</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/Warning} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/Warning} The populated <code>Warning</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Warning();

            if (data.hasOwnProperty('more_info')) {
                obj['more_info'] = ApiClient.convertToType(data['more_info'], 'String');
            }
            if (data.hasOwnProperty('warning_message')) {
                obj['warning_message'] = ApiClient.convertToType(data['warning_message'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Additional information often a link to additional documentation
 * @member {String} more_info
 */
Warning.prototype['more_info'] = undefined;

/**
 * A technical message meant to be read by a developer
 * @member {String} warning_message
 */
Warning.prototype['warning_message'] = undefined;






export default Warning;

