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
 * The StoreFront model module.
 * @module com.ultracart.admin.v2.models/StoreFront
 * @version 4.0.190
 */
class StoreFront {
    /**
     * Constructs a new <code>StoreFront</code>.
     * @alias module:com.ultracart.admin.v2.models/StoreFront
     */
    constructor() { 
        
        StoreFront.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StoreFront</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/StoreFront} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/StoreFront} The populated <code>StoreFront</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StoreFront();

            if (data.hasOwnProperty('host_alias1')) {
                obj['host_alias1'] = ApiClient.convertToType(data['host_alias1'], 'String');
            }
            if (data.hasOwnProperty('host_alias2')) {
                obj['host_alias2'] = ApiClient.convertToType(data['host_alias2'], 'String');
            }
            if (data.hasOwnProperty('host_alias3')) {
                obj['host_alias3'] = ApiClient.convertToType(data['host_alias3'], 'String');
            }
            if (data.hasOwnProperty('host_alias4')) {
                obj['host_alias4'] = ApiClient.convertToType(data['host_alias4'], 'String');
            }
            if (data.hasOwnProperty('host_alias5')) {
                obj['host_alias5'] = ApiClient.convertToType(data['host_alias5'], 'String');
            }
            if (data.hasOwnProperty('host_name')) {
                obj['host_name'] = ApiClient.convertToType(data['host_name'], 'String');
            }
            if (data.hasOwnProperty('locked')) {
                obj['locked'] = ApiClient.convertToType(data['locked'], 'Boolean');
            }
            if (data.hasOwnProperty('merchant_id')) {
                obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
            }
            if (data.hasOwnProperty('redirect_aliases')) {
                obj['redirect_aliases'] = ApiClient.convertToType(data['redirect_aliases'], 'Boolean');
            }
            if (data.hasOwnProperty('storefront_oid')) {
                obj['storefront_oid'] = ApiClient.convertToType(data['storefront_oid'], 'Number');
            }
            if (data.hasOwnProperty('unlock_password')) {
                obj['unlock_password'] = ApiClient.convertToType(data['unlock_password'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} host_alias1
 */
StoreFront.prototype['host_alias1'] = undefined;

/**
 * @member {String} host_alias2
 */
StoreFront.prototype['host_alias2'] = undefined;

/**
 * @member {String} host_alias3
 */
StoreFront.prototype['host_alias3'] = undefined;

/**
 * @member {String} host_alias4
 */
StoreFront.prototype['host_alias4'] = undefined;

/**
 * @member {String} host_alias5
 */
StoreFront.prototype['host_alias5'] = undefined;

/**
 * @member {String} host_name
 */
StoreFront.prototype['host_name'] = undefined;

/**
 * @member {Boolean} locked
 */
StoreFront.prototype['locked'] = undefined;

/**
 * @member {String} merchant_id
 */
StoreFront.prototype['merchant_id'] = undefined;

/**
 * @member {Boolean} redirect_aliases
 */
StoreFront.prototype['redirect_aliases'] = undefined;

/**
 * @member {Number} storefront_oid
 */
StoreFront.prototype['storefront_oid'] = undefined;

/**
 * @member {String} unlock_password
 */
StoreFront.prototype['unlock_password'] = undefined;






export default StoreFront;

