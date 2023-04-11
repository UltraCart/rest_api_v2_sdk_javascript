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
 * The CartCheckout model module.
 * @module com.ultracart.admin.v2.models/CartCheckout
 * @version 4.0.146
 */
class CartCheckout {
    /**
     * Constructs a new <code>CartCheckout</code>.
     * @alias module:com.ultracart.admin.v2.models/CartCheckout
     */
    constructor() { 
        
        CartCheckout.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartCheckout</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartCheckout} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartCheckout} The populated <code>CartCheckout</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartCheckout();

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
            if (data.hasOwnProperty('ip_address')) {
                obj['ip_address'] = ApiClient.convertToType(data['ip_address'], 'String');
            }
            if (data.hasOwnProperty('return_code')) {
                obj['return_code'] = ApiClient.convertToType(data['return_code'], 'String');
            }
            if (data.hasOwnProperty('return_url')) {
                obj['return_url'] = ApiClient.convertToType(data['return_url'], 'String');
            }
            if (data.hasOwnProperty('screen_branding_theme_code')) {
                obj['screen_branding_theme_code'] = ApiClient.convertToType(data['screen_branding_theme_code'], 'String');
            }
            if (data.hasOwnProperty('storefront_host_name')) {
                obj['storefront_host_name'] = ApiClient.convertToType(data['storefront_host_name'], 'String');
            }
            if (data.hasOwnProperty('user_agent')) {
                obj['user_agent'] = ApiClient.convertToType(data['user_agent'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Comments from the customer.  Rarely used on the single page checkout.
 * @member {String} comments
 */
CartCheckout.prototype['comments'] = undefined;

/**
 * Custom field 1
 * @member {String} custom_field1
 */
CartCheckout.prototype['custom_field1'] = undefined;

/**
 * Custom field 10
 * @member {String} custom_field10
 */
CartCheckout.prototype['custom_field10'] = undefined;

/**
 * Custom field 2
 * @member {String} custom_field2
 */
CartCheckout.prototype['custom_field2'] = undefined;

/**
 * Custom field 3
 * @member {String} custom_field3
 */
CartCheckout.prototype['custom_field3'] = undefined;

/**
 * Custom field 4
 * @member {String} custom_field4
 */
CartCheckout.prototype['custom_field4'] = undefined;

/**
 * Custom field 5
 * @member {String} custom_field5
 */
CartCheckout.prototype['custom_field5'] = undefined;

/**
 * Custom field 6
 * @member {String} custom_field6
 */
CartCheckout.prototype['custom_field6'] = undefined;

/**
 * Custom field 7
 * @member {String} custom_field7
 */
CartCheckout.prototype['custom_field7'] = undefined;

/**
 * Custom field 8
 * @member {String} custom_field8
 */
CartCheckout.prototype['custom_field8'] = undefined;

/**
 * Custom field 9
 * @member {String} custom_field9
 */
CartCheckout.prototype['custom_field9'] = undefined;

/**
 * IP Address (read only unless non-browser key authenticated)
 * @member {String} ip_address
 */
CartCheckout.prototype['ip_address'] = undefined;

/**
 * Return code assigned for send return email operation
 * @member {String} return_code
 */
CartCheckout.prototype['return_code'] = undefined;

/**
 * The URL to redirect the customer to when they return from an abandon cart email.  Must be https protocol.
 * @member {String} return_url
 */
CartCheckout.prototype['return_url'] = undefined;

/**
 * Screen branding theme code
 * @member {String} screen_branding_theme_code
 */
CartCheckout.prototype['screen_branding_theme_code'] = undefined;

/**
 * StoreFront Host Name
 * @member {String} storefront_host_name
 */
CartCheckout.prototype['storefront_host_name'] = undefined;

/**
 * User agent of the browser
 * @member {String} user_agent
 */
CartCheckout.prototype['user_agent'] = undefined;






export default CartCheckout;

