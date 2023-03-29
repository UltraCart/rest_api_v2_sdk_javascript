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
 * The ItemSalesforce model module.
 * @module com.ultracart.admin.v2.models/ItemSalesforce
 * @version 4.0.144
 */
class ItemSalesforce {
    /**
     * Constructs a new <code>ItemSalesforce</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemSalesforce
     */
    constructor() { 
        
        ItemSalesforce.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemSalesforce</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemSalesforce} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemSalesforce} The populated <code>ItemSalesforce</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemSalesforce();

            if (data.hasOwnProperty('sfdc_pricebook_id')) {
                obj['sfdc_pricebook_id'] = ApiClient.convertToType(data['sfdc_pricebook_id'], 'String');
            }
            if (data.hasOwnProperty('sfdc_product_id')) {
                obj['sfdc_product_id'] = ApiClient.convertToType(data['sfdc_product_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Salesforce.com pricebook id
 * @member {String} sfdc_pricebook_id
 */
ItemSalesforce.prototype['sfdc_pricebook_id'] = undefined;

/**
 * Salesforce.com product id
 * @member {String} sfdc_product_id
 */
ItemSalesforce.prototype['sfdc_product_id'] = undefined;






export default ItemSalesforce;

