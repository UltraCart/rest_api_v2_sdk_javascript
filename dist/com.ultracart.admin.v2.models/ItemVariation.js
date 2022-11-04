"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ItemVariationOption = _interopRequireDefault(require("./ItemVariationOption"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ItemVariation model module.
 * @module com.ultracart.admin.v2.models/ItemVariation
 * @version 4.0.77-RC
 */
var ItemVariation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemVariation</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemVariation
   */
  function ItemVariation() {
    _classCallCheck(this, ItemVariation);

    ItemVariation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemVariation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemVariation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemVariation} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemVariation} The populated <code>ItemVariation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemVariation();

        if (data.hasOwnProperty('default_text')) {
          obj['default_text'] = _ApiClient["default"].convertToType(data['default_text'], 'String');
        }

        if (data.hasOwnProperty('default_text_translated_text_instance_oid')) {
          obj['default_text_translated_text_instance_oid'] = _ApiClient["default"].convertToType(data['default_text_translated_text_instance_oid'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('name_translated_text_instance_oid')) {
          obj['name_translated_text_instance_oid'] = _ApiClient["default"].convertToType(data['name_translated_text_instance_oid'], 'Number');
        }

        if (data.hasOwnProperty('options')) {
          obj['options'] = _ApiClient["default"].convertToType(data['options'], [_ItemVariationOption["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ItemVariation;
}();
/**
 * Default text
 * @member {String} default_text
 */


ItemVariation.prototype['default_text'] = undefined;
/**
 * Default text translated text instance id
 * @member {Number} default_text_translated_text_instance_oid
 */

ItemVariation.prototype['default_text_translated_text_instance_oid'] = undefined;
/**
 * Name
 * @member {String} name
 */

ItemVariation.prototype['name'] = undefined;
/**
 * Name translated text instance id
 * @member {Number} name_translated_text_instance_oid
 */

ItemVariation.prototype['name_translated_text_instance_oid'] = undefined;
/**
 * Options
 * @member {Array.<module:com.ultracart.admin.v2.models/ItemVariationOption>} options
 */

ItemVariation.prototype['options'] = undefined;
var _default = ItemVariation;
exports["default"] = _default;