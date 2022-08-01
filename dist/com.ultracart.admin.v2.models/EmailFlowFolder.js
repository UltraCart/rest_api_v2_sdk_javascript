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
 * The EmailFlowFolder model module.
 * @module com.ultracart.admin.v2.models/EmailFlowFolder
 * @version 4.0.46-RC
 */
var EmailFlowFolder = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailFlowFolder</code>.
   * @alias module:com.ultracart.admin.v2.models/EmailFlowFolder
   */
  function EmailFlowFolder() {
    _classCallCheck(this, EmailFlowFolder);

    EmailFlowFolder.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailFlowFolder, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EmailFlowFolder</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/EmailFlowFolder} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/EmailFlowFolder} The populated <code>EmailFlowFolder</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailFlowFolder();

        if (data.hasOwnProperty('esp_flow_folder_uuid')) {
          obj['esp_flow_folder_uuid'] = _ApiClient["default"].convertToType(data['esp_flow_folder_uuid'], 'String');
        }

        if (data.hasOwnProperty('merchant_id')) {
          obj['merchant_id'] = _ApiClient["default"].convertToType(data['merchant_id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('storefront_oid')) {
          obj['storefront_oid'] = _ApiClient["default"].convertToType(data['storefront_oid'], 'Number');
        }

        if (data.hasOwnProperty('system_generated')) {
          obj['system_generated'] = _ApiClient["default"].convertToType(data['system_generated'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return EmailFlowFolder;
}();
/**
 * Email flow folder UUID
 * @member {String} esp_flow_folder_uuid
 */


EmailFlowFolder.prototype['esp_flow_folder_uuid'] = undefined;
/**
 * Merchant ID
 * @member {String} merchant_id
 */

EmailFlowFolder.prototype['merchant_id'] = undefined;
/**
 * Name of email flow folder
 * @member {String} name
 */

EmailFlowFolder.prototype['name'] = undefined;
/**
 * Storefront oid
 * @member {Number} storefront_oid
 */

EmailFlowFolder.prototype['storefront_oid'] = undefined;
/**
 * System generated folder
 * @member {Boolean} system_generated
 */

EmailFlowFolder.prototype['system_generated'] = undefined;
var _default = EmailFlowFolder;
exports["default"] = _default;