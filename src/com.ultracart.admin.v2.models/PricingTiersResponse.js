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
import PricingTier from './PricingTier';
import ResponseMetadata from './ResponseMetadata';
import Warning from './Warning';

/**
 * The PricingTiersResponse model module.
 * @module com.ultracart.admin.v2.models/PricingTiersResponse
 * @version 4.0.126-RC
 */
class PricingTiersResponse {
    /**
     * Constructs a new <code>PricingTiersResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/PricingTiersResponse
     */
    constructor() { 
        
        PricingTiersResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PricingTiersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/PricingTiersResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/PricingTiersResponse} The populated <code>PricingTiersResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PricingTiersResponse();

            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('pricingTiers')) {
                obj['pricingTiers'] = ApiClient.convertToType(data['pricingTiers'], [PricingTier]);
            }
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('warning')) {
                obj['warning'] = Warning.constructFromObject(data['warning']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */
PricingTiersResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
PricingTiersResponse.prototype['metadata'] = undefined;

/**
 * pricing_tiers
 * @member {Array.<module:com.ultracart.admin.v2.models/PricingTier>} pricingTiers
 */
PricingTiersResponse.prototype['pricingTiers'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
PricingTiersResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
PricingTiersResponse.prototype['warning'] = undefined;






export default PricingTiersResponse;

