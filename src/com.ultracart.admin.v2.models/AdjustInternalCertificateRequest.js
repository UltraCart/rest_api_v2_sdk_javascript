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
 * The AdjustInternalCertificateRequest model module.
 * @module com.ultracart.admin.v2.models/AdjustInternalCertificateRequest
 * @version 4.0.155
 */
class AdjustInternalCertificateRequest {
    /**
     * Constructs a new <code>AdjustInternalCertificateRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/AdjustInternalCertificateRequest
     */
    constructor() { 
        
        AdjustInternalCertificateRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AdjustInternalCertificateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/AdjustInternalCertificateRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/AdjustInternalCertificateRequest} The populated <code>AdjustInternalCertificateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AdjustInternalCertificateRequest();

            if (data.hasOwnProperty('adjustment_amount')) {
                obj['adjustment_amount'] = ApiClient.convertToType(data['adjustment_amount'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('entry_dts')) {
                obj['entry_dts'] = ApiClient.convertToType(data['entry_dts'], 'String');
            }
            if (data.hasOwnProperty('expiration_days')) {
                obj['expiration_days'] = ApiClient.convertToType(data['expiration_days'], 'Number');
            }
            if (data.hasOwnProperty('order_id')) {
                obj['order_id'] = ApiClient.convertToType(data['order_id'], 'String');
            }
            if (data.hasOwnProperty('vesting_days')) {
                obj['vesting_days'] = ApiClient.convertToType(data['vesting_days'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The adjustment amount
 * @member {Number} adjustment_amount
 */
AdjustInternalCertificateRequest.prototype['adjustment_amount'] = undefined;

/**
 * Description of this adjustment, 50 characters max
 * @member {String} description
 */
AdjustInternalCertificateRequest.prototype['description'] = undefined;

/**
 * Optional timestamp for the adjustment, defaults to current time
 * @member {String} entry_dts
 */
AdjustInternalCertificateRequest.prototype['entry_dts'] = undefined;

/**
 * Optional expiration days from the entry_dts when these adjustment becomes worthless
 * @member {Number} expiration_days
 */
AdjustInternalCertificateRequest.prototype['expiration_days'] = undefined;

/**
 * Optional order id if this adjustment is related to a particular order
 * @member {String} order_id
 */
AdjustInternalCertificateRequest.prototype['order_id'] = undefined;

/**
 * Optional days required for this adjustment to vest
 * @member {Number} vesting_days
 */
AdjustInternalCertificateRequest.prototype['vesting_days'] = undefined;






export default AdjustInternalCertificateRequest;

