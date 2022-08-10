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
 * The TaxStateCode model module.
 * @module com.ultracart.admin.v2.models/TaxStateCode
 * @version 4.0.53-RC
 */
class TaxStateCode {
    /**
     * Constructs a new <code>TaxStateCode</code>.
     * @alias module:com.ultracart.admin.v2.models/TaxStateCode
     */
    constructor() { 
        
        TaxStateCode.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaxStateCode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/TaxStateCode} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/TaxStateCode} The populated <code>TaxStateCode</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaxStateCode();

            if (data.hasOwnProperty('accounting_code')) {
                obj['accounting_code'] = ApiClient.convertToType(data['accounting_code'], 'String');
            }
            if (data.hasOwnProperty('state_code')) {
                obj['state_code'] = ApiClient.convertToType(data['state_code'], 'String');
            }
            if (data.hasOwnProperty('state_name')) {
                obj['state_name'] = ApiClient.convertToType(data['state_name'], 'String');
            }
            if (data.hasOwnProperty('tax_rate')) {
                obj['tax_rate'] = ApiClient.convertToType(data['tax_rate'], 'Number');
            }
            if (data.hasOwnProperty('tax_rate_formatted')) {
                obj['tax_rate_formatted'] = ApiClient.convertToType(data['tax_rate_formatted'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Accounting code for programs such as QuickBooks
 * @member {String} accounting_code
 */
TaxStateCode.prototype['accounting_code'] = undefined;

/**
 * State code (2 characters
 * @member {String} state_code
 */
TaxStateCode.prototype['state_code'] = undefined;

/**
 * State name
 * @member {String} state_name
 */
TaxStateCode.prototype['state_name'] = undefined;

/**
 * Tax Rate
 * @member {Number} tax_rate
 */
TaxStateCode.prototype['tax_rate'] = undefined;

/**
 * Tax rate formatted
 * @member {String} tax_rate_formatted
 */
TaxStateCode.prototype['tax_rate_formatted'] = undefined;






export default TaxStateCode;

