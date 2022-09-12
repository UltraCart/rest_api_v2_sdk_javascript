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
 * The EmailListSegmentUsedBy model module.
 * @module com.ultracart.admin.v2.models/EmailListSegmentUsedBy
 * @version 4.0.62-RC
 */
class EmailListSegmentUsedBy {
    /**
     * Constructs a new <code>EmailListSegmentUsedBy</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailListSegmentUsedBy
     */
    constructor() { 
        
        EmailListSegmentUsedBy.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailListSegmentUsedBy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailListSegmentUsedBy} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailListSegmentUsedBy} The populated <code>EmailListSegmentUsedBy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailListSegmentUsedBy();

            if (data.hasOwnProperty('email_campaign_uuid')) {
                obj['email_campaign_uuid'] = ApiClient.convertToType(data['email_campaign_uuid'], 'String');
            }
            if (data.hasOwnProperty('email_flow_uuid')) {
                obj['email_flow_uuid'] = ApiClient.convertToType(data['email_flow_uuid'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Email campaign UUID
 * @member {String} email_campaign_uuid
 */
EmailListSegmentUsedBy.prototype['email_campaign_uuid'] = undefined;

/**
 * Email flow UUID
 * @member {String} email_flow_uuid
 */
EmailListSegmentUsedBy.prototype['email_flow_uuid'] = undefined;

/**
 * Name of the list or segment.
 * @member {String} name
 */
EmailListSegmentUsedBy.prototype['name'] = undefined;






export default EmailListSegmentUsedBy;

