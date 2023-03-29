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
import ExperimentVariationStat from './ExperimentVariationStat';

/**
 * The ExperimentVariation model module.
 * @module com.ultracart.admin.v2.models/ExperimentVariation
 * @version 4.0.144
 */
class ExperimentVariation {
    /**
     * Constructs a new <code>ExperimentVariation</code>.
     * @alias module:com.ultracart.admin.v2.models/ExperimentVariation
     */
    constructor() { 
        
        ExperimentVariation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExperimentVariation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ExperimentVariation} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ExperimentVariation} The populated <code>ExperimentVariation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExperimentVariation();

            if (data.hasOwnProperty('add_to_cart_count')) {
                obj['add_to_cart_count'] = ApiClient.convertToType(data['add_to_cart_count'], 'Number');
            }
            if (data.hasOwnProperty('average_duration_seconds')) {
                obj['average_duration_seconds'] = ApiClient.convertToType(data['average_duration_seconds'], 'Number');
            }
            if (data.hasOwnProperty('average_objective_per_session')) {
                obj['average_objective_per_session'] = ApiClient.convertToType(data['average_objective_per_session'], 'Number');
            }
            if (data.hasOwnProperty('average_order_value')) {
                obj['average_order_value'] = ApiClient.convertToType(data['average_order_value'], 'Number');
            }
            if (data.hasOwnProperty('bounce_count')) {
                obj['bounce_count'] = ApiClient.convertToType(data['bounce_count'], 'Number');
            }
            if (data.hasOwnProperty('conversion_rate')) {
                obj['conversion_rate'] = ApiClient.convertToType(data['conversion_rate'], 'Number');
            }
            if (data.hasOwnProperty('daily_statistics')) {
                obj['daily_statistics'] = ApiClient.convertToType(data['daily_statistics'], [ExperimentVariationStat]);
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
            if (data.hasOwnProperty('original_traffic_percentage')) {
                obj['original_traffic_percentage'] = ApiClient.convertToType(data['original_traffic_percentage'], 'Number');
            }
            if (data.hasOwnProperty('page_view_count')) {
                obj['page_view_count'] = ApiClient.convertToType(data['page_view_count'], 'Number');
            }
            if (data.hasOwnProperty('paused')) {
                obj['paused'] = ApiClient.convertToType(data['paused'], 'Boolean');
            }
            if (data.hasOwnProperty('revenue')) {
                obj['revenue'] = ApiClient.convertToType(data['revenue'], 'Number');
            }
            if (data.hasOwnProperty('session_count')) {
                obj['session_count'] = ApiClient.convertToType(data['session_count'], 'Number');
            }
            if (data.hasOwnProperty('sms_opt_ins')) {
                obj['sms_opt_ins'] = ApiClient.convertToType(data['sms_opt_ins'], 'Number');
            }
            if (data.hasOwnProperty('traffic_percentage')) {
                obj['traffic_percentage'] = ApiClient.convertToType(data['traffic_percentage'], 'Number');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('variation_name')) {
                obj['variation_name'] = ApiClient.convertToType(data['variation_name'], 'String');
            }
            if (data.hasOwnProperty('variation_number')) {
                obj['variation_number'] = ApiClient.convertToType(data['variation_number'], 'Number');
            }
            if (data.hasOwnProperty('winner')) {
                obj['winner'] = ApiClient.convertToType(data['winner'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Total add to cart count for this variation
 * @member {Number} add_to_cart_count
 */
ExperimentVariation.prototype['add_to_cart_count'] = undefined;

/**
 * Average duration seconds per session for this variation
 * @member {Number} average_duration_seconds
 */
ExperimentVariation.prototype['average_duration_seconds'] = undefined;

/**
 * Average objective value per session for this variation
 * @member {Number} average_objective_per_session
 */
ExperimentVariation.prototype['average_objective_per_session'] = undefined;

/**
 * Average order value for this variation
 * @member {Number} average_order_value
 */
ExperimentVariation.prototype['average_order_value'] = undefined;

/**
 * Total bounce count for this variation
 * @member {Number} bounce_count
 */
ExperimentVariation.prototype['bounce_count'] = undefined;

/**
 * Conversion rate for this variation
 * @member {Number} conversion_rate
 */
ExperimentVariation.prototype['conversion_rate'] = undefined;

/**
 * Array of daily statistics for this variation
 * @member {Array.<module:com.ultracart.admin.v2.models/ExperimentVariationStat>} daily_statistics
 */
ExperimentVariation.prototype['daily_statistics'] = undefined;

/**
 * Total number of seconds spent on the site for this variation
 * @member {Number} duration_seconds_sum
 */
ExperimentVariation.prototype['duration_seconds_sum'] = undefined;

/**
 * Total event ocunt for this variation
 * @member {Number} event_count
 */
ExperimentVariation.prototype['event_count'] = undefined;

/**
 * Total initiate checkout count for this variation
 * @member {Number} initiate_checkout_count
 */
ExperimentVariation.prototype['initiate_checkout_count'] = undefined;

/**
 * Total order count for this variation
 * @member {Number} order_count
 */
ExperimentVariation.prototype['order_count'] = undefined;

/**
 * Total order item count for this variation
 * @member {Number} order_item_count
 */
ExperimentVariation.prototype['order_item_count'] = undefined;

/**
 * Percentage of the traffic the variation originally started out with
 * @member {Number} original_traffic_percentage
 */
ExperimentVariation.prototype['original_traffic_percentage'] = undefined;

/**
 * Total page view count for this variation
 * @member {Number} page_view_count
 */
ExperimentVariation.prototype['page_view_count'] = undefined;

/**
 * True if traffic should be paused to this variation
 * @member {Boolean} paused
 */
ExperimentVariation.prototype['paused'] = undefined;

/**
 * Total revenue for this variation
 * @member {Number} revenue
 */
ExperimentVariation.prototype['revenue'] = undefined;

/**
 * Total sessions for this variation
 * @member {Number} session_count
 */
ExperimentVariation.prototype['session_count'] = undefined;

/**
 * SMS Opt Ins for this variation
 * @member {Number} sms_opt_ins
 */
ExperimentVariation.prototype['sms_opt_ins'] = undefined;

/**
 * Percentage of the traffic this variation is currently receiving
 * @member {Number} traffic_percentage
 */
ExperimentVariation.prototype['traffic_percentage'] = undefined;

/**
 * Url of the variation if this experiment is a url experiment.
 * @member {String} url
 */
ExperimentVariation.prototype['url'] = undefined;

/**
 * Name of the variation
 * @member {String} variation_name
 */
ExperimentVariation.prototype['variation_name'] = undefined;

/**
 * Variation number
 * @member {Number} variation_number
 */
ExperimentVariation.prototype['variation_number'] = undefined;

/**
 * True if this variation has been declared the winner
 * @member {Boolean} winner
 */
ExperimentVariation.prototype['winner'] = undefined;






export default ExperimentVariation;

