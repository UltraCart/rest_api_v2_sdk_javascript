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
 * The ChannelPartnerShippingEstimate model module.
 * @module com.ultracart.admin.v2.models/ChannelPartnerShippingEstimate
 * @version 4.0.170
 */
class ChannelPartnerShippingEstimate {
    /**
     * Constructs a new <code>ChannelPartnerShippingEstimate</code>.
     * @alias module:com.ultracart.admin.v2.models/ChannelPartnerShippingEstimate
     */
    constructor() { 
        
        ChannelPartnerShippingEstimate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChannelPartnerShippingEstimate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ChannelPartnerShippingEstimate} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ChannelPartnerShippingEstimate} The populated <code>ChannelPartnerShippingEstimate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChannelPartnerShippingEstimate();

            if (data.hasOwnProperty('shipping_handling_total')) {
                obj['shipping_handling_total'] = ApiClient.convertToType(data['shipping_handling_total'], 'Number');
            }
            if (data.hasOwnProperty('shipping_method')) {
                obj['shipping_method'] = ApiClient.convertToType(data['shipping_method'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The total estimate for this shipping method based on the provided order.
 * @member {Number} shipping_handling_total
 */
ChannelPartnerShippingEstimate.prototype['shipping_handling_total'] = undefined;

/**
 * The name of the shipping method
 * @member {String} shipping_method
 */
ChannelPartnerShippingEstimate.prototype['shipping_method'] = undefined;






export default ChannelPartnerShippingEstimate;

