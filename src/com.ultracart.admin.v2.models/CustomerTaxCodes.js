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
 * The CustomerTaxCodes model module.
 * @module com.ultracart.admin.v2.models/CustomerTaxCodes
 * @version 4.0.50-RC
 */
class CustomerTaxCodes {
    /**
     * Constructs a new <code>CustomerTaxCodes</code>.
     * @alias module:com.ultracart.admin.v2.models/CustomerTaxCodes
     */
    constructor() { 
        
        CustomerTaxCodes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomerTaxCodes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerTaxCodes} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerTaxCodes} The populated <code>CustomerTaxCodes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerTaxCodes();

            if (data.hasOwnProperty('avalara_customer_code')) {
                obj['avalara_customer_code'] = ApiClient.convertToType(data['avalara_customer_code'], 'String');
            }
            if (data.hasOwnProperty('avalara_entity_use_code')) {
                obj['avalara_entity_use_code'] = ApiClient.convertToType(data['avalara_entity_use_code'], 'String');
            }
            if (data.hasOwnProperty('sovos_customer_code')) {
                obj['sovos_customer_code'] = ApiClient.convertToType(data['sovos_customer_code'], 'String');
            }
            if (data.hasOwnProperty('taxjar_customer_id')) {
                obj['taxjar_customer_id'] = ApiClient.convertToType(data['taxjar_customer_id'], 'String');
            }
            if (data.hasOwnProperty('taxjar_exemption_type')) {
                obj['taxjar_exemption_type'] = ApiClient.convertToType(data['taxjar_exemption_type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Avalara customer code
 * @member {String} avalara_customer_code
 */
CustomerTaxCodes.prototype['avalara_customer_code'] = undefined;

/**
 * Avalara entity use code
 * @member {String} avalara_entity_use_code
 */
CustomerTaxCodes.prototype['avalara_entity_use_code'] = undefined;

/**
 * Sovos customer code
 * @member {String} sovos_customer_code
 */
CustomerTaxCodes.prototype['sovos_customer_code'] = undefined;

/**
 * TaxJar customer id
 * @member {String} taxjar_customer_id
 */
CustomerTaxCodes.prototype['taxjar_customer_id'] = undefined;

/**
 * TaxJar exemption type
 * @member {String} taxjar_exemption_type
 */
CustomerTaxCodes.prototype['taxjar_exemption_type'] = undefined;






export default CustomerTaxCodes;

