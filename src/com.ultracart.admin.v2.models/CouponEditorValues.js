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
import CouponType from './CouponType';
import SimpleValue from './SimpleValue';

/**
 * The CouponEditorValues model module.
 * @module com.ultracart.admin.v2.models/CouponEditorValues
 * @version 4.0.244
 */
class CouponEditorValues {
    /**
     * Constructs a new <code>CouponEditorValues</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponEditorValues
     */
    constructor() { 
        
        CouponEditorValues.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponEditorValues</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponEditorValues} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponEditorValues} The populated <code>CouponEditorValues</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponEditorValues();

            if (data.hasOwnProperty('affiliates')) {
                obj['affiliates'] = ApiClient.convertToType(data['affiliates'], [SimpleValue]);
            }
            if (data.hasOwnProperty('coupon_types')) {
                obj['coupon_types'] = ApiClient.convertToType(data['coupon_types'], ['String']);
            }
            if (data.hasOwnProperty('coupon_types_for_display')) {
                obj['coupon_types_for_display'] = ApiClient.convertToType(data['coupon_types_for_display'], [CouponType]);
            }
            if (data.hasOwnProperty('currency_codes')) {
                obj['currency_codes'] = ApiClient.convertToType(data['currency_codes'], ['String']);
            }
            if (data.hasOwnProperty('deprecated_themes')) {
                obj['deprecated_themes'] = ApiClient.convertToType(data['deprecated_themes'], [SimpleValue]);
            }
            if (data.hasOwnProperty('item_tags')) {
                obj['item_tags'] = ApiClient.convertToType(data['item_tags'], ['String']);
            }
            if (data.hasOwnProperty('mix_and_match_names')) {
                obj['mix_and_match_names'] = ApiClient.convertToType(data['mix_and_match_names'], ['String']);
            }
            if (data.hasOwnProperty('shipping_methods')) {
                obj['shipping_methods'] = ApiClient.convertToType(data['shipping_methods'], ['String']);
            }
            if (data.hasOwnProperty('storefronts')) {
                obj['storefronts'] = ApiClient.convertToType(data['storefronts'], [SimpleValue]);
            }
            if (data.hasOwnProperty('usable_by')) {
                obj['usable_by'] = ApiClient.convertToType(data['usable_by'], [SimpleValue]);
            }
            if (data.hasOwnProperty('valid_with_other_coupons')) {
                obj['valid_with_other_coupons'] = ApiClient.convertToType(data['valid_with_other_coupons'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * affiliates
 * @member {Array.<module:com.ultracart.admin.v2.models/SimpleValue>} affiliates
 */
CouponEditorValues.prototype['affiliates'] = undefined;

/**
 * coupon_types
 * @member {Array.<String>} coupon_types
 */
CouponEditorValues.prototype['coupon_types'] = undefined;

/**
 * coupon_types_for_display
 * @member {Array.<module:com.ultracart.admin.v2.models/CouponType>} coupon_types_for_display
 */
CouponEditorValues.prototype['coupon_types_for_display'] = undefined;

/**
 * currency_codes
 * @member {Array.<String>} currency_codes
 */
CouponEditorValues.prototype['currency_codes'] = undefined;

/**
 * deprecated_themes
 * @member {Array.<module:com.ultracart.admin.v2.models/SimpleValue>} deprecated_themes
 */
CouponEditorValues.prototype['deprecated_themes'] = undefined;

/**
 * Item tags
 * @member {Array.<String>} item_tags
 */
CouponEditorValues.prototype['item_tags'] = undefined;

/**
 * mix_and_match_names
 * @member {Array.<String>} mix_and_match_names
 */
CouponEditorValues.prototype['mix_and_match_names'] = undefined;

/**
 * shipping_methods
 * @member {Array.<String>} shipping_methods
 */
CouponEditorValues.prototype['shipping_methods'] = undefined;

/**
 * storefronts
 * @member {Array.<module:com.ultracart.admin.v2.models/SimpleValue>} storefronts
 */
CouponEditorValues.prototype['storefronts'] = undefined;

/**
 * usable_by
 * @member {Array.<module:com.ultracart.admin.v2.models/SimpleValue>} usable_by
 */
CouponEditorValues.prototype['usable_by'] = undefined;

/**
 * valid_with_other_coupons
 * @member {Array.<String>} valid_with_other_coupons
 */
CouponEditorValues.prototype['valid_with_other_coupons'] = undefined;






export default CouponEditorValues;

