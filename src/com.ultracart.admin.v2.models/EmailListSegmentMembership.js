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
 * The EmailListSegmentMembership model module.
 * @module com.ultracart.admin.v2.models/EmailListSegmentMembership
 * @version 4.0.170
 */
class EmailListSegmentMembership {
    /**
     * Constructs a new <code>EmailListSegmentMembership</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailListSegmentMembership
     */
    constructor() { 
        
        EmailListSegmentMembership.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailListSegmentMembership</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailListSegmentMembership} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailListSegmentMembership} The populated <code>EmailListSegmentMembership</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailListSegmentMembership();

            if (data.hasOwnProperty('email_list_uuid')) {
                obj['email_list_uuid'] = ApiClient.convertToType(data['email_list_uuid'], 'String');
            }
            if (data.hasOwnProperty('email_segment_uuid')) {
                obj['email_segment_uuid'] = ApiClient.convertToType(data['email_segment_uuid'], 'String');
            }
            if (data.hasOwnProperty('exclude')) {
                obj['exclude'] = ApiClient.convertToType(data['exclude'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * UUID identifying this email list or null if this is a segment
 * @member {String} email_list_uuid
 */
EmailListSegmentMembership.prototype['email_list_uuid'] = undefined;

/**
 * UUID identifying this email segment or null if this is a list
 * @member {String} email_segment_uuid
 */
EmailListSegmentMembership.prototype['email_segment_uuid'] = undefined;

/**
 * true if customers from this list/segment is excluded from membership
 * @member {Boolean} exclude
 */
EmailListSegmentMembership.prototype['exclude'] = undefined;

/**
 * Name of this email list or segment
 * @member {String} name
 */
EmailListSegmentMembership.prototype['name'] = undefined;






export default EmailListSegmentMembership;

