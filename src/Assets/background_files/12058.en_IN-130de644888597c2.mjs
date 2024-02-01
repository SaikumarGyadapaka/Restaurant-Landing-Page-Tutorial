"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[12058,20128],{827896:(e,o,n)=>{n.d(o,{Z:()=>s});var _=n(616550),a=n(768559),t=n(350118);function s(){let e=(0,t.S6)(),o=(0,_.useLocation)();return(n,_)=>{let t;let s=e(n);if(null!=_&&_.shouldTrackForPrevLocation){let e=(null==s?void 0:s.tracking_params_map)||{},o=Object.keys(e),n=o.find(e=>"PinResource"!==e);s&&(t=n?e[n]:e.PinResource)}else if(s){var i,l;t=(0,a.Z)({boardUrl:null===(i=s.board)||void 0===i?void 0:i.url,location:o,pinId:s.id,pinnerUserName:null===(l=s.pinner)||void 0===l?void 0:l.username,storyPinDataId:s.story_pin_data_id,trackingParams:s.tracking_params,trackingParamsMap:s.tracking_params_map})}return t}}},915446:(e,o,n)=>{n.d(o,{Z:()=>a});let _={REPIN_BOARD:1,USER_ACTIVITY:4,CLICKTHROUGH:9,FRESH_REPIN_BOARD:47,FRESH_CLICKTHROUGH:48,FRESH_USER_ACTIVITY:49,LOCAL_REPIN_BOARD:13,LOCAL_CLICKTHROUGH:32,LOCAL_USER_ACTIVITY:33,P2P_CLICKTHROUGH:28,INSTANT_PFY_NON_MATERIALIZABLE:36,FOLLOWED_INTEREST:5,TOPIC_BEST_PINS:70,EMBEDDING_BASED_BEST_PINS:173,RECOMMENDED_TOPICS:65,RECOMMENDED_GEO_INTERESTS:192,USER_SEQUENCE_INTERESTS_PINS:193,U2I_DNN_INTERESTS_PINS:196,PINNERSAGE_INTERESTS_PINS:197,GRAPHSAGE_USER_EMBEDDINGS_TO_ORGANIC_PINS:109,NAVBOOST_PFY:89,NAVBOOST_P2P:88,NOTIFICATION_NEWS_HUB:138,GEMINI_INTERESTS_FRESH:104,INTENTIONAL_DISTRIBUTION_USER_TO_CREATOR_STORY_PIN:100,INTENTIONAL_DISTRIBUTION_USER_TO_CREATOR_STORY_PIN_ENGAGEMENT:175,INTENTIONAL_DISTRIBUTION_USER_TO_CREATOR_VIDEO:95,INTENTIONAL_DISTRIBUTION_DOMAIN:86,INTENTIONAL_DISTRIBUTION_TOPICS_STORY_PINS:91,INTENTIONAL_DISTRIBUTION_TOPICS_VIDEO:98,GRAPHSAGE_MULTI_PINS_TO_CREATOR_PINS_REALTIME:135,GRAPHSAGE_MULTI_PINS_TO_VIDEO_PINS_REALTIME:139,GRAPHSAGE_MULTI_PINS_TO_STORY_PINS_REALTIME:140,INTENTIONAL_DISTRIBUTION_MANUAL_TAGGEED_INTERESTS_VIDEO:118,INTENTIONAL_DISTRIBUTION_MANUAL_TAGGED_INTERESTS_STORY_PIN:130,CREATOR_DIRECT_INJECT:148,USER_INTERESTS_TO_LONGTERM_CREATOR_PINS:141,GRAPHSAGE_PRODUCT_PINS:97,GRAPHSAGE_USER_EMBEDDINGS_TO_PINS:108,PROMOTED_PIN:15,UNKNOWN:0,RECOMMENDED_CATEGORY:2,COOKIE_MONSTER:3,REALTIME_P2B:6,REALTIME_P2B_CLOSEUP:22,RECOMMENDED_INTEREST:7,VISUALLY_SIMILAR:8,BOARD_FOLLOW:35,USER_FOLLOW:45,RECOMMENDED_COMMERCE:10,EVERYTHING_FEED:11,RECOMMENDED_LOCAL_PIN:12,SEARCH:46,P2P_USER_COMMERCE:16,COMMERCE_EDUCATION:17,LANDING_PAGE_PINS:18,FOLLOWING_FEED:19,POPULAR_FEED:20,P2P_DYNAMIC_GRID:23,LANDING_PAGE_INTEREST_PINS:24,FRESH_PIN_FROM_PIN:25,FRESH_PIN_FROM_INTEREST:26,FRESH_PIN_FROM_BOARD:27,SIFTER_VIDEO_FROM_INTEREST:39,SIFTER_PRODUCTS:57,SIFTER_DISTRIBUTION_A:50,SIFTER_DISTRIBUTION_B:51,SIFTER_DISTRIBUTION_C:52,SIFTER_DISTRIBUTION_D:53,SIFTER_DISTRIBUTION_E:54,SIFTER_ACTIVATION_EXPERIMENT:58,SIFTER_FRESHMAKER_PIN_FROM_INTEREST:40,P2P_CLOSEUP:29,P2P_LIKE:30,P2P_PIN_CREATE:31,INSTANT_PFY:34,DYNAMIC_INSERTION:37,DYNAMIC_INSERTION_BOARD_FOLLOW:38,HYPERLOCAL_INTEREST_BOARD:41,NUX_BOARD_FOLLOW_P2P:42,INDIRECT_DOMAIN_PIN:43,PIXIE_PINS_FOR_BOARD:44,SCREENSHOT_SAVE:55,TEXT_EMBEDDINGS:56,FRESH_TEXT_EMBEDDINGS:67,PREFETCH_LOAD:60,DIVERSE_TOPICS:62,QUIZ_RESULTS:63,INTENTIONAL_DISTRIBUTION_TOPICS:64,INTENTIONAL_DISTRIBUTION_TOPICS_THIRD_PARTY:90,INTENTIONAL_DISTRIBUTION_GEMINI:73,INTENTIONAL_DISTRIBUTION_GEMINI_V5:120,INTENTIONAL_DISTRIBUTION_SHOP_STYLE_STL:74,INTENTIONAL_DISTRIBUTION_GRAPHSAGE:78,INTENTIONAL_DISTRIBUTION_REPIN_BOARD:80,INTENTIONAL_DISTRIBUTION_CLICKTHROUGH:81,INTENTIONAL_DISTRIBUTION_USER_ACTIVITY:82,INTENTIONAL_DISTRIBUTION_CREATOR_BASELINE:92,INTENTIONAL_DISTRIBUTION_RECOMMENDED_TOPICS:102,INTENTIONAL_DISTRIBUTION_RECOMMENDED_TOPICS_STORY_PIN:103,INTENTIONAL_DISTRIBUTION_RECOMMENDED_TOPICS_DIVERSITY:105,PIXIE_RECENT_ACTION:66,NATIVE_CONTENT_TOPICS:68,BUBBLE_OPEN_TOPICS:69,TOPIC_BEST_PINS_V2:77,DAILY_BEST_PINS:79,TOPIC_BEST_PINS_V3:101,TOPIC_BEST_STORY_PINS:164,REC_SEQ_STORY_PIN_CLS:165,DARK_PROMOTED_PIN:71,POST_EXPLORE_TOPICS:72,GRAPHSAGE_EMBEDDINGS:75,DEMOGRAPHIC_PFY:76,SHOPPING_STL:83,UNAUTH_PIXIE_P2B:84,UNAUTH_PIXIE_P2P:85,VIDEO_EMBEDDINGS:87,VIDEO_EMBEDDINGS_GEMINI_V5:121,GEMINI_V5_EMBEDDINGS_STATIC:93,GEMINI_V5_EMBEDDINGS_FRESH:94,GEMINI_V5_EMBEDDINGS_REALTIME:106,GEMINI_V5_EMBEDDINGS_STORYPIN:107,CURATED_VIDEO_INTEREST:96,GRAPHSAGE_PRODUCT_PINS_LONGER_HISTORY:112,GRAPHSAGE_SHOPPABLE_INSPIRATION:126,GRAPHSAGE_PRODUCT_PINS_EXPERIMENTAL:134,NUX_GRAPHSAGE:99,GRAPHSAGE_USER_EMBEDDINGS_TO_PRODUCT_PINS:110,GRAPHSAGE_VIDEO_PINS:113,RECBOOST_REPIN_BOARD:114,RECBOOST_CLICKTHROUGH:115,RECBOOST_USER_ACTIVITY:116,RECBOOST_CREATOR_BOARDS:129,RECOMMENDED_BOARDS:117,RECOMMENDED_ANNOTATION_BOARDS:136,RECOMMENDED_GRAPHSAGE_BOARDS:153,INTENTIONAL_DISTRIBUTION_RECOMMENDED_GRAPHSAGE_BOARDS:191,RECOMMENDED_CREATOR_BOARDS:124,ANNOTATION_REC_CREATOR_BOARDS:127,INTENTIONAL_DISTRIBUTION_MANUAL_INTERESTS_VIDEO:119,INTENTIONAL_DISTRIBUTION_INTERESTS_VIDEO:143,INTENTIONAL_DISTRIBUTION_INTERESTS_STORY_PIN:144,REPIN_CREATOR_BOARD:122,GRAPHSAGE_USER_EMBEDDINGS_TO_CREATOR_PINS:123,GRAPHSAGE_USER_EMBEDDINGS_TO_CREATOR_PINS_REALTIME:131,FRESH_SIG_FROM_BOARD:125,RECENT_ENGAGED_CREATOR_BOARDS:128,RECENT_ENGAGED_BOARDS:132,SHOPPING_CREATOR_REALTIME:133,GRAPHSAGE_BASED_RECOMMENDED_CREATOR_BOARDS:137,PIXIE_P2P:142,NEW_USE_CASE_PINS:145,RECBOOST_NEW_USE_CASES:146,SEARCHSAGE_PFY:147,SEARCHSAGE_SHOPPING_PFY:155,INTEREST_EXPLORATION:149,INTEREST_EXPLORATION_TRENDY_QUERIES:150,INTEREST_EXPLORATION_RELATED_INTERESTS:151,RECBOOST_INTERESTS:152,HF_STORY_SHOPPING_RETARGETING:154,RECBOOST_STORY_PINS:156,RECBOOST_STORY_BOARDS:157,PINNABILITY_EMBEDDINGS:158,PINNABILITY_FRESH_STORY_EMBEDDINGS:159,PINNABILITY_STORY_EMBEDDINGS:160,PINNABILITY_PRODUCT_PIN_EMBEDDINGS:195,PINNABILITY_FRESH_PRODUCT_PIN_EMBEDDINGS:209,PINNABILITY_MULTI_EMBEDDINGS:210,EXPLORATION_STORY_PINS:161,EXPLORATION_STORY_PINS_BASELINE:162,EXPLOITATION_STORY_PINS:163,ANNOTATION_REC_CREATOR_STORY_PINS:166,GRAPHSAGE_MULTI_PINS_TO_STORY_PINS:167,IDEASTREAM_GRAPHSAGE_STORY_PINS:168,HF_EDUCATION_PIN_INSERTION:169,RP_EDUCATION_PIN_INSERTION:170,USER_TO_CREATOR_STORY_PINS:171,USER_TO_CREATOR_STORY_PINS_ENGAGEMENT:176,COENGAGEMENT_STORY_PINS:172,ANNOTATION_STORY_PINS:177,DISCOVER_STREAM_DEMOGRAPHIC_FALLBACK:178,DISCOVER_STREAM_CELEBRITY:179,GRAPHSAGE_SHOPIFY_VMP_PRODUCT_PINS:180,CREATOR_BEST_IDEA_PINS:181,INTEREST_BEST_IDEA_PINS:182,NAVBOOST_STORY_PINS:183,SHOPPING_DISTRIBUTION_PINS:185,WATCH_TAB_EHQ_STORIES:186,NOTIF_LEARNED_RETRIEVAL:187,NOTIF_DIRECT_INJECT:207,LANDING_PAGE_PIN_RECOMMENDATIONS:188,PINNERSAGE_LEARNED_EMBEDDINGS:189,RECGPT_CG_USER_TO_PINS:206,TOPIC_FEED:190,ORGANIC_COENGAGEMENT:211,RTC_IMPROVEMENT_TEST_1:501,RTC_IMPROVEMENT_TEST_2:502,RTC_IMPROVEMENT_TEST_3:503,RTC_IMPROVEMENT_TEST_4:504,RTC_IMPROVEMENT_TEST_5:505,RTC_IMPROVEMENT_TEST_6:506,RTC_IMPROVEMENT_TEST_7:507,RTC_IMPROVEMENT_TEST_8:508,RTC_IMPROVEMENT_TEST_9:509,RTC_IMPROVEMENT_TEST_10:510,RTC_IMPROVEMENT_TEST_11:511,RTC_IMPROVEMENT_TEST_12:512,RTC_IMPROVEMENT_TEST_13:513,RTC_IMPROVEMENT_TEST_14:514,RTC_IMPROVEMENT_TEST_15:515,RTC_BLENDER_TEST:516,P2P_COMMERCE:21,P2P:14,LENS_CAMERA_VISUALLY_SIMILAR:111,RECENT_FOLLOWED_INTEREST:59,RECENT_FOLLOWED_BOARD:61,GRAPHSAGE_SHOPIFY_VMP_MERCHANT_ACTIVATION_PRODUCT_PINS:174,FOLLOWED_INTEREST_SEO_BESPIN_EXPORATION:184,XPIXIE_TO_PRODUCT_PINS:194,SHOPPING_RECENTLY_VIEWED_MODULE_PINS:198,SHOPPING_RECENTLY_SAVED_MODULE_PINS:199,SHOPPING_BEST_SELLING_RECOMMENDED_BRAND_MODULE_PINS:200,SHOPPING_SHOP_THE_BOARD_MODULE_PINS:203,SHOPPING_ON_SALE_MODULE_PINS:204,SHOPPING_PRODUCT_CATEGORY_BASED_MODULE_PINS:205,SHOPPING_SHOP_SEARCH_MODULE_PINS:208,RECENTLY_VIEWED_ORGANIC_MODULE_PINS:201,RECENTLY_SAVED_ORGANIC_MODULE_PINS:202};function a({feedbackData:e,feedbackType:o,pinId:n,pinFeedbackType:a,recommendationReason:t,complaintReason:s,clientTrackingParams:i,isThirdPartyAd:l}){var c,r,d;switch(o){case"search":return{action:"unrelatedSearchPin",actionOptions:{query:null==e?void 0:e.query,pin_id:n}};case"related":return{action:"relatedPinHide",actionOptions:{pin:n}};case"newsHub":return{action:"newsHubPinHide",actionOptions:{pinId:n,newsId:null==e?void 0:e.newsId}};default:let E="promoted"===o,I=(d=null==t?void 0:t.reason)&&_[d],T=null!==(c=null==t?void 0:t.reasonId)&&void 0!==c?c:null==t?void 0:null===(r=t.board)||void 0===r?void 0:r.entityId,R={complaint_reason:s||0,pin_id:n,feedback_type:a||1,promoted:E};return I&&(R.recommendation_reason_id=I),T&&(R.through_id=T),null!=t&&t.throughProperties&&(R.through_properties=t.throughProperties.reduce((e,o)=>{let{key:n,data:_}=o;return n&&(e[n]=[...e[n]||[],..._||[]]),e},{})),i&&(R.client_tracking_params=i),l&&(R.is_third_party_ad=l),{action:E?"promotedComplaint":"complaint",actionOptions:R}}}},567316:(e,o,n)=>{n.d(o,{ZP:()=>u,we:()=>D,nn:()=>M,zn:()=>g});var _=n(667294),a=n(407043),t=n(780280),s=n(784590),i=n(19121),l=n(883119),c=n(121151),r=n(898781),d=n(349700),E=n(966113),I=n(170168),T=n(785893);function R({iconAccessibilityLabel:e,icon:o,linkAccessibilityLabel:n,showNavigationIcon:_,text:a}){return(0,T.jsxs)(l.kC,{alignItems:"stretch",justifyContent:"start",children:[(0,T.jsx)(l.xu,{"data-test-id":"ad-reason-icon",children:(0,T.jsx)(l.Sj,{accessibilityLabel:e,bgColor:"lightGray",icon:o,iconColor:"darkGray"})}),(0,T.jsx)(l.xu,{alignSelf:"center","data-test-id":"ad-location-targeting-reason",height:"100%",marginStart:2,children:(0,T.jsx)(l.xv,{children:a})}),_&&n&&(0,T.jsx)(l.kC,{direction:"column",justifyContent:"center",children:(0,T.jsx)(l.JO,{accessibilityLabel:n,color:"default",icon:"arrow-forward"})})]})}var N=n(698330);function A({brandName:e,language:o,geoRegion:n,geoPostalCode:_,ageBucketMatch:a,localeMatch:t,interestMatch:s,genderMatch:c,deviceMatch:E,isCustomerListMatched:I,isShoppingTargetingRematched:A,isActAlikeMatched:P,isEngagementMatched:p,isExpandTargetingMatched:S,isFromGPSLocation:O,isVisitorMatched:m,isShoppingProspectingMatched:h,isPlPersonaMatched:g,gender:M,device:D}){var u;let C=(0,r.ZP)(),{id:L}=(0,i.Z)(),x=(0,N.mN)()(null!=L?L:""),G=null!==(u=null==x?void 0:x.gender)&&void 0!==u?u:"";return(0,T.jsx)(l.xu,{"data-test-id":"ad-reasons",children:(0,T.jsxs)(l.kC,{direction:"column",flex:"none",gap:{row:0,column:4},children:[""!==a&&(0,T.jsx)(R,{iconAccessibilityLabel:C.bt("Icon for ad targeting age bucket", "Icon for ad targeting age bucket", "app.common.react.components.PinRep.components.AdReasons.ageIcon", undefined, true),icon:"person",text:(0,d.nk)(C.bt("Age {{ ageBucketMatch }}", "Age {{ ageBucketMatch }}", "app.common.react.components.PinRep.components.AdReasonsModal.ageBucketMatch", undefined, true),{ageBucketMatch:(0,T.jsx)(l.xv,{inline:!0,weight:"bold",children:a},"ad-reasons-age-bucket")})}),""!==c&&"unspecified"!==G&&(0,T.jsx)(R,{iconAccessibilityLabel:C.bt("Icon for ad targeting gender", "Icon for ad targeting gender", "app.common.react.components.PinRep.components.AdReasons.genderIcon", undefined, true),icon:"person",text:(0,d.nk)(C.bt("{{ gender }}", "{{ gender }}", "app.common.react.components.PinRep.components.AdReasonsModal.genderMatch", undefined, true),{gender:(0,T.jsx)(l.xv,{inline:!0,weight:"bold",children:M},"ad-reasons-gender")})}),""!==n&&(0,T.jsx)(R,{iconAccessibilityLabel:C.bt("Icon for ad targeting location", "Icon for ad targeting location", "app.common.react.components.PinRep.components.AdReasons.locationIcon", undefined, true),icon:"location",text:(0,d.nk)(C.bt("Based in {{geoRegion}}", "Based in {{geoRegion}}", "app.common.react.components.PinRep.components.AdReasonsModal.locationTargeting", undefined, true),{geoRegion:(0,T.jsx)(l.xv,{inline:!0,weight:"bold",children:n},"ad-reasons-country-name")})}),""!==_&&(0,T.jsx)(R,{iconAccessibilityLabel:C.bt("Icon for ad targeting location", "Icon for ad targeting location", "app.common.react.components.PinRep.components.AdReasons.locationIcon", undefined, true),icon:"location",text:(0,d.nk)(C.bt("Based in {{geoPostalCode}}", "Based in {{geoPostalCode}}", "app.common.react.components.PinRep.components.AdReasonsModal.locationTargeting", undefined, true),{geoPostalCode:(0,T.jsx)(l.xv,{inline:!0,weight:"bold",children:_},"ad-reasons-country-name")})}),""!==t&&(0,T.jsx)(R,{iconAccessibilityLabel:C.bt("Icon for ad targeting locale", "Icon for ad targeting locale", "app.common.react.components.PinRep.components.AdReasons.localeIcon", undefined, true),icon:"globe",text:(0,d.nk)(C.bt("Language: {{ language }}", "Language {{ language }}", "app.common.react.components.PinRep.components.AdReasonsModal.localeMatch", undefined, true),{language:(0,T.jsx)(l.xv,{inline:!0,weight:"bold",children:o},"ad-reasons-locale")})}),""!==E&&(0,T.jsx)(R,{iconAccessibilityLabel:C.bt("Icon for ad targeting device", "Icon for ad targeting device", "app.common.react.components.PinRep.components.AdReasons.deviceIcon", undefined, true),icon:"desktop",text:(0,d.nk)(C.bt("Using {{ device }}", "Using {{ device }}", "app.common.react.components.PinRep.components.AdReasonsModal.deviceMatch", undefined, true),{device:(0,T.jsx)(l.xv,{inline:!0,weight:"bold",children:D},"ad-reasons-device")})}),""!==s&&(0,T.jsx)(R,{iconAccessibilityLabel:C.bt("Icon for ad targeting interest", "Icon for ad targeting interest", "app.common.react.components.PinRep.components.AdReasons.interestIcon", undefined, true),icon:"heart",text:(0,d.nk)(C.bt("Interested in {{ interestMatch }}", "Interested in {{ interestMatch }}", "app.common.react.components.PinRep.components.AdReasonsModal.interestMatch", undefined, true),{interestMatch:(0,T.jsx)(l.xv,{inline:!0,weight:"bold",children:s},"ad-reasons-interest")})}),A&&(0,T.jsx)(R,{iconAccessibilityLabel:C.bt("Icon for ad targeting user on an audience list", "Icon for ad targeting user on an audience list", "app.common.react.components.PinRep.components.AdReasons.shoppingTargeting", undefined, true),icon:"history",text:(0,d.nk)(C.bt("Interacted with {{brandName}}", "Interacted with {{brandName}}", "app.common.react.components.PinRep.components.AdReasonsModal.shoppingTargeting", undefined, true),{brandName:(0,T.jsx)(l.xv,{inline:!0,weight:"bold",children:e},"ad-reasons-shopping-targeting")})}),m&&(0,T.jsx)(R,{iconAccessibilityLabel:C.bt("Icon for ad targeting customers who interacted with this brand previously, visitor matched", "Icon for ad targeting customers who interacted with this brand previously, visitor matched", "app.common.react.components.PinRep.components.AdReasonsModal.visitorMatchIcon", undefined, true),icon:"history",text:(0,d.nk)(C.bt("Interacted with {{brandName}}", "Interacted with {{brandName}}", "app.common.react.components.PinRep.components.AdReasonsModal.visitorTargetingText", undefined, true),{brandName:(0,T.jsx)(l.xv,{inline:!0,weight:"bold",children:e},"ad-reason-visitor")})}),I&&(0,T.jsx)(R,{iconAccessibilityLabel:C.bt("Icon for ad targeting user on an audience list", "Icon for ad targeting user on an audience list", "app.common.react.components.PinRep.components.AdReasons.listIcon", undefined, true),icon:"menu",text:(0,d.nk)(C.bt("On a list provided by {{brandName}}", "On a list provided by {{brandName}}", "app.common.react.components.PinRep.components.AdReasonsModal.customerListTargeting", undefined, true),{brandName:(0,T.jsx)(l.xv,{inline:!0,weight:"bold",children:e},"ad-reasons-customer-list")})}),p&&(0,T.jsx)(R,{iconAccessibilityLabel:C.bt("Icon for ad targeting user on engagement audience", "Icon for ad targeting user on engagement audience", "app.common.react.components.PinRep.components.AdReasons.engagementIcon", undefined, true),icon:"pin",text:(0,d.nk)(C.bt("Interacted with {{brandName}} on Pinterest", "Interacted with {{brandName}} on Pinterest", "app.common.react.components.PinRep.components.AdReasonsModal.engagementTargeting", undefined, true),{brandName:(0,T.jsx)(l.xv,{inline:!0,weight:"bold",children:e},"ad-reasons-engagement")})}),P&&(0,T.jsx)(R,{iconAccessibilityLabel:C.bt("Icon for ad targeting user on actalike", "Icon for ad targeting user on act alike", "app.common.react.components.PinRep.components.AdReasons.actAlikeIcon", undefined, true),icon:"graph-bar",text:(0,d.nk)(C.bt("Similar demographic or interest as other {{brandName}} customers", "Similar demographic or interest as other {{brandName}} customers", "app.common.react.components.PinRep.components.AdReasonsModal.", undefined, true),{brandName:(0,T.jsx)(l.xv,{inline:!0,weight:"bold",children:e},"ad-reasons-act-alike")})}),(S||h||g)&&(0,T.jsx)(R,{iconAccessibilityLabel:C.bt("Icon for ad targeting user on expand targeting", "Icon for ad targeting user on expand targeting", "app.common.react.components.PinRep.components.AdReasons.expandTargeting", undefined, true),icon:"pinterest",text:C.bt("Relevant activity on Pinterest", "Relevant activity on Pinterest", "app.common.react.components.PinRep.components.AdReasonsModal.expandTargeting", undefined, true)}),O&&(0,T.jsx)(R,{iconAccessibilityLabel:C.bt("Icon for ad targeting user on GPS", "Icon for ad targeting user on GPS", "app.common.react.components.PinRep.components.AdReasons.GPS", undefined, true),icon:"location",text:C.bt("GPS location", "GPS Location", "app.common.react.components.PinRep.components.AdReasonsModal.GPS", undefined, true)})]})})}function P({onDismiss:e,brandName:o,userName:n,language:_,geoRegion:t,geoPostalCode:s,ageBucketMatch:i,localeMatch:R,interestMatch:N,genderMatch:P,deviceMatch:p,isCustomerListMatched:S,isShoppingTargetingRematched:O,isActAlikeMatched:m,isEngagementMatched:h,isExpandTargetingMatched:D,isFromGPSLocation:u,isVisitorMatched:C,isShoppingProspectingMatched:L,isPlPersonaMatched:x,thirdPartyAdAttributes:G}){let{logContextEvent:B}=(0,a.v)(),b=(0,r.ZP)(),v=g(P,b),f=M(p,b),U=O||S||h||m||D||u||C||x||L||""!==i||""!==R||""!==N||""!==v||""!==f||""!==t||""!==s,y=I.C0+`/${n}/`;return(0,T.jsx)(c.ZP,{accessibilityModalLabel:b.bt("Why am I seeing this ad?", "Why am I seeing this Ad?", "app.common.react.components.PinRep.components.AdReasonsModal", undefined, true),onDismiss:e,children:(0,T.jsxs)(l.xu,{paddingX:8,paddingY:6,children:[(0,T.jsxs)(l.xu,{display:"flex",justifyContent:"center",marginBottom:6,position:"relative",children:[(0,T.jsx)(l.xu,{position:"absolute",left:!0,children:(0,T.jsx)(l.hU,{accessibilityLabel:b.bt("Close", "Close", "app.common.react.components.PinRep.components.AdReasonsModal.closeModal", undefined, true),icon:"cancel",iconColor:"darkGray",onClick:()=>{B({event_type:102,element:11925,component:13756}),e()},size:"sm"})}),(0,T.jsx)(l.X6,{align:"center",size:"500",children:b.bt("Why you're seeing this ad", "Why you're seeing this ad", "Heading for promoted Pins explanation", undefined, true)})]}),(0,T.jsxs)(l.xu,{children:[(0,T.jsx)(l.kC,{direction:"column",gap:{row:0,column:4},children:U&&(0,T.jsx)(l.xu,{marginBottom:4,"data-test-id":"waista-reason-text",children:(0,T.jsx)(l.xv,{children:null!=G&&G.isEligibleForPromotedPartnership?(0,d.nk)(b.bt("{{ promotedPartnershipAdvertiserName }} is trying to reach specific groups of people through a partnership with {{ promotedPartnershipAttributionName }}. Based on what you've told us (or other information), we think you fit some of those groups:", "{{ promotedPartnershipAdvertiserName }} is trying to reach specific groups of people, through a partnership with {{ promotedPartnershipAttributionName }}. Based on what you've told us or other information, we think you fit some of those groups:", "app.common.react.components.PinRep.components.AdReasonsModal.audienceExplanationWAISTA", undefined, true),{promotedPartnershipAdvertiserName:G.promotedPartnershipAdvertiserName,promotedPartnershipAttributionName:G.promotedPartnershipAttributionName}):(0,d.nk)(b.bt("{{ brandName }} is trying to reach specific groups of people. Based on what you've told us or other information, we think you fit some of those groups:", "{{ brandName }} is trying to reach specific groups of people. Based on what you've told us or other information, we think you fit some of those groups:", "app.common.react.components.PinRep.components.AdReasonsModal.audienceExplanationWAISTA", undefined, true),{brandName:(0,T.jsx)(l.xv,{inline:!0,weight:"bold",children:(0,T.jsx)(l.rU,{href:y,display:"inlineBlock",onClick:()=>{B({event_type:101,component:13756,element:13407})},target:"blank",underline:"hover",children:o})},"ad-reasons-brand-name")})})})}),(0,T.jsx)(l.xu,{"data-test-id":"ad-reasons",children:(0,T.jsxs)(l.kC,{direction:"column",flex:"none",gap:{row:0,column:4},children:[(0,T.jsx)(A,{brandName:o,language:_,geoRegion:t,geoPostalCode:s,ageBucketMatch:i,localeMatch:R,genderMatch:P,interestMatch:N,deviceMatch:p,isCustomerListMatched:S,isShoppingTargetingRematched:O,isActAlikeMatched:m,isEngagementMatched:h,isExpandTargetingMatched:D,isFromGPSLocation:u,isVisitorMatched:C,isShoppingProspectingMatched:L,isPlPersonaMatched:x,gender:v,device:f}),U&&(0,T.jsx)(l.xu,{marginBottom:1,children:(0,T.jsx)(l.xv,{children:(0,d.nk)(b.bt("If this isn't right, {{ changeUserSettings }}", "If this isn't right, {{ changeUserSettings }}", "app.common.react.components.PinRep.components.AdReasonsModal.changeUserSettingsText", undefined, true),{changeUserSettings:(0,T.jsx)(l.xv,{inline:!0,weight:"bold",children:(0,T.jsx)(l.rU,{display:"inline",href:`${I.C0}${E.AHp}`,onClick:()=>{B({event_type:101,component:13756,element:13361})},target:"blank",underline:"hover",children:b.bt("update your personal information", "update your personal information", "app.common.react.components.PinRep.components.AdReasonsModal.changeUserSettings", undefined, true)})},"ad-reasons-change-user-settings")})})})]})}),(0,T.jsxs)(l.kC,{direction:"column",gap:{row:0,column:1},children:[(0,T.jsx)(l.xu,{marginBottom:1,marginTop:1,children:(0,T.jsx)(l.X6,{size:"400",children:b.bt("Ads on Pinterest", "Ads on Pinterest", "app.common.react.components.PinRep.components.AdReasonsModal.adsOnPinterestHeading", undefined, true)})}),(0,T.jsx)(l.xu,{marginBottom:4,children:(0,T.jsx)(l.xv,{children:(0,d.nk)(b.bt("We show you ads that may be based on your profile settings, websites you visit, ads you interact with or other factors. {{adPreferencesLink}}", "We show you ads that may be based on your profile settings, websites you visit, ads you interact with or other factors. {{adPreferencesLink}}", "app.common.react.components.PinRep.components.AdReasonsModal.adPreferencesText", undefined, true),{adPreferencesLink:(0,T.jsx)(l.xu,{"data-test-id":"ad-reasons-review-ad-preferences",children:(0,T.jsx)(l.xv,{inline:!0,weight:"bold",children:(0,T.jsx)(l.rU,{display:"inline",href:`${I.C0}${E.Gxc}`,onClick:()=>{B({event_type:101,component:13756,element:13401})},target:"blank",underline:"hover",children:b.bt("Review your ad preferences", "Review your ad preferences", "app.common.react.components.PinRep.components.AdReasonsModal.adPreferencesLink", undefined, true)})},"ad-reasons-review-ad-preferences")})})})}),(0,T.jsx)(l.xu,{marginBottom:4,children:(0,T.jsx)(l.xv,{children:(0,d.nk)(b.bt("For more about how we collect and use data, {{ privacyPolicyLink }}", "For more about how we collect and use data, {{ privacyPolicyLink }}", "app.common.react.components.PinRep.components.AdReasonsModal.privacyPolicyText", undefined, true),{privacyPolicyLink:(0,T.jsx)(l.xu,{"data-test-id":"ad-reasons-privacy-policy",children:(0,T.jsx)(l.xv,{inline:!0,weight:"bold",children:(0,T.jsx)(l.rU,{display:"inline",href:E.R_9,onClick:()=>{B({event_type:101,component:13756,element:13402})},target:"blank",underline:"hover",children:b.bt("read our Privacy Policy", "read our Privacy Policy", "app.common.react.components.PinRep.components.AdReasonsModal.privacyPolicyLink", undefined, true)})},"ad-reasons-privacy-policy")})})})}),(0,T.jsx)(l.xu,{marginBottom:4,children:(0,T.jsx)(l.xv,{children:(0,d.nk)(b.bt("To stop seeing content from an advertiser, {{ blockAccounts }}", "To stop seeing content from an advertiser, {{ blockAccounts }}", "app.common.react.components.PinRep.components.AdReasonsModal.privacyPolicyText", undefined, true),{blockAccounts:(0,T.jsx)(l.xu,{"data-test-id":"ad-reasons-block-accounts",children:(0,T.jsx)(l.xv,{inline:!0,weight:"bold",children:(0,T.jsx)(l.rU,{display:"inline",href:E.K_Y,onClick:()=>{B({event_type:101,component:13756,element:12058})},target:"blank",underline:"hover",children:b.bt("find out how to block accounts", "learn how to block accounts", "app.common.react.components.PinRep.components.AdReasonsModal.blockAccountLink", undefined, true)})},"ad-reasons-block-accounts")})})})})]})]})]})})}var p=n(350118);let S=e=>e.bt("Female", "Female", "waista.modal.attribute.female", undefined, true),O=e=>e.bt("Male", "Male", "waista.modal.attribute.male", undefined, true),m=e=>e.bt("Web", "Web", "waista.modal.attribute.web", undefined, true),h=e=>e.bt("Mobile web", "Mobile Web", "waista.modal.attribute.mWeb", undefined, true);function g(e,o){return"FEMALE"===e?S(o):"MALE"===e?O(o):""}function M(e,o){return"AppType_WEB"===e||"AppType_WEB_DENZEL"===e?m(o):"AppType_WEB_MOBILE"===e?h(o):""}function D(e,o){var n;let{name:_=""}=null!==(n=e.find(e=>e.key===o))&&void 0!==n?n:{};return _}function u({pinId:e,onDismiss:o}){var n,l,c,r,d;let{logContextEvent:E}=(0,a.v)(),{locale:I}=(0,t.B)(),{country:R=""}=(0,i.Z)(),N=(0,s.Z)({name:"CountriesResource",options:{hasEmptyState:!0}}),A=(0,s.Z)({name:"LocalesResource"}),S=(0,p.S6)()(e);(0,_.useEffect)(()=>{E({event_type:120,component:13756})},[E]);let{ad_targeting_attribution:O,promoter:m,is_eligible_for_promoted_partnership:h,promoted_partnership_attribution_name:g,promoted_partnership_advertiser_name:M}=null!=S?S:{},{is_customer_list_matched:u=!1,is_shopping_retargeting_matched:C=!1,is_actalike_matched:L=!1,is_engagement_matched:x=!1,is_expand_targeting_matched:G=!1,is_from_gps_location:B=!1,is_visitor_matched:b=!1,is_shopping_prospecting_matched:v=!1,is_pl_persona_matched:f=!1,matched_age_bucket:U="",matched_locale:y="",matched_interest:k="",matched_gender:H="",matched_device:z="",geo_region:j="",geo_postal_code:w=""}=null!==(n=function(e=null,o=4){return e&&Object.keys(e).filter(o=>"boolean"==typeof e[o]||"string"==typeof e[o]).slice(0,o).reduce((o,n)=>({...o,[n]:e[n]}),{})}(O))&&void 0!==n?n:{},Y=null!==(l=null==m?void 0:m.full_name)&&void 0!==l?l:"",F=function(e,o){var n;let{name:_=""}=null!==(n=e.find(e=>e.key===o))&&void 0!==n?n:{};return _}(null!==(c=N.data)&&void 0!==c?c:[],R),V=D(null!==(r=A.data)&&void 0!==r?r:[],I),W=null!==(d=null==m?void 0:m.username)&&void 0!==d?d:"";return(0,T.jsx)(P,{brandName:Y,userName:W,country:F,language:V,ageBucketMatch:U,localeMatch:y,interestMatch:k,genderMatch:H,deviceMatch:z,isCustomerListMatched:u,isShoppingTargetingRematched:C,isActAlikeMatched:L,isEngagementMatched:x,isExpandTargetingMatched:G,isFromGPSLocation:B,isVisitorMatched:b,onDismiss:o,geoRegion:j,geoPostalCode:w,isShoppingProspectingMatched:v,isPlPersonaMatched:f,thirdPartyAdAttributes:{isEligibleForPromotedPartnership:h,promotedPartnershipAttributionName:g,promotedPartnershipAdvertiserName:M}})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/12058.en_IN-130de644888597c2.mjs.map