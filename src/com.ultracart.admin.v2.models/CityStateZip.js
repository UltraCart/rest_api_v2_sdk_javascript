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
 * The CityStateZip model module.
 * @module com.ultracart.admin.v2.models/CityStateZip
 * @version 4.0.78-RC
 */
class CityStateZip {
    /**
     * Constructs a new <code>CityStateZip</code>.
     * @alias module:com.ultracart.admin.v2.models/CityStateZip
     */
    constructor() { 
        
        CityStateZip.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CityStateZip</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CityStateZip} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CityStateZip} The populated <code>CityStateZip</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CityStateZip();

            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('validZip')) {
                obj['validZip'] = ApiClient.convertToType(data['validZip'], 'Boolean');
            }
            if (data.hasOwnProperty('zip')) {
                obj['zip'] = ApiClient.convertToType(data['zip'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} city
 */
CityStateZip.prototype['city'] = undefined;

/**
 * @member {String} error
 */
CityStateZip.prototype['error'] = undefined;

/**
 * @member {String} state
 */
CityStateZip.prototype['state'] = undefined;

/**
 * @member {Boolean} validZip
 */
CityStateZip.prototype['validZip'] = undefined;

/**
 * @member {String} zip
 */
CityStateZip.prototype['zip'] = undefined;






export default CityStateZip;

