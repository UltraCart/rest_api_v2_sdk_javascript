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
 * The ScreenRecordingMultifield model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingMultifield
 * @version 4.0.90-RC
 */
class ScreenRecordingMultifield {
    /**
     * Constructs a new <code>ScreenRecordingMultifield</code>.
     * @alias module:com.ultracart.admin.v2.models/ScreenRecordingMultifield
     */
    constructor() { 
        
        ScreenRecordingMultifield.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScreenRecordingMultifield</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingMultifield} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingMultifield} The populated <code>ScreenRecordingMultifield</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScreenRecordingMultifield();

            if (data.hasOwnProperty('bd')) {
                obj['bd'] = ApiClient.convertToType(data['bd'], 'Number');
            }
            if (data.hasOwnProperty('bool')) {
                obj['bool'] = ApiClient.convertToType(data['bool'], 'Boolean');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'String');
            }
            if (data.hasOwnProperty('num')) {
                obj['num'] = ApiClient.convertToType(data['num'], 'Number');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} bd
 */
ScreenRecordingMultifield.prototype['bd'] = undefined;

/**
 * @member {Boolean} bool
 */
ScreenRecordingMultifield.prototype['bool'] = undefined;

/**
 * @member {String} json
 */
ScreenRecordingMultifield.prototype['json'] = undefined;

/**
 * @member {Number} num
 */
ScreenRecordingMultifield.prototype['num'] = undefined;

/**
 * @member {String} text
 */
ScreenRecordingMultifield.prototype['text'] = undefined;






export default ScreenRecordingMultifield;

