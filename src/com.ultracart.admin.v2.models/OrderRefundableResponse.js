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
import Error from './Error';
import OrderReason from './OrderReason';
import ResponseMetadata from './ResponseMetadata';
import Warning from './Warning';

/**
 * The OrderRefundableResponse model module.
 * @module com.ultracart.admin.v2.models/OrderRefundableResponse
 * @version 4.0.159
 */
class OrderRefundableResponse {
    /**
     * Constructs a new <code>OrderRefundableResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderRefundableResponse
     */
    constructor() { 
        
        OrderRefundableResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderRefundableResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderRefundableResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderRefundableResponse} The populated <code>OrderRefundableResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderRefundableResponse();

            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('item_level_refund_reason_required')) {
                obj['item_level_refund_reason_required'] = ApiClient.convertToType(data['item_level_refund_reason_required'], 'Boolean');
            }
            if (data.hasOwnProperty('item_level_refund_reasons')) {
                obj['item_level_refund_reasons'] = ApiClient.convertToType(data['item_level_refund_reasons'], [OrderReason]);
            }
            if (data.hasOwnProperty('item_level_return_reasons')) {
                obj['item_level_return_reasons'] = ApiClient.convertToType(data['item_level_return_reasons'], [OrderReason]);
            }
            if (data.hasOwnProperty('manual_because_multiple_charges')) {
                obj['manual_because_multiple_charges'] = ApiClient.convertToType(data['manual_because_multiple_charges'], 'Boolean');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('order_level_refund_reason_required')) {
                obj['order_level_refund_reason_required'] = ApiClient.convertToType(data['order_level_refund_reason_required'], 'Boolean');
            }
            if (data.hasOwnProperty('order_level_refund_reasons')) {
                obj['order_level_refund_reasons'] = ApiClient.convertToType(data['order_level_refund_reasons'], [OrderReason]);
            }
            if (data.hasOwnProperty('order_level_reject_reasons')) {
                obj['order_level_reject_reasons'] = ApiClient.convertToType(data['order_level_reject_reasons'], [OrderReason]);
            }
            if (data.hasOwnProperty('refundable')) {
                obj['refundable'] = ApiClient.convertToType(data['refundable'], 'Boolean');
            }
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('warning')) {
                obj['warning'] = Warning.constructFromObject(data['warning']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */
OrderRefundableResponse.prototype['error'] = undefined;

/**
 * True if the item level refund reason is required
 * @member {Boolean} item_level_refund_reason_required
 */
OrderRefundableResponse.prototype['item_level_refund_reason_required'] = undefined;

/**
 * Reason codes available at the item level.
 * @member {Array.<module:com.ultracart.admin.v2.models/OrderReason>} item_level_refund_reasons
 */
OrderRefundableResponse.prototype['item_level_refund_reasons'] = undefined;

/**
 * Return codes available at the item level.
 * @member {Array.<module:com.ultracart.admin.v2.models/OrderReason>} item_level_return_reasons
 */
OrderRefundableResponse.prototype['item_level_return_reasons'] = undefined;

/**
 * If true, this refund will have to be manually done because of additional charges with the virtual terminal were made
 * @member {Boolean} manual_because_multiple_charges
 */
OrderRefundableResponse.prototype['manual_because_multiple_charges'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
OrderRefundableResponse.prototype['metadata'] = undefined;

/**
 * True if the order level refund reason is required
 * @member {Boolean} order_level_refund_reason_required
 */
OrderRefundableResponse.prototype['order_level_refund_reason_required'] = undefined;

/**
 * Reason codes available at the order level.
 * @member {Array.<module:com.ultracart.admin.v2.models/OrderReason>} order_level_refund_reasons
 */
OrderRefundableResponse.prototype['order_level_refund_reasons'] = undefined;

/**
 * Reject codes available at the order level.
 * @member {Array.<module:com.ultracart.admin.v2.models/OrderReason>} order_level_reject_reasons
 */
OrderRefundableResponse.prototype['order_level_reject_reasons'] = undefined;

/**
 * Whether the order is refundable or not.  Null should be interpreted as false.
 * @member {Boolean} refundable
 */
OrderRefundableResponse.prototype['refundable'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
OrderRefundableResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
OrderRefundableResponse.prototype['warning'] = undefined;






export default OrderRefundableResponse;

