# UltraCartRestApiV2.AddLibraryItemRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cjson** | **String** | Cjson to be added to library | [optional] 
**content_type** | **String** | flow, campaign, cjson, email, transactional_email or upsell | [optional] 
**description** | **String** | description of library item | [optional] 
**email_name** | **String** | Required if content_type is transactional_email. This is the name of the email template (html, not text).  This name should have a .vm file extension.  An example is auto_order_cancel_html.vm | [optional] 
**email_path** | **String** | Required if content_type is transactional_email. This is the full path to the email template stored in the file system.  This defines which StoreFront contains the desired email template.  An example is /themes/Elements/core/emails/auto_order_cancel_html.vm | [optional] 
**screenshots** | [**[LibraryItemScreenshot]**](LibraryItemScreenshot.md) | Screenshot urls for display | [optional] 
**storefront_oid** | **Number** | StoreFront oid where content originates necessary for tracking down relative assets | [optional] 
**title** | **String** | title of library item, usually the name of the flow or campaign, or description of cjson | [optional] 
**uuid** | **String** | UUID of communication flow or campaign, null if this item is neither | [optional] 


