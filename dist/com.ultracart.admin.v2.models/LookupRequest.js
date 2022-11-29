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
 * The LookupRequest model module.
 * @module com.ultracart.admin.v2.models/LookupRequest
 * @version 4.0.87-RC
 */
var LookupRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LookupRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/LookupRequest
   */
  function LookupRequest() {
    _classCallCheck(this, LookupRequest);

    LookupRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LookupRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LookupRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/LookupRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/LookupRequest} The populated <code>LookupRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LookupRequest();

        if (data.hasOwnProperty('category')) {
          obj['category'] = _ApiClient["default"].convertToType(data['category'], 'String');
        }

        if (data.hasOwnProperty('matches')) {
          obj['matches'] = _ApiClient["default"].convertToType(data['matches'], 'String');
        }

        if (data.hasOwnProperty('max_hits')) {
          obj['max_hits'] = _ApiClient["default"].convertToType(data['max_hits'], 'Number');
        }

        if (data.hasOwnProperty('storefront_oid')) {
          obj['storefront_oid'] = _ApiClient["default"].convertToType(data['storefront_oid'], 'Number');
        }

        if (data.hasOwnProperty('subcategory')) {
          obj['subcategory'] = _ApiClient["default"].convertToType(data['subcategory'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LookupRequest;
}();
/**
 * @member {String} category
 */


LookupRequest.prototype['category'] = undefined;
/**
 * @member {String} matches
 */

LookupRequest.prototype['matches'] = undefined;
/**
 * @member {Number} max_hits
 */

LookupRequest.prototype['max_hits'] = undefined;
/**
 * @member {Number} storefront_oid
 */

LookupRequest.prototype['storefront_oid'] = undefined;
/**
 * @member {String} subcategory
 */

LookupRequest.prototype['subcategory'] = undefined;
var _default = LookupRequest;
exports["default"] = _default;