# UltraCartRestApiV2.SfvbItemChildCreateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**copied_cost** | **String** | The cost copied from the parent. | [optional] 
**copied_dimensions** | **String** | Length, width and height copied from the parent. | [optional] 
**copied_folder_id** | **Number** | The parent&#39;s item folder the new item is filed in, 0 for the top. | [optional] 
**copied_weight** | **String** | The weight copied from the parent. | [optional] 
**description** | **String** | The new item&#39;s description. | [optional] 
**dry_run** | **Boolean** | True when nothing was created. | [optional] 
**merchant_item_id** | **String** | The new item&#39;s id. | [optional] 
**merchant_item_oid** | **Number** | The new item&#39;s oid.  Absent on a dry run. | [optional] 
**next** | **String** | What to do next. | [optional] 
**parent** | [**SfvbItemVariationChild**](SfvbItemVariationChild.md) |  | [optional] 


