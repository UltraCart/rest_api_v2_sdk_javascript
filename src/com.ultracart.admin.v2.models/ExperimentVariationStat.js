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
 * The ExperimentVariationStat model module.
 * @module com.ultracart.admin.v2.models/ExperimentVariationStat
 * @version 4.0.150
 */
class ExperimentVariationStat {
    /**
     * Constructs a new <code>ExperimentVariationStat</code>.
     * @alias module:com.ultracart.admin.v2.models/ExperimentVariationStat
     */
    constructor() { 
        
        ExperimentVariationStat.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExperimentVariationStat</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ExperimentVariationStat} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ExperimentVariationStat} The populated <code>ExperimentVariationStat</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExperimentVariationStat();

            if (data.hasOwnProperty('add_to_cart_count')) {
                obj['add_to_cart_count'] = ApiClient.convertToType(data['add_to_cart_count'], 'Number');
            }
            if (data.hasOwnProperty('bounce_count')) {
                obj['bounce_count'] = ApiClient.convertToType(data['bounce_count'], 'Number');
            }
            if (data.hasOwnProperty('duration_seconds_sum')) {
                obj['duration_seconds_sum'] = ApiClient.convertToType(data['duration_seconds_sum'], 'Number');
            }
            if (data.hasOwnProperty('event_count')) {
                obj['event_count'] = ApiClient.convertToType(data['event_count'], 'Number');
            }
            if (data.hasOwnProperty('initiate_checkout_count')) {
                obj['initiate_checkout_count'] = ApiClient.convertToType(data['initiate_checkout_count'], 'Number');
            }
            if (data.hasOwnProperty('order_count')) {
                obj['order_count'] = ApiClient.convertToType(data['order_count'], 'Number');
            }
            if (data.hasOwnProperty('order_item_count')) {
                obj['order_item_count'] = ApiClient.convertToType(data['order_item_count'], 'Number');
            }
            if (data.hasOwnProperty('page_view_count')) {
                obj['page_view_count'] = ApiClient.convertToType(data['page_view_count'], 'Number');
            }
            if (data.hasOwnProperty('revenue')) {
                obj['revenue'] = ApiClient.convertToType(data['revenue'], 'Number');
            }
            if (data.hasOwnProperty('session_count')) {
                obj['session_count'] = ApiClient.convertToType(data['session_count'], 'Number');
            }
            if (data.hasOwnProperty('sms_opt_in_count')) {
                obj['sms_opt_in_count'] = ApiClient.convertToType(data['sms_opt_in_count'], 'Number');
            }
            if (data.hasOwnProperty('stat_dts')) {
                obj['stat_dts'] = ApiClient.convertToType(data['stat_dts'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Total add to cart count for this variation
 * @member {Number} add_to_cart_count
 */
ExperimentVariationStat.prototype['add_to_cart_count'] = undefined;

/**
 * Total bounce count for this variation
 * @member {Number} bounce_count
 */
ExperimentVariationStat.prototype['bounce_count'] = undefined;

/**
 * Total number of seconds spent on the site for this variation
 * @member {Number} duration_seconds_sum
 */
ExperimentVariationStat.prototype['duration_seconds_sum'] = undefined;

/**
 * Total event count for this variation
 * @member {Number} event_count
 */
ExperimentVariationStat.prototype['event_count'] = undefined;

/**
 * Total initiate checkout count for this variation
 * @member {Number} initiate_checkout_count
 */
ExperimentVariationStat.prototype['initiate_checkout_count'] = undefined;

/**
 * Total order count for this variation
 * @member {Number} order_count
 */
ExperimentVariationStat.prototype['order_count'] = undefined;

/**
 * Total order item count for this variation
 * @member {Number} order_item_count
 */
ExperimentVariationStat.prototype['order_item_count'] = undefined;

/**
 * Total page view count for this variation
 * @member {Number} page_view_count
 */
ExperimentVariationStat.prototype['page_view_count'] = undefined;

/**
 * Total revenue for this variation
 * @member {Number} revenue
 */
ExperimentVariationStat.prototype['revenue'] = undefined;

/**
 * Total sessions for this variation
 * @member {Number} session_count
 */
ExperimentVariationStat.prototype['session_count'] = undefined;

/**
 * Total SMS opt in count for this variation
 * @member {Number} sms_opt_in_count
 */
ExperimentVariationStat.prototype['sms_opt_in_count'] = undefined;

/**
 * Date/time that the statistic was created
 * @member {String} stat_dts
 */
ExperimentVariationStat.prototype['stat_dts'] = undefined;






export default ExperimentVariationStat;

