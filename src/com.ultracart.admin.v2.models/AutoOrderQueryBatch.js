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
 * The AutoOrderQueryBatch model module.
 * @module com.ultracart.admin.v2.models/AutoOrderQueryBatch
 * @version 4.0.146
 */
class AutoOrderQueryBatch {
    /**
     * Constructs a new <code>AutoOrderQueryBatch</code>.
     * @alias module:com.ultracart.admin.v2.models/AutoOrderQueryBatch
     */
    constructor() { 
        
        AutoOrderQueryBatch.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AutoOrderQueryBatch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/AutoOrderQueryBatch} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/AutoOrderQueryBatch} The populated <code>AutoOrderQueryBatch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AutoOrderQueryBatch();

            if (data.hasOwnProperty('auto_order_oids')) {
                obj['auto_order_oids'] = ApiClient.convertToType(data['auto_order_oids'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * Auto order oids
 * @member {Array.<Number>} auto_order_oids
 */
AutoOrderQueryBatch.prototype['auto_order_oids'] = undefined;






export default AutoOrderQueryBatch;

