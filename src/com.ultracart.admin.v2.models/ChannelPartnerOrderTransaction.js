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
import ChannelPartnerOrderTransactionDetail from './ChannelPartnerOrderTransactionDetail';

/**
 * The ChannelPartnerOrderTransaction model module.
 * @module com.ultracart.admin.v2.models/ChannelPartnerOrderTransaction
 * @version 4.0.101-RC
 */
class ChannelPartnerOrderTransaction {
    /**
     * Constructs a new <code>ChannelPartnerOrderTransaction</code>.
     * @alias module:com.ultracart.admin.v2.models/ChannelPartnerOrderTransaction
     */
    constructor() { 
        
        ChannelPartnerOrderTransaction.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChannelPartnerOrderTransaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ChannelPartnerOrderTransaction} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ChannelPartnerOrderTransaction} The populated <code>ChannelPartnerOrderTransaction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChannelPartnerOrderTransaction();

            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], [ChannelPartnerOrderTransactionDetail]);
            }
            if (data.hasOwnProperty('successful')) {
                obj['successful'] = ApiClient.convertToType(data['successful'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Transaction gateway details
 * @member {Array.<module:com.ultracart.admin.v2.models/ChannelPartnerOrderTransactionDetail>} details
 */
ChannelPartnerOrderTransaction.prototype['details'] = undefined;

/**
 * True if the transaction was successfully charged
 * @member {Boolean} successful
 */
ChannelPartnerOrderTransaction.prototype['successful'] = undefined;






export default ChannelPartnerOrderTransaction;

