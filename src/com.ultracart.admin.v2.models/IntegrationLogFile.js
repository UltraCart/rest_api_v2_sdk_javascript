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
 * The IntegrationLogFile model module.
 * @module com.ultracart.admin.v2.models/IntegrationLogFile
 * @version 4.0.155
 */
class IntegrationLogFile {
    /**
     * Constructs a new <code>IntegrationLogFile</code>.
     * @alias module:com.ultracart.admin.v2.models/IntegrationLogFile
     */
    constructor() { 
        
        IntegrationLogFile.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IntegrationLogFile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/IntegrationLogFile} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/IntegrationLogFile} The populated <code>IntegrationLogFile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IntegrationLogFile();

            if (data.hasOwnProperty('mime_type')) {
                obj['mime_type'] = ApiClient.convertToType(data['mime_type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} mime_type
 */
IntegrationLogFile.prototype['mime_type'] = undefined;

/**
 * @member {String} name
 */
IntegrationLogFile.prototype['name'] = undefined;

/**
 * @member {Number} size
 */
IntegrationLogFile.prototype['size'] = undefined;

/**
 * @member {String} uuid
 */
IntegrationLogFile.prototype['uuid'] = undefined;






export default IntegrationLogFile;

