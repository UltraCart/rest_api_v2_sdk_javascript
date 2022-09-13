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
import SovosConfig from './SovosConfig';

/**
 * The TaxProviderSovos model module.
 * @module com.ultracart.admin.v2.models/TaxProviderSovos
 * @version 4.0.63-RC
 */
class TaxProviderSovos {
    /**
     * Constructs a new <code>TaxProviderSovos</code>.
     * @alias module:com.ultracart.admin.v2.models/TaxProviderSovos
     */
    constructor() { 
        
        TaxProviderSovos.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaxProviderSovos</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/TaxProviderSovos} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/TaxProviderSovos} The populated <code>TaxProviderSovos</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaxProviderSovos();

            if (data.hasOwnProperty('configuration')) {
                obj['configuration'] = SovosConfig.constructFromObject(data['configuration']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('selected')) {
                obj['selected'] = ApiClient.convertToType(data['selected'], 'Boolean');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/SovosConfig} configuration
 */
TaxProviderSovos.prototype['configuration'] = undefined;

/**
 * Description
 * @member {String} description
 */
TaxProviderSovos.prototype['description'] = undefined;

/**
 * Selected
 * @member {Boolean} selected
 */
TaxProviderSovos.prototype['selected'] = undefined;

/**
 * Title
 * @member {String} title
 */
TaxProviderSovos.prototype['title'] = undefined;






export default TaxProviderSovos;

