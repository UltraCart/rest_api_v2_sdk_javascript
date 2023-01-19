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
 * The ItemChargebackAddendum model module.
 * @module com.ultracart.admin.v2.models/ItemChargebackAddendum
 * @version 4.0.120-RC
 */
class ItemChargebackAddendum {
    /**
     * Constructs a new <code>ItemChargebackAddendum</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemChargebackAddendum
     */
    constructor() { 
        
        ItemChargebackAddendum.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemChargebackAddendum</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemChargebackAddendum} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemChargebackAddendum} The populated <code>ItemChargebackAddendum</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemChargebackAddendum();

            if (data.hasOwnProperty('chargeback_addendum_oid')) {
                obj['chargeback_addendum_oid'] = ApiClient.convertToType(data['chargeback_addendum_oid'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('file_size')) {
                obj['file_size'] = ApiClient.convertToType(data['file_size'], 'Number');
            }
            if (data.hasOwnProperty('pages')) {
                obj['pages'] = ApiClient.convertToType(data['pages'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Chargeback addendum object identifier
 * @member {Number} chargeback_addendum_oid
 */
ItemChargebackAddendum.prototype['chargeback_addendum_oid'] = undefined;

/**
 * Description
 * @member {String} description
 */
ItemChargebackAddendum.prototype['description'] = undefined;

/**
 * Size of the file
 * @member {Number} file_size
 */
ItemChargebackAddendum.prototype['file_size'] = undefined;

/**
 * Number of pages
 * @member {Number} pages
 */
ItemChargebackAddendum.prototype['pages'] = undefined;






export default ItemChargebackAddendum;

