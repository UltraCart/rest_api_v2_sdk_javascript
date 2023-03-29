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
 * The ItemDigitalItemPdfMeta model module.
 * @module com.ultracart.admin.v2.models/ItemDigitalItemPdfMeta
 * @version 4.0.144
 */
class ItemDigitalItemPdfMeta {
    /**
     * Constructs a new <code>ItemDigitalItemPdfMeta</code>.
     * @alias module:com.ultracart.admin.v2.models/ItemDigitalItemPdfMeta
     */
    constructor() { 
        
        ItemDigitalItemPdfMeta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemDigitalItemPdfMeta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemDigitalItemPdfMeta} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemDigitalItemPdfMeta} The populated <code>ItemDigitalItemPdfMeta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemDigitalItemPdfMeta();

            if (data.hasOwnProperty('assembly_allowed')) {
                obj['assembly_allowed'] = ApiClient.convertToType(data['assembly_allowed'], 'Boolean');
            }
            if (data.hasOwnProperty('copy_allowed')) {
                obj['copy_allowed'] = ApiClient.convertToType(data['copy_allowed'], 'Boolean');
            }
            if (data.hasOwnProperty('custom_footer')) {
                obj['custom_footer'] = ApiClient.convertToType(data['custom_footer'], 'String');
            }
            if (data.hasOwnProperty('custom_header')) {
                obj['custom_header'] = ApiClient.convertToType(data['custom_header'], 'String');
            }
            if (data.hasOwnProperty('degraded_printing_allowed')) {
                obj['degraded_printing_allowed'] = ApiClient.convertToType(data['degraded_printing_allowed'], 'Boolean');
            }
            if (data.hasOwnProperty('fillin_allowed')) {
                obj['fillin_allowed'] = ApiClient.convertToType(data['fillin_allowed'], 'Boolean');
            }
            if (data.hasOwnProperty('modify_annotations_allowed')) {
                obj['modify_annotations_allowed'] = ApiClient.convertToType(data['modify_annotations_allowed'], 'Boolean');
            }
            if (data.hasOwnProperty('modify_contents_allowed')) {
                obj['modify_contents_allowed'] = ApiClient.convertToType(data['modify_contents_allowed'], 'Boolean');
            }
            if (data.hasOwnProperty('printing_allowed')) {
                obj['printing_allowed'] = ApiClient.convertToType(data['printing_allowed'], 'Boolean');
            }
            if (data.hasOwnProperty('screen_readers_allowed')) {
                obj['screen_readers_allowed'] = ApiClient.convertToType(data['screen_readers_allowed'], 'Boolean');
            }
            if (data.hasOwnProperty('tagged')) {
                obj['tagged'] = ApiClient.convertToType(data['tagged'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Assembly allowed
 * @member {Boolean} assembly_allowed
 */
ItemDigitalItemPdfMeta.prototype['assembly_allowed'] = undefined;

/**
 * Copy/Paste is allowed
 * @member {Boolean} copy_allowed
 */
ItemDigitalItemPdfMeta.prototype['copy_allowed'] = undefined;

/**
 * A custom footer for each pdf page
 * @member {String} custom_footer
 */
ItemDigitalItemPdfMeta.prototype['custom_footer'] = undefined;

/**
 * A custom header for each pdf page
 * @member {String} custom_header
 */
ItemDigitalItemPdfMeta.prototype['custom_header'] = undefined;

/**
 * Degraded printing allowed
 * @member {Boolean} degraded_printing_allowed
 */
ItemDigitalItemPdfMeta.prototype['degraded_printing_allowed'] = undefined;

/**
 * Fillin is allowed
 * @member {Boolean} fillin_allowed
 */
ItemDigitalItemPdfMeta.prototype['fillin_allowed'] = undefined;

/**
 * Modifying annotations is allowed
 * @member {Boolean} modify_annotations_allowed
 */
ItemDigitalItemPdfMeta.prototype['modify_annotations_allowed'] = undefined;

/**
 * Modifying contents is allowed
 * @member {Boolean} modify_contents_allowed
 */
ItemDigitalItemPdfMeta.prototype['modify_contents_allowed'] = undefined;

/**
 * Printing is allowed
 * @member {Boolean} printing_allowed
 */
ItemDigitalItemPdfMeta.prototype['printing_allowed'] = undefined;

/**
 * Screen readers are allowed
 * @member {Boolean} screen_readers_allowed
 */
ItemDigitalItemPdfMeta.prototype['screen_readers_allowed'] = undefined;

/**
 * PDF is tagged
 * @member {Boolean} tagged
 */
ItemDigitalItemPdfMeta.prototype['tagged'] = undefined;






export default ItemDigitalItemPdfMeta;

