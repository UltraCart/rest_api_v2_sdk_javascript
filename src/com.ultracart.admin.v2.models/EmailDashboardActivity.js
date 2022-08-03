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
 * The EmailDashboardActivity model module.
 * @module com.ultracart.admin.v2.models/EmailDashboardActivity
 * @version 4.0.50-RC
 */
class EmailDashboardActivity {
    /**
     * Constructs a new <code>EmailDashboardActivity</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailDashboardActivity
     */
    constructor() { 
        
        EmailDashboardActivity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailDashboardActivity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailDashboardActivity} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailDashboardActivity} The populated <code>EmailDashboardActivity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailDashboardActivity();

            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('activity_dts')) {
                obj['activity_dts'] = ApiClient.convertToType(data['activity_dts'], 'String');
            }
            if (data.hasOwnProperty('destination_name')) {
                obj['destination_name'] = ApiClient.convertToType(data['destination_name'], 'String');
            }
            if (data.hasOwnProperty('destination_uuid')) {
                obj['destination_uuid'] = ApiClient.convertToType(data['destination_uuid'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('is_list')) {
                obj['is_list'] = ApiClient.convertToType(data['is_list'], 'Boolean');
            }
            if (data.hasOwnProperty('is_segment')) {
                obj['is_segment'] = ApiClient.convertToType(data['is_segment'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Type of action such as add, remove, subscribe, unsubscribe
 * @member {String} action
 */
EmailDashboardActivity.prototype['action'] = undefined;

/**
 * Date/time of the activity
 * @member {String} activity_dts
 */
EmailDashboardActivity.prototype['activity_dts'] = undefined;

/**
 * List or segment name
 * @member {String} destination_name
 */
EmailDashboardActivity.prototype['destination_name'] = undefined;

/**
 * List or segment uuid
 * @member {String} destination_uuid
 */
EmailDashboardActivity.prototype['destination_uuid'] = undefined;

/**
 * Email address
 * @member {String} email
 */
EmailDashboardActivity.prototype['email'] = undefined;

/**
 * true if activity is related to list
 * @member {Boolean} is_list
 */
EmailDashboardActivity.prototype['is_list'] = undefined;

/**
 * true if activity is related to segment
 * @member {Boolean} is_segment
 */
EmailDashboardActivity.prototype['is_segment'] = undefined;






export default EmailDashboardActivity;

