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
 * The OrderFormatResponse model module.
 * @module com.ultracart.admin.v2.models/OrderFormatResponse
 * @version 4.0.129
 */
class OrderFormatResponse {
    /**
     * Constructs a new <code>OrderFormatResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderFormatResponse
     */
    constructor() { 
        
        OrderFormatResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderFormatResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderFormatResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderFormatResponse} The populated <code>OrderFormatResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderFormatResponse();

            if (data.hasOwnProperty('css_links')) {
                obj['css_links'] = ApiClient.convertToType(data['css_links'], ['String']);
            }
            if (data.hasOwnProperty('formatted_result')) {
                obj['formatted_result'] = ApiClient.convertToType(data['formatted_result'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The URLs to any stylesheets that need to be included to properly view the markup.
 * @member {Array.<String>} css_links
 */
OrderFormatResponse.prototype['css_links'] = undefined;

/**
 * The formatted result of the order.  This will be HTML or text depending upon the requested format.
 * @member {String} formatted_result
 */
OrderFormatResponse.prototype['formatted_result'] = undefined;






export default OrderFormatResponse;

