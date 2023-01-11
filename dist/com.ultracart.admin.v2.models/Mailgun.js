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
 * The Mailgun model module.
 * @module com.ultracart.admin.v2.models/Mailgun
 * @version 4.0.110-RC
 */
var Mailgun = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Mailgun</code>.
   * @alias module:com.ultracart.admin.v2.models/Mailgun
   */
  function Mailgun() {
    _classCallCheck(this, Mailgun);

    Mailgun.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Mailgun, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Mailgun</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/Mailgun} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/Mailgun} The populated <code>Mailgun</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Mailgun();

        if (data.hasOwnProperty('api_key')) {
          obj['api_key'] = _ApiClient["default"].convertToType(data['api_key'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Mailgun;
}();
/**
 * @member {String} api_key
 */


Mailgun.prototype['api_key'] = undefined;
var _default = Mailgun;
exports["default"] = _default;