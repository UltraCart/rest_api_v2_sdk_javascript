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
import Item from './Item';

/**
 * The ItemsRequest model module.
 * @module com.ultracart.admin.v2.models/ItemsRequest
 * @version 4.0.187
 */
class ItemsRequest {
    /**
     * Constructs a new <code>ItemsRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemsRequest
     */
    constructor() { 
        
        ItemsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemsRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemsRequest} The populated <code>ItemsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemsRequest();

            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [Item]);
            }
        }
        return obj;
    }


}

/**
 * items
 * @member {Array.<module:com.ultracart.admin.v2.models/Item>} items
 */
ItemsRequest.prototype['items'] = undefined;






export default ItemsRequest;

