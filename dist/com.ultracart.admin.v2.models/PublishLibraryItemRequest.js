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
 * The PublishLibraryItemRequest model module.
 * @module com.ultracart.admin.v2.models/PublishLibraryItemRequest
 * @version 4.0.93-RC
 */
var PublishLibraryItemRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PublishLibraryItemRequest</code>.
   * @alias module:com.ultracart.admin.v2.models/PublishLibraryItemRequest
   */
  function PublishLibraryItemRequest() {
    _classCallCheck(this, PublishLibraryItemRequest);

    PublishLibraryItemRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PublishLibraryItemRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PublishLibraryItemRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/PublishLibraryItemRequest} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/PublishLibraryItemRequest} The populated <code>PublishLibraryItemRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PublishLibraryItemRequest();

        if (data.hasOwnProperty('release_notes')) {
          obj['release_notes'] = _ApiClient["default"].convertToType(data['release_notes'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PublishLibraryItemRequest;
}();
/**
 * Release notes for this release version.
 * @member {String} release_notes
 */


PublishLibraryItemRequest.prototype['release_notes'] = undefined;
var _default = PublishLibraryItemRequest;
exports["default"] = _default;