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
 * The PricingTierNotification model module.
 * @module com.ultracart.admin.v2.models/PricingTierNotification
 * @version 4.0.183
 */
var PricingTierNotification = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PricingTierNotification</code>.
   * @alias module:com.ultracart.admin.v2.models/PricingTierNotification
   */
  function PricingTierNotification() {
    _classCallCheck(this, PricingTierNotification);

    PricingTierNotification.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PricingTierNotification, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PricingTierNotification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/PricingTierNotification} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/PricingTierNotification} The populated <code>PricingTierNotification</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PricingTierNotification();

        if (data.hasOwnProperty('format')) {
          obj['format'] = _ApiClient["default"].convertToType(data['format'], 'String');
        }

        if (data.hasOwnProperty('subject')) {
          obj['subject'] = _ApiClient["default"].convertToType(data['subject'], 'String');
        }

        if (data.hasOwnProperty('text')) {
          obj['text'] = _ApiClient["default"].convertToType(data['text'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PricingTierNotification;
}();
/**
 * Notification format
 * @member {String} format
 */


PricingTierNotification.prototype['format'] = undefined;
/**
 * Notification subject
 * @member {String} subject
 */

PricingTierNotification.prototype['subject'] = undefined;
/**
 * Notification text
 * @member {String} text
 */

PricingTierNotification.prototype['text'] = undefined;
var _default = PricingTierNotification;
exports["default"] = _default;