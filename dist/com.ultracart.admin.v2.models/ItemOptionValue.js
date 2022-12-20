"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Distance = _interopRequireDefault(require("./Distance"));

var _ItemOptionValueAdditionalItem = _interopRequireDefault(require("./ItemOptionValueAdditionalItem"));

var _ItemOptionValueDigitalItem = _interopRequireDefault(require("./ItemOptionValueDigitalItem"));

var _Weight = _interopRequireDefault(require("./Weight"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ItemOptionValue model module.
 * @module com.ultracart.admin.v2.models/ItemOptionValue
 * @version 4.0.100-RC
 */
var ItemOptionValue = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemOptionValue</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemOptionValue
   */
  function ItemOptionValue() {
    _classCallCheck(this, ItemOptionValue);

    ItemOptionValue.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemOptionValue, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemOptionValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemOptionValue} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemOptionValue} The populated <code>ItemOptionValue</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemOptionValue();

        if (data.hasOwnProperty('additional_dimension_application')) {
          obj['additional_dimension_application'] = _ApiClient["default"].convertToType(data['additional_dimension_application'], 'String');
        }

        if (data.hasOwnProperty('additional_items')) {
          obj['additional_items'] = _ApiClient["default"].convertToType(data['additional_items'], [_ItemOptionValueAdditionalItem["default"]]);
        }

        if (data.hasOwnProperty('cost_change')) {
          obj['cost_change'] = _ApiClient["default"].convertToType(data['cost_change'], 'Number');
        }

        if (data.hasOwnProperty('default_value')) {
          obj['default_value'] = _ApiClient["default"].convertToType(data['default_value'], 'Boolean');
        }

        if (data.hasOwnProperty('digital_items')) {
          obj['digital_items'] = _ApiClient["default"].convertToType(data['digital_items'], [_ItemOptionValueDigitalItem["default"]]);
        }

        if (data.hasOwnProperty('height')) {
          obj['height'] = _Distance["default"].constructFromObject(data['height']);
        }

        if (data.hasOwnProperty('length')) {
          obj['length'] = _Distance["default"].constructFromObject(data['length']);
        }

        if (data.hasOwnProperty('merchant_item_multimedia_oid')) {
          obj['merchant_item_multimedia_oid'] = _ApiClient["default"].convertToType(data['merchant_item_multimedia_oid'], 'Number');
        }

        if (data.hasOwnProperty('option_value_oid')) {
          obj['option_value_oid'] = _ApiClient["default"].convertToType(data['option_value_oid'], 'Number');
        }

        if (data.hasOwnProperty('percent_cost_change')) {
          obj['percent_cost_change'] = _ApiClient["default"].convertToType(data['percent_cost_change'], 'Number');
        }

        if (data.hasOwnProperty('translated_text_instance_oid')) {
          obj['translated_text_instance_oid'] = _ApiClient["default"].convertToType(data['translated_text_instance_oid'], 'Number');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }

        if (data.hasOwnProperty('weight_change')) {
          obj['weight_change'] = _Weight["default"].constructFromObject(data['weight_change']);
        }

        if (data.hasOwnProperty('weight_change_percent')) {
          obj['weight_change_percent'] = _ApiClient["default"].convertToType(data['weight_change_percent'], 'Number');
        }

        if (data.hasOwnProperty('width')) {
          obj['width'] = _Distance["default"].constructFromObject(data['width']);
        }
      }

      return obj;
    }
  }]);

  return ItemOptionValue;
}();
/**
 * Additional dimensions application
 * @member {module:com.ultracart.admin.v2.models/ItemOptionValue.AdditionalDimensionApplicationEnum} additional_dimension_application
 */


ItemOptionValue.prototype['additional_dimension_application'] = undefined;
/**
 * Additional items to add to the order if this value is selected
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemOptionValueAdditionalItem>} additional_items
 */

ItemOptionValue.prototype['additional_items'] = undefined;
/**
 * Cost change
 * @member {Number} cost_change
 */

ItemOptionValue.prototype['cost_change'] = undefined;
/**
 * True if default value
 * @member {Boolean} default_value
 */

ItemOptionValue.prototype['default_value'] = undefined;
/**
 * Digital items to allow the customer to download if this option value is selected
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemOptionValueDigitalItem>} digital_items
 */

ItemOptionValue.prototype['digital_items'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Distance} height
 */

ItemOptionValue.prototype['height'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Distance} length
 */

ItemOptionValue.prototype['length'] = undefined;
/**
 * Multimedia object identifier associated with this option value
 * @member {Number} merchant_item_multimedia_oid
 */

ItemOptionValue.prototype['merchant_item_multimedia_oid'] = undefined;
/**
 * Option value object identifier
 * @member {Number} option_value_oid
 */

ItemOptionValue.prototype['option_value_oid'] = undefined;
/**
 * Percentage cost change
 * @member {Number} percent_cost_change
 */

ItemOptionValue.prototype['percent_cost_change'] = undefined;
/**
 * Translated text instance id
 * @member {Number} translated_text_instance_oid
 */

ItemOptionValue.prototype['translated_text_instance_oid'] = undefined;
/**
 * Value
 * @member {String} value
 */

ItemOptionValue.prototype['value'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Weight} weight_change
 */

ItemOptionValue.prototype['weight_change'] = undefined;
/**
 * Percentage weight change
 * @member {Number} weight_change_percent
 */

ItemOptionValue.prototype['weight_change_percent'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Distance} width
 */

ItemOptionValue.prototype['width'] = undefined;
/**
 * Allowed values for the <code>additional_dimension_application</code> property.
 * @enum {String}
 * @readonly
 */

ItemOptionValue['AdditionalDimensionApplicationEnum'] = {
  /**
   * value: "none"
   * @const
   */
  "none": "none",

  /**
   * value: "set item to"
   * @const
   */
  "set item to": "set item to",

  /**
   * value: "add item"
   * @const
   */
  "add item": "add item"
};
var _default = ItemOptionValue;
exports["default"] = _default;