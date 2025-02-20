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
 * The OrderReplacementResponse model module.
 * @module com.ultracart.admin.v2.models/OrderReplacementResponse
 * @version 4.0.245
 */
class OrderReplacementResponse {
    /**
     * Constructs a new <code>OrderReplacementResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderReplacementResponse
     */
    constructor() { 
        
        OrderReplacementResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderReplacementResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderReplacementResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderReplacementResponse} The populated <code>OrderReplacementResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderReplacementResponse();

            if (data.hasOwnProperty('chargeSuccessful')) {
                obj['chargeSuccessful'] = ApiClient.convertToType(data['chargeSuccessful'], 'Boolean');
            }
            if (data.hasOwnProperty('errorMessage')) {
                obj['errorMessage'] = ApiClient.convertToType(data['errorMessage'], 'String');
            }
            if (data.hasOwnProperty('feedback')) {
                obj['feedback'] = ApiClient.convertToType(data['feedback'], 'String');
            }
            if (data.hasOwnProperty('free')) {
                obj['free'] = ApiClient.convertToType(data['free'], 'Boolean');
            }
            if (data.hasOwnProperty('orderId')) {
                obj['orderId'] = ApiClient.convertToType(data['orderId'], 'String');
            }
            if (data.hasOwnProperty('successful')) {
                obj['successful'] = ApiClient.convertToType(data['successful'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} chargeSuccessful
 */
OrderReplacementResponse.prototype['chargeSuccessful'] = undefined;

/**
 * @member {String} errorMessage
 */
OrderReplacementResponse.prototype['errorMessage'] = undefined;

/**
 * @member {String} feedback
 */
OrderReplacementResponse.prototype['feedback'] = undefined;

/**
 * @member {Boolean} free
 */
OrderReplacementResponse.prototype['free'] = undefined;

/**
 * @member {String} orderId
 */
OrderReplacementResponse.prototype['orderId'] = undefined;

/**
 * @member {Boolean} successful
 */
OrderReplacementResponse.prototype['successful'] = undefined;






export default OrderReplacementResponse;

