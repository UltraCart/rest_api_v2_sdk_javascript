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
 * The ItemEnrollment123 model module.
 * @module com.ultracart.admin.v2.models/ItemEnrollment123
 * @version 4.0.55-RC
 */
var ItemEnrollment123 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemEnrollment123</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemEnrollment123
   */
  function ItemEnrollment123() {
    _classCallCheck(this, ItemEnrollment123);

    ItemEnrollment123.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemEnrollment123, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemEnrollment123</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemEnrollment123} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemEnrollment123} The populated <code>ItemEnrollment123</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemEnrollment123();

        if (data.hasOwnProperty('enrollment123_product_code')) {
          obj['enrollment123_product_code'] = _ApiClient["default"].convertToType(data['enrollment123_product_code'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ItemEnrollment123;
}();
/**
 * Enrolment 123 product code
 * @member {String} enrollment123_product_code
 */


ItemEnrollment123.prototype['enrollment123_product_code'] = undefined;
var _default = ItemEnrollment123;
exports["default"] = _default;