# UltraCartRestApiV2.OrderFormat

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | **String** | The context to generate the order view for. | [optional] 
**dont_link_email_to_search** | **Boolean** | True to not link the email address to the order search | [optional] 
**email_as_link** | **Boolean** | True to make the email address a clickable mailto link | [optional] 
**filter_distribution_center_oid** | **Number** | Specify a distribution center oid to filter the items displayed to that particular distribution center. | [optional] 
**filter_to_items_in_container_oid** | **Number** | The container oid to filter items to. | [optional] 
**format** | **String** | The desired format. | [optional] 
**hide_bill_to_address** | **Boolean** | True to ide the bill to address | [optional] 
**hide_price_information** | **Boolean** | True to hide price information | [optional] 
**link_file_attachments** | **Boolean** | True to link file attachments for download | [optional] 
**show_contact_info** | **Boolean** | True to show contact information | [optional] 
**show_in_merchant_currency** | **Boolean** | True to show the order in the merchant currency | [optional] 
**show_internal_information** | **Boolean** | True to show internal information about the order | [optional] 
**show_merchant_notes** | **Boolean** | True to show merchant notes | [optional] 
**show_non_sensitive_payment_info** | **Boolean** | True to show non-sensitive payment information | [optional] 
**show_payment_info** | **Boolean** | True to show payment information | [optional] 
**translate** | **Boolean** | True to translate the order into the native language of the customer | [optional] 



## Enum: FormatEnum


* `text` (value: `"text"`)

* `div` (value: `"div"`)

* `table` (value: `"table"`)

* `email` (value: `"email"`)




