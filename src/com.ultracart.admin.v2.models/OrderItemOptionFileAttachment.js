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
 * The OrderItemOptionFileAttachment model module.
 * @module com.ultracart.admin.v2.models/OrderItemOptionFileAttachment
 * @version 4.0.163
 */
class OrderItemOptionFileAttachment {
    /**
     * Constructs a new <code>OrderItemOptionFileAttachment</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderItemOptionFileAttachment
     */
    constructor() { 
        
        OrderItemOptionFileAttachment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderItemOptionFileAttachment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderItemOptionFileAttachment} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderItemOptionFileAttachment} The populated <code>OrderItemOptionFileAttachment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderItemOptionFileAttachment();

            if (data.hasOwnProperty('expiration_dts')) {
                obj['expiration_dts'] = ApiClient.convertToType(data['expiration_dts'], 'String');
            }
            if (data.hasOwnProperty('file_name')) {
                obj['file_name'] = ApiClient.convertToType(data['file_name'], 'String');
            }
            if (data.hasOwnProperty('mime_type')) {
                obj['mime_type'] = ApiClient.convertToType(data['mime_type'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Expiration date/time
 * @member {String} expiration_dts
 */
OrderItemOptionFileAttachment.prototype['expiration_dts'] = undefined;

/**
 * File name
 * @member {String} file_name
 */
OrderItemOptionFileAttachment.prototype['file_name'] = undefined;

/**
 * Mime type
 * @member {String} mime_type
 */
OrderItemOptionFileAttachment.prototype['mime_type'] = undefined;

/**
 * Size
 * @member {Number} size
 */
OrderItemOptionFileAttachment.prototype['size'] = undefined;






export default OrderItemOptionFileAttachment;

