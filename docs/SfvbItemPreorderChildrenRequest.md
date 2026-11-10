# UltraCartRestApiV2.SfvbItemPreorderChildrenRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**children** | [**[SfvbItemPreorderChildRow]**](SfvbItemPreorderChildRow.md) | The variations to change, 1 to 100, each named once. | [optional] 
**clear_eta** | **Boolean** | True to remove the ETA from every variation named.  Not with eta. | [optional] 
**eta** | **String** | The expected date for every variation named, YYYY-MM-DD.  Not with clear_eta. | [optional] 
**preorder** | **Boolean** | True to put the variations on pre-order, false to take them off.  Needs an approved item.preorder request when it changes any of them. | [optional] 


