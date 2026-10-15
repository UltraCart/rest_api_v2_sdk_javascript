# UltraCartRestApiV2.SfvbEmailRenderRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cart_item_ids** | **[String]** | Item ids for the cart the email renders with.  For a cart flow email, or the transactional email this cart and email this item templates. | [optional] 
**cjson** | **String** | An unsaved draft to render in place of the saved content.  For a flow or campaign email, the email container.  For a transactional email, the body container (the theme file core/emails/&lt;name&gt;_body.cjson). | [optional] 
**customer_name** | **String** | The customer name a flow or campaign email greets.  Defaults to the signed in user. | [optional] 
**order_id** | **String** | A test order to render the email with.  Real orders are refused.  Without one, an order email renders with a made up order. | [optional] 


