# UltraCartRestApiV2.SfvbPostcardTrackingResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cards** | [**[SfvbPostcardCard]**](SfvbPostcardCard.md) | This page of cards. | [optional] 
**customer_data** | **String** | masked, or shown when show_customer_data was sent. | [optional] 
**notes** | **[String]** | What to keep in mind, such as how to handle customer data that is shown. | [optional] 
**page** | **Number** | The page number, from 1. | [optional] 
**page_cost** | **Number** | The total cost of the cards on this page. | [optional] 
**page_size** | **Number** | Cards per page. | [optional] 
**postcard_uuid** | **String** | The postcard. | [optional] 
**total_cards** | **Number** | How many cards have been mailed for this postcard. | [optional] 
**total_pages** | **Number** | How many pages there are. | [optional] 


