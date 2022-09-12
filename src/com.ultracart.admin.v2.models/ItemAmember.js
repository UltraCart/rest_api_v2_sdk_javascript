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
 * The ItemAmember model module.
 * @module com.ultracart.admin.v2.models/ItemAmember
 * @version 4.0.62-RC
 */
class ItemAmember {
    /**
     * Constructs a new <code>ItemAmember</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemAmember
     */
    constructor() { 
        
        ItemAmember.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemAmember</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemAmember} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemAmember} The populated <code>ItemAmember</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemAmember();

            if (data.hasOwnProperty('amember_payment_duration_days')) {
                obj['amember_payment_duration_days'] = ApiClient.convertToType(data['amember_payment_duration_days'], 'Number');
            }
            if (data.hasOwnProperty('amember_product_id')) {
                obj['amember_product_id'] = ApiClient.convertToType(data['amember_product_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The number of days that the customer should be given access to the item
 * @member {Number} amember_payment_duration_days
 */
ItemAmember.prototype['amember_payment_duration_days'] = undefined;

/**
 * A-member product id give customer access to when they purchase this item
 * @member {String} amember_product_id
 */
ItemAmember.prototype['amember_product_id'] = undefined;






export default ItemAmember;

