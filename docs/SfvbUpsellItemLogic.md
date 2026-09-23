# UltraCartRestApiV2.SfvbUpsellItemLogic

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**[SfvbUpsellItemLogicItem]**](SfvbUpsellItemLogicItem.md) | The items this logic looks at.  Every item id must exist on the merchant account. | [optional] 
**logic** | **String** | How items is read.  contains_any, contains_all, all, any or total.  Omitted or null means no item logic. | [optional] 
**total_quantity_comparison** | **Number** | For total only.  The quantity the summed quantity is compared with. | [optional] 
**total_quantity_operator** | **String** | For total only.  The comparison applied to the summed quantity.  One of &lt;, &lt;&#x3D;, &#x3D;, &gt;&#x3D;, &gt;. | [optional] 


