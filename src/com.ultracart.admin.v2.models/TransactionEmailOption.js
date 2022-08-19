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
 * The TransactionEmailOption model module.
 * @module com.ultracart.admin.v2.models/TransactionEmailOption
 * @version 4.0.56-RC
 */
class TransactionEmailOption {
    /**
     * Constructs a new <code>TransactionEmailOption</code>.
     * @alias module:com.ultracart.admin.v2.models/TransactionEmailOption
     */
    constructor() { 
        
        TransactionEmailOption.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransactionEmailOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/TransactionEmailOption} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/TransactionEmailOption} The populated <code>TransactionEmailOption</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionEmailOption();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('merchantEmailDeliveryOptionOid')) {
                obj['merchantEmailDeliveryOptionOid'] = ApiClient.convertToType(data['merchantEmailDeliveryOptionOid'], 'Number');
            }
            if (data.hasOwnProperty('merchantId')) {
                obj['merchantId'] = ApiClient.convertToType(data['merchantId'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('selected')) {
                obj['selected'] = ApiClient.convertToType(data['selected'], 'Boolean');
            }
            if (data.hasOwnProperty('storeFrontOid')) {
                obj['storeFrontOid'] = ApiClient.convertToType(data['storeFrontOid'], 'Number');
            }
            if (data.hasOwnProperty('templateDisplay')) {
                obj['templateDisplay'] = ApiClient.convertToType(data['templateDisplay'], 'String');
            }
            if (data.hasOwnProperty('templateType')) {
                obj['templateType'] = ApiClient.convertToType(data['templateType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} description
 */
TransactionEmailOption.prototype['description'] = undefined;

/**
 * @member {Number} merchantEmailDeliveryOptionOid
 */
TransactionEmailOption.prototype['merchantEmailDeliveryOptionOid'] = undefined;

/**
 * @member {String} merchantId
 */
TransactionEmailOption.prototype['merchantId'] = undefined;

/**
 * @member {String} name
 */
TransactionEmailOption.prototype['name'] = undefined;

/**
 * @member {Boolean} selected
 */
TransactionEmailOption.prototype['selected'] = undefined;

/**
 * @member {Number} storeFrontOid
 */
TransactionEmailOption.prototype['storeFrontOid'] = undefined;

/**
 * @member {String} templateDisplay
 */
TransactionEmailOption.prototype['templateDisplay'] = undefined;

/**
 * @member {String} templateType
 */
TransactionEmailOption.prototype['templateType'] = undefined;






export default TransactionEmailOption;

