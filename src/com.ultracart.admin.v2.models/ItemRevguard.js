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
 * The ItemRevguard model module.
 * @module com.ultracart.admin.v2.models/ItemRevguard
 * @version 4.0.120-RC
 */
class ItemRevguard {
    /**
     * Constructs a new <code>ItemRevguard</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemRevguard
     */
    constructor() { 
        
        ItemRevguard.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemRevguard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemRevguard} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemRevguard} The populated <code>ItemRevguard</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemRevguard();

            if (data.hasOwnProperty('revguard_canceled_csr_prompt_group')) {
                obj['revguard_canceled_csr_prompt_group'] = ApiClient.convertToType(data['revguard_canceled_csr_prompt_group'], 'Number');
            }
            if (data.hasOwnProperty('revguard_canceled_ivr_prompt_group')) {
                obj['revguard_canceled_ivr_prompt_group'] = ApiClient.convertToType(data['revguard_canceled_ivr_prompt_group'], 'Number');
            }
            if (data.hasOwnProperty('revguard_canceled_web_prompt_group')) {
                obj['revguard_canceled_web_prompt_group'] = ApiClient.convertToType(data['revguard_canceled_web_prompt_group'], 'Number');
            }
            if (data.hasOwnProperty('revguard_client_brand')) {
                obj['revguard_client_brand'] = ApiClient.convertToType(data['revguard_client_brand'], 'Number');
            }
            if (data.hasOwnProperty('revguard_csr_prompt_group')) {
                obj['revguard_csr_prompt_group'] = ApiClient.convertToType(data['revguard_csr_prompt_group'], 'Number');
            }
            if (data.hasOwnProperty('revguard_ivr_prompt_group')) {
                obj['revguard_ivr_prompt_group'] = ApiClient.convertToType(data['revguard_ivr_prompt_group'], 'Number');
            }
            if (data.hasOwnProperty('revguard_web_prompt_group')) {
                obj['revguard_web_prompt_group'] = ApiClient.convertToType(data['revguard_web_prompt_group'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Canceled CSR prompt group
 * @member {Number} revguard_canceled_csr_prompt_group
 */
ItemRevguard.prototype['revguard_canceled_csr_prompt_group'] = undefined;

/**
 * IVR prompt group
 * @member {Number} revguard_canceled_ivr_prompt_group
 */
ItemRevguard.prototype['revguard_canceled_ivr_prompt_group'] = undefined;

/**
 * Canceled web prompt group
 * @member {Number} revguard_canceled_web_prompt_group
 */
ItemRevguard.prototype['revguard_canceled_web_prompt_group'] = undefined;

/**
 * Client brand
 * @member {Number} revguard_client_brand
 */
ItemRevguard.prototype['revguard_client_brand'] = undefined;

/**
 * CSR prompt group
 * @member {Number} revguard_csr_prompt_group
 */
ItemRevguard.prototype['revguard_csr_prompt_group'] = undefined;

/**
 * IVR prompt group
 * @member {Number} revguard_ivr_prompt_group
 */
ItemRevguard.prototype['revguard_ivr_prompt_group'] = undefined;

/**
 * Web prompt group
 * @member {Number} revguard_web_prompt_group
 */
ItemRevguard.prototype['revguard_web_prompt_group'] = undefined;






export default ItemRevguard;

