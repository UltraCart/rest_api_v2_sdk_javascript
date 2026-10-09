# UltraCartRestApiV2.SfvbItemPricingRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clear_msrp** | **Boolean** | True to remove the MSRP.  Not with msrp. | [optional] 
**clear_sale** | **Boolean** | True to remove the sale.  Not with sale_cost. | [optional] 
**cost** | **Number** | The new price, 0 or more. | [optional] 
**msrp** | **Number** | The manufacturer suggested retail price, more than 0 (or 0 when the price is 0). | [optional] 
**sale_cost** | **Number** | The sale price, 0 or more.  Sent with sale_start and sale_end, all three or none. | [optional] 
**sale_end** | **String** | When the sale ends, ISO 8601 with an offset, after sale_start.  Required with sale_cost. | [optional] 
**sale_start** | **String** | When the sale starts, ISO 8601 with an offset.  Required with sale_cost. | [optional] 
**volume_discounts** | [**[SfvbItemVolumeDiscount]**](SfvbItemVolumeDiscount.md) | Replaces the retail quantity breaks.  An empty list removes them all.  Up to 20, each quantity 2 or more and named once. | [optional] 


