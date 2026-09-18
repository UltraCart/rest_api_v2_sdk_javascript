# UltraCartRestApiV2.SfvbPageItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_assignment** | **Boolean** | True when this page is the item&#39;s canonical home.  Read only - set in the store admin. | [optional] 
**item_id** | **String** | The item id, as the merchant knows it. | [optional] 
**merchant_item_oid** | **Number** | The item&#39;s internal oid.  Read only. | [optional] 
**sort_order** | **Number** | Position on the page.  Used only when the page sorts its items by a custom order (sort_order_child_items C). | [optional] 
**url_part** | **String** | The item page&#39;s name under this page, so the item is shown at the page path plus url_part plus .html.  Letters, digits, hyphens and underscores.  When empty the item id is used. | [optional] 


