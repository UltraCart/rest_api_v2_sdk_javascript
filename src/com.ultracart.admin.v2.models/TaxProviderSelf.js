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
import SelfConfig from './SelfConfig';
import TaxCountry from './TaxCountry';

/**
 * The TaxProviderSelf model module.
 * @module com.ultracart.admin.v2.models/TaxProviderSelf
 * @version 4.0.101-RC
 */
class TaxProviderSelf {
    /**
     * Constructs a new <code>TaxProviderSelf</code>.
     * @alias module:com.ultracart.admin.v2.models/TaxProviderSelf
     */
    constructor() { 
        
        TaxProviderSelf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaxProviderSelf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/TaxProviderSelf} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/TaxProviderSelf} The populated <code>TaxProviderSelf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaxProviderSelf();

            if (data.hasOwnProperty('configuration')) {
                obj['configuration'] = SelfConfig.constructFromObject(data['configuration']);
            }
            if (data.hasOwnProperty('countries')) {
                obj['countries'] = ApiClient.convertToType(data['countries'], [TaxCountry]);
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
 * @member {module:com.ultracart.admin.v2.models/SelfConfig} configuration
 */
TaxProviderSelf.prototype['configuration'] = undefined;

/**
 * Countries that collect sales tax
 * @member {Array.<module:com.ultracart.admin.v2.models/TaxCountry>} countries
 */
TaxProviderSelf.prototype['countries'] = undefined;

/**
 * Description
 * @member {String} description
 */
TaxProviderSelf.prototype['description'] = undefined;

/**
 * Selected
 * @member {Boolean} selected
 */
TaxProviderSelf.prototype['selected'] = undefined;

/**
 * Title
 * @member {String} title
 */
TaxProviderSelf.prototype['title'] = undefined;






export default TaxProviderSelf;

