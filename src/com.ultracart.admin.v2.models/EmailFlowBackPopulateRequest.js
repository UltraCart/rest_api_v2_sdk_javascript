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
 * The EmailFlowBackPopulateRequest model module.
 * @module com.ultracart.admin.v2.models/EmailFlowBackPopulateRequest
 * @version 4.0.116-RC
 */
class EmailFlowBackPopulateRequest {
    /**
     * Constructs a new <code>EmailFlowBackPopulateRequest</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailFlowBackPopulateRequest
     */
    constructor() { 
        
        EmailFlowBackPopulateRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailFlowBackPopulateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailFlowBackPopulateRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailFlowBackPopulateRequest} The populated <code>EmailFlowBackPopulateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailFlowBackPopulateRequest();

            if (data.hasOwnProperty('order_days_old')) {
                obj['order_days_old'] = ApiClient.convertToType(data['order_days_old'], 'Number');
            }
            if (data.hasOwnProperty('relative_to_event')) {
                obj['relative_to_event'] = ApiClient.convertToType(data['relative_to_event'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * The age of the orders that should be considered for order triggers.
 * @member {Number} order_days_old
 */
EmailFlowBackPopulateRequest.prototype['order_days_old'] = undefined;

/**
 * True if the age of the event should be considered when reducing the initial flow wait step
 * @member {Boolean} relative_to_event
 */
EmailFlowBackPopulateRequest.prototype['relative_to_event'] = undefined;






export default EmailFlowBackPopulateRequest;

