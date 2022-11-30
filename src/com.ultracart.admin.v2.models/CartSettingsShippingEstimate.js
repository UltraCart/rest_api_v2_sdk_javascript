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
import Currency from './Currency';

/**
 * The CartSettingsShippingEstimate model module.
 * @module com.ultracart.admin.v2.models/CartSettingsShippingEstimate
 * @version 4.0.90-RC
 */
class CartSettingsShippingEstimate {
    /**
     * Constructs a new <code>CartSettingsShippingEstimate</code>.
     * @alias module:com.ultracart.admin.v2.models/CartSettingsShippingEstimate
     */
    constructor() { 
        
        CartSettingsShippingEstimate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartSettingsShippingEstimate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartSettingsShippingEstimate} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartSettingsShippingEstimate} The populated <code>CartSettingsShippingEstimate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartSettingsShippingEstimate();

            if (data.hasOwnProperty('allow_3rd_party_billing')) {
                obj['allow_3rd_party_billing'] = ApiClient.convertToType(data['allow_3rd_party_billing'], 'Boolean');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('cost')) {
                obj['cost'] = Currency.constructFromObject(data['cost']);
            }
            if (data.hasOwnProperty('cost_before_discount')) {
                obj['cost_before_discount'] = Currency.constructFromObject(data['cost_before_discount']);
            }
            if (data.hasOwnProperty('default_method')) {
                obj['default_method'] = ApiClient.convertToType(data['default_method'], 'Boolean');
            }
            if (data.hasOwnProperty('discount')) {
                obj['discount'] = Currency.constructFromObject(data['discount']);
            }
            if (data.hasOwnProperty('discounted')) {
                obj['discounted'] = ApiClient.convertToType(data['discounted'], 'Boolean');
            }
            if (data.hasOwnProperty('display_name')) {
                obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
            }
            if (data.hasOwnProperty('estimated_delivery')) {
                obj['estimated_delivery'] = ApiClient.convertToType(data['estimated_delivery'], 'String');
            }
            if (data.hasOwnProperty('lift_gate_option')) {
                obj['lift_gate_option'] = ApiClient.convertToType(data['lift_gate_option'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('pickup')) {
                obj['pickup'] = ApiClient.convertToType(data['pickup'], 'Boolean');
            }
            if (data.hasOwnProperty('tax')) {
                obj['tax'] = Currency.constructFromObject(data['tax']);
            }
            if (data.hasOwnProperty('total_tax')) {
                obj['total_tax'] = Currency.constructFromObject(data['total_tax']);
            }
        }
        return obj;
    }


}

/**
 * True if this method allows the customer to use their own shipper account number
 * @member {Boolean} allow_3rd_party_billing
 */
CartSettingsShippingEstimate.prototype['allow_3rd_party_billing'] = undefined;

/**
 * Comment to display to the customer about this method
 * @member {String} comment
 */
CartSettingsShippingEstimate.prototype['comment'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} cost
 */
CartSettingsShippingEstimate.prototype['cost'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} cost_before_discount
 */
CartSettingsShippingEstimate.prototype['cost_before_discount'] = undefined;

/**
 * True if this is the default method
 * @member {Boolean} default_method
 */
CartSettingsShippingEstimate.prototype['default_method'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} discount
 */
CartSettingsShippingEstimate.prototype['discount'] = undefined;

/**
 * True if this method is discounted because of a coupon
 * @member {Boolean} discounted
 */
CartSettingsShippingEstimate.prototype['discounted'] = undefined;

/**
 * The name to display to the customer
 * @member {String} display_name
 */
CartSettingsShippingEstimate.prototype['display_name'] = undefined;

/**
 * Date of the estimated delivery (or range)
 * @member {String} estimated_delivery
 */
CartSettingsShippingEstimate.prototype['estimated_delivery'] = undefined;

/**
 * True if a lift gate option for this method should be offered to the customer
 * @member {Boolean} lift_gate_option
 */
CartSettingsShippingEstimate.prototype['lift_gate_option'] = undefined;

/**
 * Shipping method name
 * @member {String} name
 */
CartSettingsShippingEstimate.prototype['name'] = undefined;

/**
 * True if this shipping method requires customers to physically pickup product themselves
 * @member {Boolean} pickup
 */
CartSettingsShippingEstimate.prototype['pickup'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} tax
 */
CartSettingsShippingEstimate.prototype['tax'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Currency} total_tax
 */
CartSettingsShippingEstimate.prototype['total_tax'] = undefined;






export default CartSettingsShippingEstimate;

