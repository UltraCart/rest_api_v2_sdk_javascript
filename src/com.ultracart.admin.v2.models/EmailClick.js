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
 * The EmailClick model module.
 * @module com.ultracart.admin.v2.models/EmailClick
 * @version 4.0.123-RC
 */
class EmailClick {
    /**
     * Constructs a new <code>EmailClick</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailClick
     */
    constructor() { 
        
        EmailClick.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailClick</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailClick} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailClick} The populated <code>EmailClick</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailClick();

            if (data.hasOwnProperty('click_count')) {
                obj['click_count'] = ApiClient.convertToType(data['click_count'], 'Number');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Click Count
 * @member {Number} click_count
 */
EmailClick.prototype['click_count'] = undefined;

/**
 * url
 * @member {String} url
 */
EmailClick.prototype['url'] = undefined;






export default EmailClick;

