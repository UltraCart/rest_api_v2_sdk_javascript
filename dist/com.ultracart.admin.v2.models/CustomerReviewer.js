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
 * The CustomerReviewer model module.
 * @module com.ultracart.admin.v2.models/CustomerReviewer
 * @version 4.0.187
 */
var CustomerReviewer = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CustomerReviewer</code>.
   * @alias module:com.ultracart.admin.v2.models/CustomerReviewer
   */
  function CustomerReviewer() {
    _classCallCheck(this, CustomerReviewer);

    CustomerReviewer.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CustomerReviewer, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CustomerReviewer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.ultracart.admin.v2.models/CustomerReviewer} obj Optional instance to populate.
     * @return {module:com.ultracart.admin.v2.models/CustomerReviewer} The populated <code>CustomerReviewer</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CustomerReviewer();

        if (data.hasOwnProperty('auto_approve')) {
          obj['auto_approve'] = _ApiClient["default"].convertToType(data['auto_approve'], 'Boolean');
        }

        if (data.hasOwnProperty('average_overall_rating')) {
          obj['average_overall_rating'] = _ApiClient["default"].convertToType(data['average_overall_rating'], 'Number');
        }

        if (data.hasOwnProperty('expert')) {
          obj['expert'] = _ApiClient["default"].convertToType(data['expert'], 'Boolean');
        }

        if (data.hasOwnProperty('first_review')) {
          obj['first_review'] = _ApiClient["default"].convertToType(data['first_review'], 'String');
        }

        if (data.hasOwnProperty('last_review')) {
          obj['last_review'] = _ApiClient["default"].convertToType(data['last_review'], 'String');
        }

        if (data.hasOwnProperty('location')) {
          obj['location'] = _ApiClient["default"].convertToType(data['location'], 'String');
        }

        if (data.hasOwnProperty('nickname')) {
          obj['nickname'] = _ApiClient["default"].convertToType(data['nickname'], 'String');
        }

        if (data.hasOwnProperty('number_helpful_review_votes')) {
          obj['number_helpful_review_votes'] = _ApiClient["default"].convertToType(data['number_helpful_review_votes'], 'Number');
        }

        if (data.hasOwnProperty('rank')) {
          obj['rank'] = _ApiClient["default"].convertToType(data['rank'], 'Number');
        }

        if (data.hasOwnProperty('reviews_contributed')) {
          obj['reviews_contributed'] = _ApiClient["default"].convertToType(data['reviews_contributed'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return CustomerReviewer;
}();
/**
 * True if reviewes from this customer profile should automatically be approved
 * @member {Boolean} auto_approve
 */


CustomerReviewer.prototype['auto_approve'] = undefined;
/**
 * Average overall rating of items reviewed
 * @member {Number} average_overall_rating
 */

CustomerReviewer.prototype['average_overall_rating'] = undefined;
/**
 * True if the customer is an expert
 * @member {Boolean} expert
 */

CustomerReviewer.prototype['expert'] = undefined;
/**
 * First review
 * @member {String} first_review
 */

CustomerReviewer.prototype['first_review'] = undefined;
/**
 * Last review
 * @member {String} last_review
 */

CustomerReviewer.prototype['last_review'] = undefined;
/**
 * Location of the reviewer
 * @member {String} location
 */

CustomerReviewer.prototype['location'] = undefined;
/**
 * Nickname of the reviewer
 * @member {String} nickname
 */

CustomerReviewer.prototype['nickname'] = undefined;
/**
 * Number of helpful review votes
 * @member {Number} number_helpful_review_votes
 */

CustomerReviewer.prototype['number_helpful_review_votes'] = undefined;
/**
 * Rank of this reviewer
 * @member {Number} rank
 */

CustomerReviewer.prototype['rank'] = undefined;
/**
 * Number of reviews contributed
 * @member {Number} reviews_contributed
 */

CustomerReviewer.prototype['reviews_contributed'] = undefined;
var _default = CustomerReviewer;
exports["default"] = _default;