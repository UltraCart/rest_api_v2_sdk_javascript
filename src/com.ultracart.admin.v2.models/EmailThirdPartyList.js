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
 * The EmailThirdPartyList model module.
 * @module com.ultracart.admin.v2.models/EmailThirdPartyList
 * @version 4.0.244
 */
class EmailThirdPartyList {
    /**
     * Constructs a new <code>EmailThirdPartyList</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailThirdPartyList
     */
    constructor() { 
        
        EmailThirdPartyList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailThirdPartyList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailThirdPartyList} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailThirdPartyList} The populated <code>EmailThirdPartyList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailThirdPartyList();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * id
 * @member {String} id
 */
EmailThirdPartyList.prototype['id'] = undefined;

/**
 * name
 * @member {String} name
 */
EmailThirdPartyList.prototype['name'] = undefined;






export default EmailThirdPartyList;

