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
 * The CityStateZip model module.
 * @module com.ultracart.admin.v2.models/CityStateZip
 * @version 4.0.160
 */
var CityStateZip = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CityStateZip</code>.
   * @alias module:com.ultracart.admin.v2.models/CityStateZip
   */
  function CityStateZip() {
    _classCallCheck(this, CityStateZip);

    CityStateZip.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CityStateZip, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CityStateZip</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CityStateZip} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CityStateZip} The populated <code>CityStateZip</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CityStateZip();

        if (data.hasOwnProperty('city')) {
          obj['city'] = _ApiClient["default"].convertToType(data['city'], 'String');
        }

        if (data.hasOwnProperty('error')) {
          obj['error'] = _ApiClient["default"].convertToType(data['error'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('validZip')) {
          obj['validZip'] = _ApiClient["default"].convertToType(data['validZip'], 'Boolean');
        }

        if (data.hasOwnProperty('zip')) {
          obj['zip'] = _ApiClient["default"].convertToType(data['zip'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CityStateZip;
}();
/**
 * @member {String} city
 */


CityStateZip.prototype['city'] = undefined;
/**
 * @member {String} error
 */

CityStateZip.prototype['error'] = undefined;
/**
 * @member {String} state
 */

CityStateZip.prototype['state'] = undefined;
/**
 * @member {Boolean} validZip
 */

CityStateZip.prototype['validZip'] = undefined;
/**
 * @member {String} zip
 */

CityStateZip.prototype['zip'] = undefined;
var _default = CityStateZip;
exports["default"] = _default;