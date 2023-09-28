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
 * The CartSettingsTerms model module.
 * @module com.ultracart.admin.v2.models/CartSettingsTerms
 * @version 4.0.179
 */
class CartSettingsTerms {
    /**
     * Constructs a new <code>CartSettingsTerms</code>.
     * @alias module:com.ultracart.admin.v2.models/CartSettingsTerms
     */
    constructor() { 
        
        CartSettingsTerms.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CartSettingsTerms</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CartSettingsTerms} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CartSettingsTerms} The populated <code>CartSettingsTerms</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CartSettingsTerms();

            if (data.hasOwnProperty('html')) {
                obj['html'] = ApiClient.convertToType(data['html'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
        }
        return obj;
    }


}

/**
 * HTML version of the terms
 * @member {String} html
 */
CartSettingsTerms.prototype['html'] = undefined;

/**
 * Text version of the terms.
 * @member {String} text
 */
CartSettingsTerms.prototype['text'] = undefined;






export default CartSettingsTerms;

