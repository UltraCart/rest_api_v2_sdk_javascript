# UltraCartRestApiV2.ConversationEngagementEquationFunction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**any_page_url_logic** | **String** | Logic operation to perform on an any page url function type | [optional] 
**any_page_url_value** | **String** |  | [optional] 
**current_page_url_logic** | **String** | Logic operation to perform on a current page url function type | [optional] 
**current_page_url_value** | **String** |  | [optional] 
**customers_browsing_time_logic** | **String** | Logic operation to perform on a customer&#39;s browsing time function type | [optional] 
**customers_browsing_time_seconds** | **Number** |  | [optional] 
**customers_location_country** | **String** |  | [optional] 
**customers_location_logic** | **String** | Logic operation to perform on a customer&#39;s location function type | [optional] 
**customers_location_state** | **String** |  | [optional] 
**number_of_viewed_pages_logic** | **String** | Logic operation to perform on a customer&#39;s browsing time function type | [optional] 
**number_of_viewed_pages_value** | **Number** |  | [optional] 
**referring_website_logic** | **String** | Logic operation to perform on a referring website function type | [optional] 
**referring_website_value** | **String** |  | [optional] 
**type** | **String** | Type of function | [optional] 



## Enum: AnyPageUrlLogicEnum


* `contains` (value: `"contains"`)

* `does not contain` (value: `"does not contain"`)

* `is exactly` (value: `"is exactly"`)

* `is not` (value: `"is not"`)





## Enum: CurrentPageUrlLogicEnum


* `contains` (value: `"contains"`)

* `does not contain` (value: `"does not contain"`)

* `is exactly` (value: `"is exactly"`)

* `is not` (value: `"is not"`)





## Enum: CustomersBrowsingTimeLogicEnum


* `at least` (value: `"is at least"`)

* `more than` (value: `"is more than"`)

* `less than` (value: `"is less than"`)

* `at most` (value: `"is at most"`)





## Enum: CustomersLocationLogicEnum


* `is` (value: `"is"`)

* `is not` (value: `"is not"`)





## Enum: NumberOfViewedPagesLogicEnum


* `at least` (value: `"is at least"`)

* `more than` (value: `"is more than"`)

* `less than` (value: `"is less than"`)

* `at most` (value: `"is at most"`)





## Enum: ReferringWebsiteLogicEnum


* `contains` (value: `"contains"`)

* `does not contain` (value: `"does not contain"`)

* `is exactly` (value: `"is exactly"`)

* `is not` (value: `"is not"`)





## Enum: TypeEnum


* `current page url` (value: `"current page url"`)

* `customers location` (value: `"customers location"`)

* `customers browsing time` (value: `"customers browsing time"`)

* `number of viewed pages` (value: `"number of viewed pages"`)

* `referring website address` (value: `"referring website address"`)

* `any page from session` (value: `"any page from session"`)




