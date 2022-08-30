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
 * The ItemEmailNotifications model module.
 * @module com.ultracart.admin.v2.models/ItemEmailNotifications
 * @version 4.0.58-RC
 */
var ItemEmailNotifications = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemEmailNotifications</code>.
   * @alias module:com.ultracart.admin.v2.models/ItemEmailNotifications
   */
  function ItemEmailNotifications() {
    _classCallCheck(this, ItemEmailNotifications);

    ItemEmailNotifications.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ItemEmailNotifications, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ItemEmailNotifications</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ItemEmailNotifications} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ItemEmailNotifications} The populated <code>ItemEmailNotifications</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemEmailNotifications();

        if (data.hasOwnProperty('skip_receipt')) {
          obj['skip_receipt'] = _ApiClient["default"].convertToType(data['skip_receipt'], 'Boolean');
        }

        if (data.hasOwnProperty('skip_shipment_notification')) {
          obj['skip_shipment_notification'] = _ApiClient["default"].convertToType(data['skip_shipment_notification'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return ItemEmailNotifications;
}();
/**
 * Skip receipt email to customer
 * @member {Boolean} skip_receipt
 */


ItemEmailNotifications.prototype['skip_receipt'] = undefined;
/**
 * Skip shipment notification to customer
 * @member {Boolean} skip_shipment_notification
 */

ItemEmailNotifications.prototype['skip_shipment_notification'] = undefined;
var _default = ItemEmailNotifications;
exports["default"] = _default;