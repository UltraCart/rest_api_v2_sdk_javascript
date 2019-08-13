/**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'com.ultracart.admin.v2.models/ItemContentAssignment', 'com.ultracart.admin.v2.models/ItemContentAttribute', 'com.ultracart.admin.v2.models/ItemContentMultimedia'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ItemContentAssignment'), require('./ItemContentAttribute'), require('./ItemContentMultimedia'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.ItemContent = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.ItemContentAssignment, root.UltraCartRestApiV2.ItemContentAttribute, root.UltraCartRestApiV2.ItemContentMultimedia);
  }
}(this, function(ApiClient, ItemContentAssignment, ItemContentAttribute, ItemContentMultimedia) {
  'use strict';




  /**
   * The ItemContent model module.
   * @module com.ultracart.admin.v2.models/ItemContent
   * @version 2.4.18
   */

  /**
   * Constructs a new <code>ItemContent</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemContent
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>ItemContent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/ItemContent} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/ItemContent} The populated <code>ItemContent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('assignments')) {
        obj['assignments'] = ApiClient.convertToType(data['assignments'], [ItemContentAssignment]);
      }
      if (data.hasOwnProperty('attributes')) {
        obj['attributes'] = ApiClient.convertToType(data['attributes'], [ItemContentAttribute]);
      }
      if (data.hasOwnProperty('exclude_from_search')) {
        obj['exclude_from_search'] = ApiClient.convertToType(data['exclude_from_search'], 'Boolean');
      }
      if (data.hasOwnProperty('exclude_from_top_sellers')) {
        obj['exclude_from_top_sellers'] = ApiClient.convertToType(data['exclude_from_top_sellers'], 'Boolean');
      }
      if (data.hasOwnProperty('extended_description')) {
        obj['extended_description'] = ApiClient.convertToType(data['extended_description'], 'String');
      }
      if (data.hasOwnProperty('extended_description_translated_text_instance_oid')) {
        obj['extended_description_translated_text_instance_oid'] = ApiClient.convertToType(data['extended_description_translated_text_instance_oid'], 'Number');
      }
      if (data.hasOwnProperty('multimedia')) {
        obj['multimedia'] = ApiClient.convertToType(data['multimedia'], [ItemContentMultimedia]);
      }
      if (data.hasOwnProperty('new_item')) {
        obj['new_item'] = ApiClient.convertToType(data['new_item'], 'Boolean');
      }
      if (data.hasOwnProperty('new_item_end')) {
        obj['new_item_end'] = ApiClient.convertToType(data['new_item_end'], 'String');
      }
      if (data.hasOwnProperty('new_item_start')) {
        obj['new_item_start'] = ApiClient.convertToType(data['new_item_start'], 'String');
      }
      if (data.hasOwnProperty('view_url')) {
        obj['view_url'] = ApiClient.convertToType(data['view_url'], 'String');
      }
    }
    return obj;
  }

  /**
   * StoreFront assignments
   * @member {Array.<module:com.ultracart.admin.v2.models/ItemContentAssignment>} assignments
   */
  exports.prototype['assignments'] = undefined;
  /**
   * StoreFront attributes
   * @member {Array.<module:com.ultracart.admin.v2.models/ItemContentAttribute>} attributes
   */
  exports.prototype['attributes'] = undefined;
  /**
   * Exclude from search
   * @member {Boolean} exclude_from_search
   */
  exports.prototype['exclude_from_search'] = undefined;
  /**
   * Exclude from the top sellers list in the StoreFront
   * @member {Boolean} exclude_from_top_sellers
   */
  exports.prototype['exclude_from_top_sellers'] = undefined;
  /**
   * Extended description (max 2000 characters)
   * @member {String} extended_description
   */
  exports.prototype['extended_description'] = undefined;
  /**
   * Extneded description text translation instance identifier
   * @member {Number} extended_description_translated_text_instance_oid
   */
  exports.prototype['extended_description_translated_text_instance_oid'] = undefined;
  /**
   * Multimedia
   * @member {Array.<module:com.ultracart.admin.v2.models/ItemContentMultimedia>} multimedia
   */
  exports.prototype['multimedia'] = undefined;
  /**
   * True if the item is new
   * @member {Boolean} new_item
   */
  exports.prototype['new_item'] = undefined;
  /**
   * The date the item should no longer be considered new
   * @member {String} new_item_end
   */
  exports.prototype['new_item_end'] = undefined;
  /**
   * The date the item should start being considered new
   * @member {String} new_item_start
   */
  exports.prototype['new_item_start'] = undefined;
  /**
   * Legacy view URL (not used by StoreFronts)
   * @member {String} view_url
   */
  exports.prototype['view_url'] = undefined;



  return exports;
}));


