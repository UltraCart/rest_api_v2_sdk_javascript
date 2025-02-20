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
 * The ChannelPartnerOrderTransactionDetail model module.
 * @module com.ultracart.admin.v2.models/ChannelPartnerOrderTransactionDetail
 * @version 4.0.245
 */
class ChannelPartnerOrderTransactionDetail {
    /**
     * Constructs a new <code>ChannelPartnerOrderTransactionDetail</code>.
     * @alias module:com.ultracart.admin.v2.models/ChannelPartnerOrderTransactionDetail
     */
    constructor() { 
        
        ChannelPartnerOrderTransactionDetail.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChannelPartnerOrderTransactionDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ChannelPartnerOrderTransactionDetail} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ChannelPartnerOrderTransactionDetail} The populated <code>ChannelPartnerOrderTransactionDetail</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChannelPartnerOrderTransactionDetail();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name of the item option.
 * @member {String} name
 */
ChannelPartnerOrderTransactionDetail.prototype['name'] = undefined;

/**
 * The value of the item option.
 * @member {String} value
 */
ChannelPartnerOrderTransactionDetail.prototype['value'] = undefined;






export default ChannelPartnerOrderTransactionDetail;

