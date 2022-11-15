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
import AutoOrderItem from './AutoOrderItem';
import AutoOrderLog from './AutoOrderLog';
import AutoOrderManagement from './AutoOrderManagement';
import Order from './Order';

/**
 * The AutoOrder model module.
 * @module com.ultracart.admin.v2.models/AutoOrder
 * @version 4.0.82-RC
 */
class AutoOrder {
    /**
     * Constructs a new <code>AutoOrder</code>.
     * @alias module:com.ultracart.admin.v2.models/AutoOrder
     */
    constructor() { 
        
        AutoOrder.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AutoOrder</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/AutoOrder} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/AutoOrder} The populated <code>AutoOrder</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AutoOrder();

            if (data.hasOwnProperty('auto_order_code')) {
                obj['auto_order_code'] = ApiClient.convertToType(data['auto_order_code'], 'String');
            }
            if (data.hasOwnProperty('auto_order_oid')) {
                obj['auto_order_oid'] = ApiClient.convertToType(data['auto_order_oid'], 'Number');
            }
            if (data.hasOwnProperty('cancel_after_next_x_orders')) {
                obj['cancel_after_next_x_orders'] = ApiClient.convertToType(data['cancel_after_next_x_orders'], 'Number');
            }
            if (data.hasOwnProperty('cancel_downgrade')) {
                obj['cancel_downgrade'] = ApiClient.convertToType(data['cancel_downgrade'], 'Boolean');
            }
            if (data.hasOwnProperty('cancel_reason')) {
                obj['cancel_reason'] = ApiClient.convertToType(data['cancel_reason'], 'String');
            }
            if (data.hasOwnProperty('cancel_upgrade')) {
                obj['cancel_upgrade'] = ApiClient.convertToType(data['cancel_upgrade'], 'Boolean');
            }
            if (data.hasOwnProperty('canceled_by_user')) {
                obj['canceled_by_user'] = ApiClient.convertToType(data['canceled_by_user'], 'String');
            }
            if (data.hasOwnProperty('canceled_dts')) {
                obj['canceled_dts'] = ApiClient.convertToType(data['canceled_dts'], 'String');
            }
            if (data.hasOwnProperty('completed')) {
                obj['completed'] = ApiClient.convertToType(data['completed'], 'Boolean');
            }
            if (data.hasOwnProperty('credit_card_attempt')) {
                obj['credit_card_attempt'] = ApiClient.convertToType(data['credit_card_attempt'], 'Number');
            }
            if (data.hasOwnProperty('disabled_dts')) {
                obj['disabled_dts'] = ApiClient.convertToType(data['disabled_dts'], 'String');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('failure_reason')) {
                obj['failure_reason'] = ApiClient.convertToType(data['failure_reason'], 'String');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [AutoOrderItem]);
            }
            if (data.hasOwnProperty('logs')) {
                obj['logs'] = ApiClient.convertToType(data['logs'], [AutoOrderLog]);
            }
            if (data.hasOwnProperty('management')) {
                obj['management'] = AutoOrderManagement.constructFromObject(data['management']);
            }
            if (data.hasOwnProperty('next_attempt')) {
                obj['next_attempt'] = ApiClient.convertToType(data['next_attempt'], 'String');
            }
            if (data.hasOwnProperty('original_order')) {
                obj['original_order'] = Order.constructFromObject(data['original_order']);
            }
            if (data.hasOwnProperty('original_order_id')) {
                obj['original_order_id'] = ApiClient.convertToType(data['original_order_id'], 'String');
            }
            if (data.hasOwnProperty('override_affiliate_id')) {
                obj['override_affiliate_id'] = ApiClient.convertToType(data['override_affiliate_id'], 'Number');
            }
            if (data.hasOwnProperty('rebill_orders')) {
                obj['rebill_orders'] = ApiClient.convertToType(data['rebill_orders'], [Order]);
            }
            if (data.hasOwnProperty('rotating_transaction_gateway_code')) {
                obj['rotating_transaction_gateway_code'] = ApiClient.convertToType(data['rotating_transaction_gateway_code'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Unique code assigned to this auto order
 * @member {String} auto_order_code
 */
AutoOrder.prototype['auto_order_code'] = undefined;

/**
 * Auto order object identifier
 * @member {Number} auto_order_oid
 */
AutoOrder.prototype['auto_order_oid'] = undefined;

/**
 * Cancel this auto order after X additional rebills
 * @member {Number} cancel_after_next_x_orders
 */
AutoOrder.prototype['cancel_after_next_x_orders'] = undefined;

/**
 * True if the auto order was canceled because the customer purchased a downgrade item
 * @member {Boolean} cancel_downgrade
 */
AutoOrder.prototype['cancel_downgrade'] = undefined;

/**
 * The reason this auto order was canceled by either merchant or customer
 * @member {String} cancel_reason
 */
AutoOrder.prototype['cancel_reason'] = undefined;

/**
 * True if the auto order was canceled because the customer purchased an upgrade item
 * @member {Boolean} cancel_upgrade
 */
AutoOrder.prototype['cancel_upgrade'] = undefined;

/**
 * The user that canceled the auto order
 * @member {String} canceled_by_user
 */
AutoOrder.prototype['canceled_by_user'] = undefined;

/**
 * The date/time that the auto order was canceled
 * @member {String} canceled_dts
 */
AutoOrder.prototype['canceled_dts'] = undefined;

/**
 * True if the auto order ran successfully to completion
 * @member {Boolean} completed
 */
AutoOrder.prototype['completed'] = undefined;

/**
 * The number of credit card attempts that have taken place
 * @member {Number} credit_card_attempt
 */
AutoOrder.prototype['credit_card_attempt'] = undefined;

/**
 * The date/time the auto order was disabled due to failed rebills
 * @member {String} disabled_dts
 */
AutoOrder.prototype['disabled_dts'] = undefined;

/**
 * True if this auto order is enabled
 * @member {Boolean} enabled
 */
AutoOrder.prototype['enabled'] = undefined;

/**
 * The reason this auto order failed during the last rebill attempt
 * @member {String} failure_reason
 */
AutoOrder.prototype['failure_reason'] = undefined;

/**
 * The items that are setup to rebill
 * @member {Array.<module:com.ultracart.admin.v2.models/AutoOrderItem>} items
 */
AutoOrder.prototype['items'] = undefined;

/**
 * Logs associated with this auto order
 * @member {Array.<module:com.ultracart.admin.v2.models/AutoOrderLog>} logs
 */
AutoOrder.prototype['logs'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/AutoOrderManagement} management
 */
AutoOrder.prototype['management'] = undefined;

/**
 * The next time that the auto order will be attempted for processing
 * @member {String} next_attempt
 */
AutoOrder.prototype['next_attempt'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Order} original_order
 */
AutoOrder.prototype['original_order'] = undefined;

/**
 * The original order id that this auto order is associated with.
 * @member {String} original_order_id
 */
AutoOrder.prototype['original_order_id'] = undefined;

/**
 * Override the affiliate id given credit for rebills of this auto order
 * @member {Number} override_affiliate_id
 */
AutoOrder.prototype['override_affiliate_id'] = undefined;

/**
 * Rebill orders that have taken place on this auto order
 * @member {Array.<module:com.ultracart.admin.v2.models/Order>} rebill_orders
 */
AutoOrder.prototype['rebill_orders'] = undefined;

/**
 * The RTG code associated with this order for future rebills
 * @member {String} rotating_transaction_gateway_code
 */
AutoOrder.prototype['rotating_transaction_gateway_code'] = undefined;

/**
 * The status of the auto order
 * @member {module:com.ultracart.admin.v2.models/AutoOrder.StatusEnum} status
 */
AutoOrder.prototype['status'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
AutoOrder['StatusEnum'] = {

    /**
     * value: "active"
     * @const
     */
    "active": "active",

    /**
     * value: "canceled"
     * @const
     */
    "canceled": "canceled",

    /**
     * value: "disabled"
     * @const
     */
    "disabled": "disabled"
};



export default AutoOrder;

