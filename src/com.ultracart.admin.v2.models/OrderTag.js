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
 * The OrderTag model module.
 * @module com.ultracart.admin.v2.models/OrderTag
 * @version 4.0.163
 */
class OrderTag {
    /**
     * Constructs a new <code>OrderTag</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderTag
     */
    constructor() { 
        
        OrderTag.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderTag</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderTag} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderTag} The populated <code>OrderTag</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderTag();

            if (data.hasOwnProperty('tag_value')) {
                obj['tag_value'] = ApiClient.convertToType(data['tag_value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Tag Value
 * @member {String} tag_value
 */
OrderTag.prototype['tag_value'] = undefined;






export default OrderTag;

