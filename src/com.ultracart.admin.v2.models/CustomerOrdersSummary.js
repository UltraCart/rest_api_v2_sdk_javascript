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
 * The CustomerOrdersSummary model module.
 * @module com.ultracart.admin.v2.models/CustomerOrdersSummary
 * @version 4.0.185
 */
class CustomerOrdersSummary {
    /**
     * Constructs a new <code>CustomerOrdersSummary</code>.
     * @alias module:com.ultracart.admin.v2.models/CustomerOrdersSummary
     */
    constructor() { 
        
        CustomerOrdersSummary.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomerOrdersSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerOrdersSummary} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerOrdersSummary} The populated <code>CustomerOrdersSummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerOrdersSummary();

            if (data.hasOwnProperty('first_order_dts')) {
                obj['first_order_dts'] = ApiClient.convertToType(data['first_order_dts'], 'String');
            }
            if (data.hasOwnProperty('last_order_dts')) {
                obj['last_order_dts'] = ApiClient.convertToType(data['last_order_dts'], 'String');
            }
            if (data.hasOwnProperty('order_count')) {
                obj['order_count'] = ApiClient.convertToType(data['order_count'], 'Number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * First order date
 * @member {String} first_order_dts
 */
CustomerOrdersSummary.prototype['first_order_dts'] = undefined;

/**
 * Last order date
 * @member {String} last_order_dts
 */
CustomerOrdersSummary.prototype['last_order_dts'] = undefined;

/**
 * Total number of orders
 * @member {Number} order_count
 */
CustomerOrdersSummary.prototype['order_count'] = undefined;

/**
 * Total amount associated with the orders
 * @member {Number} total
 */
CustomerOrdersSummary.prototype['total'] = undefined;






export default CustomerOrdersSummary;

