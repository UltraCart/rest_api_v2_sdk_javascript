# UltraCartRestApiV2.SfvbPostcardProofRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address1** | **String** | The recipient street address.  Without address1, city, state and postal_code, a sample address is used. | [optional] 
**address2** | **String** | The recipient second address line. | [optional] 
**cart_item_ids** | **[String]** | Item ids for the cart a cart flow card renders with.  The cart is made for the proof and deleted after it. | [optional] 
**city** | **String** | The recipient city. | [optional] 
**customer_name** | **String** | The recipient name the card greets and is addressed to.  Defaults to the signed in user. | [optional] 
**html_only** | **Boolean** | True to return only the rendered HTML of both sides, with no print vendor render.  The default, false, also returns the images that would print and the vendor proof PDF. | [optional] 
**order_id** | **String** | A test order for an order flow card.  Real orders are refused.  Without one, an order flow card renders with a made up order. | [optional] 
**postal_code** | **String** | The recipient postal code. | [optional] 
**state** | **String** | The recipient state. | [optional] 


