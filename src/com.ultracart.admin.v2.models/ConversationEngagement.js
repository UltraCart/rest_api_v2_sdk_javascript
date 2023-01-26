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
import ConversationEngagementEquation from './ConversationEngagementEquation';

/**
 * The ConversationEngagement model module.
 * @module com.ultracart.admin.v2.models/ConversationEngagement
 * @version 4.0.126-RC
 */
class ConversationEngagement {
    /**
     * Constructs a new <code>ConversationEngagement</code>.
     * @alias module:com.ultracart.admin.v2.models/ConversationEngagement
     */
    constructor() { 
        
        ConversationEngagement.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationEngagement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationEngagement} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationEngagement} The populated <code>ConversationEngagement</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationEngagement();

            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('conversation_engagement_oid')) {
                obj['conversation_engagement_oid'] = ApiClient.convertToType(data['conversation_engagement_oid'], 'Number');
            }
            if (data.hasOwnProperty('customer_greeting')) {
                obj['customer_greeting'] = ApiClient.convertToType(data['customer_greeting'], 'String');
            }
            if (data.hasOwnProperty('department_oids')) {
                obj['department_oids'] = ApiClient.convertToType(data['department_oids'], ['Number']);
            }
            if (data.hasOwnProperty('engagement_name')) {
                obj['engagement_name'] = ApiClient.convertToType(data['engagement_name'], 'String');
            }
            if (data.hasOwnProperty('equation')) {
                obj['equation'] = ConversationEngagementEquation.constructFromObject(data['equation']);
            }
            if (data.hasOwnProperty('time_on_page')) {
                obj['time_on_page'] = ApiClient.convertToType(data['time_on_page'], 'Number');
            }
            if (data.hasOwnProperty('visitor_type')) {
                obj['visitor_type'] = ApiClient.convertToType(data['visitor_type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} active
 */
ConversationEngagement.prototype['active'] = undefined;

/**
 * @member {Number} conversation_engagement_oid
 */
ConversationEngagement.prototype['conversation_engagement_oid'] = undefined;

/**
 * @member {String} customer_greeting
 */
ConversationEngagement.prototype['customer_greeting'] = undefined;

/**
 * @member {Array.<Number>} department_oids
 */
ConversationEngagement.prototype['department_oids'] = undefined;

/**
 * @member {String} engagement_name
 */
ConversationEngagement.prototype['engagement_name'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ConversationEngagementEquation} equation
 */
ConversationEngagement.prototype['equation'] = undefined;

/**
 * @member {Number} time_on_page
 */
ConversationEngagement.prototype['time_on_page'] = undefined;

/**
 * The type of visitor
 * @member {module:com.ultracart.admin.v2.models/ConversationEngagement.VisitorTypeEnum} visitor_type
 */
ConversationEngagement.prototype['visitor_type'] = undefined;





/**
 * Allowed values for the <code>visitor_type</code> property.
 * @enum {String}
 * @readonly
 */
ConversationEngagement['VisitorTypeEnum'] = {

    /**
     * value: "all"
     * @const
     */
    "all": "all",

    /**
     * value: "first time"
     * @const
     */
    "first time": "first time",

    /**
     * value: "returning"
     * @const
     */
    "returning": "returning"
};



export default ConversationEngagement;

