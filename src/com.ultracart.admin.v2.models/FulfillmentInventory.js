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
 * The FulfillmentInventory model module.
 * @module com.ultracart.admin.v2.models/FulfillmentInventory
 * @version 4.0.188
 */
class FulfillmentInventory {
    /**
     * Constructs a new <code>FulfillmentInventory</code>.
     * @alias module:com.ultracart.admin.v2.models/FulfillmentInventory
     */
    constructor() { 
        
        FulfillmentInventory.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FulfillmentInventory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/FulfillmentInventory} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/FulfillmentInventory} The populated <code>FulfillmentInventory</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FulfillmentInventory();

            if (data.hasOwnProperty('itemId')) {
                obj['itemId'] = ApiClient.convertToType(data['itemId'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} itemId
 */
FulfillmentInventory.prototype['itemId'] = undefined;

/**
 * @member {Number} quantity
 */
FulfillmentInventory.prototype['quantity'] = undefined;






export default FulfillmentInventory;

