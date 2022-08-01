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
import EmailPlanAdditional from './EmailPlanAdditional';

/**
 * The EmailPlan model module.
 * @module com.ultracart.admin.v2.models/EmailPlan
 * @version 4.0.47-RC
 */
class EmailPlan {
    /**
     * Constructs a new <code>EmailPlan</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailPlan
     */
    constructor() { 
        
        EmailPlan.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailPlan</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailPlan} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailPlan} The populated <code>EmailPlan</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailPlan();

            if (data.hasOwnProperty('additional_customers')) {
                obj['additional_customers'] = ApiClient.convertToType(data['additional_customers'], 'Number');
            }
            if (data.hasOwnProperty('additional_emails')) {
                obj['additional_emails'] = ApiClient.convertToType(data['additional_emails'], 'Number');
            }
            if (data.hasOwnProperty('additional_fee')) {
                obj['additional_fee'] = ApiClient.convertToType(data['additional_fee'], 'Number');
            }
            if (data.hasOwnProperty('allow_list_import')) {
                obj['allow_list_import'] = ApiClient.convertToType(data['allow_list_import'], 'Boolean');
            }
            if (data.hasOwnProperty('allow_tracking_emails')) {
                obj['allow_tracking_emails'] = ApiClient.convertToType(data['allow_tracking_emails'], 'Boolean');
            }
            if (data.hasOwnProperty('customer_tiers')) {
                obj['customer_tiers'] = ApiClient.convertToType(data['customer_tiers'], [EmailPlanAdditional]);
            }
            if (data.hasOwnProperty('initial_sending_limits')) {
                obj['initial_sending_limits'] = ApiClient.convertToType(data['initial_sending_limits'], 'Number');
            }
            if (data.hasOwnProperty('plan_customers')) {
                obj['plan_customers'] = ApiClient.convertToType(data['plan_customers'], 'Number');
            }
            if (data.hasOwnProperty('plan_emails')) {
                obj['plan_emails'] = ApiClient.convertToType(data['plan_emails'], 'Number');
            }
            if (data.hasOwnProperty('plan_name')) {
                obj['plan_name'] = ApiClient.convertToType(data['plan_name'], 'String');
            }
            if (data.hasOwnProperty('plan_name_formatted')) {
                obj['plan_name_formatted'] = ApiClient.convertToType(data['plan_name_formatted'], 'String');
            }
            if (data.hasOwnProperty('require_order_within_last_days')) {
                obj['require_order_within_last_days'] = ApiClient.convertToType(data['require_order_within_last_days'], 'Number');
            }
            if (data.hasOwnProperty('revenue_percent')) {
                obj['revenue_percent'] = ApiClient.convertToType(data['revenue_percent'], 'Number');
            }
            if (data.hasOwnProperty('spam_percent_limit')) {
                obj['spam_percent_limit'] = ApiClient.convertToType(data['spam_percent_limit'], 'Number');
            }
            if (data.hasOwnProperty('total_customers')) {
                obj['total_customers'] = ApiClient.convertToType(data['total_customers'], 'Number');
            }
            if (data.hasOwnProperty('total_emails')) {
                obj['total_emails'] = ApiClient.convertToType(data['total_emails'], 'Number');
            }
            if (data.hasOwnProperty('upgrade_to')) {
                obj['upgrade_to'] = ApiClient.convertToType(data['upgrade_to'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} additional_customers
 */
EmailPlan.prototype['additional_customers'] = undefined;

/**
 * @member {Number} additional_emails
 */
EmailPlan.prototype['additional_emails'] = undefined;

/**
 * @member {Number} additional_fee
 */
EmailPlan.prototype['additional_fee'] = undefined;

/**
 * @member {Boolean} allow_list_import
 */
EmailPlan.prototype['allow_list_import'] = undefined;

/**
 * @member {Boolean} allow_tracking_emails
 */
EmailPlan.prototype['allow_tracking_emails'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/EmailPlanAdditional>} customer_tiers
 */
EmailPlan.prototype['customer_tiers'] = undefined;

/**
 * @member {Number} initial_sending_limits
 */
EmailPlan.prototype['initial_sending_limits'] = undefined;

/**
 * @member {Number} plan_customers
 */
EmailPlan.prototype['plan_customers'] = undefined;

/**
 * @member {Number} plan_emails
 */
EmailPlan.prototype['plan_emails'] = undefined;

/**
 * @member {String} plan_name
 */
EmailPlan.prototype['plan_name'] = undefined;

/**
 * @member {String} plan_name_formatted
 */
EmailPlan.prototype['plan_name_formatted'] = undefined;

/**
 * @member {Number} require_order_within_last_days
 */
EmailPlan.prototype['require_order_within_last_days'] = undefined;

/**
 * @member {Number} revenue_percent
 */
EmailPlan.prototype['revenue_percent'] = undefined;

/**
 * @member {Number} spam_percent_limit
 */
EmailPlan.prototype['spam_percent_limit'] = undefined;

/**
 * @member {Number} total_customers
 */
EmailPlan.prototype['total_customers'] = undefined;

/**
 * @member {Number} total_emails
 */
EmailPlan.prototype['total_emails'] = undefined;

/**
 * @member {Number} upgrade_to
 */
EmailPlan.prototype['upgrade_to'] = undefined;






export default EmailPlan;

