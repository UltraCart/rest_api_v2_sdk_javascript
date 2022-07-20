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
 * The OrderFraudScore model module.
 * @module com.ultracart.admin.v2.models/OrderFraudScore
 * @version 4.0.36-RC
 */
var OrderFraudScore = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderFraudScore</code>.
   * @alias module:com.ultracart.admin.v2.models/OrderFraudScore
   */
  function OrderFraudScore() {
    _classCallCheck(this, OrderFraudScore);

    OrderFraudScore.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OrderFraudScore, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OrderFraudScore</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/OrderFraudScore} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/OrderFraudScore} The populated <code>OrderFraudScore</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderFraudScore();

        if (data.hasOwnProperty('anonymous_proxy')) {
          obj['anonymous_proxy'] = _ApiClient["default"].convertToType(data['anonymous_proxy'], 'Boolean');
        }

        if (data.hasOwnProperty('bin_match')) {
          obj['bin_match'] = _ApiClient["default"].convertToType(data['bin_match'], 'String');
        }

        if (data.hasOwnProperty('carder_email')) {
          obj['carder_email'] = _ApiClient["default"].convertToType(data['carder_email'], 'Boolean');
        }

        if (data.hasOwnProperty('country_code')) {
          obj['country_code'] = _ApiClient["default"].convertToType(data['country_code'], 'String');
        }

        if (data.hasOwnProperty('country_match')) {
          obj['country_match'] = _ApiClient["default"].convertToType(data['country_match'], 'Boolean');
        }

        if (data.hasOwnProperty('customer_phone_in_billing_location')) {
          obj['customer_phone_in_billing_location'] = _ApiClient["default"].convertToType(data['customer_phone_in_billing_location'], 'String');
        }

        if (data.hasOwnProperty('distance_km')) {
          obj['distance_km'] = _ApiClient["default"].convertToType(data['distance_km'], 'Number');
        }

        if (data.hasOwnProperty('free_email')) {
          obj['free_email'] = _ApiClient["default"].convertToType(data['free_email'], 'Boolean');
        }

        if (data.hasOwnProperty('high_risk_country')) {
          obj['high_risk_country'] = _ApiClient["default"].convertToType(data['high_risk_country'], 'Boolean');
        }

        if (data.hasOwnProperty('ip_city')) {
          obj['ip_city'] = _ApiClient["default"].convertToType(data['ip_city'], 'String');
        }

        if (data.hasOwnProperty('ip_isp')) {
          obj['ip_isp'] = _ApiClient["default"].convertToType(data['ip_isp'], 'String');
        }

        if (data.hasOwnProperty('ip_latitude')) {
          obj['ip_latitude'] = _ApiClient["default"].convertToType(data['ip_latitude'], 'String');
        }

        if (data.hasOwnProperty('ip_longitude')) {
          obj['ip_longitude'] = _ApiClient["default"].convertToType(data['ip_longitude'], 'String');
        }

        if (data.hasOwnProperty('ip_org')) {
          obj['ip_org'] = _ApiClient["default"].convertToType(data['ip_org'], 'String');
        }

        if (data.hasOwnProperty('ip_region')) {
          obj['ip_region'] = _ApiClient["default"].convertToType(data['ip_region'], 'String');
        }

        if (data.hasOwnProperty('proxy_score')) {
          obj['proxy_score'] = _ApiClient["default"].convertToType(data['proxy_score'], 'Number');
        }

        if (data.hasOwnProperty('score')) {
          obj['score'] = _ApiClient["default"].convertToType(data['score'], 'Number');
        }

        if (data.hasOwnProperty('ship_forwarder')) {
          obj['ship_forwarder'] = _ApiClient["default"].convertToType(data['ship_forwarder'], 'Boolean');
        }

        if (data.hasOwnProperty('spam_score')) {
          obj['spam_score'] = _ApiClient["default"].convertToType(data['spam_score'], 'Number');
        }

        if (data.hasOwnProperty('transparent_proxy')) {
          obj['transparent_proxy'] = _ApiClient["default"].convertToType(data['transparent_proxy'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return OrderFraudScore;
}();
/**
 * True if the IP address is a known anonymous proxy server
 * @member {Boolean} anonymous_proxy
 */


OrderFraudScore.prototype['anonymous_proxy'] = undefined;
/**
 * Whether the BIN (first six digits) matched the country
 * @member {module:com.ultracart.admin.v2.models/OrderFraudScore.BinMatchEnum} bin_match
 */

OrderFraudScore.prototype['bin_match'] = undefined;
/**
 * True if the email address belongs to a known credit card fraudster
 * @member {Boolean} carder_email
 */

OrderFraudScore.prototype['carder_email'] = undefined;
/**
 * Country code
 * @member {String} country_code
 */

OrderFraudScore.prototype['country_code'] = undefined;
/**
 * Country code matches BIN country
 * @member {Boolean} country_match
 */

OrderFraudScore.prototype['country_match'] = undefined;
/**
 * Whether the customer's phone number is located in the area of the billing address
 * @member {String} customer_phone_in_billing_location
 */

OrderFraudScore.prototype['customer_phone_in_billing_location'] = undefined;
/**
 * Distance in kilometers between the IP address and the BIN
 * @member {Number} distance_km
 */

OrderFraudScore.prototype['distance_km'] = undefined;
/**
 * True if the email address is for a free service like gmail.com
 * @member {Boolean} free_email
 */

OrderFraudScore.prototype['free_email'] = undefined;
/**
 * True if the customer is in a high risk country known for internet fraud
 * @member {Boolean} high_risk_country
 */

OrderFraudScore.prototype['high_risk_country'] = undefined;
/**
 * City associated with the IP address
 * @member {String} ip_city
 */

OrderFraudScore.prototype['ip_city'] = undefined;
/**
 * ISP that owns the IP address
 * @member {String} ip_isp
 */

OrderFraudScore.prototype['ip_isp'] = undefined;
/**
 * Approximate latitude associated with the IP address
 * @member {String} ip_latitude
 */

OrderFraudScore.prototype['ip_latitude'] = undefined;
/**
 * Approximate longitude associated with the IP address
 * @member {String} ip_longitude
 */

OrderFraudScore.prototype['ip_longitude'] = undefined;
/**
 * Organization that owns the IP address
 * @member {String} ip_org
 */

OrderFraudScore.prototype['ip_org'] = undefined;
/**
 * State/region associated with the IP address
 * @member {String} ip_region
 */

OrderFraudScore.prototype['ip_region'] = undefined;
/**
 * Likelihood of the IP address being a proxy server
 * @member {Number} proxy_score
 */

OrderFraudScore.prototype['proxy_score'] = undefined;
/**
 * Overall score.  This is the score that is compared to see if the order is rejected or held for review by the fraud filter rules.
 * @member {Number} score
 */

OrderFraudScore.prototype['score'] = undefined;
/**
 * True if the address is a known ship forwarding company
 * @member {Boolean} ship_forwarder
 */

OrderFraudScore.prototype['ship_forwarder'] = undefined;
/**
 * Likelihood of the email address being associated with a spammer
 * @member {Number} spam_score
 */

OrderFraudScore.prototype['spam_score'] = undefined;
/**
 * True if the IP address that placed the order is a transparent proxy server
 * @member {Boolean} transparent_proxy
 */

OrderFraudScore.prototype['transparent_proxy'] = undefined;
/**
 * Allowed values for the <code>bin_match</code> property.
 * @enum {String}
 * @readonly
 */

OrderFraudScore['BinMatchEnum'] = {
  /**
   * value: "NA"
   * @const
   */
  "NA": "NA",

  /**
   * value: "No"
   * @const
   */
  "No": "No",

  /**
   * value: "NotFound"
   * @const
   */
  "NotFound": "NotFound",

  /**
   * value: "Yes"
   * @const
   */
  "Yes": "Yes"
};
var _default = OrderFraudScore;
exports["default"] = _default;