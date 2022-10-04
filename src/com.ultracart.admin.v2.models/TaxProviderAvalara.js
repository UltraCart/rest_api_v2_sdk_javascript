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
import AvalaraConfig from './AvalaraConfig';

/**
 * The TaxProviderAvalara model module.
 * @module com.ultracart.admin.v2.models/TaxProviderAvalara
 * @version 4.0.71-RC
 */
class TaxProviderAvalara {
    /**
     * Constructs a new <code>TaxProviderAvalara</code>.
     * @alias module:com.ultracart.admin.v2.models/TaxProviderAvalara
     */
    constructor() { 
        
        TaxProviderAvalara.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaxProviderAvalara</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/TaxProviderAvalara} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/TaxProviderAvalara} The populated <code>TaxProviderAvalara</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaxProviderAvalara();

            if (data.hasOwnProperty('configuration')) {
                obj['configuration'] = AvalaraConfig.constructFromObject(data['configuration']);
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
 * @member {module:com.ultracart.admin.v2.models/AvalaraConfig} configuration
 */
TaxProviderAvalara.prototype['configuration'] = undefined;

/**
 * Description
 * @member {String} description
 */
TaxProviderAvalara.prototype['description'] = undefined;

/**
 * Selected
 * @member {Boolean} selected
 */
TaxProviderAvalara.prototype['selected'] = undefined;

/**
 * Title
 * @member {String} title
 */
TaxProviderAvalara.prototype['title'] = undefined;






export default TaxProviderAvalara;

