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
 * The EmailPlanAdditional model module.
 * @module com.ultracart.admin.v2.models/EmailPlanAdditional
 * @version 4.0.146
 */
class EmailPlanAdditional {
    /**
     * Constructs a new <code>EmailPlanAdditional</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailPlanAdditional
     */
    constructor() { 
        
        EmailPlanAdditional.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailPlanAdditional</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailPlanAdditional} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailPlanAdditional} The populated <code>EmailPlanAdditional</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailPlanAdditional();

            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('can_downgrade')) {
                obj['can_downgrade'] = ApiClient.convertToType(data['can_downgrade'], 'Boolean');
            }
            if (data.hasOwnProperty('can_upgrade')) {
                obj['can_upgrade'] = ApiClient.convertToType(data['can_upgrade'], 'Boolean');
            }
            if (data.hasOwnProperty('cost')) {
                obj['cost'] = ApiClient.convertToType(data['cost'], 'Number');
            }
            if (data.hasOwnProperty('cost_change')) {
                obj['cost_change'] = ApiClient.convertToType(data['cost_change'], 'Number');
            }
            if (data.hasOwnProperty('cost_change_formatted')) {
                obj['cost_change_formatted'] = ApiClient.convertToType(data['cost_change_formatted'], 'String');
            }
            if (data.hasOwnProperty('cost_formatted')) {
                obj['cost_formatted'] = ApiClient.convertToType(data['cost_formatted'], 'String');
            }
            if (data.hasOwnProperty('customers')) {
                obj['customers'] = ApiClient.convertToType(data['customers'], 'Number');
            }
            if (data.hasOwnProperty('emails')) {
                obj['emails'] = ApiClient.convertToType(data['emails'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} active
 */
EmailPlanAdditional.prototype['active'] = undefined;

/**
 * @member {Boolean} can_downgrade
 */
EmailPlanAdditional.prototype['can_downgrade'] = undefined;

/**
 * @member {Boolean} can_upgrade
 */
EmailPlanAdditional.prototype['can_upgrade'] = undefined;

/**
 * @member {Number} cost
 */
EmailPlanAdditional.prototype['cost'] = undefined;

/**
 * @member {Number} cost_change
 */
EmailPlanAdditional.prototype['cost_change'] = undefined;

/**
 * @member {String} cost_change_formatted
 */
EmailPlanAdditional.prototype['cost_change_formatted'] = undefined;

/**
 * @member {String} cost_formatted
 */
EmailPlanAdditional.prototype['cost_formatted'] = undefined;

/**
 * @member {Number} customers
 */
EmailPlanAdditional.prototype['customers'] = undefined;

/**
 * @member {Number} emails
 */
EmailPlanAdditional.prototype['emails'] = undefined;






export default EmailPlanAdditional;

