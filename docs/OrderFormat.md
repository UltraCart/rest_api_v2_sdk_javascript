# UltraCartRestApiV2.OrderFormat

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | **String** | The context to generate the order view for. | [optional] 
**dontLinkEmailToSearch** | **Boolean** | True to not link the email address to the order search | [optional] 
**emailAsLink** | **Boolean** | True to make the email address a clickable mailto link | [optional] 
**filterDistributionCenterOid** | **Integer** | Specify a distribution center oid to filter the items displayed to that particular distribution center. | [optional] 
**filterToItemsInContactOid** | **Integer** | The container oid to filter items to. | [optional] 
**format** | **String** | The desired format. | [optional] 
**hideBillToAddress** | **Boolean** | True to ide the bill to address | [optional] 
**hidePriceInformation** | **Boolean** | True to hide price information | [optional] 
**linkFileAttachments** | **Boolean** | True to link file attachments for download | [optional] 
**showContactInfo** | **Boolean** | True to show contact information | [optional] 
**showInMerchantCurrency** | **Boolean** | True to show the order in the merchant currency | [optional] 
**showInternalInformation** | **Boolean** | True to show internal information about the order | [optional] 
**showMerchantNotes** | **Boolean** | True to show merchant notes | [optional] 
**showNonSensitivePaymentInfo** | **Boolean** | True to show non-sensitive payment information | [optional] 
**showPaymentInfo** | **Boolean** | True to show payment information | [optional] 
**translate** | **Boolean** | True to translate the order into the native language of the customer | [optional] 


<a name="FormatEnum"></a>
## Enum: FormatEnum


* `text` (value: `"text"`)

* `div` (value: `"div"`)

* `table` (value: `"table"`)

* `email` (value: `"email"`)




