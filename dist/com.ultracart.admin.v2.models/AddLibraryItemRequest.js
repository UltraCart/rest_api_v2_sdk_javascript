"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LibraryItemAttribute = _interopRequireDefault(require("./LibraryItemAttribute"));

var _LibraryItemScreenshot = _interopRequireDefault(require("./LibraryItemScreenshot"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The AddLibraryItemRequest model module.
 * @module com.ultracart.admin.v2.models/AddLibraryItemRequest
 * @version 4.0.6-RC
 */
var AddLibraryItemRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddLibraryItemRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/AddLibraryItemRequest
   */
  function AddLibraryItemRequest() {
    _classCallCheck(this, AddLibraryItemRequest);

    AddLibraryItemRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AddLibraryItemRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AddLibraryItemRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/AddLibraryItemRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/AddLibraryItemRequest} The populated <code>AddLibraryItemRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddLibraryItemRequest();

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], [_LibraryItemAttribute["default"]]);
        }

        if (data.hasOwnProperty('cjson')) {
          obj['cjson'] = _ApiClient["default"].convertToType(data['cjson'], 'String');
        }

        if (data.hasOwnProperty('content_type')) {
          obj['content_type'] = _ApiClient["default"].convertToType(data['content_type'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('email_name')) {
          obj['email_name'] = _ApiClient["default"].convertToType(data['email_name'], 'String');
        }

        if (data.hasOwnProperty('email_path')) {
          obj['email_path'] = _ApiClient["default"].convertToType(data['email_path'], 'String');
        }

        if (data.hasOwnProperty('screenshots')) {
          obj['screenshots'] = _ApiClient["default"].convertToType(data['screenshots'], [_LibraryItemScreenshot["default"]]);
        }

        if (data.hasOwnProperty('storefront_oid')) {
          obj['storefront_oid'] = _ApiClient["default"].convertToType(data['storefront_oid'], 'Number');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('upsell_offer_oid')) {
          obj['upsell_offer_oid'] = _ApiClient["default"].convertToType(data['upsell_offer_oid'], 'Number');
        }

        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AddLibraryItemRequest;
}();
/**
 * Attributes associated with the library item to contain additional configuration.
 * @member {Array.<module:com.ultracart.admin.v2.models/LibraryItemAttribute>} attributes
 */


AddLibraryItemRequest.prototype['attributes'] = undefined;
/**
 * Cjson to be added to library
 * @member {String} cjson
 */

AddLibraryItemRequest.prototype['cjson'] = undefined;
/**
 * flow, campaign, cjson, email, transactional_email, postcard or upsell
 * @member {String} content_type
 */

AddLibraryItemRequest.prototype['content_type'] = undefined;
/**
 * description of library item
 * @member {String} description
 */

AddLibraryItemRequest.prototype['description'] = undefined;
/**
 * Required if content_type is transactional_email. This is the name of the email template (html, not text).  This name should have a .vm file extension.  An example is auto_order_cancel_html.vm
 * @member {String} email_name
 */

AddLibraryItemRequest.prototype['email_name'] = undefined;
/**
 * Required if content_type is transactional_email. This is the full path to the email template stored in the file system.  This defines which StoreFront contains the desired email template.  An example is /themes/Elements/core/emails/auto_order_cancel_html.vm
 * @member {String} email_path
 */

AddLibraryItemRequest.prototype['email_path'] = undefined;
/**
 * Screenshot urls for display
 * @member {Array.<module:com.ultracart.admin.v2.models/LibraryItemScreenshot>} screenshots
 */

AddLibraryItemRequest.prototype['screenshots'] = undefined;
/**
 * StoreFront oid where content originates necessary for tracking down relative assets
 * @member {Number} storefront_oid
 */

AddLibraryItemRequest.prototype['storefront_oid'] = undefined;
/**
 * title of library item, usually the name of the flow or campaign, or description of cjson
 * @member {String} title
 */

AddLibraryItemRequest.prototype['title'] = undefined;
/**
 * Required if content_type is upsell. This is object identifier of a StoreFront Upsell Offer.
 * @member {Number} upsell_offer_oid
 */

AddLibraryItemRequest.prototype['upsell_offer_oid'] = undefined;
/**
 * UUID of communication flow, campaign, email, postcard, or null if this item is something else. transactional_email do not have a uuid because they are singleton objects within a storefront and easily identifiable by name
 * @member {String} uuid
 */

AddLibraryItemRequest.prototype['uuid'] = undefined;
var _default = AddLibraryItemRequest;
exports["default"] = _default;