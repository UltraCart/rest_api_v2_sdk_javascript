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
import TaxProviderUltraCartState from './TaxProviderUltraCartState';
import UltraCartConfig from './UltraCartConfig';

/**
 * The TaxProviderUltraCart model module.
 * @module com.ultracart.admin.v2.models/TaxProviderUltraCart
 * @version 4.0.155
 */
class TaxProviderUltraCart {
    /**
     * Constructs a new <code>TaxProviderUltraCart</code>.
     * @alias module:com.ultracart.admin.v2.models/TaxProviderUltraCart
     */
    constructor() { 
        
        TaxProviderUltraCart.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaxProviderUltraCart</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/TaxProviderUltraCart} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/TaxProviderUltraCart} The populated <code>TaxProviderUltraCart</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaxProviderUltraCart();

            if (data.hasOwnProperty('configuration')) {
                obj['configuration'] = UltraCartConfig.constructFromObject(data['configuration']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('selected')) {
                obj['selected'] = ApiClient.convertToType(data['selected'], 'Boolean');
            }
            if (data.hasOwnProperty('states')) {
                obj['states'] = ApiClient.convertToType(data['states'], [TaxProviderUltraCartState]);
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/UltraCartConfig} configuration
 */
TaxProviderUltraCart.prototype['configuration'] = undefined;

/**
 * Description
 * @member {String} description
 */
TaxProviderUltraCart.prototype['description'] = undefined;

/**
 * Selected
 * @member {Boolean} selected
 */
TaxProviderUltraCart.prototype['selected'] = undefined;

/**
 * States in the union showing their management status
 * @member {Array.<module:com.ultracart.admin.v2.models/TaxProviderUltraCartState>} states
 */
TaxProviderUltraCart.prototype['states'] = undefined;

/**
 * Title
 * @member {String} title
 */
TaxProviderUltraCart.prototype['title'] = undefined;






export default TaxProviderUltraCart;

