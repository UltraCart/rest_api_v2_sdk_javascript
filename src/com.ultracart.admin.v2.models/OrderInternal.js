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
import OrderTransactionalMerchantNote from './OrderTransactionalMerchantNote';

/**
 * The OrderInternal model module.
 * @module com.ultracart.admin.v2.models/OrderInternal
 * @version 4.0.170
 */
class OrderInternal {
    /**
     * Constructs a new <code>OrderInternal</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderInternal
     */
    constructor() { 
        
        OrderInternal.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderInternal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderInternal} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderInternal} The populated <code>OrderInternal</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderInternal();

            if (data.hasOwnProperty('exported_to_accounting')) {
                obj['exported_to_accounting'] = ApiClient.convertToType(data['exported_to_accounting'], 'Boolean');
            }
            if (data.hasOwnProperty('merchant_notes')) {
                obj['merchant_notes'] = ApiClient.convertToType(data['merchant_notes'], 'String');
            }
            if (data.hasOwnProperty('placed_by_user')) {
                obj['placed_by_user'] = ApiClient.convertToType(data['placed_by_user'], 'String');
            }
            if (data.hasOwnProperty('refund_by_user')) {
                obj['refund_by_user'] = ApiClient.convertToType(data['refund_by_user'], 'String');
            }
            if (data.hasOwnProperty('sales_rep_code')) {
                obj['sales_rep_code'] = ApiClient.convertToType(data['sales_rep_code'], 'String');
            }
            if (data.hasOwnProperty('transactional_merchant_notes')) {
                obj['transactional_merchant_notes'] = ApiClient.convertToType(data['transactional_merchant_notes'], [OrderTransactionalMerchantNote]);
            }
        }
        return obj;
    }


}

/**
 * True if the order has been exported to QuickBooks. If QuickBooks is not configured, then this will already be true
 * @member {Boolean} exported_to_accounting
 */
OrderInternal.prototype['exported_to_accounting'] = undefined;

/**
 * Merchant notes.  Full notes in non-transactional mode.  Just used to write a new merchant note when transaction merchant notes enabled.
 * @member {String} merchant_notes
 */
OrderInternal.prototype['merchant_notes'] = undefined;

/**
 * If placed via the BEOE, this is the user that placed the order
 * @member {String} placed_by_user
 */
OrderInternal.prototype['placed_by_user'] = undefined;

/**
 * User that issued the refund
 * @member {String} refund_by_user
 */
OrderInternal.prototype['refund_by_user'] = undefined;

/**
 * Sales rep code associated with the order
 * @member {String} sales_rep_code
 */
OrderInternal.prototype['sales_rep_code'] = undefined;

/**
 * Transactional merchant notes
 * @member {Array.<module:com.ultracart.admin.v2.models/OrderTransactionalMerchantNote>} transactional_merchant_notes
 */
OrderInternal.prototype['transactional_merchant_notes'] = undefined;






export default OrderInternal;

