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
 * The IntegrationLogLog model module.
 * @module com.ultracart.admin.v2.models/IntegrationLogLog
 * @version 4.0.39-RC
 */
class IntegrationLogLog {
    /**
     * Constructs a new <code>IntegrationLogLog</code>.
     * @alias module:com.ultracart.admin.v2.models/IntegrationLogLog
     */
    constructor() { 
        
        IntegrationLogLog.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IntegrationLogLog</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/IntegrationLogLog} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/IntegrationLogLog} The populated <code>IntegrationLogLog</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IntegrationLogLog();

            if (data.hasOwnProperty('contents')) {
                obj['contents'] = ApiClient.convertToType(data['contents'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} contents
 */
IntegrationLogLog.prototype['contents'] = undefined;

/**
 * @member {String} name
 */
IntegrationLogLog.prototype['name'] = undefined;






export default IntegrationLogLog;

