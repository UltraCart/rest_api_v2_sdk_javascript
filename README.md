


# CHANGE LOG
Not every change is committed to every SDK.

| Version | Date | Comments |
| --: | :-: | --- |
| 3.0.70 | 01/26/2021 | Checkout return URL support |
| 3.0.66 | 01/22/2021 | code library attributes (mostly internal dev) |
| 3.0.65 | 01/22/2021 | Added folder support for email campaigns and flows |
| 3.0.64 | 01/20/2021 | Bug fix on revenue per customer field incorrectly named. |
| 3.0.63 | 01/20/2021 | CouponAPI: bug fixes and new method doesCouponCodeExist |
| 3.0.62 | 01/19/2021 | Added retry ability when rate limit is triggered (PHP SDK only) only) Other sdk to follow. |
| 3.0.60 | 01/14/2021 | Working with Ruby SDK |
| 3.0.57 | 12/17/2020 | CouponAPI: Added Buy one get one free coupon |
| 3.0.53 | 12/14/2020 | StoreFrontAPI: added a duplicate method to load the pricing tiers on the StoreFront |
| 3.0.51 | 12/09/2020 | UserAPI: internal bug preventing proper usage of user group creation |
| 3.0.45 | 12/03/2020 | CouponAPI: added partial searches to getCoupon params, added deleteCoupons method, fixed bugs |
| 3.0.44 | 12/03/2020 | Code library updates, intended for internal use |
| 3.0.43 | 12/02/2020 | Added fields to code library to handle versions of published items |
| 3.0.42 | 12/02/2020 | Added display values to CouponApi.getEditorValues to make type dropdowns easy |
| 3.0.41 | 11/17/2020 | New modify cart step option for StoreFront communications |
| 3.0.39 | 11/12/2020 | Added Customer.tax_codes.taxjar_exemption_type |
| 3.0.38 | 11/09/2020 | Added TaxProviderTaxJar.configuration.send_outside_nexus flag |
| 3.0.37 | 11/06/2020 | Added transactional email screenshots for code library |
| 3.0.36 | 11/03/2020 | Added missing constant for pre-order stage |
| 3.0.34 | 10/26/2020 | UserAPI initial release |
| 3.0.33 | 10/23/2020 | Added library_item_oid to StoreFront Communications email object for upcoming code library |
| 3.0.32 | 10/21/2020 | Added new StoreFrontApi.search method that takes a POST instead of a GET |
| 3.0.31 | 10/16/2020 | more dev work on code library (internal) |
| 3.0.30 | 10/08/2020 | development work on code library (internal), first version of UserAPI.  The UserAPI is not live yet. |
| 3.0.29 | 09/29/2020 | new boolean field on coupon: bug fix |
| 3.0.28 | 09/29/2020 | new boolean field on coupon: free item with purchase of another item |
| 3.0.27 | 09/29/2020 | Refactored the code library applyToStoreFront to provide support for marketing emails |
| 3.0.26 | 09/25/2020 | Expose actual shipping and fulfillment costs in the order summary object |
| 3.0.25 | 09/16/2020 | New method: OrderApi.adjustOrderTotal |
| 3.0.24 | 09/10/2020 | Bugfix: incorrect response type on CheckoutAPI.registerAffiliateClick |
| 3.0.23 | 09/02/2020 | Added flag to email plan object.  allow_tracking_emails |
| 3.0.22 | 09/02/2020 | Order object - added tracking details |
| 3.0.21 | 09/01/2020 | break fix in php sdk due to bad namespace |
| 3.0.20 | 09/01/2020 | Added OrderApi.processPayment method |
| 3.0.19 | 08/28/2020 | Code Library development: added kraken parameters for thumbnail image generation. |
| 3.0.17 | 08/26/2020 | cont. development work on Code Library |
| 3.0.14 | 08/19/2020 | development work on Code Library |
| 3.0.13 | 08/18/2020 | development work on Code Library |
| 3.0.12 | 08/13/2020 | screenshot urls for campaigns and flows (storefront communications) |
| 3.0.11 | 08/12/2020 | Refactoring and development for Code Library (not released yet) |
| 3.0.10 | 08/10/2020 | Method for registering an affliate click via the SDK, found within CheckoutAPI |
| 3.0.8 | 08/05/2020 | stub for code library 'getLibraryFilterValues' for populating drop down lists |
| 3.0.4 | 08/05/2020 | fixed misspell of 'version' in LibraryItem object. |
| 3.0.3 | 08/04/2020 | added description to addToLibrary call to allow for initial description |
| 3.0.2 | 08/03/2020 | added option on email render step config to allow override of subject, added flow/campaign flag to end once customer purchases |
| 3.0.1 | 07/27/2020 | added init_json to storefront communication email objects |
| 3.0.0 | 07/01/2020 | upgraded our swagger-codegen fork to the latest swagger source code. this was a major changes so we jumped version numbers.  please test all code. |

Some changes jump version numbers due to multiple commits for bug fixes, omissions, and errors.
At UltraCart, we eat our own dog food, and we increment the version number for every commit in order
to generate a new javascript npm.  For this reason, version gaps will be found in the change log above.
