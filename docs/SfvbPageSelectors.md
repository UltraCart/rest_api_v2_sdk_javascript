# UltraCartRestApiV2.SfvbPageSelectors

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blog_post_selectors** | [**[SfvbPageBlogPostSelector]**](SfvbPageBlogPostSelector.md) | The conditions that choose the page&#39;s blog posts. | [optional] 
**item_selectors** | [**[SfvbPageItemSelector]**](SfvbPageItemSelector.md) | The conditions that choose the page&#39;s items.  While there are any, the page&#39;s items are recalculated from them and cannot be assigned by hand. | [optional] 
**match_all_blog_post_selectors** | **Boolean** | True when a blog post must meet every blog post selector, false when any one is enough. | [optional] 
**match_all_item_selectors** | **Boolean** | True when an item must meet every item selector, false when meeting any one is enough. | [optional] 
**path** | **String** | The page path.  Read only. | [optional] 


