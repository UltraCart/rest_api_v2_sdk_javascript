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
 * The OrderAffiliateLedger model module.
 * @module com.ultracart.admin.v2.models/OrderAffiliateLedger
 * @version 4.0.159
 */
class OrderAffiliateLedger {
    /**
     * Constructs a new <code>OrderAffiliateLedger</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderAffiliateLedger
     */
    constructor() { 
        
        OrderAffiliateLedger.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderAffiliateLedger</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderAffiliateLedger} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderAffiliateLedger} The populated <code>OrderAffiliateLedger</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderAffiliateLedger();

            if (data.hasOwnProperty('assigned_by_user')) {
                obj['assigned_by_user'] = ApiClient.convertToType(data['assigned_by_user'], 'String');
            }
            if (data.hasOwnProperty('item_id')) {
                obj['item_id'] = ApiClient.convertToType(data['item_id'], 'String');
            }
            if (data.hasOwnProperty('tier_number')) {
                obj['tier_number'] = ApiClient.convertToType(data['tier_number'], 'Number');
            }
            if (data.hasOwnProperty('transaction_amount')) {
                obj['transaction_amount'] = ApiClient.convertToType(data['transaction_amount'], 'Number');
            }
            if (data.hasOwnProperty('transaction_amount_paid')) {
                obj['transaction_amount_paid'] = ApiClient.convertToType(data['transaction_amount_paid'], 'Number');
            }
            if (data.hasOwnProperty('transaction_dts')) {
                obj['transaction_dts'] = ApiClient.convertToType(data['transaction_dts'], 'String');
            }
            if (data.hasOwnProperty('transaction_memo')) {
                obj['transaction_memo'] = ApiClient.convertToType(data['transaction_memo'], 'String');
            }
            if (data.hasOwnProperty('transaction_percentage')) {
                obj['transaction_percentage'] = ApiClient.convertToType(data['transaction_percentage'], 'Number');
            }
            if (data.hasOwnProperty('transaction_state')) {
                obj['transaction_state'] = ApiClient.convertToType(data['transaction_state'], 'String');
            }
        }
        return obj;
    }


}

/**
 * UltraCart user name that assigned this commission if manually assigned
 * @member {String} assigned_by_user
 */
OrderAffiliateLedger.prototype['assigned_by_user'] = undefined;

/**
 * Item ID that this ledger record is associated with
 * @member {String} item_id
 */
OrderAffiliateLedger.prototype['item_id'] = undefined;

/**
 * Tier number of this affiliate in the commission calculation
 * @member {Number} tier_number
 */
OrderAffiliateLedger.prototype['tier_number'] = undefined;

/**
 * Amount of the transaction
 * @member {Number} transaction_amount
 */
OrderAffiliateLedger.prototype['transaction_amount'] = undefined;

/**
 * The amount that has been paid so far on the transaction
 * @member {Number} transaction_amount_paid
 */
OrderAffiliateLedger.prototype['transaction_amount_paid'] = undefined;

/**
 * The date/time that the affiliate ledger was generated for the transaction
 * @member {String} transaction_dts
 */
OrderAffiliateLedger.prototype['transaction_dts'] = undefined;

/**
 * Details of the transaction suitable for display to the affiliate
 * @member {String} transaction_memo
 */
OrderAffiliateLedger.prototype['transaction_memo'] = undefined;

/**
 * The percentage earned on the transaction
 * @member {Number} transaction_percentage
 */
OrderAffiliateLedger.prototype['transaction_percentage'] = undefined;

/**
 * The state of the transaction
 * @member {module:com.ultracart.admin.v2.models/OrderAffiliateLedger.TransactionStateEnum} transaction_state
 */
OrderAffiliateLedger.prototype['transaction_state'] = undefined;





/**
 * Allowed values for the <code>transaction_state</code> property.
 * @enum {String}
 * @readonly
 */
OrderAffiliateLedger['TransactionStateEnum'] = {

    /**
     * value: "Pending"
     * @const
     */
    "Pending": "Pending",

    /**
     * value: "Posted"
     * @const
     */
    "Posted": "Posted",

    /**
     * value: "Approved"
     * @const
     */
    "Approved": "Approved",

    /**
     * value: "Paid"
     * @const
     */
    "Paid": "Paid",

    /**
     * value: "Rejected"
     * @const
     */
    "Rejected": "Rejected",

    /**
     * value: "Partially Paid"
     * @const
     */
    "Partially Paid": "Partially Paid"
};



export default OrderAffiliateLedger;

