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
import AutoOrder from './AutoOrder';

/**
 * The AutoOrdersRequest model module.
 * @module com.ultracart.admin.v2.models/AutoOrdersRequest
 * @version 4.0.245
 */
class AutoOrdersRequest {
    /**
     * Constructs a new <code>AutoOrdersRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/AutoOrdersRequest
     */
    constructor() { 
        
        AutoOrdersRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AutoOrdersRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/AutoOrdersRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/AutoOrdersRequest} The populated <code>AutoOrdersRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AutoOrdersRequest();

            if (data.hasOwnProperty('autoOrders')) {
                obj['autoOrders'] = ApiClient.convertToType(data['autoOrders'], [AutoOrder]);
            }
        }
        return obj;
    }


}

/**
 * auto_orders
 * @member {Array.<module:com.ultracart.admin.v2.models/AutoOrder>} autoOrders
 */
AutoOrdersRequest.prototype['autoOrders'] = undefined;






export default AutoOrdersRequest;

