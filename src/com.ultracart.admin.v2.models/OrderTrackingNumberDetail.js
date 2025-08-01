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
 * The OrderTrackingNumberDetail model module.
 * @module com.ultracart.admin.v2.models/OrderTrackingNumberDetail
 * @version 4.1.16
 */
class OrderTrackingNumberDetail {
    /**
     * Constructs a new <code>OrderTrackingNumberDetail</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderTrackingNumberDetail
     */
    constructor() { 
        
        OrderTrackingNumberDetail.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderTrackingNumberDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderTrackingNumberDetail} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderTrackingNumberDetail} The populated <code>OrderTrackingNumberDetail</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderTrackingNumberDetail();

            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('event_dts')) {
                obj['event_dts'] = ApiClient.convertToType(data['event_dts'], 'String');
            }
            if (data.hasOwnProperty('event_local_date')) {
                obj['event_local_date'] = ApiClient.convertToType(data['event_local_date'], 'String');
            }
            if (data.hasOwnProperty('event_local_time')) {
                obj['event_local_time'] = ApiClient.convertToType(data['event_local_time'], 'String');
            }
            if (data.hasOwnProperty('event_timezone_id')) {
                obj['event_timezone_id'] = ApiClient.convertToType(data['event_timezone_id'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('subtag')) {
                obj['subtag'] = ApiClient.convertToType(data['subtag'], 'String');
            }
            if (data.hasOwnProperty('subtag_message')) {
                obj['subtag_message'] = ApiClient.convertToType(data['subtag_message'], 'String');
            }
            if (data.hasOwnProperty('tag')) {
                obj['tag'] = ApiClient.convertToType(data['tag'], 'String');
            }
            if (data.hasOwnProperty('tag_description')) {
                obj['tag_description'] = ApiClient.convertToType(data['tag_description'], 'String');
            }
            if (data.hasOwnProperty('tag_icon')) {
                obj['tag_icon'] = ApiClient.convertToType(data['tag_icon'], 'String');
            }
            if (data.hasOwnProperty('zip')) {
                obj['zip'] = ApiClient.convertToType(data['zip'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} city
 */
OrderTrackingNumberDetail.prototype['city'] = undefined;

/**
 * ISO 8601 timestamp that the event occurred
 * @member {String} event_dts
 */
OrderTrackingNumberDetail.prototype['event_dts'] = undefined;

/**
 * @member {String} event_local_date
 */
OrderTrackingNumberDetail.prototype['event_local_date'] = undefined;

/**
 * @member {String} event_local_time
 */
OrderTrackingNumberDetail.prototype['event_local_time'] = undefined;

/**
 * Timezone the event occurred in.  Use this in conjunction with event_dts to format a local date/time.
 * @member {String} event_timezone_id
 */
OrderTrackingNumberDetail.prototype['event_timezone_id'] = undefined;

/**
 * @member {String} state
 */
OrderTrackingNumberDetail.prototype['state'] = undefined;

/**
 * @member {String} subtag
 */
OrderTrackingNumberDetail.prototype['subtag'] = undefined;

/**
 * @member {String} subtag_message
 */
OrderTrackingNumberDetail.prototype['subtag_message'] = undefined;

/**
 * @member {String} tag
 */
OrderTrackingNumberDetail.prototype['tag'] = undefined;

/**
 * @member {String} tag_description
 */
OrderTrackingNumberDetail.prototype['tag_description'] = undefined;

/**
 * @member {String} tag_icon
 */
OrderTrackingNumberDetail.prototype['tag_icon'] = undefined;

/**
 * @member {String} zip
 */
OrderTrackingNumberDetail.prototype['zip'] = undefined;






export default OrderTrackingNumberDetail;

