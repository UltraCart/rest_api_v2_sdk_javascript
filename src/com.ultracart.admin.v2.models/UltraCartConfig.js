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
 * The UltraCartConfig model module.
 * @module com.ultracart.admin.v2.models/UltraCartConfig
 * @version 4.0.39-RC
 */
class UltraCartConfig {
    /**
     * Constructs a new <code>UltraCartConfig</code>.
     * @alias module:com.ultracart.admin.v2.models/UltraCartConfig
     */
    constructor() { 
        
        UltraCartConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UltraCartConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/UltraCartConfig} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/UltraCartConfig} The populated <code>UltraCartConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UltraCartConfig();

            if (data.hasOwnProperty('tax_billing')) {
                obj['tax_billing'] = ApiClient.convertToType(data['tax_billing'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * True if sales tax should be collected based on billing address instead of shipping address
 * @member {Boolean} tax_billing
 */
UltraCartConfig.prototype['tax_billing'] = undefined;






export default UltraCartConfig;

