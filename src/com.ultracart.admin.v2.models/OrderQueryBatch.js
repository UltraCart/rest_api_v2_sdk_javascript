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
 * The OrderQueryBatch model module.
 * @module com.ultracart.admin.v2.models/OrderQueryBatch
 * @version 4.0.188
 */
class OrderQueryBatch {
    /**
     * Constructs a new <code>OrderQueryBatch</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderQueryBatch
     */
    constructor() { 
        
        OrderQueryBatch.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderQueryBatch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderQueryBatch} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderQueryBatch} The populated <code>OrderQueryBatch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderQueryBatch();

            if (data.hasOwnProperty('order_ids')) {
                obj['order_ids'] = ApiClient.convertToType(data['order_ids'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Order IDs
 * @member {Array.<String>} order_ids
 */
OrderQueryBatch.prototype['order_ids'] = undefined;






export default OrderQueryBatch;

