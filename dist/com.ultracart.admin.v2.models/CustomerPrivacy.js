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
 * The CustomerPrivacy model module.
 * @module com.ultracart.admin.v2.models/CustomerPrivacy
 * @version 4.0.53-RC
 */
var CustomerPrivacy = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomerPrivacy</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerPrivacy
   */
  function CustomerPrivacy() {
    _classCallCheck(this, CustomerPrivacy);

    CustomerPrivacy.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CustomerPrivacy, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CustomerPrivacy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerPrivacy} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerPrivacy} The populated <code>CustomerPrivacy</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomerPrivacy();

        if (data.hasOwnProperty('last_update_dts')) {
          obj['last_update_dts'] = _ApiClient["default"].convertToType(data['last_update_dts'], 'String');
        }

        if (data.hasOwnProperty('marketing')) {
          obj['marketing'] = _ApiClient["default"].convertToType(data['marketing'], 'Boolean');
        }

        if (data.hasOwnProperty('preference')) {
          obj['preference'] = _ApiClient["default"].convertToType(data['preference'], 'Boolean');
        }

        if (data.hasOwnProperty('statistics')) {
          obj['statistics'] = _ApiClient["default"].convertToType(data['statistics'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return CustomerPrivacy;
}();
/**
 * Last update date
 * @member {String} last_update_dts
 */


CustomerPrivacy.prototype['last_update_dts'] = undefined;
/**
 * The customer has opted in to marketing
 * @member {Boolean} marketing
 */

CustomerPrivacy.prototype['marketing'] = undefined;
/**
 * The customer has opted in to preference tracking
 * @member {Boolean} preference
 */

CustomerPrivacy.prototype['preference'] = undefined;
/**
 * The customer has opted in to statistics collection
 * @member {Boolean} statistics
 */

CustomerPrivacy.prototype['statistics'] = undefined;
var _default = CustomerPrivacy;
exports["default"] = _default;