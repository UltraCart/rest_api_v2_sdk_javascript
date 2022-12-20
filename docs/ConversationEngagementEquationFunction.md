# UltraCartRestApiV2.ConversationEngagementEquationFunction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**any_page_url_logic** | **String** | Logic operation to perform on an any page url function type | [optional] 
**any_page_url_value** | **String** |  | [optional] 
**current_page_url_logic** | **String** | Logic operation to perform on a current page url function type | [optional] 
**current_page_url_value** | **String** |  | [optional] 
**customers_browsing_time_logic** | **String** | Logic operation to perform on a customer's browsing time function type | [optional] 
**customers_browsing_time_seconds** | **Number** |  | [optional] 
**customers_location_country** | **String** |  | [optional] 
**customers_location_logic** | **String** | Logic operation to perform on a customer's location function type | [optional] 
**customers_location_state** | **String** |  | [optional] 
**number_of_viewed_pages_logic** | **String** | Logic operation to perform on a customer's browsing time function type | [optional] 
**number_of_viewed_pages_value** | **Number** |  | [optional] 
**referring_website_logic** | **String** | Logic operation to perform on a referring website function type | [optional] 
**referring_website_value** | **String** |  | [optional] 
**type** | **String** | Type of function | [optional] 


<a name="AnyPageUrlLogicEnum"></a>
## Enum: AnyPageUrlLogicEnum


* `contains` (value: `"contains"`)

* `does_not_contain` (value: `"does not contain"`)

* `is_exactly` (value: `"is exactly"`)

* `is_not` (value: `"is not"`)




<a name="CurrentPageUrlLogicEnum"></a>
## Enum: CurrentPageUrlLogicEnum


* `contains` (value: `"contains"`)

* `does_not_contain` (value: `"does not contain"`)

* `is_exactly` (value: `"is exactly"`)

* `is_not` (value: `"is not"`)




<a name="CustomersBrowsingTimeLogicEnum"></a>
## Enum: CustomersBrowsingTimeLogicEnum


* `at_least` (value: `"is at least"`)

* `more_than` (value: `"is more than"`)

* `less_than` (value: `"is less than"`)

* `at_most` (value: `"is at most"`)




<a name="CustomersLocationLogicEnum"></a>
## Enum: CustomersLocationLogicEnum


* `is` (value: `"is"`)

* `is_not` (value: `"is not"`)




<a name="NumberOfViewedPagesLogicEnum"></a>
## Enum: NumberOfViewedPagesLogicEnum


* `at_least` (value: `"is at least"`)

* `more_than` (value: `"is more than"`)

* `less_than` (value: `"is less than"`)

* `at_most` (value: `"is at most"`)




<a name="ReferringWebsiteLogicEnum"></a>
## Enum: ReferringWebsiteLogicEnum


* `contains` (value: `"contains"`)

* `does_not_contain` (value: `"does not contain"`)

* `is_exactly` (value: `"is exactly"`)

* `is_not` (value: `"is not"`)




<a name="TypeEnum"></a>
## Enum: TypeEnum


* `current_page_url` (value: `"current page url"`)

* `customers_location` (value: `"customer's location"`)

* `customers_browsing_time` (value: `"customer's browsing time"`)

* `number_of_viewed_pages` (value: `"number of viewed pages"`)

* `referring_website_address` (value: `"referring website address"`)

* `any_page_from_session` (value: `"any page from session"`)




