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
 * The BrowserOS model module.
 * @module com.ultracart.admin.v2.models/BrowserOS
 * @version 4.0.148
 */
var BrowserOS = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BrowserOS</code>.
   * @alias module:com.ultracart.admin.v2.models/BrowserOS
   */
  function BrowserOS() {
    _classCallCheck(this, BrowserOS);

    BrowserOS.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BrowserOS, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BrowserOS</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/BrowserOS} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/BrowserOS} The populated <code>BrowserOS</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BrowserOS();

        if (data.hasOwnProperty('family')) {
          obj['family'] = _ApiClient["default"].convertToType(data['family'], 'String');
        }

        if (data.hasOwnProperty('major')) {
          obj['major'] = _ApiClient["default"].convertToType(data['major'], 'String');
        }

        if (data.hasOwnProperty('minor')) {
          obj['minor'] = _ApiClient["default"].convertToType(data['minor'], 'String');
        }

        if (data.hasOwnProperty('patch')) {
          obj['patch'] = _ApiClient["default"].convertToType(data['patch'], 'String');
        }

        if (data.hasOwnProperty('patch_minor')) {
          obj['patch_minor'] = _ApiClient["default"].convertToType(data['patch_minor'], 'String');
        }
      }

      return obj;
    }
  }]);

  return BrowserOS;
}();
/**
 * @member {String} family
 */


BrowserOS.prototype['family'] = undefined;
/**
 * @member {String} major
 */

BrowserOS.prototype['major'] = undefined;
/**
 * @member {String} minor
 */

BrowserOS.prototype['minor'] = undefined;
/**
 * @member {String} patch
 */

BrowserOS.prototype['patch'] = undefined;
/**
 * @member {String} patch_minor
 */

BrowserOS.prototype['patch_minor'] = undefined;
var _default = BrowserOS;
exports["default"] = _default;