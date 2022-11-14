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
 * The ItemInternal model module.
 * @module com.ultracart.admin.v2.models/ItemInternal
 * @version 4.0.79-RC
 */
var ItemInternal = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemInternal</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemInternal
   */
  function ItemInternal() {
    _classCallCheck(this, ItemInternal);

    ItemInternal.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemInternal, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemInternal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemInternal} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemInternal} The populated <code>ItemInternal</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemInternal();

        if (data.hasOwnProperty('memo')) {
          obj['memo'] = _ApiClient["default"].convertToType(data['memo'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ItemInternal;
}();
/**
 * Memo
 * @member {String} memo
 */


ItemInternal.prototype['memo'] = undefined;
var _default = ItemInternal;
exports["default"] = _default;