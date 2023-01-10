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
 * The CustomerEmail model module.
 * @module com.ultracart.admin.v2.models/CustomerEmail
 * @version 4.0.110-RC
 */
class CustomerEmail {
    /**
     * Constructs a new <code>CustomerEmail</code>.
     * @alias module:com.ultracart.admin.v2.models/CustomerEmail
     */
    constructor() { 
        
        CustomerEmail.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomerEmail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerEmail} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerEmail} The populated <code>CustomerEmail</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerEmail();

            if (data.hasOwnProperty('customer_profile_email_oid')) {
                obj['customer_profile_email_oid'] = ApiClient.convertToType(data['customer_profile_email_oid'], 'Number');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('receipt_notification')) {
                obj['receipt_notification'] = ApiClient.convertToType(data['receipt_notification'], 'Boolean');
            }
            if (data.hasOwnProperty('refund_notification')) {
                obj['refund_notification'] = ApiClient.convertToType(data['refund_notification'], 'Boolean');
            }
            if (data.hasOwnProperty('shipment_notification')) {
                obj['shipment_notification'] = ApiClient.convertToType(data['shipment_notification'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * ID of the email
 * @member {Number} customer_profile_email_oid
 */
CustomerEmail.prototype['customer_profile_email_oid'] = undefined;

/**
 * Email
 * @member {String} email
 */
CustomerEmail.prototype['email'] = undefined;

/**
 * Label
 * @member {String} label
 */
CustomerEmail.prototype['label'] = undefined;

/**
 * CC this email on receipt notifications
 * @member {Boolean} receipt_notification
 */
CustomerEmail.prototype['receipt_notification'] = undefined;

/**
 * CC this email on refund notifications
 * @member {Boolean} refund_notification
 */
CustomerEmail.prototype['refund_notification'] = undefined;

/**
 * CC this email on shipment notifications
 * @member {Boolean} shipment_notification
 */
CustomerEmail.prototype['shipment_notification'] = undefined;






export default CustomerEmail;

