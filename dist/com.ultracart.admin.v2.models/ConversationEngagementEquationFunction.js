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
 * The ConversationEngagementEquationFunction model module.
 * @module com.ultracart.admin.v2.models/ConversationEngagementEquationFunction
 * @version 4.0.107-RC
 */
var ConversationEngagementEquationFunction = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversationEngagementEquationFunction</code>.
   * @alias module:com.ultracart.admin.v2.models/ConversationEngagementEquationFunction
   */
  function ConversationEngagementEquationFunction() {
    _classCallCheck(this, ConversationEngagementEquationFunction);

    ConversationEngagementEquationFunction.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConversationEngagementEquationFunction, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConversationEngagementEquationFunction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ConversationEngagementEquationFunction} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ConversationEngagementEquationFunction} The populated <code>ConversationEngagementEquationFunction</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversationEngagementEquationFunction();

        if (data.hasOwnProperty('any_page_url_logic')) {
          obj['any_page_url_logic'] = _ApiClient["default"].convertToType(data['any_page_url_logic'], 'String');
        }

        if (data.hasOwnProperty('any_page_url_value')) {
          obj['any_page_url_value'] = _ApiClient["default"].convertToType(data['any_page_url_value'], 'String');
        }

        if (data.hasOwnProperty('current_page_url_logic')) {
          obj['current_page_url_logic'] = _ApiClient["default"].convertToType(data['current_page_url_logic'], 'String');
        }

        if (data.hasOwnProperty('current_page_url_value')) {
          obj['current_page_url_value'] = _ApiClient["default"].convertToType(data['current_page_url_value'], 'String');
        }

        if (data.hasOwnProperty('customers_browsing_time_logic')) {
          obj['customers_browsing_time_logic'] = _ApiClient["default"].convertToType(data['customers_browsing_time_logic'], 'String');
        }

        if (data.hasOwnProperty('customers_browsing_time_seconds')) {
          obj['customers_browsing_time_seconds'] = _ApiClient["default"].convertToType(data['customers_browsing_time_seconds'], 'Number');
        }

        if (data.hasOwnProperty('customers_location_country')) {
          obj['customers_location_country'] = _ApiClient["default"].convertToType(data['customers_location_country'], 'String');
        }

        if (data.hasOwnProperty('customers_location_logic')) {
          obj['customers_location_logic'] = _ApiClient["default"].convertToType(data['customers_location_logic'], 'String');
        }

        if (data.hasOwnProperty('customers_location_state')) {
          obj['customers_location_state'] = _ApiClient["default"].convertToType(data['customers_location_state'], 'String');
        }

        if (data.hasOwnProperty('number_of_viewed_pages_logic')) {
          obj['number_of_viewed_pages_logic'] = _ApiClient["default"].convertToType(data['number_of_viewed_pages_logic'], 'String');
        }

        if (data.hasOwnProperty('number_of_viewed_pages_value')) {
          obj['number_of_viewed_pages_value'] = _ApiClient["default"].convertToType(data['number_of_viewed_pages_value'], 'Number');
        }

        if (data.hasOwnProperty('referring_website_logic')) {
          obj['referring_website_logic'] = _ApiClient["default"].convertToType(data['referring_website_logic'], 'String');
        }

        if (data.hasOwnProperty('referring_website_value')) {
          obj['referring_website_value'] = _ApiClient["default"].convertToType(data['referring_website_value'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ConversationEngagementEquationFunction;
}();
/**
 * Logic operation to perform on an any page url function type
 * @member {module:com.ultracart.admin.v2.models/ConversationEngagementEquationFunction.AnyPageUrlLogicEnum} any_page_url_logic
 */


ConversationEngagementEquationFunction.prototype['any_page_url_logic'] = undefined;
/**
 * @member {String} any_page_url_value
 */

ConversationEngagementEquationFunction.prototype['any_page_url_value'] = undefined;
/**
 * Logic operation to perform on a current page url function type
 * @member {module:com.ultracart.admin.v2.models/ConversationEngagementEquationFunction.CurrentPageUrlLogicEnum} current_page_url_logic
 */

ConversationEngagementEquationFunction.prototype['current_page_url_logic'] = undefined;
/**
 * @member {String} current_page_url_value
 */

ConversationEngagementEquationFunction.prototype['current_page_url_value'] = undefined;
/**
 * Logic operation to perform on a customer's browsing time function type
 * @member {module:com.ultracart.admin.v2.models/ConversationEngagementEquationFunction.CustomersBrowsingTimeLogicEnum} customers_browsing_time_logic
 */

ConversationEngagementEquationFunction.prototype['customers_browsing_time_logic'] = undefined;
/**
 * @member {Number} customers_browsing_time_seconds
 */

ConversationEngagementEquationFunction.prototype['customers_browsing_time_seconds'] = undefined;
/**
 * @member {String} customers_location_country
 */

ConversationEngagementEquationFunction.prototype['customers_location_country'] = undefined;
/**
 * Logic operation to perform on a customer's location function type
 * @member {module:com.ultracart.admin.v2.models/ConversationEngagementEquationFunction.CustomersLocationLogicEnum} customers_location_logic
 */

ConversationEngagementEquationFunction.prototype['customers_location_logic'] = undefined;
/**
 * @member {String} customers_location_state
 */

ConversationEngagementEquationFunction.prototype['customers_location_state'] = undefined;
/**
 * Logic operation to perform on a customer's browsing time function type
 * @member {module:com.ultracart.admin.v2.models/ConversationEngagementEquationFunction.NumberOfViewedPagesLogicEnum} number_of_viewed_pages_logic
 */

ConversationEngagementEquationFunction.prototype['number_of_viewed_pages_logic'] = undefined;
/**
 * @member {Number} number_of_viewed_pages_value
 */

ConversationEngagementEquationFunction.prototype['number_of_viewed_pages_value'] = undefined;
/**
 * Logic operation to perform on a referring website function type
 * @member {module:com.ultracart.admin.v2.models/ConversationEngagementEquationFunction.ReferringWebsiteLogicEnum} referring_website_logic
 */

ConversationEngagementEquationFunction.prototype['referring_website_logic'] = undefined;
/**
 * @member {String} referring_website_value
 */

ConversationEngagementEquationFunction.prototype['referring_website_value'] = undefined;
/**
 * Type of function
 * @member {module:com.ultracart.admin.v2.models/ConversationEngagementEquationFunction.TypeEnum} type
 */

ConversationEngagementEquationFunction.prototype['type'] = undefined;
/**
 * Allowed values for the <code>any_page_url_logic</code> property.
 * @enum {String}
 * @readonly
 */

ConversationEngagementEquationFunction['AnyPageUrlLogicEnum'] = {
  /**
   * value: "contains"
   * @const
   */
  "contains": "contains",

  /**
   * value: "does not contain"
   * @const
   */
  "does not contain": "does not contain",

  /**
   * value: "is exactly"
   * @const
   */
  "is exactly": "is exactly",

  /**
   * value: "is not"
   * @const
   */
  "is not": "is not"
};
/**
 * Allowed values for the <code>current_page_url_logic</code> property.
 * @enum {String}
 * @readonly
 */

ConversationEngagementEquationFunction['CurrentPageUrlLogicEnum'] = {
  /**
   * value: "contains"
   * @const
   */
  "contains": "contains",

  /**
   * value: "does not contain"
   * @const
   */
  "does not contain": "does not contain",

  /**
   * value: "is exactly"
   * @const
   */
  "is exactly": "is exactly",

  /**
   * value: "is not"
   * @const
   */
  "is not": "is not"
};
/**
 * Allowed values for the <code>customers_browsing_time_logic</code> property.
 * @enum {String}
 * @readonly
 */

ConversationEngagementEquationFunction['CustomersBrowsingTimeLogicEnum'] = {
  /**
   * value: "is at least"
   * @const
   */
  "at least": "is at least",

  /**
   * value: "is more than"
   * @const
   */
  "more than": "is more than",

  /**
   * value: "is less than"
   * @const
   */
  "less than": "is less than",

  /**
   * value: "is at most"
   * @const
   */
  "at most": "is at most"
};
/**
 * Allowed values for the <code>customers_location_logic</code> property.
 * @enum {String}
 * @readonly
 */

ConversationEngagementEquationFunction['CustomersLocationLogicEnum'] = {
  /**
   * value: "is"
   * @const
   */
  "is": "is",

  /**
   * value: "is not"
   * @const
   */
  "is not": "is not"
};
/**
 * Allowed values for the <code>number_of_viewed_pages_logic</code> property.
 * @enum {String}
 * @readonly
 */

ConversationEngagementEquationFunction['NumberOfViewedPagesLogicEnum'] = {
  /**
   * value: "is at least"
   * @const
   */
  "at least": "is at least",

  /**
   * value: "is more than"
   * @const
   */
  "more than": "is more than",

  /**
   * value: "is less than"
   * @const
   */
  "less than": "is less than",

  /**
   * value: "is at most"
   * @const
   */
  "at most": "is at most"
};
/**
 * Allowed values for the <code>referring_website_logic</code> property.
 * @enum {String}
 * @readonly
 */

ConversationEngagementEquationFunction['ReferringWebsiteLogicEnum'] = {
  /**
   * value: "contains"
   * @const
   */
  "contains": "contains",

  /**
   * value: "does not contain"
   * @const
   */
  "does not contain": "does not contain",

  /**
   * value: "is exactly"
   * @const
   */
  "is exactly": "is exactly",

  /**
   * value: "is not"
   * @const
   */
  "is not": "is not"
};
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

ConversationEngagementEquationFunction['TypeEnum'] = {
  /**
   * value: "current page url"
   * @const
   */
  "current page url": "current page url",

  /**
   * value: "customer's location"
   * @const
   */
  "customer&#39;s location": "customer's location",

  /**
   * value: "customer's browsing time"
   * @const
   */
  "customer&#39;s browsing time": "customer's browsing time",

  /**
   * value: "number of viewed pages"
   * @const
   */
  "number of viewed pages": "number of viewed pages",

  /**
   * value: "referring website address"
   * @const
   */
  "referring website address": "referring website address",

  /**
   * value: "any page from session"
   * @const
   */
  "any page from session": "any page from session"
};
var _default = ConversationEngagementEquationFunction;
exports["default"] = _default;