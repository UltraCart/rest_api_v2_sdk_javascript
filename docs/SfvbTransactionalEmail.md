# UltraCartRestApiV2.SfvbTransactionalEmail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body_file_name** | **String** | The body container a draft replaces, such as receipt_body.cjson.  Present only when the theme has the file. | [optional] 
**body_path** | **String** | The full theme file path of the body container, such as /themes/Elements/core/emails/receipt_body.cjson.  Read it with the files endpoint.  Present only when the theme has the file. | [optional] 
**file_name** | **String** | The HTML template file, such as receipt_html.vm. | [optional] 
**name** | **String** | The display name, such as Order - Receipt. | [optional] 
**text_file_name** | **String** | The plain text template file, when the email has one. | [optional] 


