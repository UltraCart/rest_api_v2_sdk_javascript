# UltraCartRestApiV2.SfvbPageSettingsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blog_post_template** | **String** | Template that renders the blog posts under this page. | [optional] 
**description** | **String** | The page description.  Null or empty clears it. | [optional] 
**exclude_from_sitemap** | **Boolean** | Leave the page out of the sitemap and mark it noindex. | [optional] 
**group_template** | **String** | Template that renders the page, a name from the template list. | [optional] 
**item_template** | **String** | Template that renders the item pages under this page. | [optional] 
**items_per_page** | **Number** | Items per page on a template that paginates.  Null returns to the template&#39;s default. | [optional] 
**page_type** | **String** | S for a static page, D for a dynamic one. | [optional] 
**review_template** | **String** | Template that renders the item review pages under this page. | [optional] 
**sort_order** | **Number** | Position among its siblings when the parent sorts child pages by a custom order.  Null clears it. | [optional] 
**sort_order_child_groups** | **String** | How the pages under this one are ordered.  TA or TD by title, DA or DD by description, C custom. | [optional] 
**sort_order_child_items** | **String** | How the page&#39;s items are ordered.  IA or ID by item id, DA or DD by description, SA or SD by manufacturer SKU, PA or PD by price, RA or RD by review, NA or ND by inventory, C custom. | [optional] 
**title** | **String** | The page title. | [optional] 
**visible** | **Boolean** | False hides the page, so it answers 404 to shoppers.  The root page cannot be hidden. | [optional] 
**visible_dts** | **String** | Keep the page hidden until this time (ISO 8601).  Null or empty clears it. | [optional] 


