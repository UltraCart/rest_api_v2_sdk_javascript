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
 * The PointOfSaleLocation model module.
 * @module com.ultracart.admin.v2.models/PointOfSaleLocation
 * @version 4.0.164
 */
var PointOfSaleLocation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PointOfSaleLocation</code>.
   * @alias module:com.ultracart.admin.v2.models/PointOfSaleLocation
   */
  function PointOfSaleLocation() {
    _classCallCheck(this, PointOfSaleLocation);

    PointOfSaleLocation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PointOfSaleLocation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PointOfSaleLocation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/PointOfSaleLocation} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/PointOfSaleLocation} The populated <code>PointOfSaleLocation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PointOfSaleLocation();

        if (data.hasOwnProperty('adddress2')) {
          obj['adddress2'] = _ApiClient["default"].convertToType(data['adddress2'], 'String');
        }

        if (data.hasOwnProperty('address1')) {
          obj['address1'] = _ApiClient["default"].convertToType(data['address1'], 'String');
        }

        if (data.hasOwnProperty('city')) {
          obj['city'] = _ApiClient["default"].convertToType(data['city'], 'String');
        }

        if (data.hasOwnProperty('country')) {
          obj['country'] = _ApiClient["default"].convertToType(data['country'], 'String');
        }

        if (data.hasOwnProperty('distribution_center_code')) {
          obj['distribution_center_code'] = _ApiClient["default"].convertToType(data['distribution_center_code'], 'String');
        }

        if (data.hasOwnProperty('external_id')) {
          obj['external_id'] = _ApiClient["default"].convertToType(data['external_id'], 'String');
        }

        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }

        if (data.hasOwnProperty('pos_location_oid')) {
          obj['pos_location_oid'] = _ApiClient["default"].convertToType(data['pos_location_oid'], 'Number');
        }

        if (data.hasOwnProperty('postal_code')) {
          obj['postal_code'] = _ApiClient["default"].convertToType(data['postal_code'], 'String');
        }

        if (data.hasOwnProperty('state_province')) {
          obj['state_province'] = _ApiClient["default"].convertToType(data['state_province'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PointOfSaleLocation;
}();
/**
 * Address line 2
 * @member {String} adddress2
 */


PointOfSaleLocation.prototype['adddress2'] = undefined;
/**
 * Address line 1
 * @member {String} address1
 */

PointOfSaleLocation.prototype['address1'] = undefined;
/**
 * City
 * @member {String} city
 */

PointOfSaleLocation.prototype['city'] = undefined;
/**
 * Country
 * @member {String} country
 */

PointOfSaleLocation.prototype['country'] = undefined;
/**
 * The distribution center code where inventory is reduced from for this sale.
 * @member {String} distribution_center_code
 */

PointOfSaleLocation.prototype['distribution_center_code'] = undefined;
/**
 * External Id useful for syncing with a remote filesystem, this may be an MD5 hash or whatever suits your needs.
 * @member {String} external_id
 */

PointOfSaleLocation.prototype['external_id'] = undefined;
/**
 * Merchant ID that owns this location
 * @member {String} merchant_id
 */

PointOfSaleLocation.prototype['merchant_id'] = undefined;
/**
 * Object identifier of the point of sale location.
 * @member {Number} pos_location_oid
 */

PointOfSaleLocation.prototype['pos_location_oid'] = undefined;
/**
 * Postal code
 * @member {String} postal_code
 */

PointOfSaleLocation.prototype['postal_code'] = undefined;
/**
 * State/province
 * @member {String} state_province
 */

PointOfSaleLocation.prototype['state_province'] = undefined;
var _default = PointOfSaleLocation;
exports["default"] = _default;