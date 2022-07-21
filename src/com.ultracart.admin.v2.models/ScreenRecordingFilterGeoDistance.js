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
 * The ScreenRecordingFilterGeoDistance model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingFilterGeoDistance
 * @version 4.0.39-RC
 */
class ScreenRecordingFilterGeoDistance {
    /**
     * Constructs a new <code>ScreenRecordingFilterGeoDistance</code>.
     * @alias module:com.ultracart.admin.v2.models/ScreenRecordingFilterGeoDistance
     */
    constructor() { 
        
        ScreenRecordingFilterGeoDistance.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScreenRecordingFilterGeoDistance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingFilterGeoDistance} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingFilterGeoDistance} The populated <code>ScreenRecordingFilterGeoDistance</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScreenRecordingFilterGeoDistance();

            if (data.hasOwnProperty('distance')) {
                obj['distance'] = ApiClient.convertToType(data['distance'], 'Number');
            }
            if (data.hasOwnProperty('distance_uom')) {
                obj['distance_uom'] = ApiClient.convertToType(data['distance_uom'], 'String');
            }
            if (data.hasOwnProperty('from_address')) {
                obj['from_address'] = ApiClient.convertToType(data['from_address'], 'String');
            }
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
 * @member {Number} distance
 */
ScreenRecordingFilterGeoDistance.prototype['distance'] = undefined;

/**
 * @member {String} distance_uom
 */
ScreenRecordingFilterGeoDistance.prototype['distance_uom'] = undefined;

/**
 * @member {String} from_address
 */
ScreenRecordingFilterGeoDistance.prototype['from_address'] = undefined;

/**
 * @member {Number} lat
 */
ScreenRecordingFilterGeoDistance.prototype['lat'] = undefined;

/**
 * @member {Number} lon
 */
ScreenRecordingFilterGeoDistance.prototype['lon'] = undefined;






export default ScreenRecordingFilterGeoDistance;

