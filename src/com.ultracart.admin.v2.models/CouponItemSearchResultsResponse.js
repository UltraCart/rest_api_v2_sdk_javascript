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
import CouponItemSearchResult from './CouponItemSearchResult';
import Error from './Error';
import ResponseMetadata from './ResponseMetadata';
import Warning from './Warning';

/**
 * The CouponItemSearchResultsResponse model module.
 * @module com.ultracart.admin.v2.models/CouponItemSearchResultsResponse
 * @version 4.0.63-RC
 */
class CouponItemSearchResultsResponse {
    /**
     * Constructs a new <code>CouponItemSearchResultsResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/CouponItemSearchResultsResponse
     */
    constructor() { 
        
        CouponItemSearchResultsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CouponItemSearchResultsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CouponItemSearchResultsResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CouponItemSearchResultsResponse} The populated <code>CouponItemSearchResultsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CouponItemSearchResultsResponse();

            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('search_results')) {
                obj['search_results'] = ApiClient.convertToType(data['search_results'], [CouponItemSearchResult]);
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
CouponItemSearchResultsResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
CouponItemSearchResultsResponse.prototype['metadata'] = undefined;

/**
 * search_results
 * @member {Array.<module:com.ultracart.admin.v2.models/CouponItemSearchResult>} search_results
 */
CouponItemSearchResultsResponse.prototype['search_results'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
CouponItemSearchResultsResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
CouponItemSearchResultsResponse.prototype['warning'] = undefined;






export default CouponItemSearchResultsResponse;

