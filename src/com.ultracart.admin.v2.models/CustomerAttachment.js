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
 * The CustomerAttachment model module.
 * @module com.ultracart.admin.v2.models/CustomerAttachment
 * @version 4.0.101-RC
 */
class CustomerAttachment {
    /**
     * Constructs a new <code>CustomerAttachment</code>.
     * @alias module:com.ultracart.admin.v2.models/CustomerAttachment
     */
    constructor() { 
        
        CustomerAttachment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomerAttachment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerAttachment} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerAttachment} The populated <code>CustomerAttachment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerAttachment();

            if (data.hasOwnProperty('customer_profile_attachment_oid')) {
                obj['customer_profile_attachment_oid'] = ApiClient.convertToType(data['customer_profile_attachment_oid'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('file_name')) {
                obj['file_name'] = ApiClient.convertToType(data['file_name'], 'String');
            }
            if (data.hasOwnProperty('mime_type')) {
                obj['mime_type'] = ApiClient.convertToType(data['mime_type'], 'String');
            }
            if (data.hasOwnProperty('upload_dts')) {
                obj['upload_dts'] = ApiClient.convertToType(data['upload_dts'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Attachment identifier
 * @member {Number} customer_profile_attachment_oid
 */
CustomerAttachment.prototype['customer_profile_attachment_oid'] = undefined;

/**
 * Description
 * @member {String} description
 */
CustomerAttachment.prototype['description'] = undefined;

/**
 * File name
 * @member {String} file_name
 */
CustomerAttachment.prototype['file_name'] = undefined;

/**
 * Mime typoe
 * @member {String} mime_type
 */
CustomerAttachment.prototype['mime_type'] = undefined;

/**
 * Upload date/time
 * @member {String} upload_dts
 */
CustomerAttachment.prototype['upload_dts'] = undefined;






export default CustomerAttachment;

