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
 * The ItemEbayCategorySpecific model module.
 * @module com.ultracart.admin.v2.models/ItemEbayCategorySpecific
 * @version 4.0.83-RC
 */
var ItemEbayCategorySpecific = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemEbayCategorySpecific</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemEbayCategorySpecific
   */
  function ItemEbayCategorySpecific() {
    _classCallCheck(this, ItemEbayCategorySpecific);

    ItemEbayCategorySpecific.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemEbayCategorySpecific, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemEbayCategorySpecific</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemEbayCategorySpecific} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemEbayCategorySpecific} The populated <code>ItemEbayCategorySpecific</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemEbayCategorySpecific();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ItemEbayCategorySpecific;
}();
/**
 * Name of the category specification field
 * @member {String} name
 */


ItemEbayCategorySpecific.prototype['name'] = undefined;
/**
 * Value
 * @member {String} value
 */

ItemEbayCategorySpecific.prototype['value'] = undefined;
var _default = ItemEbayCategorySpecific;
exports["default"] = _default;