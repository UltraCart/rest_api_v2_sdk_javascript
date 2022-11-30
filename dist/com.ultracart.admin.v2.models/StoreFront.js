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
 * The StoreFront model module.
 * @module com.ultracart.admin.v2.models/StoreFront
 * @version 4.0.88-RC
 */
var StoreFront = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StoreFront</code>.
   * @alias module:com.ultracart.admin.v2.models/StoreFront
   */
  function StoreFront() {
    _classCallCheck(this, StoreFront);

    StoreFront.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StoreFront, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>StoreFront</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/StoreFront} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/StoreFront} The populated <code>StoreFront</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StoreFront();

        if (data.hasOwnProperty('host_alias1')) {
          obj['host_alias1'] = _ApiClient["default"].convertToType(data['host_alias1'], 'String');
        }

        if (data.hasOwnProperty('host_alias2')) {
          obj['host_alias2'] = _ApiClient["default"].convertToType(data['host_alias2'], 'String');
        }

        if (data.hasOwnProperty('host_alias3')) {
          obj['host_alias3'] = _ApiClient["default"].convertToType(data['host_alias3'], 'String');
        }

        if (data.hasOwnProperty('host_alias4')) {
          obj['host_alias4'] = _ApiClient["default"].convertToType(data['host_alias4'], 'String');
        }

        if (data.hasOwnProperty('host_alias5')) {
          obj['host_alias5'] = _ApiClient["default"].convertToType(data['host_alias5'], 'String');
        }

        if (data.hasOwnProperty('host_name')) {
          obj['host_name'] = _ApiClient["default"].convertToType(data['host_name'], 'String');
        }

        if (data.hasOwnProperty('locked')) {
          obj['locked'] = _ApiClient["default"].convertToType(data['locked'], 'Boolean');
        }

        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }

        if (data.hasOwnProperty('redirect_aliases')) {
          obj['redirect_aliases'] = _ApiClient["default"].convertToType(data['redirect_aliases'], 'Boolean');
        }

        if (data.hasOwnProperty('storefront_oid')) {
          obj['storefront_oid'] = _ApiClient["default"].convertToType(data['storefront_oid'], 'Number');
        }

        if (data.hasOwnProperty('unlock_password')) {
          obj['unlock_password'] = _ApiClient["default"].convertToType(data['unlock_password'], 'String');
        }
      }

      return obj;
    }
  }]);

  return StoreFront;
}();
/**
 * @member {String} host_alias1
 */


StoreFront.prototype['host_alias1'] = undefined;
/**
 * @member {String} host_alias2
 */

StoreFront.prototype['host_alias2'] = undefined;
/**
 * @member {String} host_alias3
 */

StoreFront.prototype['host_alias3'] = undefined;
/**
 * @member {String} host_alias4
 */

StoreFront.prototype['host_alias4'] = undefined;
/**
 * @member {String} host_alias5
 */

StoreFront.prototype['host_alias5'] = undefined;
/**
 * @member {String} host_name
 */

StoreFront.prototype['host_name'] = undefined;
/**
 * @member {Boolean} locked
 */

StoreFront.prototype['locked'] = undefined;
/**
 * @member {String} merchant_id
 */

StoreFront.prototype['merchant_id'] = undefined;
/**
 * @member {Boolean} redirect_aliases
 */

StoreFront.prototype['redirect_aliases'] = undefined;
/**
 * @member {Number} storefront_oid
 */

StoreFront.prototype['storefront_oid'] = undefined;
/**
 * @member {String} unlock_password
 */

StoreFront.prototype['unlock_password'] = undefined;
var _default = StoreFront;
exports["default"] = _default;