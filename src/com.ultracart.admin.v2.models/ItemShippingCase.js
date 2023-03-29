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
 * The ItemShippingCase model module.
 * @module com.ultracart.admin.v2.models/ItemShippingCase
 * @version 4.0.144
 */
class ItemShippingCase {
    /**
     * Constructs a new <code>ItemShippingCase</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemShippingCase
     */
    constructor() { 
        
        ItemShippingCase.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemShippingCase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemShippingCase} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemShippingCase} The populated <code>ItemShippingCase</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemShippingCase();

            if (data.hasOwnProperty('case_label')) {
                obj['case_label'] = ApiClient.convertToType(data['case_label'], 'String');
            }
            if (data.hasOwnProperty('case_merchant_item_id')) {
                obj['case_merchant_item_id'] = ApiClient.convertToType(data['case_merchant_item_id'], 'String');
            }
            if (data.hasOwnProperty('case_merchant_item_oid')) {
                obj['case_merchant_item_oid'] = ApiClient.convertToType(data['case_merchant_item_oid'], 'Number');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Case label
 * @member {String} case_label
 */
ItemShippingCase.prototype['case_label'] = undefined;

/**
 * Case item id
 * @member {String} case_merchant_item_id
 */
ItemShippingCase.prototype['case_merchant_item_id'] = undefined;

/**
 * Case item object identifier
 * @member {Number} case_merchant_item_oid
 */
ItemShippingCase.prototype['case_merchant_item_oid'] = undefined;

/**
 * Case quantity
 * @member {Number} quantity
 */
ItemShippingCase.prototype['quantity'] = undefined;






export default ItemShippingCase;

