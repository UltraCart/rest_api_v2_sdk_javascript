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
 * The ItemChargebackAdjustmentRequest model module.
 * @module com.ultracart.admin.v2.models/ItemChargebackAdjustmentRequest
 * @version 4.0.123-RC
 */
class ItemChargebackAdjustmentRequest {
    /**
     * Constructs a new <code>ItemChargebackAdjustmentRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemChargebackAdjustmentRequest
     */
    constructor() { 
        
        ItemChargebackAdjustmentRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemChargebackAdjustmentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemChargebackAdjustmentRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemChargebackAdjustmentRequest} The populated <code>ItemChargebackAdjustmentRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemChargebackAdjustmentRequest();

            if (data.hasOwnProperty('chargeback_adjustment_request_oid')) {
                obj['chargeback_adjustment_request_oid'] = ApiClient.convertToType(data['chargeback_adjustment_request_oid'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('reason_code')) {
                obj['reason_code'] = ApiClient.convertToType(data['reason_code'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Chargeback adjustment request object identifier
 * @member {Number} chargeback_adjustment_request_oid
 */
ItemChargebackAdjustmentRequest.prototype['chargeback_adjustment_request_oid'] = undefined;

/**
 * Description
 * @member {String} description
 */
ItemChargebackAdjustmentRequest.prototype['description'] = undefined;

/**
 * Reason code
 * @member {String} reason_code
 */
ItemChargebackAdjustmentRequest.prototype['reason_code'] = undefined;






export default ItemChargebackAdjustmentRequest;

