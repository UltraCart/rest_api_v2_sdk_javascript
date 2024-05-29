/*
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'com.ultracart.admin.v2.models/Currency', 'com.ultracart.admin.v2.models/Distance', 'com.ultracart.admin.v2.models/OrderItemOptionFileAttachment', 'com.ultracart.admin.v2.models/Weight'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Currency'), require('./Distance'), require('./OrderItemOptionFileAttachment'), require('./Weight'));
  } else {
    // Browser globals (root is window)
    if (!root.UltraCartRestApiV2) {
      root.UltraCartRestApiV2 = {};
    }
    root.UltraCartRestApiV2.OrderItemOption = factory(root.UltraCartRestApiV2.ApiClient, root.UltraCartRestApiV2.Currency, root.UltraCartRestApiV2.Distance, root.UltraCartRestApiV2.OrderItemOptionFileAttachment, root.UltraCartRestApiV2.Weight);
  }
}(this, function(ApiClient, Currency, Distance, OrderItemOptionFileAttachment, Weight) {
  'use strict';

  /**
   * The OrderItemOption model module.
   * @module com.ultracart.admin.v2.models/OrderItemOption
   * @version 3.10.207
   */

  /**
   * Constructs a new <code>OrderItemOption</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderItemOption
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderItemOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:com.ultracart.admin.v2.models/OrderItemOption} obj Optional instance to populate.
   * @return {module:com.ultracart.admin.v2.models/OrderItemOption} The populated <code>OrderItemOption</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('additional_dimension_application'))
        obj.additional_dimension_application = ApiClient.convertToType(data['additional_dimension_application'], 'String');
      if (data.hasOwnProperty('cost_change'))
        obj.cost_change = Currency.constructFromObject(data['cost_change']);
      if (data.hasOwnProperty('file_attachment'))
        obj.file_attachment = OrderItemOptionFileAttachment.constructFromObject(data['file_attachment']);
      if (data.hasOwnProperty('height'))
        obj.height = Distance.constructFromObject(data['height']);
      if (data.hasOwnProperty('hidden'))
        obj.hidden = ApiClient.convertToType(data['hidden'], 'Boolean');
      if (data.hasOwnProperty('label'))
        obj.label = ApiClient.convertToType(data['label'], 'String');
      if (data.hasOwnProperty('length'))
        obj.length = Distance.constructFromObject(data['length']);
      if (data.hasOwnProperty('one_time_fee'))
        obj.one_time_fee = ApiClient.convertToType(data['one_time_fee'], 'Boolean');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'String');
      if (data.hasOwnProperty('weight_change'))
        obj.weight_change = Weight.constructFromObject(data['weight_change']);
      if (data.hasOwnProperty('width'))
        obj.width = Distance.constructFromObject(data['width']);
    }
    return obj;
  }

  /**
   * How the additional dimensions are applied to the item.
   * @member {module:com.ultracart.admin.v2.models/OrderItemOption.AdditionalDimensionApplicationEnum} additional_dimension_application
   */
  exports.prototype.additional_dimension_application = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Currency} cost_change
   */
  exports.prototype.cost_change = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/OrderItemOptionFileAttachment} file_attachment
   */
  exports.prototype.file_attachment = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Distance} height
   */
  exports.prototype.height = undefined;

  /**
   * True if this option is hidden from display on the order
   * @member {Boolean} hidden
   */
  exports.prototype.hidden = undefined;

  /**
   * Label
   * @member {String} label
   */
  exports.prototype.label = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Distance} length
   */
  exports.prototype.length = undefined;

  /**
   * True if the cost associated with this option is a one time fee or multiplied by the quantity of the item
   * @member {Boolean} one_time_fee
   */
  exports.prototype.one_time_fee = undefined;

  /**
   * Value
   * @member {String} value
   */
  exports.prototype.value = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Weight} weight_change
   */
  exports.prototype.weight_change = undefined;

  /**
   * @member {module:com.ultracart.admin.v2.models/Distance} width
   */
  exports.prototype.width = undefined;


  /**
   * Allowed values for the <code>additional_dimension_application</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AdditionalDimensionApplicationEnum = {
    /**
     * value: "none"
     * @const
     */
    none: "none",

    /**
     * value: "set item to"
     * @const
     */
    set_item_to: "set item to",

    /**
     * value: "add item"
     * @const
     */
    add_item: "add item"
  };

  return exports;

}));
