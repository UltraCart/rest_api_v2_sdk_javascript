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
import OrderTrackingNumberDetail from './OrderTrackingNumberDetail';

/**
 * The OrderTrackingNumberDetails model module.
 * @module com.ultracart.admin.v2.models/OrderTrackingNumberDetails
 * @version 4.0.141
 */
class OrderTrackingNumberDetails {
    /**
     * Constructs a new <code>OrderTrackingNumberDetails</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderTrackingNumberDetails
     */
    constructor() { 
        
        OrderTrackingNumberDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderTrackingNumberDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderTrackingNumberDetails} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderTrackingNumberDetails} The populated <code>OrderTrackingNumberDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderTrackingNumberDetails();

            if (data.hasOwnProperty('actual_delivery_date')) {
                obj['actual_delivery_date'] = ApiClient.convertToType(data['actual_delivery_date'], 'String');
            }
            if (data.hasOwnProperty('actual_delivery_date_formatted')) {
                obj['actual_delivery_date_formatted'] = ApiClient.convertToType(data['actual_delivery_date_formatted'], 'String');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], [OrderTrackingNumberDetail]);
            }
            if (data.hasOwnProperty('easypost_tracker_id')) {
                obj['easypost_tracker_id'] = ApiClient.convertToType(data['easypost_tracker_id'], 'String');
            }
            if (data.hasOwnProperty('expected_delivery_date')) {
                obj['expected_delivery_date'] = ApiClient.convertToType(data['expected_delivery_date'], 'String');
            }
            if (data.hasOwnProperty('expected_delivery_date_formatted')) {
                obj['expected_delivery_date_formatted'] = ApiClient.convertToType(data['expected_delivery_date_formatted'], 'String');
            }
            if (data.hasOwnProperty('map_url')) {
                obj['map_url'] = ApiClient.convertToType(data['map_url'], 'String');
            }
            if (data.hasOwnProperty('order_placed_date')) {
                obj['order_placed_date'] = ApiClient.convertToType(data['order_placed_date'], 'String');
            }
            if (data.hasOwnProperty('order_placed_date_formatted')) {
                obj['order_placed_date_formatted'] = ApiClient.convertToType(data['order_placed_date_formatted'], 'String');
            }
            if (data.hasOwnProperty('payment_processed_date')) {
                obj['payment_processed_date'] = ApiClient.convertToType(data['payment_processed_date'], 'String');
            }
            if (data.hasOwnProperty('payment_processed_date_formatted')) {
                obj['payment_processed_date_formatted'] = ApiClient.convertToType(data['payment_processed_date_formatted'], 'String');
            }
            if (data.hasOwnProperty('shipped_date')) {
                obj['shipped_date'] = ApiClient.convertToType(data['shipped_date'], 'String');
            }
            if (data.hasOwnProperty('shipped_date_formatted')) {
                obj['shipped_date_formatted'] = ApiClient.convertToType(data['shipped_date_formatted'], 'String');
            }
            if (data.hasOwnProperty('shipping_method')) {
                obj['shipping_method'] = ApiClient.convertToType(data['shipping_method'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('status_description')) {
                obj['status_description'] = ApiClient.convertToType(data['status_description'], 'String');
            }
            if (data.hasOwnProperty('tracking_number')) {
                obj['tracking_number'] = ApiClient.convertToType(data['tracking_number'], 'String');
            }
            if (data.hasOwnProperty('tracking_url')) {
                obj['tracking_url'] = ApiClient.convertToType(data['tracking_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} actual_delivery_date
 */
OrderTrackingNumberDetails.prototype['actual_delivery_date'] = undefined;

/**
 * @member {String} actual_delivery_date_formatted
 */
OrderTrackingNumberDetails.prototype['actual_delivery_date_formatted'] = undefined;

/**
 * @member {Array.<module:com.ultracart.admin.v2.models/OrderTrackingNumberDetail>} details
 */
OrderTrackingNumberDetails.prototype['details'] = undefined;

/**
 * @member {String} easypost_tracker_id
 */
OrderTrackingNumberDetails.prototype['easypost_tracker_id'] = undefined;

/**
 * @member {String} expected_delivery_date
 */
OrderTrackingNumberDetails.prototype['expected_delivery_date'] = undefined;

/**
 * @member {String} expected_delivery_date_formatted
 */
OrderTrackingNumberDetails.prototype['expected_delivery_date_formatted'] = undefined;

/**
 * @member {String} map_url
 */
OrderTrackingNumberDetails.prototype['map_url'] = undefined;

/**
 * @member {String} order_placed_date
 */
OrderTrackingNumberDetails.prototype['order_placed_date'] = undefined;

/**
 * @member {String} order_placed_date_formatted
 */
OrderTrackingNumberDetails.prototype['order_placed_date_formatted'] = undefined;

/**
 * @member {String} payment_processed_date
 */
OrderTrackingNumberDetails.prototype['payment_processed_date'] = undefined;

/**
 * @member {String} payment_processed_date_formatted
 */
OrderTrackingNumberDetails.prototype['payment_processed_date_formatted'] = undefined;

/**
 * @member {String} shipped_date
 */
OrderTrackingNumberDetails.prototype['shipped_date'] = undefined;

/**
 * @member {String} shipped_date_formatted
 */
OrderTrackingNumberDetails.prototype['shipped_date_formatted'] = undefined;

/**
 * @member {String} shipping_method
 */
OrderTrackingNumberDetails.prototype['shipping_method'] = undefined;

/**
 * @member {String} status
 */
OrderTrackingNumberDetails.prototype['status'] = undefined;

/**
 * @member {String} status_description
 */
OrderTrackingNumberDetails.prototype['status_description'] = undefined;

/**
 * @member {String} tracking_number
 */
OrderTrackingNumberDetails.prototype['tracking_number'] = undefined;

/**
 * @member {String} tracking_url
 */
OrderTrackingNumberDetails.prototype['tracking_url'] = undefined;






export default OrderTrackingNumberDetails;

