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
import Browser from './Browser';

/**
 * The OrderCheckout model module.
 * @module com.ultracart.admin.v2.models/OrderCheckout
 * @version 4.0.179
 */
class OrderCheckout {
    /**
     * Constructs a new <code>OrderCheckout</code>.
     * @alias module:com.ultracart.admin.v2.models/OrderCheckout
     */
    constructor() { 
        
        OrderCheckout.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderCheckout</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderCheckout} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderCheckout} The populated <code>OrderCheckout</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderCheckout();

            if (data.hasOwnProperty('browser')) {
                obj['browser'] = Browser.constructFromObject(data['browser']);
            }
            if (data.hasOwnProperty('comments')) {
                obj['comments'] = ApiClient.convertToType(data['comments'], 'String');
            }
            if (data.hasOwnProperty('custom_field1')) {
                obj['custom_field1'] = ApiClient.convertToType(data['custom_field1'], 'String');
            }
            if (data.hasOwnProperty('custom_field10')) {
                obj['custom_field10'] = ApiClient.convertToType(data['custom_field10'], 'String');
            }
            if (data.hasOwnProperty('custom_field2')) {
                obj['custom_field2'] = ApiClient.convertToType(data['custom_field2'], 'String');
            }
            if (data.hasOwnProperty('custom_field3')) {
                obj['custom_field3'] = ApiClient.convertToType(data['custom_field3'], 'String');
            }
            if (data.hasOwnProperty('custom_field4')) {
                obj['custom_field4'] = ApiClient.convertToType(data['custom_field4'], 'String');
            }
            if (data.hasOwnProperty('custom_field5')) {
                obj['custom_field5'] = ApiClient.convertToType(data['custom_field5'], 'String');
            }
            if (data.hasOwnProperty('custom_field6')) {
                obj['custom_field6'] = ApiClient.convertToType(data['custom_field6'], 'String');
            }
            if (data.hasOwnProperty('custom_field7')) {
                obj['custom_field7'] = ApiClient.convertToType(data['custom_field7'], 'String');
            }
            if (data.hasOwnProperty('custom_field8')) {
                obj['custom_field8'] = ApiClient.convertToType(data['custom_field8'], 'String');
            }
            if (data.hasOwnProperty('custom_field9')) {
                obj['custom_field9'] = ApiClient.convertToType(data['custom_field9'], 'String');
            }
            if (data.hasOwnProperty('customer_ip_address')) {
                obj['customer_ip_address'] = ApiClient.convertToType(data['customer_ip_address'], 'String');
            }
            if (data.hasOwnProperty('screen_branding_theme_code')) {
                obj['screen_branding_theme_code'] = ApiClient.convertToType(data['screen_branding_theme_code'], 'String');
            }
            if (data.hasOwnProperty('screen_size')) {
                obj['screen_size'] = ApiClient.convertToType(data['screen_size'], 'String');
            }
            if (data.hasOwnProperty('storefront_host_name')) {
                obj['storefront_host_name'] = ApiClient.convertToType(data['storefront_host_name'], 'String');
            }
            if (data.hasOwnProperty('upsell_path_code')) {
                obj['upsell_path_code'] = ApiClient.convertToType(data['upsell_path_code'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/Browser} browser
 */
OrderCheckout.prototype['browser'] = undefined;

/**
 * Comments from the customer.  Rarely used on the single page checkout.
 * @member {String} comments
 */
OrderCheckout.prototype['comments'] = undefined;

/**
 * Custom field 1
 * @member {String} custom_field1
 */
OrderCheckout.prototype['custom_field1'] = undefined;

/**
 * Custom field 10
 * @member {String} custom_field10
 */
OrderCheckout.prototype['custom_field10'] = undefined;

/**
 * Custom field 2
 * @member {String} custom_field2
 */
OrderCheckout.prototype['custom_field2'] = undefined;

/**
 * Custom field 3
 * @member {String} custom_field3
 */
OrderCheckout.prototype['custom_field3'] = undefined;

/**
 * Custom field 4
 * @member {String} custom_field4
 */
OrderCheckout.prototype['custom_field4'] = undefined;

/**
 * Custom field 5
 * @member {String} custom_field5
 */
OrderCheckout.prototype['custom_field5'] = undefined;

/**
 * Custom field 6
 * @member {String} custom_field6
 */
OrderCheckout.prototype['custom_field6'] = undefined;

/**
 * Custom field 7
 * @member {String} custom_field7
 */
OrderCheckout.prototype['custom_field7'] = undefined;

/**
 * Custom field 8
 * @member {String} custom_field8
 */
OrderCheckout.prototype['custom_field8'] = undefined;

/**
 * Custom field 9
 * @member {String} custom_field9
 */
OrderCheckout.prototype['custom_field9'] = undefined;

/**
 * IP address of the customer when placing the order
 * @member {String} customer_ip_address
 */
OrderCheckout.prototype['customer_ip_address'] = undefined;

/**
 * Screen branding theme code associated with the order (legacy checkout)
 * @member {String} screen_branding_theme_code
 */
OrderCheckout.prototype['screen_branding_theme_code'] = undefined;

/**
 * Screen size small, medium or large
 * @member {String} screen_size
 */
OrderCheckout.prototype['screen_size'] = undefined;

/**
 * StoreFront host name associated with the order
 * @member {String} storefront_host_name
 */
OrderCheckout.prototype['storefront_host_name'] = undefined;

/**
 * Upsell path code assigned during the checkout that the customer went through
 * @member {String} upsell_path_code
 */
OrderCheckout.prototype['upsell_path_code'] = undefined;






export default OrderCheckout;

