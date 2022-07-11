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
import OrderDigitalItem from './OrderDigitalItem';

/**
 * The OrderDigitalOrder model module.
 * @module com.ultracart.admin.v2.models/OrderDigitalOrder
 * @version 4.0.34-RC
 */
class OrderDigitalOrder {
    /**
     * Constructs a new <code>OrderDigitalOrder</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderDigitalOrder
     */
    constructor() { 
        
        OrderDigitalOrder.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderDigitalOrder</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderDigitalOrder} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderDigitalOrder} The populated <code>OrderDigitalOrder</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderDigitalOrder();

            if (data.hasOwnProperty('creation_dts')) {
                obj['creation_dts'] = ApiClient.convertToType(data['creation_dts'], 'String');
            }
            if (data.hasOwnProperty('expiration_dts')) {
                obj['expiration_dts'] = ApiClient.convertToType(data['expiration_dts'], 'String');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [OrderDigitalItem]);
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('url_id')) {
                obj['url_id'] = ApiClient.convertToType(data['url_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Date/time that the digital order was created
 * @member {String} creation_dts
 */
OrderDigitalOrder.prototype['creation_dts'] = undefined;

/**
 * Expiration date/time of the digital order
 * @member {String} expiration_dts
 */
OrderDigitalOrder.prototype['expiration_dts'] = undefined;

/**
 * Digital items associated with the digital order
 * @member {Array.<module:com.ultracart.admin.v2.models/OrderDigitalItem>} items
 */
OrderDigitalOrder.prototype['items'] = undefined;

/**
 * URL where the customer can go to and download their digital order content
 * @member {String} url
 */
OrderDigitalOrder.prototype['url'] = undefined;

/**
 * URL ID is a unique code that is part of the URLs
 * @member {String} url_id
 */
OrderDigitalOrder.prototype['url_id'] = undefined;






export default OrderDigitalOrder;

