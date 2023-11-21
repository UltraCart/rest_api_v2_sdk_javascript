"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CustomerWishListItem = _interopRequireDefault(require("./CustomerWishListItem"));

var _Error = _interopRequireDefault(require("./Error"));

var _ResponseMetadata = _interopRequireDefault(require("./ResponseMetadata"));

var _Warning = _interopRequireDefault(require("./Warning"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CustomerWishListItemResponse model module.
 * @module com.ultracart.admin.v2.models/CustomerWishListItemResponse
 * @version 4.0.191
 */
var CustomerWishListItemResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomerWishListItemResponse</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerWishListItemResponse
   */
  function CustomerWishListItemResponse() {
    _classCallCheck(this, CustomerWishListItemResponse);

    CustomerWishListItemResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CustomerWishListItemResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CustomerWishListItemResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerWishListItemResponse} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerWishListItemResponse} The populated <code>CustomerWishListItemResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomerWishListItemResponse();

        if (data.hasOwnProperty('error')) {
          obj['error'] = _Error["default"].constructFromObject(data['error']);
        }

        if (data.hasOwnProperty('metadata')) {
          obj['metadata'] = _ResponseMetadata["default"].constructFromObject(data['metadata']);
        }

        if (data.hasOwnProperty('success')) {
          obj['success'] = _ApiClient["default"].convertToType(data['success'], 'Boolean');
        }

        if (data.hasOwnProperty('warning')) {
          obj['warning'] = _Warning["default"].constructFromObject(data['warning']);
        }

        if (data.hasOwnProperty('wishlist_item')) {
          obj['wishlist_item'] = _CustomerWishListItem["default"].constructFromObject(data['wishlist_item']);
        }
      }

      return obj;
    }
  }]);

  return CustomerWishListItemResponse;
}();
/**
 * @member {module:com.ultracart.admin.v2.models/Error} error
 */


CustomerWishListItemResponse.prototype['error'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/ResponseMetadata} metadata
 */

CustomerWishListItemResponse.prototype['metadata'] = undefined;
/**
 * Indicates if API call was successful
 * @member {Boolean} success
 */

CustomerWishListItemResponse.prototype['success'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/Warning} warning
 */

CustomerWishListItemResponse.prototype['warning'] = undefined;
/**
 * @member {module:com.ultracart.admin.v2.models/CustomerWishListItem} wishlist_item
 */

CustomerWishListItemResponse.prototype['wishlist_item'] = undefined;
var _default = CustomerWishListItemResponse;
exports["default"] = _default;