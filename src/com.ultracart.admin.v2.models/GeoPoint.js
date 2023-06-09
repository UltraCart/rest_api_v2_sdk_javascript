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
 * The GeoPoint model module.
 * @module com.ultracart.admin.v2.models/GeoPoint
 * @version 4.0.159
 */
class GeoPoint {
    /**
     * Constructs a new <code>GeoPoint</code>.
     * @alias module:com.ultracart.admin.v2.models/GeoPoint
     */
    constructor() { 
        
        GeoPoint.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GeoPoint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/GeoPoint} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/GeoPoint} The populated <code>GeoPoint</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GeoPoint();

            if (data.hasOwnProperty('lat')) {
                obj['lat'] = ApiClient.convertToType(data['lat'], 'Number');
            }
            if (data.hasOwnProperty('lon')) {
                obj['lon'] = ApiClient.convertToType(data['lon'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} lat
 */
GeoPoint.prototype['lat'] = undefined;

/**
 * @member {Number} lon
 */
GeoPoint.prototype['lon'] = undefined;






export default GeoPoint;

