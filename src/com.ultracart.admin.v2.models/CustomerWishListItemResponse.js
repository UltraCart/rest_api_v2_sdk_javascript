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
import CustomerWishListItem from './CustomerWishListItem';
import Error from './Error';
import ResponseMetadata from './ResponseMetadata';
import Warning from './Warning';

/**
 * The CustomerWishListItemResponse model module.
 * @module com.ultracart.admin.v2.models/CustomerWishListItemResponse
 * @version 4.1.0
 */
class CustomerWishListItemResponse {
    /**
     * Constructs a new <code>CustomerWishListItemResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/CustomerWishListItemResponse
     */
    constructor() { 
        
        CustomerWishListItemResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomerWishListItemResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerWishListItemResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerWishListItemResponse} The populated <code>CustomerWishListItemResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerWishListItemResponse();

            if (data.hasOwnProperty('error')) {
                obj['error'] = Error.constructFromObject(data['error']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ResponseMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('warning')) {
                obj['warning'] = Warning.constructFromObject(data['warning']);
            }
            if (data.hasOwnProperty('wishlist_item')) {
                obj['wishlist_item'] = CustomerWishListItem.constructFromObject(data['wishlist_item']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */
CustomerWishListItemResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
CustomerWishListItemResponse.prototype['metadata'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
CustomerWishListItemResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
CustomerWishListItemResponse.prototype['warning'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/CustomerWishListItem} wishlist_item
 */
CustomerWishListItemResponse.prototype['wishlist_item'] = undefined;






export default CustomerWishListItemResponse;

