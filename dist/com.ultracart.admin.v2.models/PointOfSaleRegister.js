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
 * The PointOfSaleRegister model module.
 * @module com.ultracart.admin.v2.models/PointOfSaleRegister
 * @version 4.0.134
 */
var PointOfSaleRegister = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PointOfSaleRegister</code>.
   * @alias module:com.ultracart.admin.v2.models/PointOfSaleRegister
   */
  function PointOfSaleRegister() {
    _classCallCheck(this, PointOfSaleRegister);

    PointOfSaleRegister.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PointOfSaleRegister, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PointOfSaleRegister</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/PointOfSaleRegister} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/PointOfSaleRegister} The populated <code>PointOfSaleRegister</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PointOfSaleRegister();

        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('pos_location_oid')) {
          obj['pos_location_oid'] = _ApiClient["default"].convertToType(data['pos_location_oid'], 'Number');
        }

        if (data.hasOwnProperty('pos_register_oid')) {
          obj['pos_register_oid'] = _ApiClient["default"].convertToType(data['pos_register_oid'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return PointOfSaleRegister;
}();
/**
 * The merchant id that owns this point of sale register.
 * @member {String} merchant_id
 */


PointOfSaleRegister.prototype['merchant_id'] = undefined;
/**
 * Name of the register.
 * @member {String} name
 */

PointOfSaleRegister.prototype['name'] = undefined;
/**
 * Object identifier of the point of sale location where this register is located.
 * @member {Number} pos_location_oid
 */

PointOfSaleRegister.prototype['pos_location_oid'] = undefined;
/**
 * Object identifier of the point of sale register.
 * @member {Number} pos_register_oid
 */

PointOfSaleRegister.prototype['pos_register_oid'] = undefined;
var _default = PointOfSaleRegister;
exports["default"] = _default;