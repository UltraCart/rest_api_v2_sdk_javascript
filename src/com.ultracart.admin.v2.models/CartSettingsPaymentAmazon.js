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
 * The CartSettingsPaymentAmazon model module.
 * @module com.ultracart.admin.v2.models/CartSettingsPaymentAmazon
 * @version 4.0.56-RC
 */
class CartSettingsPaymentAmazon {
    /**
     * Constructs a new <code>CartSettingsPaymentAmazon</code>.
     * @alias module:com.ultracart.admin.v2.models/CartSettingsPaymentAmazon
     */
    constructor() { 
        
        CartSettingsPaymentAmazon.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartSettingsPaymentAmazon</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartSettingsPaymentAmazon} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartSettingsPaymentAmazon} The populated <code>CartSettingsPaymentAmazon</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartSettingsPaymentAmazon();

            if (data.hasOwnProperty('amazon_button_url')) {
                obj['amazon_button_url'] = ApiClient.convertToType(data['amazon_button_url'], 'String');
            }
            if (data.hasOwnProperty('amazon_merchant_id')) {
                obj['amazon_merchant_id'] = ApiClient.convertToType(data['amazon_merchant_id'], 'String');
            }
            if (data.hasOwnProperty('amazon_widget_url')) {
                obj['amazon_widget_url'] = ApiClient.convertToType(data['amazon_widget_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Amazon button URL
 * @member {String} amazon_button_url
 */
CartSettingsPaymentAmazon.prototype['amazon_button_url'] = undefined;

/**
 * Amazon merchant ID
 * @member {String} amazon_merchant_id
 */
CartSettingsPaymentAmazon.prototype['amazon_merchant_id'] = undefined;

/**
 * Amazon widget URL
 * @member {String} amazon_widget_url
 */
CartSettingsPaymentAmazon.prototype['amazon_widget_url'] = undefined;






export default CartSettingsPaymentAmazon;

