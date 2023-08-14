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
 * The CustomerAttachment model module.
 * @module com.ultracart.admin.v2.models/CustomerAttachment
 * @version 4.0.169
 */
var CustomerAttachment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomerAttachment</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerAttachment
   */
  function CustomerAttachment() {
    _classCallCheck(this, CustomerAttachment);

    CustomerAttachment.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CustomerAttachment, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CustomerAttachment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerAttachment} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerAttachment} The populated <code>CustomerAttachment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomerAttachment();

        if (data.hasOwnProperty('customer_profile_attachment_oid')) {
          obj['customer_profile_attachment_oid'] = _ApiClient["default"].convertToType(data['customer_profile_attachment_oid'], 'Number');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('file_name')) {
          obj['file_name'] = _ApiClient["default"].convertToType(data['file_name'], 'String');
        }

        if (data.hasOwnProperty('mime_type')) {
          obj['mime_type'] = _ApiClient["default"].convertToType(data['mime_type'], 'String');
        }

        if (data.hasOwnProperty('upload_dts')) {
          obj['upload_dts'] = _ApiClient["default"].convertToType(data['upload_dts'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CustomerAttachment;
}();
/**
 * Attachment identifier
 * @member {Number} customer_profile_attachment_oid
 */


CustomerAttachment.prototype['customer_profile_attachment_oid'] = undefined;
/**
 * Description
 * @member {String} description
 */

CustomerAttachment.prototype['description'] = undefined;
/**
 * File name
 * @member {String} file_name
 */

CustomerAttachment.prototype['file_name'] = undefined;
/**
 * Mime typoe
 * @member {String} mime_type
 */

CustomerAttachment.prototype['mime_type'] = undefined;
/**
 * Upload date/time
 * @member {String} upload_dts
 */

CustomerAttachment.prototype['upload_dts'] = undefined;
var _default = CustomerAttachment;
exports["default"] = _default;