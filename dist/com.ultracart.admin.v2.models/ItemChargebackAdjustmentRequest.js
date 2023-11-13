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
 * The ItemChargebackAdjustmentRequest model module.
 * @module com.ultracart.admin.v2.models/ItemChargebackAdjustmentRequest
 * @version 4.0.187
 */
var ItemChargebackAdjustmentRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemChargebackAdjustmentRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemChargebackAdjustmentRequest
   */
  function ItemChargebackAdjustmentRequest() {
    _classCallCheck(this, ItemChargebackAdjustmentRequest);

    ItemChargebackAdjustmentRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemChargebackAdjustmentRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemChargebackAdjustmentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemChargebackAdjustmentRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemChargebackAdjustmentRequest} The populated <code>ItemChargebackAdjustmentRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemChargebackAdjustmentRequest();

        if (data.hasOwnProperty('chargeback_adjustment_request_oid')) {
          obj['chargeback_adjustment_request_oid'] = _ApiClient["default"].convertToType(data['chargeback_adjustment_request_oid'], 'Number');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('reason_code')) {
          obj['reason_code'] = _ApiClient["default"].convertToType(data['reason_code'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ItemChargebackAdjustmentRequest;
}();
/**
 * Chargeback adjustment request object identifier
 * @member {Number} chargeback_adjustment_request_oid
 */


ItemChargebackAdjustmentRequest.prototype['chargeback_adjustment_request_oid'] = undefined;
/**
 * Description
 * @member {String} description
 */

ItemChargebackAdjustmentRequest.prototype['description'] = undefined;
/**
 * Reason code
 * @member {String} reason_code
 */

ItemChargebackAdjustmentRequest.prototype['reason_code'] = undefined;
var _default = ItemChargebackAdjustmentRequest;
exports["default"] = _default;