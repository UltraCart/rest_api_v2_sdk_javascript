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
import Error from './Error';
import ResponseMetadata from './ResponseMetadata';
import TaxProviderAvalara from './TaxProviderAvalara';
import TaxProviderSelf from './TaxProviderSelf';
import TaxProviderSovos from './TaxProviderSovos';
import TaxProviderTaxJar from './TaxProviderTaxJar';
import TaxProviderUltraCart from './TaxProviderUltraCart';
import Warning from './Warning';

/**
 * The TaxProvidersResponse model module.
 * @module com.ultracart.admin.v2.models/TaxProvidersResponse
 * @version 4.1.16
 */
class TaxProvidersResponse {
    /**
     * Constructs a new <code>TaxProvidersResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/TaxProvidersResponse
     */
    constructor() { 
        
        TaxProvidersResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaxProvidersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/TaxProvidersResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/TaxProvidersResponse} The populated <code>TaxProvidersResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaxProvidersResponse();

            if (data.hasOwnProperty('avalara')) {
                obj['avalara'] = TaxProviderAvalara.constructFromObject(data['avalara']);
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('self')) {
                obj['self'] = TaxProviderSelf.constructFromObject(data['self']);
            }
            if (data.hasOwnProperty('sovos')) {
                obj['sovos'] = TaxProviderSovos.constructFromObject(data['sovos']);
            }
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('taxjar')) {
                obj['taxjar'] = TaxProviderTaxJar.constructFromObject(data['taxjar']);
            }
            if (data.hasOwnProperty('ultracart')) {
                obj['ultracart'] = TaxProviderUltraCart.constructFromObject(data['ultracart']);
            }
            if (data.hasOwnProperty('warning')) {
                obj['warning'] = Warning.constructFromObject(data['warning']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/TaxProviderAvalara} avalara
 */
TaxProvidersResponse.prototype['avalara'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */
TaxProvidersResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
TaxProvidersResponse.prototype['metadata'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/TaxProviderSelf} self
 */
TaxProvidersResponse.prototype['self'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/TaxProviderSovos} sovos
 */
TaxProvidersResponse.prototype['sovos'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
TaxProvidersResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/TaxProviderTaxJar} taxjar
 */
TaxProvidersResponse.prototype['taxjar'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/TaxProviderUltraCart} ultracart
 */
TaxProvidersResponse.prototype['ultracart'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
TaxProvidersResponse.prototype['warning'] = undefined;






export default TaxProvidersResponse;

