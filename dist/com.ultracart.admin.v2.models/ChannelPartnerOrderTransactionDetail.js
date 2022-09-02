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
 * The ChannelPartnerOrderTransactionDetail model module.
 * @module com.ultracart.admin.v2.models/ChannelPartnerOrderTransactionDetail
 * @version 4.0.59-RC
 */
var ChannelPartnerOrderTransactionDetail = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ChannelPartnerOrderTransactionDetail</code>.
   * @alias module:com.ultracart.admin.v2.models/ChannelPartnerOrderTransactionDetail
   */
  function ChannelPartnerOrderTransactionDetail() {
    _classCallCheck(this, ChannelPartnerOrderTransactionDetail);

    ChannelPartnerOrderTransactionDetail.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ChannelPartnerOrderTransactionDetail, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ChannelPartnerOrderTransactionDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ChannelPartnerOrderTransactionDetail} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ChannelPartnerOrderTransactionDetail} The populated <code>ChannelPartnerOrderTransactionDetail</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ChannelPartnerOrderTransactionDetail();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ChannelPartnerOrderTransactionDetail;
}();
/**
 * The name of the item option.
 * @member {String} name
 */


ChannelPartnerOrderTransactionDetail.prototype['name'] = undefined;
/**
 * The value of the item option.
 * @member {String} value
 */

ChannelPartnerOrderTransactionDetail.prototype['value'] = undefined;
var _default = ChannelPartnerOrderTransactionDetail;
exports["default"] = _default;