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
 * The ListSegmentMembership model module.
 * @module com.ultracart.admin.v2.models/ListSegmentMembership
 * @version 4.0.47-RC
 */
class ListSegmentMembership {
    /**
     * Constructs a new <code>ListSegmentMembership</code>.
     * @alias module:com.ultracart.admin.v2.models/ListSegmentMembership
     */
    constructor() { 
        
        ListSegmentMembership.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListSegmentMembership</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ListSegmentMembership} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ListSegmentMembership} The populated <code>ListSegmentMembership</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListSegmentMembership();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
ListSegmentMembership.prototype['name'] = undefined;

/**
 * @member {String} type
 */
ListSegmentMembership.prototype['type'] = undefined;

/**
 * @member {String} uuid
 */
ListSegmentMembership.prototype['uuid'] = undefined;






export default ListSegmentMembership;

