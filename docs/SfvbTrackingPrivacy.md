# UltraCartRestApiV2.SfvbTrackingPrivacy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**anonymize_ip** | **String** | Which shoppers have their IP address anonymized on the cart and order.  all, eea, non_us, or null for nobody. | [optional] 
**default_mailing_list_off** | **String** | Which shoppers start checkout with the mailing list sign-up unchecked.  all, eea, non_us, or null for nobody. | [optional] 
**disable_return_email** | **String** | Which shoppers are left out of the return email (the admin&#39;s Disable Return Email rule).  all, eea, non_us, or null for nobody. | [optional] 
**exclude_purchase_bubble_history** | **String** | Which shoppers&#39; purchases are left out of the purchase bubble history.  all, eea, non_us, or null for nobody. | [optional] 
**hash_sha256** | **String** | The hash of these five rules.  Send it as If-Match when changing them. | [optional] 
**show_cookie_notice** | **String** | Which shoppers see the privacy and cookie notice.  all, eea (shoppers in the European Economic Area), non_us, or null for nobody. | [optional] 



## Enum: AnonymizeIpEnum


* `all` (value: `"all"`)

* `eea` (value: `"eea"`)

* `non_us` (value: `"non_us"`)





## Enum: DefaultMailingListOffEnum


* `all` (value: `"all"`)

* `eea` (value: `"eea"`)

* `non_us` (value: `"non_us"`)





## Enum: DisableReturnEmailEnum


* `all` (value: `"all"`)

* `eea` (value: `"eea"`)

* `non_us` (value: `"non_us"`)





## Enum: ExcludePurchaseBubbleHistoryEnum


* `all` (value: `"all"`)

* `eea` (value: `"eea"`)

* `non_us` (value: `"non_us"`)





## Enum: ShowCookieNoticeEnum


* `all` (value: `"all"`)

* `eea` (value: `"eea"`)

* `non_us` (value: `"non_us"`)




