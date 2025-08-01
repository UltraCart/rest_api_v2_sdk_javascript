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
 * The EmailSegmentCustomer model module.
 * @module com.ultracart.admin.v2.models/EmailSegmentCustomer
 * @version 4.1.16
 */
class EmailSegmentCustomer {
    /**
     * Constructs a new <code>EmailSegmentCustomer</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailSegmentCustomer
     */
    constructor() { 
        
        EmailSegmentCustomer.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailSegmentCustomer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailSegmentCustomer} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailSegmentCustomer} The populated <code>EmailSegmentCustomer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailSegmentCustomer();

            if (data.hasOwnProperty('add_dts')) {
                obj['add_dts'] = ApiClient.convertToType(data['add_dts'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('email_customer_uuid')) {
                obj['email_customer_uuid'] = ApiClient.convertToType(data['email_customer_uuid'], 'String');
            }
            if (data.hasOwnProperty('email_segment_member_uuid')) {
                obj['email_segment_member_uuid'] = ApiClient.convertToType(data['email_segment_member_uuid'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Added timestamp
 * @member {String} add_dts
 */
EmailSegmentCustomer.prototype['add_dts'] = undefined;

/**
 * Email
 * @member {String} email
 */
EmailSegmentCustomer.prototype['email'] = undefined;

/**
 * Email customer UUID
 * @member {String} email_customer_uuid
 */
EmailSegmentCustomer.prototype['email_customer_uuid'] = undefined;

/**
 * Email segment member UUID
 * @member {String} email_segment_member_uuid
 */
EmailSegmentCustomer.prototype['email_segment_member_uuid'] = undefined;






export default EmailSegmentCustomer;

