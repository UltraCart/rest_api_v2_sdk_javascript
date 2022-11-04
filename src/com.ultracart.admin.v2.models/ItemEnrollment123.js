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
 * The ItemEnrollment123 model module.
 * @module com.ultracart.admin.v2.models/ItemEnrollment123
 * @version 4.0.78-RC
 */
class ItemEnrollment123 {
    /**
     * Constructs a new <code>ItemEnrollment123</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemEnrollment123
     */
    constructor() { 
        
        ItemEnrollment123.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemEnrollment123</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemEnrollment123} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemEnrollment123} The populated <code>ItemEnrollment123</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemEnrollment123();

            if (data.hasOwnProperty('enrollment123_product_code')) {
                obj['enrollment123_product_code'] = ApiClient.convertToType(data['enrollment123_product_code'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Enrolment 123 product code
 * @member {String} enrollment123_product_code
 */
ItemEnrollment123.prototype['enrollment123_product_code'] = undefined;






export default ItemEnrollment123;

