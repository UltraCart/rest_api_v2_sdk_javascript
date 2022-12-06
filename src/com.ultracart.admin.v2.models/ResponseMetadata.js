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
import ResultSet from './ResultSet';

/**
 * The ResponseMetadata model module.
 * @module com.ultracart.admin.v2.models/ResponseMetadata
 * @version 4.0.92-RC
 */
class ResponseMetadata {
    /**
     * Constructs a new <code>ResponseMetadata</code>.
     * @alias module:com.ultracart.admin.v2.models/ResponseMetadata
     */
    constructor() { 
        
        ResponseMetadata.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ResponseMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ResponseMetadata} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ResponseMetadata} The populated <code>ResponseMetadata</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResponseMetadata();

            if (data.hasOwnProperty('payload_name')) {
                obj['payload_name'] = ApiClient.convertToType(data['payload_name'], 'String');
            }
            if (data.hasOwnProperty('result_set')) {
                obj['result_set'] = ResultSet.constructFromObject(data['result_set']);
            }
        }
        return obj;
    }


}

/**
 * Payload name
 * @member {String} payload_name
 */
ResponseMetadata.prototype['payload_name'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResultSet} result_set
 */
ResponseMetadata.prototype['result_set'] = undefined;






export default ResponseMetadata;

