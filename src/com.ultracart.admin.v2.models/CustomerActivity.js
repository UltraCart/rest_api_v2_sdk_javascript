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
import Activity from './Activity';
import ListSegmentMembership from './ListSegmentMembership';
import Metric from './Metric';
import Property from './Property';

/**
 * The CustomerActivity model module.
 * @module com.ultracart.admin.v2.models/CustomerActivity
 * @version 4.1.16
 */
class CustomerActivity {
    /**
     * Constructs a new <code>CustomerActivity</code>.
     * @alias module:com.ultracart.admin.v2.models/CustomerActivity
     */
    constructor() { 
        
        CustomerActivity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomerActivity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerActivity} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerActivity} The populated <code>CustomerActivity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerActivity();

            if (data.hasOwnProperty('activities')) {
                obj['activities'] = ApiClient.convertToType(data['activities'], [Activity]);
            }
            if (data.hasOwnProperty('global_unsubscribed')) {
                obj['global_unsubscribed'] = ApiClient.convertToType(data['global_unsubscribed'], 'Boolean');
            }
            if (data.hasOwnProperty('global_unsubscribed_dts')) {
                obj['global_unsubscribed_dts'] = ApiClient.convertToType(data['global_unsubscribed_dts'], 'String');
            }
            if (data.hasOwnProperty('memberships')) {
                obj['memberships'] = ApiClient.convertToType(data['memberships'], [ListSegmentMembership]);
            }
            if (data.hasOwnProperty('metrics')) {
                obj['metrics'] = ApiClient.convertToType(data['metrics'], [Metric]);
            }
            if (data.hasOwnProperty('properties_list')) {
                obj['properties_list'] = ApiClient.convertToType(data['properties_list'], [Property]);
            }
            if (data.hasOwnProperty('spam_complaint')) {
                obj['spam_complaint'] = ApiClient.convertToType(data['spam_complaint'], 'Boolean');
            }
            if (data.hasOwnProperty('spam_complaint_dts')) {
                obj['spam_complaint_dts'] = ApiClient.convertToType(data['spam_complaint_dts'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/Activity>} activities
 */
CustomerActivity.prototype['activities'] = undefined;

/**
 * @member {Boolean} global_unsubscribed
 */
CustomerActivity.prototype['global_unsubscribed'] = undefined;

/**
 * @member {String} global_unsubscribed_dts
 */
CustomerActivity.prototype['global_unsubscribed_dts'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/ListSegmentMembership>} memberships
 */
CustomerActivity.prototype['memberships'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/Metric>} metrics
 */
CustomerActivity.prototype['metrics'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/Property>} properties_list
 */
CustomerActivity.prototype['properties_list'] = undefined;

/**
 * @member {Boolean} spam_complaint
 */
CustomerActivity.prototype['spam_complaint'] = undefined;

/**
 * @member {String} spam_complaint_dts
 */
CustomerActivity.prototype['spam_complaint_dts'] = undefined;






export default CustomerActivity;

