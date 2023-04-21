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
 * The CustomerSoftwareEntitlement model module.
 * @module com.ultracart.admin.v2.models/CustomerSoftwareEntitlement
 * @version 4.0.150
 */
class CustomerSoftwareEntitlement {
    /**
     * Constructs a new <code>CustomerSoftwareEntitlement</code>.
     * @alias module:com.ultracart.admin.v2.models/CustomerSoftwareEntitlement
     */
    constructor() { 
        
        CustomerSoftwareEntitlement.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CustomerSoftwareEntitlement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerSoftwareEntitlement} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerSoftwareEntitlement} The populated <code>CustomerSoftwareEntitlement</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomerSoftwareEntitlement();

            if (data.hasOwnProperty('activation_code')) {
                obj['activation_code'] = ApiClient.convertToType(data['activation_code'], 'String');
            }
            if (data.hasOwnProperty('activation_dts')) {
                obj['activation_dts'] = ApiClient.convertToType(data['activation_dts'], 'String');
            }
            if (data.hasOwnProperty('customer_software_entitlement_oid')) {
                obj['customer_software_entitlement_oid'] = ApiClient.convertToType(data['customer_software_entitlement_oid'], 'Number');
            }
            if (data.hasOwnProperty('expiration_dts')) {
                obj['expiration_dts'] = ApiClient.convertToType(data['expiration_dts'], 'String');
            }
            if (data.hasOwnProperty('purchased_via_item_description')) {
                obj['purchased_via_item_description'] = ApiClient.convertToType(data['purchased_via_item_description'], 'String');
            }
            if (data.hasOwnProperty('purchased_via_item_id')) {
                obj['purchased_via_item_id'] = ApiClient.convertToType(data['purchased_via_item_id'], 'String');
            }
            if (data.hasOwnProperty('purchased_via_order_id')) {
                obj['purchased_via_order_id'] = ApiClient.convertToType(data['purchased_via_order_id'], 'String');
            }
            if (data.hasOwnProperty('software_sku')) {
                obj['software_sku'] = ApiClient.convertToType(data['software_sku'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Activation Code Associated with the software
 * @member {String} activation_code
 */
CustomerSoftwareEntitlement.prototype['activation_code'] = undefined;

/**
 * Date/time when the activation code was created
 * @member {String} activation_dts
 */
CustomerSoftwareEntitlement.prototype['activation_dts'] = undefined;

/**
 * Customer profile software entitlement object identifier
 * @member {Number} customer_software_entitlement_oid
 */
CustomerSoftwareEntitlement.prototype['customer_software_entitlement_oid'] = undefined;

/**
 * Date/time when the activation code will expire
 * @member {String} expiration_dts
 */
CustomerSoftwareEntitlement.prototype['expiration_dts'] = undefined;

/**
 * Item description used to purchase this software.
 * @member {String} purchased_via_item_description
 */
CustomerSoftwareEntitlement.prototype['purchased_via_item_description'] = undefined;

/**
 * Item ID used to purchase this software.
 * @member {String} purchased_via_item_id
 */
CustomerSoftwareEntitlement.prototype['purchased_via_item_id'] = undefined;

/**
 * Order ID used to purchase this software.
 * @member {String} purchased_via_order_id
 */
CustomerSoftwareEntitlement.prototype['purchased_via_order_id'] = undefined;

/**
 * SKU of the software
 * @member {String} software_sku
 */
CustomerSoftwareEntitlement.prototype['software_sku'] = undefined;






export default CustomerSoftwareEntitlement;

