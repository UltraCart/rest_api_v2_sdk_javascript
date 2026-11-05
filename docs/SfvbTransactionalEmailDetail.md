# UltraCartRestApiV2.SfvbTransactionalEmailDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delivery_options** | [**[SfvbTransactionalDeliveryOption]**](SfvbTransactionalDeliveryOption.md) | Its delivery options.  Empty for an email that has none. | [optional] 
**file_name** | **String** | The HTML template file, such as receipt_html.vm. | [optional] 
**hash_sha256** | **String** | The hash of the subject, the options and the sender.  Send it as If-Match to change them. | [optional] 
**name** | **String** | The display name, such as Order - Receipt. | [optional] 
**sender** | [**SfvbTransactionalSender**](SfvbTransactionalSender.md) |  | [optional] 
**sender_shared_with** | **[String]** | Every storefront on this account that shares the sender, this one included. | [optional] 
**subject** | **String** | The subject line. | [optional] 


