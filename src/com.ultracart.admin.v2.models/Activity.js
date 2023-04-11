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
 * The Activity model module.
 * @module com.ultracart.admin.v2.models/Activity
 * @version 4.0.146
 */
class Activity {
    /**
     * Constructs a new <code>Activity</code>.
     * @alias module:com.ultracart.admin.v2.models/Activity
     */
    constructor() { 
        
        Activity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Activity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/Activity} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/Activity} The populated <code>Activity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Activity();

            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('channel')) {
                obj['channel'] = ApiClient.convertToType(data['channel'], 'String');
            }
            if (data.hasOwnProperty('metric')) {
                obj['metric'] = ApiClient.convertToType(data['metric'], 'String');
            }
            if (data.hasOwnProperty('storefront_oid')) {
                obj['storefront_oid'] = ApiClient.convertToType(data['storefront_oid'], 'Number');
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
            }
            if (data.hasOwnProperty('ts')) {
                obj['ts'] = ApiClient.convertToType(data['ts'], 'Number');
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
 * @member {String} action
 */
Activity.prototype['action'] = undefined;

/**
 * @member {String} channel
 */
Activity.prototype['channel'] = undefined;

/**
 * @member {String} metric
 */
Activity.prototype['metric'] = undefined;

/**
 * @member {Number} storefront_oid
 */
Activity.prototype['storefront_oid'] = undefined;

/**
 * @member {String} subject
 */
Activity.prototype['subject'] = undefined;

/**
 * @member {Number} ts
 */
Activity.prototype['ts'] = undefined;

/**
 * @member {String} type
 */
Activity.prototype['type'] = undefined;

/**
 * @member {String} uuid
 */
Activity.prototype['uuid'] = undefined;






export default Activity;

