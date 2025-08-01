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
 * The EmailPostcardTracking model module.
 * @module com.ultracart.admin.v2.models/EmailPostcardTracking
 * @version 4.1.16
 */
class EmailPostcardTracking {
    /**
     * Constructs a new <code>EmailPostcardTracking</code>.
     * @alias module:com.ultracart.admin.v2.models/EmailPostcardTracking
     */
    constructor() { 
        
        EmailPostcardTracking.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailPostcardTracking</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailPostcardTracking} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailPostcardTracking} The populated <code>EmailPostcardTracking</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailPostcardTracking();

            if (data.hasOwnProperty('commseq_postcard_uuid')) {
                obj['commseq_postcard_uuid'] = ApiClient.convertToType(data['commseq_postcard_uuid'], 'String');
            }
            if (data.hasOwnProperty('commseq_step_uuid')) {
                obj['commseq_step_uuid'] = ApiClient.convertToType(data['commseq_step_uuid'], 'String');
            }
            if (data.hasOwnProperty('commseq_uuid')) {
                obj['commseq_uuid'] = ApiClient.convertToType(data['commseq_uuid'], 'String');
            }
            if (data.hasOwnProperty('conversion_dts')) {
                obj['conversion_dts'] = ApiClient.convertToType(data['conversion_dts'], 'String');
            }
            if (data.hasOwnProperty('cost')) {
                obj['cost'] = ApiClient.convertToType(data['cost'], 'Number');
            }
            if (data.hasOwnProperty('customer_uuid')) {
                obj['customer_uuid'] = ApiClient.convertToType(data['customer_uuid'], 'String');
            }
            if (data.hasOwnProperty('delivered_dts')) {
                obj['delivered_dts'] = ApiClient.convertToType(data['delivered_dts'], 'String');
            }
            if (data.hasOwnProperty('from_address_line1')) {
                obj['from_address_line1'] = ApiClient.convertToType(data['from_address_line1'], 'String');
            }
            if (data.hasOwnProperty('from_address_line2')) {
                obj['from_address_line2'] = ApiClient.convertToType(data['from_address_line2'], 'String');
            }
            if (data.hasOwnProperty('from_city')) {
                obj['from_city'] = ApiClient.convertToType(data['from_city'], 'String');
            }
            if (data.hasOwnProperty('from_name')) {
                obj['from_name'] = ApiClient.convertToType(data['from_name'], 'String');
            }
            if (data.hasOwnProperty('from_state')) {
                obj['from_state'] = ApiClient.convertToType(data['from_state'], 'String');
            }
            if (data.hasOwnProperty('from_zip')) {
                obj['from_zip'] = ApiClient.convertToType(data['from_zip'], 'String');
            }
            if (data.hasOwnProperty('mailed_dts')) {
                obj['mailed_dts'] = ApiClient.convertToType(data['mailed_dts'], 'String');
            }
            if (data.hasOwnProperty('order_id')) {
                obj['order_id'] = ApiClient.convertToType(data['order_id'], 'String');
            }
            if (data.hasOwnProperty('postcard_tracking_uuid')) {
                obj['postcard_tracking_uuid'] = ApiClient.convertToType(data['postcard_tracking_uuid'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('submit_dts')) {
                obj['submit_dts'] = ApiClient.convertToType(data['submit_dts'], 'String');
            }
            if (data.hasOwnProperty('to_address_line1')) {
                obj['to_address_line1'] = ApiClient.convertToType(data['to_address_line1'], 'String');
            }
            if (data.hasOwnProperty('to_address_line2')) {
                obj['to_address_line2'] = ApiClient.convertToType(data['to_address_line2'], 'String');
            }
            if (data.hasOwnProperty('to_city')) {
                obj['to_city'] = ApiClient.convertToType(data['to_city'], 'String');
            }
            if (data.hasOwnProperty('to_name')) {
                obj['to_name'] = ApiClient.convertToType(data['to_name'], 'String');
            }
            if (data.hasOwnProperty('to_state')) {
                obj['to_state'] = ApiClient.convertToType(data['to_state'], 'String');
            }
            if (data.hasOwnProperty('to_zip')) {
                obj['to_zip'] = ApiClient.convertToType(data['to_zip'], 'String');
            }
            if (data.hasOwnProperty('tracking_description')) {
                obj['tracking_description'] = ApiClient.convertToType(data['tracking_description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} commseq_postcard_uuid
 */
EmailPostcardTracking.prototype['commseq_postcard_uuid'] = undefined;

/**
 * @member {String} commseq_step_uuid
 */
EmailPostcardTracking.prototype['commseq_step_uuid'] = undefined;

/**
 * @member {String} commseq_uuid
 */
EmailPostcardTracking.prototype['commseq_uuid'] = undefined;

/**
 * Conversion date time.
 * @member {String} conversion_dts
 */
EmailPostcardTracking.prototype['conversion_dts'] = undefined;

/**
 * @member {Number} cost
 */
EmailPostcardTracking.prototype['cost'] = undefined;

/**
 * @member {String} customer_uuid
 */
EmailPostcardTracking.prototype['customer_uuid'] = undefined;

/**
 * Delivered date time.
 * @member {String} delivered_dts
 */
EmailPostcardTracking.prototype['delivered_dts'] = undefined;

/**
 * @member {String} from_address_line1
 */
EmailPostcardTracking.prototype['from_address_line1'] = undefined;

/**
 * @member {String} from_address_line2
 */
EmailPostcardTracking.prototype['from_address_line2'] = undefined;

/**
 * @member {String} from_city
 */
EmailPostcardTracking.prototype['from_city'] = undefined;

/**
 * @member {String} from_name
 */
EmailPostcardTracking.prototype['from_name'] = undefined;

/**
 * @member {String} from_state
 */
EmailPostcardTracking.prototype['from_state'] = undefined;

/**
 * @member {String} from_zip
 */
EmailPostcardTracking.prototype['from_zip'] = undefined;

/**
 * Mailed date time.
 * @member {String} mailed_dts
 */
EmailPostcardTracking.prototype['mailed_dts'] = undefined;

/**
 * @member {String} order_id
 */
EmailPostcardTracking.prototype['order_id'] = undefined;

/**
 * @member {String} postcard_tracking_uuid
 */
EmailPostcardTracking.prototype['postcard_tracking_uuid'] = undefined;

/**
 * @member {String} status
 */
EmailPostcardTracking.prototype['status'] = undefined;

/**
 * Submit date time.
 * @member {String} submit_dts
 */
EmailPostcardTracking.prototype['submit_dts'] = undefined;

/**
 * @member {String} to_address_line1
 */
EmailPostcardTracking.prototype['to_address_line1'] = undefined;

/**
 * @member {String} to_address_line2
 */
EmailPostcardTracking.prototype['to_address_line2'] = undefined;

/**
 * @member {String} to_city
 */
EmailPostcardTracking.prototype['to_city'] = undefined;

/**
 * @member {String} to_name
 */
EmailPostcardTracking.prototype['to_name'] = undefined;

/**
 * @member {String} to_state
 */
EmailPostcardTracking.prototype['to_state'] = undefined;

/**
 * @member {String} to_zip
 */
EmailPostcardTracking.prototype['to_zip'] = undefined;

/**
 * @member {String} tracking_description
 */
EmailPostcardTracking.prototype['tracking_description'] = undefined;






export default EmailPostcardTracking;

