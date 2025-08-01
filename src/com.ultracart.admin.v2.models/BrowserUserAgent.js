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
 * The BrowserUserAgent model module.
 * @module com.ultracart.admin.v2.models/BrowserUserAgent
 * @version 4.1.16
 */
class BrowserUserAgent {
    /**
     * Constructs a new <code>BrowserUserAgent</code>.
     * @alias module:com.ultracart.admin.v2.models/BrowserUserAgent
     */
    constructor() { 
        
        BrowserUserAgent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BrowserUserAgent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/BrowserUserAgent} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/BrowserUserAgent} The populated <code>BrowserUserAgent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BrowserUserAgent();

            if (data.hasOwnProperty('family')) {
                obj['family'] = ApiClient.convertToType(data['family'], 'String');
            }
            if (data.hasOwnProperty('major')) {
                obj['major'] = ApiClient.convertToType(data['major'], 'String');
            }
            if (data.hasOwnProperty('minor')) {
                obj['minor'] = ApiClient.convertToType(data['minor'], 'String');
            }
            if (data.hasOwnProperty('patch')) {
                obj['patch'] = ApiClient.convertToType(data['patch'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} family
 */
BrowserUserAgent.prototype['family'] = undefined;

/**
 * @member {String} major
 */
BrowserUserAgent.prototype['major'] = undefined;

/**
 * @member {String} minor
 */
BrowserUserAgent.prototype['minor'] = undefined;

/**
 * @member {String} patch
 */
BrowserUserAgent.prototype['patch'] = undefined;






export default BrowserUserAgent;

