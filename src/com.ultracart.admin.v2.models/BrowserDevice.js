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
 * The BrowserDevice model module.
 * @module com.ultracart.admin.v2.models/BrowserDevice
 * @version 4.0.165
 */
class BrowserDevice {
    /**
     * Constructs a new <code>BrowserDevice</code>.
     * @alias module:com.ultracart.admin.v2.models/BrowserDevice
     */
    constructor() { 
        
        BrowserDevice.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BrowserDevice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/BrowserDevice} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/BrowserDevice} The populated <code>BrowserDevice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BrowserDevice();

            if (data.hasOwnProperty('family')) {
                obj['family'] = ApiClient.convertToType(data['family'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} family
 */
BrowserDevice.prototype['family'] = undefined;






export default BrowserDevice;

