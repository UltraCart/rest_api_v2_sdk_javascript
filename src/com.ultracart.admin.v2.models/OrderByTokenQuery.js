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
 * The OrderByTokenQuery model module.
 * @module com.ultracart.admin.v2.models/OrderByTokenQuery
 * @version 4.0.35-RC
 */
class OrderByTokenQuery {
    /**
     * Constructs a new <code>OrderByTokenQuery</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderByTokenQuery
     */
    constructor() { 
        
        OrderByTokenQuery.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderByTokenQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderByTokenQuery} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderByTokenQuery} The populated <code>OrderByTokenQuery</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderByTokenQuery();

            if (data.hasOwnProperty('order_token')) {
                obj['order_token'] = ApiClient.convertToType(data['order_token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Order Token
 * @member {String} order_token
 */
OrderByTokenQuery.prototype['order_token'] = undefined;






export default OrderByTokenQuery;

