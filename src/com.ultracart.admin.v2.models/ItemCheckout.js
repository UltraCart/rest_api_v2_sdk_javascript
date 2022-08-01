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
 * The ItemCheckout model module.
 * @module com.ultracart.admin.v2.models/ItemCheckout
 * @version 4.0.47-RC
 */
class ItemCheckout {
    /**
     * Constructs a new <code>ItemCheckout</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemCheckout
     */
    constructor() { 
        
        ItemCheckout.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemCheckout</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemCheckout} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemCheckout} The populated <code>ItemCheckout</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemCheckout();

            if (data.hasOwnProperty('suppress_buysafe')) {
                obj['suppress_buysafe'] = ApiClient.convertToType(data['suppress_buysafe'], 'Boolean');
            }
            if (data.hasOwnProperty('terms')) {
                obj['terms'] = ApiClient.convertToType(data['terms'], 'String');
            }
            if (data.hasOwnProperty('terms_if_auto_order')) {
                obj['terms_if_auto_order'] = ApiClient.convertToType(data['terms_if_auto_order'], 'Boolean');
            }
            if (data.hasOwnProperty('terms_translated_text_instance_oid')) {
                obj['terms_translated_text_instance_oid'] = ApiClient.convertToType(data['terms_translated_text_instance_oid'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * True to suppress buySAFE (deprecated)
 * @member {Boolean} suppress_buysafe
 */
ItemCheckout.prototype['suppress_buysafe'] = undefined;

/**
 * Terms for purchasing this item
 * @member {String} terms
 */
ItemCheckout.prototype['terms'] = undefined;

/**
 * Terms only apply if the item is on auto order
 * @member {Boolean} terms_if_auto_order
 */
ItemCheckout.prototype['terms_if_auto_order'] = undefined;

/**
 * Terms translated text instance identifier
 * @member {Number} terms_translated_text_instance_oid
 */
ItemCheckout.prototype['terms_translated_text_instance_oid'] = undefined;






export default ItemCheckout;

