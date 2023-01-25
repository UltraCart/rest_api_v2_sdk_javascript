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
import ItemTaxExemption from './ItemTaxExemption';

/**
 * The ItemTax model module.
 * @module com.ultracart.admin.v2.models/ItemTax
 * @version 4.0.123-RC
 */
class ItemTax {
    /**
     * Constructs a new <code>ItemTax</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemTax
     */
    constructor() { 
        
        ItemTax.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemTax</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemTax} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemTax} The populated <code>ItemTax</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemTax();

            if (data.hasOwnProperty('exemptions')) {
                obj['exemptions'] = ApiClient.convertToType(data['exemptions'], [ItemTaxExemption]);
            }
            if (data.hasOwnProperty('tax_free')) {
                obj['tax_free'] = ApiClient.convertToType(data['tax_free'], 'Boolean');
            }
            if (data.hasOwnProperty('tax_product_type')) {
                obj['tax_product_type'] = ApiClient.convertToType(data['tax_product_type'], 'String');
            }
            if (data.hasOwnProperty('taxable_cost')) {
                obj['taxable_cost'] = ApiClient.convertToType(data['taxable_cost'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Exemptions
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemTaxExemption>} exemptions
 */
ItemTax.prototype['exemptions'] = undefined;

/**
 * True if tax free
 * @member {Boolean} tax_free
 */
ItemTax.prototype['tax_free'] = undefined;

/**
 * Tax product type
 * @member {module:com.ultracart.admin.v2.models/ItemTax.TaxProductTypeEnum} tax_product_type
 */
ItemTax.prototype['tax_product_type'] = undefined;

/**
 * Taxable cost if different than regular cost
 * @member {Number} taxable_cost
 */
ItemTax.prototype['taxable_cost'] = undefined;





/**
 * Allowed values for the <code>tax_product_type</code> property.
 * @enum {String}
 * @readonly
 */
ItemTax['TaxProductTypeEnum'] = {

    /**
     * value: ""
     * @const
     */
    "empty": "",

    /**
     * value: "digital"
     * @const
     */
    "digital": "digital",

    /**
     * value: "physical"
     * @const
     */
    "physical": "physical",

    /**
     * value: "service"
     * @const
     */
    "service": "service"
};



export default ItemTax;

