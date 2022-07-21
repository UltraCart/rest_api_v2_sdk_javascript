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
 * The ApplyLibraryItemRequest model module.
 * @module com.ultracart.admin.v2.models/ApplyLibraryItemRequest
 * @version 4.0.37-RC
 */
var ApplyLibraryItemRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ApplyLibraryItemRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/ApplyLibraryItemRequest
   */
  function ApplyLibraryItemRequest() {
    _classCallCheck(this, ApplyLibraryItemRequest);

    ApplyLibraryItemRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ApplyLibraryItemRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ApplyLibraryItemRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/ApplyLibraryItemRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/ApplyLibraryItemRequest} The populated <code>ApplyLibraryItemRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApplyLibraryItemRequest();

        if (data.hasOwnProperty('email_uuid')) {
          obj['email_uuid'] = _ApiClient["default"].convertToType(data['email_uuid'], 'String');
        }

        if (data.hasOwnProperty('library_item_oid')) {
          obj['library_item_oid'] = _ApiClient["default"].convertToType(data['library_item_oid'], 'Number');
        }

        if (data.hasOwnProperty('postcard_uuid')) {
          obj['postcard_uuid'] = _ApiClient["default"].convertToType(data['postcard_uuid'], 'String');
        }

        if (data.hasOwnProperty('storefront_oid')) {
          obj['storefront_oid'] = _ApiClient["default"].convertToType(data['storefront_oid'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ApplyLibraryItemRequest;
}();
/**
 * Normal emails are applied to an existing email object, so when requesting a library item to be applied to an email, supply the email uuid.  This is only for normal emails.  Transactional emails do not have a uuid.
 * @member {String} email_uuid
 */


ApplyLibraryItemRequest.prototype['email_uuid'] = undefined;
/**
 * Library item oid that you wish to apply to the given StoreFront
 * @member {Number} library_item_oid
 */

ApplyLibraryItemRequest.prototype['library_item_oid'] = undefined;
/**
 * The postcard uuid you wish to apply to a given StoreFront.
 * @member {String} postcard_uuid
 */

ApplyLibraryItemRequest.prototype['postcard_uuid'] = undefined;
/**
 * StoreFront oid where content originates necessary for tracking down relative assets
 * @member {Number} storefront_oid
 */

ApplyLibraryItemRequest.prototype['storefront_oid'] = undefined;
var _default = ApplyLibraryItemRequest;
exports["default"] = _default;