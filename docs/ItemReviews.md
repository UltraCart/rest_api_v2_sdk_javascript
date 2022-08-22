# UltraCartRestApiV2.ItemReviews

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_approved_review** | **Boolean** | True if the item has an approved review | [optional] 
**has_review** | **Boolean** | True if the item has a review | [optional] 
**individual_reviews** | [**[ItemReview]**](ItemReview.md) |  | [optional] 
**review_count** | **Number** | Number of approved reviews | [optional] 
**review_overall** | **Number** | Overall score of reviews | [optional] 
**review_template_name** | **String** | Review template name | [optional] 
**review_template_oid** | **Number** | Review template object identifier | [optional] 
**reviewable** | **Boolean** | True if the item is reviewable | [optional] 
**share_reviews_with_merchant_item_id** | **String** | Share reviews with item id.  To set, use the share_reviews_with_merchant_item_oid field. | [optional] 
**share_reviews_with_merchant_item_oid** | **Number** | Share reviews with item oid.  To null out this field, set teh value to zero. | [optional] 


