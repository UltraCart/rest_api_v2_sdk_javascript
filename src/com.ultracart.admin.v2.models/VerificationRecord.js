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
 * The VerificationRecord model module.
 * @module com.ultracart.admin.v2.models/VerificationRecord
 * @version 4.1.16
 */
class VerificationRecord {
    /**
     * Constructs a new <code>VerificationRecord</code>.
     * @alias module:com.ultracart.admin.v2.models/VerificationRecord
     */
    constructor() { 
        
        VerificationRecord.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VerificationRecord</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/VerificationRecord} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/VerificationRecord} The populated <code>VerificationRecord</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VerificationRecord();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
VerificationRecord.prototype['name'] = undefined;

/**
 * @member {String} type
 */
VerificationRecord.prototype['type'] = undefined;

/**
 * @member {String} value
 */
VerificationRecord.prototype['value'] = undefined;






export default VerificationRecord;

