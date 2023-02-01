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
 * The EmailPerformanceDaily model module.
 * @module com.ultracart.admin.v2.models/EmailPerformanceDaily
 * @version 4.0.129
 */
class EmailPerformanceDaily {
    /**
     * Constructs a new <code>EmailPerformanceDaily</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailPerformanceDaily
     */
    constructor() { 
        
        EmailPerformanceDaily.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailPerformanceDaily</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailPerformanceDaily} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailPerformanceDaily} The populated <code>EmailPerformanceDaily</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailPerformanceDaily();

            if (data.hasOwnProperty('bounce_count')) {
                obj['bounce_count'] = ApiClient.convertToType(data['bounce_count'], 'Number');
            }
            if (data.hasOwnProperty('delivered_count')) {
                obj['delivered_count'] = ApiClient.convertToType(data['delivered_count'], 'Number');
            }
            if (data.hasOwnProperty('revenue')) {
                obj['revenue'] = ApiClient.convertToType(data['revenue'], 'Number');
            }
            if (data.hasOwnProperty('sequence_send_count')) {
                obj['sequence_send_count'] = ApiClient.convertToType(data['sequence_send_count'], 'Number');
            }
            if (data.hasOwnProperty('spam_count')) {
                obj['spam_count'] = ApiClient.convertToType(data['spam_count'], 'Number');
            }
            if (data.hasOwnProperty('stat_dts')) {
                obj['stat_dts'] = ApiClient.convertToType(data['stat_dts'], 'String');
            }
            if (data.hasOwnProperty('transactional_send_count')) {
                obj['transactional_send_count'] = ApiClient.convertToType(data['transactional_send_count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Bounce count
 * @member {Number} bounce_count
 */
EmailPerformanceDaily.prototype['bounce_count'] = undefined;

/**
 * Delivered count
 * @member {Number} delivered_count
 */
EmailPerformanceDaily.prototype['delivered_count'] = undefined;

/**
 * Revenue
 * @member {Number} revenue
 */
EmailPerformanceDaily.prototype['revenue'] = undefined;

/**
 * Total sequence (campaign/flow) emails sent
 * @member {Number} sequence_send_count
 */
EmailPerformanceDaily.prototype['sequence_send_count'] = undefined;

/**
 * Spam complaints
 * @member {Number} spam_count
 */
EmailPerformanceDaily.prototype['spam_count'] = undefined;

/**
 * The date that these statistcs are for
 * @member {String} stat_dts
 */
EmailPerformanceDaily.prototype['stat_dts'] = undefined;

/**
 * Total transactions emails sent
 * @member {Number} transactional_send_count
 */
EmailPerformanceDaily.prototype['transactional_send_count'] = undefined;






export default EmailPerformanceDaily;

