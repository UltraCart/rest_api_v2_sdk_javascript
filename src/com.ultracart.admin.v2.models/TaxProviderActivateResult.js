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
 * The TaxProviderActivateResult model module.
 * @module com.ultracart.admin.v2.models/TaxProviderActivateResult
 * @version 4.0.70-RC
 */
class TaxProviderActivateResult {
    /**
     * Constructs a new <code>TaxProviderActivateResult</code>.
     * @alias module:com.ultracart.admin.v2.models/TaxProviderActivateResult
     */
    constructor() { 
        
        TaxProviderActivateResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaxProviderActivateResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/TaxProviderActivateResult} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/TaxProviderActivateResult} The populated <code>TaxProviderActivateResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaxProviderActivateResult();

            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], 'String');
            }
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} details
 */
TaxProviderActivateResult.prototype['details'] = undefined;

/**
 * True if the connection was successful
 * @member {Boolean} success
 */
TaxProviderActivateResult.prototype['success'] = undefined;






export default TaxProviderActivateResult;

