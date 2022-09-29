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
 * The BrowserOS model module.
 * @module com.ultracart.admin.v2.models/BrowserOS
 * @version 4.0.70-RC
 */
class BrowserOS {
    /**
     * Constructs a new <code>BrowserOS</code>.
     * @alias module:com.ultracart.admin.v2.models/BrowserOS
     */
    constructor() { 
        
        BrowserOS.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BrowserOS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/BrowserOS} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/BrowserOS} The populated <code>BrowserOS</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BrowserOS();

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
            if (data.hasOwnProperty('patch_minor')) {
                obj['patch_minor'] = ApiClient.convertToType(data['patch_minor'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} family
 */
BrowserOS.prototype['family'] = undefined;

/**
 * @member {String} major
 */
BrowserOS.prototype['major'] = undefined;

/**
 * @member {String} minor
 */
BrowserOS.prototype['minor'] = undefined;

/**
 * @member {String} patch
 */
BrowserOS.prototype['patch'] = undefined;

/**
 * @member {String} patch_minor
 */
BrowserOS.prototype['patch_minor'] = undefined;






export default BrowserOS;

