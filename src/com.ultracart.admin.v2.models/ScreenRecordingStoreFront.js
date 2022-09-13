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
 * The ScreenRecordingStoreFront model module.
 * @module com.ultracart.admin.v2.models/ScreenRecordingStoreFront
 * @version 4.0.63-RC
 */
class ScreenRecordingStoreFront {
    /**
     * Constructs a new <code>ScreenRecordingStoreFront</code>.
     * @alias module:com.ultracart.admin.v2.models/ScreenRecordingStoreFront
     */
    constructor() { 
        
        ScreenRecordingStoreFront.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ScreenRecordingStoreFront</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ScreenRecordingStoreFront} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ScreenRecordingStoreFront} The populated <code>ScreenRecordingStoreFront</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScreenRecordingStoreFront();

            if (data.hasOwnProperty('storefront_host_name')) {
                obj['storefront_host_name'] = ApiClient.convertToType(data['storefront_host_name'], 'String');
            }
            if (data.hasOwnProperty('storefront_oid')) {
                obj['storefront_oid'] = ApiClient.convertToType(data['storefront_oid'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} storefront_host_name
 */
ScreenRecordingStoreFront.prototype['storefront_host_name'] = undefined;

/**
 * @member {Number} storefront_oid
 */
ScreenRecordingStoreFront.prototype['storefront_oid'] = undefined;






export default ScreenRecordingStoreFront;

