"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ItemVariationOption model module.
 * @module com.ultracart.admin.v2.models/ItemVariationOption
 * @version 4.0.61-RC
 */
var ItemVariationOption = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemVariationOption</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemVariationOption
   */
  function ItemVariationOption() {
    _classCallCheck(this, ItemVariationOption);

    ItemVariationOption.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemVariationOption, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemVariationOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemVariationOption} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemVariationOption} The populated <code>ItemVariationOption</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemVariationOption();

        if (data.hasOwnProperty('default_option')) {
          obj['default_option'] = _ApiClient["default"].convertToType(data['default_option'], 'Boolean');
        }

        if (data.hasOwnProperty('merchant_item_multimedia_oid')) {
          obj['merchant_item_multimedia_oid'] = _ApiClient["default"].convertToType(data['merchant_item_multimedia_oid'], 'Number');
        }

        if (data.hasOwnProperty('translated_text_instance_oid')) {
          obj['translated_text_instance_oid'] = _ApiClient["default"].convertToType(data['translated_text_instance_oid'], 'Number');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ItemVariationOption;
}();
/**
 * True if default option
 * @member {Boolean} default_option
 */


ItemVariationOption.prototype['default_option'] = undefined;
/**
 * Multimedia object identifier
 * @member {Number} merchant_item_multimedia_oid
 */

ItemVariationOption.prototype['merchant_item_multimedia_oid'] = undefined;
/**
 * Translated text instance id
 * @member {Number} translated_text_instance_oid
 */

ItemVariationOption.prototype['translated_text_instance_oid'] = undefined;
/**
 * Value
 * @member {String} value
 */

ItemVariationOption.prototype['value'] = undefined;
var _default = ItemVariationOption;
exports["default"] = _default;