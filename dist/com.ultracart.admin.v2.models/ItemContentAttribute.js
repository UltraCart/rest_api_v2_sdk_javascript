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
 * The ItemContentAttribute model module.
 * @module com.ultracart.admin.v2.models/ItemContentAttribute
 * @version 4.0.86-RC
 */
var ItemContentAttribute = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemContentAttribute</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemContentAttribute
   */
  function ItemContentAttribute() {
    _classCallCheck(this, ItemContentAttribute);

    ItemContentAttribute.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemContentAttribute, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemContentAttribute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemContentAttribute} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemContentAttribute} The populated <code>ItemContentAttribute</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemContentAttribute();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('translated_text_instance_oid')) {
          obj['translated_text_instance_oid'] = _ApiClient["default"].convertToType(data['translated_text_instance_oid'], 'Number');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ItemContentAttribute;
}();
/**
 * Attribute name
 * @member {String} name
 */


ItemContentAttribute.prototype['name'] = undefined;
/**
 * Attribute translated text instance identifier
 * @member {Number} translated_text_instance_oid
 */

ItemContentAttribute.prototype['translated_text_instance_oid'] = undefined;
/**
 * Attribute type
 * @member {String} type
 */

ItemContentAttribute.prototype['type'] = undefined;
/**
 * Attribute value
 * @member {String} value
 */

ItemContentAttribute.prototype['value'] = undefined;
var _default = ItemContentAttribute;
exports["default"] = _default;