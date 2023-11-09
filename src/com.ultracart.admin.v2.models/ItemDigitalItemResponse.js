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
import ItemDigitalItem from './ItemDigitalItem';
import ResponseMetadata from './ResponseMetadata';
import Warning from './Warning';

/**
 * The ItemDigitalItemResponse model module.
 * @module com.ultracart.admin.v2.models/ItemDigitalItemResponse
 * @version 4.0.187
 */
class ItemDigitalItemResponse {
    /**
     * Constructs a new <code>ItemDigitalItemResponse</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemDigitalItemResponse
     */
    constructor() { 
        
        ItemDigitalItemResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemDigitalItemResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemDigitalItemResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemDigitalItemResponse} The populated <code>ItemDigitalItemResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemDigitalItemResponse();

            if (data.hasOwnProperty('digital_item')) {
                obj['digital_item'] = ItemDigitalItem.constructFromObject(data['digital_item']);
            }
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
        }
        return obj;
    }


}

/**
 * @member {module:com.ultracart.admin.v2.models/ItemDigitalItem} digital_item
 */
ItemDigitalItemResponse.prototype['digital_item'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */
ItemDigitalItemResponse.prototype['error'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */
ItemDigitalItemResponse.prototype['metadata'] = undefined;

/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */
ItemDigitalItemResponse.prototype['success'] = undefined;

/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */
ItemDigitalItemResponse.prototype['warning'] = undefined;






export default ItemDigitalItemResponse;

