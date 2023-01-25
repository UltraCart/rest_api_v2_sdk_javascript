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
 * The ItemAccounting model module.
 * @module com.ultracart.admin.v2.models/ItemAccounting
 * @version 4.0.123-RC
 */
class ItemAccounting {
    /**
     * Constructs a new <code>ItemAccounting</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemAccounting
     */
    constructor() { 
        
        ItemAccounting.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemAccounting</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemAccounting} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemAccounting} The populated <code>ItemAccounting</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemAccounting();

            if (data.hasOwnProperty('accounting_code')) {
                obj['accounting_code'] = ApiClient.convertToType(data['accounting_code'], 'String');
            }
            if (data.hasOwnProperty('qb_class')) {
                obj['qb_class'] = ApiClient.convertToType(data['qb_class'], 'String');
            }
        }
        return obj;
    }


}

/**
 * QuickBooks item name if different than the item id
 * @member {String} accounting_code
 */
ItemAccounting.prototype['accounting_code'] = undefined;

/**
 * QuickBooks class if you are classifying items on your invoices/receipts
 * @member {String} qb_class
 */
ItemAccounting.prototype['qb_class'] = undefined;






export default ItemAccounting;

