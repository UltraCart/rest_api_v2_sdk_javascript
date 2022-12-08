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
import ItemAutoOrderStep from './ItemAutoOrderStep';

/**
 * The ItemAutoOrder model module.
 * @module com.ultracart.admin.v2.models/ItemAutoOrder
 * @version 4.0.94-RC
 */
class ItemAutoOrder {
    /**
     * Constructs a new <code>ItemAutoOrder</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemAutoOrder
     */
    constructor() { 
        
        ItemAutoOrder.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemAutoOrder</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemAutoOrder} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemAutoOrder} The populated <code>ItemAutoOrder</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemAutoOrder();

            if (data.hasOwnProperty('auth_future_amount')) {
                obj['auth_future_amount'] = ApiClient.convertToType(data['auth_future_amount'], 'Number');
            }
            if (data.hasOwnProperty('auth_test_amount')) {
                obj['auth_test_amount'] = ApiClient.convertToType(data['auth_test_amount'], 'Number');
            }
            if (data.hasOwnProperty('auto_order_cancel_item_id')) {
                obj['auto_order_cancel_item_id'] = ApiClient.convertToType(data['auto_order_cancel_item_id'], 'String');
            }
            if (data.hasOwnProperty('auto_order_cancel_item_oid')) {
                obj['auto_order_cancel_item_oid'] = ApiClient.convertToType(data['auto_order_cancel_item_oid'], 'Number');
            }
            if (data.hasOwnProperty('auto_order_downgrade_items')) {
                obj['auto_order_downgrade_items'] = ApiClient.convertToType(data['auto_order_downgrade_items'], ['String']);
            }
            if (data.hasOwnProperty('auto_order_paused')) {
                obj['auto_order_paused'] = ApiClient.convertToType(data['auto_order_paused'], 'Boolean');
            }
            if (data.hasOwnProperty('auto_order_prohibit_expiring_cards')) {
                obj['auto_order_prohibit_expiring_cards'] = ApiClient.convertToType(data['auto_order_prohibit_expiring_cards'], 'Number');
            }
            if (data.hasOwnProperty('auto_order_schedules')) {
                obj['auto_order_schedules'] = ApiClient.convertToType(data['auto_order_schedules'], ['String']);
            }
            if (data.hasOwnProperty('auto_order_upgrade_items')) {
                obj['auto_order_upgrade_items'] = ApiClient.convertToType(data['auto_order_upgrade_items'], ['String']);
            }
            if (data.hasOwnProperty('auto_order_upsell')) {
                obj['auto_order_upsell'] = ApiClient.convertToType(data['auto_order_upsell'], 'Boolean');
            }
            if (data.hasOwnProperty('auto_order_upsell_no_easy_cancel')) {
                obj['auto_order_upsell_no_easy_cancel'] = ApiClient.convertToType(data['auto_order_upsell_no_easy_cancel'], 'Boolean');
            }
            if (data.hasOwnProperty('auto_order_upsell_one_per_customer')) {
                obj['auto_order_upsell_one_per_customer'] = ApiClient.convertToType(data['auto_order_upsell_one_per_customer'], 'Boolean');
            }
            if (data.hasOwnProperty('auto_orderable')) {
                obj['auto_orderable'] = ApiClient.convertToType(data['auto_orderable'], 'Boolean');
            }
            if (data.hasOwnProperty('cancel_other_auto_orders')) {
                obj['cancel_other_auto_orders'] = ApiClient.convertToType(data['cancel_other_auto_orders'], 'Boolean');
            }
            if (data.hasOwnProperty('free_shipping_auto_order')) {
                obj['free_shipping_auto_order'] = ApiClient.convertToType(data['free_shipping_auto_order'], 'Boolean');
            }
            if (data.hasOwnProperty('refund_other_auto_orders')) {
                obj['refund_other_auto_orders'] = ApiClient.convertToType(data['refund_other_auto_orders'], 'Boolean');
            }
            if (data.hasOwnProperty('steps')) {
                obj['steps'] = ApiClient.convertToType(data['steps'], [ItemAutoOrderStep]);
            }
        }
        return obj;
    }


}

/**
 * Amount to try and authorize for the future rebill
 * @member {Number} auth_future_amount
 */
ItemAutoOrder.prototype['auth_future_amount'] = undefined;

/**
 * Amount to try and test authorize
 * @member {Number} auth_test_amount
 */
ItemAutoOrder.prototype['auth_test_amount'] = undefined;

/**
 * Item id to attempt charging the customer for if they cancel
 * @member {String} auto_order_cancel_item_id
 */
ItemAutoOrder.prototype['auto_order_cancel_item_id'] = undefined;

/**
 * Item object identifier to attempt charging the customer for if they cancel
 * @member {Number} auto_order_cancel_item_oid
 */
ItemAutoOrder.prototype['auto_order_cancel_item_oid'] = undefined;

/**
 * List of downgrade items presented to customer service representatives
 * @member {Array.<String>} auto_order_downgrade_items
 */
ItemAutoOrder.prototype['auto_order_downgrade_items'] = undefined;

/**
 * True if the rebill processing of this item is paused
 * @member {Boolean} auto_order_paused
 */
ItemAutoOrder.prototype['auto_order_paused'] = undefined;

/**
 * Minimum number of months before expiration for the card.  Overrides the account level setting if higher.  Set to zero to disable.
 * @member {Number} auto_order_prohibit_expiring_cards
 */
ItemAutoOrder.prototype['auto_order_prohibit_expiring_cards'] = undefined;

/**
 * The user selectable schedules that are available
 * @member {Array.<String>} auto_order_schedules
 */
ItemAutoOrder.prototype['auto_order_schedules'] = undefined;

/**
 * List of upgrade items presented to customer service representatives
 * @member {Array.<String>} auto_order_upgrade_items
 */
ItemAutoOrder.prototype['auto_order_upgrade_items'] = undefined;

/**
 * True if this item uses a fixed upsell step schedule
 * @member {Boolean} auto_order_upsell
 */
ItemAutoOrder.prototype['auto_order_upsell'] = undefined;

/**
 * Do not send the easy cancel email to the customer
 * @member {Boolean} auto_order_upsell_no_easy_cancel
 */
ItemAutoOrder.prototype['auto_order_upsell_no_easy_cancel'] = undefined;

/**
 * Limit the purchase of this item to one per customer
 * @member {Boolean} auto_order_upsell_one_per_customer
 */
ItemAutoOrder.prototype['auto_order_upsell_one_per_customer'] = undefined;

/**
 * True if this item can be automatically ordered by the customer
 * @member {Boolean} auto_orderable
 */
ItemAutoOrder.prototype['auto_orderable'] = undefined;

/**
 * True if other auto orders for this customer should be canceled when this item is ordered
 * @member {Boolean} cancel_other_auto_orders
 */
ItemAutoOrder.prototype['cancel_other_auto_orders'] = undefined;

/**
 * True if the customer should be given free shipping
 * @member {Boolean} free_shipping_auto_order
 */
ItemAutoOrder.prototype['free_shipping_auto_order'] = undefined;

/**
 * True if other auto orders for this customer should refunded if this item is refunded.
 * @member {Boolean} refund_other_auto_orders
 */
ItemAutoOrder.prototype['refund_other_auto_orders'] = undefined;

/**
 * The rebill steps if this auto order is an upsell
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemAutoOrderStep>} steps
 */
ItemAutoOrder.prototype['steps'] = undefined;






export default ItemAutoOrder;

