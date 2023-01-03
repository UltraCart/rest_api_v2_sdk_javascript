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
 * The Weight model module.
 * @module com.ultracart.admin.v2.models/Weight
 * @version 4.0.104-RC
 */
var Weight = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Weight</code>.
   * @alias module:com.ultracart.admin.v2.models/Weight
   */
  function Weight() {
    _classCallCheck(this, Weight);

    Weight.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Weight, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Weight</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/Weight} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/Weight} The populated <code>Weight</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Weight();

        if (data.hasOwnProperty('uom')) {
          obj['uom'] = _ApiClient["default"].convertToType(data['uom'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return Weight;
}();
/**
 * Unit of measure
 * @member {module:com.ultracart.admin.v2.models/Weight.UomEnum} uom
 */


Weight.prototype['uom'] = undefined;
/**
 * Weight
 * @member {Number} value
 */

Weight.prototype['value'] = undefined;
/**
 * Allowed values for the <code>uom</code> property.
 * @enum {String}
 * @readonly
 */

Weight['UomEnum'] = {
  /**
   * value: "KG"
   * @const
   */
  "KG": "KG",

  /**
   * value: "G"
   * @const
   */
  "G": "G",

  /**
   * value: "LB"
   * @const
   */
  "LB": "LB",

  /**
   * value: "OZ"
   * @const
   */
  "OZ": "OZ"
};
var _default = Weight;
exports["default"] = _default;