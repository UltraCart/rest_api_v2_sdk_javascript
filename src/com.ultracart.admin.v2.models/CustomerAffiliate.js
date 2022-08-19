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
 * The CustomerAffiliate model module.
 * @module com.ultracart.admin.v2.models/CustomerAffiliate
 * @version 4.0.56-RC
 */
class CustomerAffiliate {
    /**
     * Constructs a new <code>CustomerAffiliate</code>.
     * @alias module:com.ultracart.admin.v2.models/CustomerAffiliate
     */
    constructor() { 
        
        CustomerAffiliate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomerAffiliate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerAffiliate} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerAffiliate} The populated <code>CustomerAffiliate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerAffiliate();

            if (data.hasOwnProperty('affiliate_oid')) {
                obj['affiliate_oid'] = ApiClient.convertToType(data['affiliate_oid'], 'Number');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Affiliate object identifier
 * @member {Number} affiliate_oid
 */
CustomerAffiliate.prototype['affiliate_oid'] = undefined;

/**
 * email
 * @member {String} email
 */
CustomerAffiliate.prototype['email'] = undefined;

/**
 * First name
 * @member {String} first_name
 */
CustomerAffiliate.prototype['first_name'] = undefined;

/**
 * Last name
 * @member {String} last_name
 */
CustomerAffiliate.prototype['last_name'] = undefined;






export default CustomerAffiliate;

