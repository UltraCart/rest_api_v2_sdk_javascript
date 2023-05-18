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
 * The OrderPaymentInsurance model module.
 * @module com.ultracart.admin.v2.models/OrderPaymentInsurance
 * @version 4.0.155
 */
class OrderPaymentInsurance {
    /**
     * Constructs a new <code>OrderPaymentInsurance</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderPaymentInsurance
     */
    constructor() { 
        
        OrderPaymentInsurance.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderPaymentInsurance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderPaymentInsurance} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderPaymentInsurance} The populated <code>OrderPaymentInsurance</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderPaymentInsurance();

            if (data.hasOwnProperty('application_id')) {
                obj['application_id'] = ApiClient.convertToType(data['application_id'], 'String');
            }
            if (data.hasOwnProperty('claim_id')) {
                obj['claim_id'] = ApiClient.convertToType(data['claim_id'], 'String');
            }
            if (data.hasOwnProperty('insurance_type')) {
                obj['insurance_type'] = ApiClient.convertToType(data['insurance_type'], 'String');
            }
            if (data.hasOwnProperty('refund_claim_id')) {
                obj['refund_claim_id'] = ApiClient.convertToType(data['refund_claim_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * application id
 * @member {String} application_id
 */
OrderPaymentInsurance.prototype['application_id'] = undefined;

/**
 * claim id
 * @member {String} claim_id
 */
OrderPaymentInsurance.prototype['claim_id'] = undefined;

/**
 * insurance type
 * @member {String} insurance_type
 */
OrderPaymentInsurance.prototype['insurance_type'] = undefined;

/**
 * refund claim id
 * @member {String} refund_claim_id
 */
OrderPaymentInsurance.prototype['refund_claim_id'] = undefined;






export default OrderPaymentInsurance;

