# Accessibility Audit Report

**Date:** 2025-10-08T14:04:12.530Z
**Standard:** WCAG 2.1 Level AA
**Total Issues:** 570
**Pages Audited:** 13

## Summary by Page

| Page | Issues |
|------|--------|
| Home | ⚠️ 65 |
| About | ⚠️ 35 |
| Our Team | ⚠️ 59 |
| Strategy | ⚠️ 47 |
| Contact | ⚠️ 33 |
| Find a Contractor | ⚠️ 63 |
| Contractor Network | ⚠️ 32 |
| Resources | ⚠️ 42 |
| News Index | ⚠️ 49 |
| Guides Index | ⚠️ 49 |
| Documents Index | ⚠️ 32 |
| Coming Soon | ⚠️ 33 |
| 404 Page | ⚠️ 31 |

## Issues by Type

| Type | Count |
|------|-------|
| warning | 399 |
| error | 171 |

## Detailed Issues

### Home

**URL:** http://localhost:4321/

#### warning (41)

1. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `html > body > div:nth-child(1)`
   - Context: `<div class="skip-links"> <a href="#main-content" class=...</div>...`

2. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > div:nth-child(1) > a:nth-child(1)`
   - Context: `<a href="#main-content" class="skip-link bg-primary text-white px-4 py-2 rounded">
Skip to main cont...`

3. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > div:nth-child(1) > a:nth-child(2)`
   - Context: `<a href="#main-navigation" class="skip-link bg-primary text-white px-4 py-2 rounded">
Skip to naviga...`

4. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > div:nth-child(1) > a:nth-child(3)`
   - Context: `<a href="#footer" class="skip-link bg-primary text-white px-4 py-2 rounded">
Skip to footer
</a>...`

5. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#top-bar > div > div`
   - Context: `<div class="flex items-center justify-end gap-6 text-sm"> <a href="tel:+16047553469" cla...</div>...`

6. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > header > div > div > div:nth-child(3) > form > label`
   - Context: `<label for="desktop-search" class="sr-only">Search the site</label>...`

7. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `#main-content > section:nth-child(4) > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div > div > div:nth-child(2) > span`
   - Context: `<span class="font-bold text-lg" data-astro-cid-uei6yrzw="">500+ Contractors</span>...`

8. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `#main-content > section:nth-child(4) > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)`
   - Context: `<div class="text-white text-sm leading-relaxed mb-4" data-astro-cid-uei6yrzw="">Our network of certi...`

9. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `#main-content > section:nth-child(4) > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2)`
   - Context: `<div class="text-white font-semibold mb-2" data-astro-cid-uei6yrzw="">Certified Contractors</div>...`

10. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `#main-content > section:nth-child(4) > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3)`
   - Context: `<div class="text-white/90 text-xs mb-4" data-astro-cid-uei6yrzw="">Trusted professionals across BC</...`

11. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `#main-content > section:nth-child(4) > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div > div > div:nth-child(2) > span`
   - Context: `<span class="font-bold text-lg" data-astro-cid-uei6yrzw="">10,000+ Homes</span>...`

12. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `#main-content > section:nth-child(4) > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)`
   - Context: `<div class="text-white text-sm leading-relaxed mb-4" data-astro-cid-uei6yrzw="">Over ten thousand ho...`

13. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `#main-content > section:nth-child(4) > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2)`
   - Context: `<div class="text-white font-semibold mb-2" data-astro-cid-uei6yrzw="">Homes Improved</div>...`

14. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `#main-content > section:nth-child(4) > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3)`
   - Context: `<div class="text-white/90 text-xs mb-4" data-astro-cid-uei6yrzw="">Energy-efficient retrofits comp.....`

15. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `#main-content > section:nth-child(4) > div > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div > div > div:nth-child(2) > span`
   - Context: `<span class="font-bold text-lg" data-astro-cid-uei6yrzw="">15+ Years</span>...`

16. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `#main-content > section:nth-child(4) > div > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)`
   - Context: `<div class="text-white text-sm leading-relaxed mb-4" data-astro-cid-uei6yrzw="">Since 2010, we've be...`

17. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `#main-content > section:nth-child(4) > div > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2)`
   - Context: `<div class="text-white font-semibold mb-2" data-astro-cid-uei6yrzw="">Years of Excellence</div>...`

18. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `#main-content > section:nth-child(4) > div > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3)`
   - Context: `<div class="text-white/90 text-xs mb-4" data-astro-cid-uei6yrzw="">Leading the industry since 2010</...`

19. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 3:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G145.BgImage`
   - Selector: `#main-content > section:nth-child(8) > div:nth-child(3) > div:nth-child(1) > h3`
   - Context: `<h3 class="text-2xl font-bold text-gray-900 mb-4">Industry</h3>...`

20. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 3:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G145.BgImage`
   - Selector: `#main-content > section:nth-child(8) > div:nth-child(3) > div:nth-child(1) > div`
   - Context: `<div class="text-xl font-semibold text-primary">Residential Retrofit</div>...`

21. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#main-content > section:nth-child(11) > div:nth-child(2) > article:nth-child(1) > div`
   - Context: `<div class="p-6"> <div class="flex items-center ...</div>...`

22. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#main-content > section:nth-child(11) > div:nth-child(2) > article:nth-child(2) > div`
   - Context: `<div class="p-6"> <div class="flex items-center ...</div>...`

23. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#main-content > section:nth-child(11) > div:nth-child(2) > article:nth-child(3) > div`
   - Context: `<div class="p-6"> <div class="flex items-center ...</div>...`

24. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#main-content > section:nth-child(11) > div:nth-child(2) > article:nth-child(4) > div`
   - Context: `<div class="p-6"> <div class="flex items-center ...</div>...`

25. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#main-content > section:nth-child(11) > div:nth-child(2) > article:nth-child(5) > div`
   - Context: `<div class="p-6"> <div class="flex items-center ...</div>...`

26. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#main-content > section:nth-child(11) > div:nth-child(2) > article:nth-child(6) > div`
   - Context: `<div class="p-6"> <div class="flex items-center ...</div>...`

27. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#footer > div > div:nth-child(1) > div:nth-child(5) > div`
   - Context: `<div class="flex gap-4"> <a href="https://facebook.com"...</div>...`

28. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#cookie-banner`
   - Context: `<div id="cookie-banner" class="fixed bottom-0 left-0 right-0 z-50 transform transition-transform dur...`

29. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `html > body > div:nth-child(9)`
   - Context: `<div class="accessibility-tab-container fixed left-0 top-1/2 -translate-y-1/2 z-50" data-astro-cid-w...`

30. **Accessible name for this element does not contain the visible label text. Check that for user interface components with labels that include text or images of text, the name contains the text that is presented visually.**
   - Code: `WCAG2AA.Principle2.Guideline2_5.2_5_3.F96`
   - Selector: `#reset-font`
   - Context: `<button id="reset-font" class="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors fle...`

31. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `html > body > iframe`
   - Context: `<iframe data-marker-styles="1" data-turbo-permanent="1" data-marker-frame="true" data-hj-allow-ifram...`

32. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#feedback-button`
   - Context: `<iframe data-v-a3622410="" id="feedback-button" title="Marker.io feedback button" data-marker-frame=...`

33. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#feedback-button`
   - Context: `<iframe data-v-a3622410="" id="feedback-button" title="Marker.io feedback button" data-marker-frame=...`

34. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#more-options-popover`
   - Context: `<iframe data-v-7736eb08="" id="more-options-popover" title="Marker.io more options menu" data-marker...`

35. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#more-options-popover`
   - Context: `<iframe data-v-7736eb08="" id="more-options-popover" title="Marker.io more options menu" data-marker...`

36. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#fullscreen-ui`
   - Context: `<iframe id="fullscreen-ui" title="Marker.io feedback widget" data-marker-frame="" data-turbo-permane...`

37. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#fullscreen-ui`
   - Context: `<iframe id="fullscreen-ui" title="Marker.io feedback widget" data-marker-frame="" data-turbo-permane...`

38. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#tooltip-container-wrapper`
   - Context: `<iframe id="tooltip-container-wrapper" title="Marker.io tooltip UI" data-marker-frame="" data-turbo-...`

39. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#tooltip-container-wrapper`
   - Context: `<iframe id="tooltip-container-wrapper" title="Marker.io tooltip UI" data-marker-frame="" data-turbo-...`

40. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#notifications-root`
   - Context: `<iframe data-v-6be13180="" id="notifications-root" title="Marker.io notification overlay" data-marke...`

41. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#notifications-root`
   - Context: `<iframe data-v-6be13180="" id="notifications-root" title="Marker.io notification overlay" data-marke...`

#### error (24)

1. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 3:1, but text in this element has a contrast ratio of 1:1. Recommendation:  change text colour to #949494.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G145.Fail`
   - Selector: `#main-content > section:nth-child(1) > div > div:nth-child(2) > h1`
   - Context: `<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"> Building a More Energy-Efficie...</h1>...`

2. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 1:1. Recommendation:  change text colour to #767676.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > section:nth-child(1) > div > div:nth-child(2) > nav > ul > li:nth-child(2) > a`
   - Context: `<a href="/about" class="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semi...`

3. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > section:nth-child(3) > div > div:nth-child(1) > div:nth-child(2) > a`
   - Context: `<a href="/contractor-network" class="text-primary font-medium hover:underline" aria-label="Explore N...`

4. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > section:nth-child(3) > div > div:nth-child(2) > div:nth-child(2) > a`
   - Context: `<a href="/resources" class="text-primary font-medium hover:underline" aria-label="View Resources"> V...`

5. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > section:nth-child(3) > div > div:nth-child(3) > div:nth-child(2) > a`
   - Context: `<a href="/about/strategy" class="text-primary font-medium hover:underline" aria-label="Learn About O...`

6. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > section:nth-child(4) > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div > div > div:nth-child(1)`
   - Context: `<div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-primary text-xl" data-...`

7. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 3:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #00a0d3.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G145.Fail`
   - Selector: `#main-content > section:nth-child(4) > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div > button`
   - Context: `<button class="w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary text-xl f...`

8. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > section:nth-child(4) > div > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > a`
   - Context: `<a href="/contractor-network" class="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-...`

9. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.03:1. Recommendation:  change text colour to #008857.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > section:nth-child(4) > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div > div > div:nth-child(1)`
   - Context: `<div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-accent-green text-xl" ...`

10. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 3:1, but text in this element has a contrast ratio of 2.03:1. Recommendation:  change text colour to #00aa6c.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G145.Fail`
   - Selector: `#main-content > section:nth-child(4) > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div > button`
   - Context: `<button class="w-8 h-8 bg-white rounded-full flex items-center justify-center text-accent-green text...`

11. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > section:nth-child(4) > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > a`
   - Context: `<a href="/resources" class="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-primary p...`

12. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.34:1. Recommendation:  change text colour to #007cc2.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > section:nth-child(4) > div > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div > div > div:nth-child(1)`
   - Context: `<div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-accent-blue text-xl" d...`

13. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > section:nth-child(4) > div > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > a`
   - Context: `<a href="/about" class="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-primary px-4 ...`

14. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 3:1, but text in this element has a contrast ratio of 1:1. Recommendation:  change text colour to #949494.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G145.Fail`
   - Selector: `#main-content > section:nth-child(6) > div:nth-child(3) > div > h2`
   - Context: `<h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"> Ready to Improve Your Home? ...`

15. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 1:1. Recommendation:  change text colour to #767676.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > section:nth-child(6) > div:nth-child(3) > div > nav > ul > li:nth-child(2) > a`
   - Context: `<a href="/contact" class="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-se...`

16. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > section:nth-child(11) > div:nth-child(1) > a`
   - Context: `<a href="/resources/news" class="text-primary font-medium hover:underline" aria-label="View All"> Vi...`

17. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > section:nth-child(11) > div:nth-child(2) > article:nth-child(1) > div > a:nth-child(4)`
   - Context: `<a href="/resources/news/hpsc-launches-new-contractor-certification-program" class="text-primary fon...`

18. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > section:nth-child(11) > div:nth-child(2) > article:nth-child(2) > div > a:nth-child(4)`
   - Context: `<a href="/resources/news/new-energy-efficiency-rebates-available" class="text-primary font-medium ho...`

19. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > section:nth-child(11) > div:nth-child(2) > article:nth-child(3) > div > a:nth-child(4)`
   - Context: `<a href="/resources/news/heat-pump-technology-advances" class="text-primary font-medium hover:underl...`

20. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > section:nth-child(11) > div:nth-child(2) > article:nth-child(4) > div > a:nth-child(4)`
   - Context: `<a href="/resources/news/insulation-best-practices-2025" class="text-primary font-medium hover:under...`

21. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > section:nth-child(11) > div:nth-child(2) > article:nth-child(5) > div > a:nth-child(4)`
   - Context: `<a href="/resources/news/windows-doors-energy-star-updates" class="text-primary font-medium hover:un...`

22. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > section:nth-child(11) > div:nth-child(2) > article:nth-child(6) > div > a:nth-child(4)`
   - Context: `<a href="/resources/news/solar-battery-storage-incentives" class="text-primary font-medium hover:und...`

23. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change background to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#cookie-accept-btn`
   - Context: `<button id="cookie-accept-btn" class="flex-1 md:flex-initial px-6 py-2.5 bg-primary text-white round...`

24. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change background to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#reset-all`
   - Context: `<button id="reset-all" class="w-full px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded t...`

### About

**URL:** http://localhost:4321/about

#### warning (30)

1. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `html > body > div:nth-child(1)`
   - Context: `<div class="skip-links"> <a href="#main-content" class=...</div>...`

2. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > div:nth-child(1) > a:nth-child(1)`
   - Context: `<a href="#main-content" class="skip-link bg-primary text-white px-4 py-2 rounded">
Skip to main cont...`

3. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > div:nth-child(1) > a:nth-child(2)`
   - Context: `<a href="#main-navigation" class="skip-link bg-primary text-white px-4 py-2 rounded">
Skip to naviga...`

4. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > div:nth-child(1) > a:nth-child(3)`
   - Context: `<a href="#footer" class="skip-link bg-primary text-white px-4 py-2 rounded">
Skip to footer
</a>...`

5. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#top-bar > div > div`
   - Context: `<div class="flex items-center justify-end gap-6 text-sm"> <a href="tel:+16047553469" cla...</div>...`

6. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > header > div > div > div:nth-child(3) > form > label`
   - Context: `<label for="desktop-search" class="sr-only">Search the site</label>...`

7. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 3:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G145.BgImage`
   - Selector: `#main-content > div > section:nth-child(3) > div > div:nth-child(1) > div:nth-child(2) > h2`
   - Context: `<h2 class="text-3xl font-bold text-gray-900 mb-4">Home Performance</h2>...`

8. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage`
   - Selector: `#main-content > div > section:nth-child(3) > div > div:nth-child(1) > div:nth-child(2) > div > p`
   - Context: `<p class="text-gray-700 leading-relaxed mb-4"> Home performance is determined...</p>...`

9. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage`
   - Selector: `#main-content > div > section:nth-child(3) > div > div:nth-child(1) > div:nth-child(2) > div > a`
   - Context: `<a href="/resources" class="inline-flex items-center gap-2 text-primary font-semibold hover:text-pri...`

10. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage`
   - Selector: `#main-content > div > section:nth-child(4) > div > div:nth-child(2) > div > div:nth-child(1)`
   - Context: `<div class="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center ...`

11. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 3:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G145.BgImage`
   - Selector: `#main-content > div > section:nth-child(5) > div > div:nth-child(1) > h3`
   - Context: `<h3 class="text-xl font-bold text-gray-900 mb-2">Building Envelope</h3>...`

12. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage`
   - Selector: `#main-content > div > section:nth-child(5) > div > div:nth-child(1) > p`
   - Context: `<p class="text-gray-600 text-sm">Walls, windows, doors, insulati...</p>...`

13. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 3:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G145.BgImage`
   - Selector: `#main-content > div > section:nth-child(6) > div > div:nth-child(2) > div > div > h2`
   - Context: `<h2 class="text-2xl font-bold mb-4">Land Acknowledgment</h2>...`

14. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage`
   - Selector: `#main-content > div > section:nth-child(6) > div > div:nth-child(2) > div > div > p`
   - Context: `<p class="text-lg text-gray-100 leading-relaxed"> The HPSC recognizes and acknow...</p>...`

15. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#main-content > div > section:nth-child(7) > div`
   - Context: `<div class="grid grid-cols-1 md:grid-cols-3 gap-6"> <a href="/about/our-team" clas...</div>...`

16. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#footer > div > div:nth-child(1) > div:nth-child(5) > div`
   - Context: `<div class="flex gap-4"> <a href="https://facebook.com"...</div>...`

17. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#cookie-banner`
   - Context: `<div id="cookie-banner" class="fixed bottom-0 left-0 right-0 z-50 transform transition-transform dur...`

18. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `html > body > div:nth-child(9)`
   - Context: `<div class="accessibility-tab-container fixed left-0 top-1/2 -translate-y-1/2 z-50" data-astro-cid-w...`

19. **Accessible name for this element does not contain the visible label text. Check that for user interface components with labels that include text or images of text, the name contains the text that is presented visually.**
   - Code: `WCAG2AA.Principle2.Guideline2_5.2_5_3.F96`
   - Selector: `#reset-font`
   - Context: `<button id="reset-font" class="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors fle...`

20. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `html > body > iframe`
   - Context: `<iframe data-marker-styles="1" data-turbo-permanent="1" data-marker-frame="true" data-hj-allow-ifram...`

21. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#feedback-button`
   - Context: `<iframe data-v-a3622410="" id="feedback-button" title="Marker.io feedback button" data-marker-frame=...`

22. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#feedback-button`
   - Context: `<iframe data-v-a3622410="" id="feedback-button" title="Marker.io feedback button" data-marker-frame=...`

23. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#more-options-popover`
   - Context: `<iframe data-v-7736eb08="" id="more-options-popover" title="Marker.io more options menu" data-marker...`

24. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#more-options-popover`
   - Context: `<iframe data-v-7736eb08="" id="more-options-popover" title="Marker.io more options menu" data-marker...`

25. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#fullscreen-ui`
   - Context: `<iframe id="fullscreen-ui" title="Marker.io feedback widget" data-marker-frame="" data-turbo-permane...`

26. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#fullscreen-ui`
   - Context: `<iframe id="fullscreen-ui" title="Marker.io feedback widget" data-marker-frame="" data-turbo-permane...`

27. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#tooltip-container-wrapper`
   - Context: `<iframe id="tooltip-container-wrapper" title="Marker.io tooltip UI" data-marker-frame="" data-turbo-...`

28. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#tooltip-container-wrapper`
   - Context: `<iframe id="tooltip-container-wrapper" title="Marker.io tooltip UI" data-marker-frame="" data-turbo-...`

29. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#notifications-root`
   - Context: `<iframe data-v-6be13180="" id="notifications-root" title="Marker.io notification overlay" data-marke...`

30. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#notifications-root`
   - Context: `<iframe data-v-6be13180="" id="notifications-root" title="Marker.io notification overlay" data-marke...`

#### error (5)

1. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > nav > ol > li > a > span`
   - Context: `<span itemprop="name">About</span>...`

2. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(4) > div > div:nth-child(2) > div > div:nth-child(2) > p:nth-child(1)`
   - Context: `<p class="text-sm font-semibold text-primary uppercase tracking-wide"> HPSC Established </p>...`

3. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(7) > div > a:nth-child(1) > span`
   - Context: `<span class="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-...`

4. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change background to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#cookie-accept-btn`
   - Context: `<button id="cookie-accept-btn" class="flex-1 md:flex-initial px-6 py-2.5 bg-primary text-white round...`

5. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change background to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#reset-all`
   - Context: `<button id="reset-all" class="w-full px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded t...`

### Our Team

**URL:** http://localhost:4321/about/our-team

#### warning (26)

1. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `html > body > div:nth-child(1)`
   - Context: `<div class="skip-links"> <a href="#main-content" class=...</div>...`

2. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > div:nth-child(1) > a:nth-child(1)`
   - Context: `<a href="#main-content" class="skip-link bg-primary text-white px-4 py-2 rounded">
Skip to main cont...`

3. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > div:nth-child(1) > a:nth-child(2)`
   - Context: `<a href="#main-navigation" class="skip-link bg-primary text-white px-4 py-2 rounded">
Skip to naviga...`

4. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > div:nth-child(1) > a:nth-child(3)`
   - Context: `<a href="#footer" class="skip-link bg-primary text-white px-4 py-2 rounded">
Skip to footer
</a>...`

5. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#top-bar > div > div`
   - Context: `<div class="flex items-center justify-end gap-6 text-sm"> <a href="tel:+16047553469" cla...</div>...`

6. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > header > div > div > div:nth-child(3) > form > label`
   - Context: `<label for="desktop-search" class="sr-only">Search the site</label>...`

7. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage`
   - Selector: `#main-content > div > div:nth-child(3) > p`
   - Context: `<p class="text-gray-700 leading-relaxed"> The HPSC recognizes and acknow...</p>...`

8. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 3:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G145.BgImage`
   - Selector: `#main-content > div > section:nth-child(7) > div > h2`
   - Context: `<h2 class="text-3xl font-bold mb-4">Join Our Mission</h2>...`

9. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage`
   - Selector: `#main-content > div > section:nth-child(7) > div > p`
   - Context: `<p class="text-xl mb-8 text-white/90 max-w-2xl">
Interested in contributing to ...</p>...`

10. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#main-content > div > section:nth-child(7) > div > div`
   - Context: `<div class="flex flex-wrap gap-4"> <a href="/get-involved" class=...</div>...`

11. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage`
   - Selector: `#main-content > div > section:nth-child(7) > div > div > a:nth-child(2)`
   - Context: `<a href="/contact" class="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:...`

12. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#footer > div > div:nth-child(1) > div:nth-child(5) > div`
   - Context: `<div class="flex gap-4"> <a href="https://facebook.com"...</div>...`

13. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#cookie-banner`
   - Context: `<div id="cookie-banner" class="fixed bottom-0 left-0 right-0 z-50 transform transition-transform dur...`

14. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `html > body > div:nth-child(9)`
   - Context: `<div class="accessibility-tab-container fixed left-0 top-1/2 -translate-y-1/2 z-50" data-astro-cid-w...`

15. **Accessible name for this element does not contain the visible label text. Check that for user interface components with labels that include text or images of text, the name contains the text that is presented visually.**
   - Code: `WCAG2AA.Principle2.Guideline2_5.2_5_3.F96`
   - Selector: `#reset-font`
   - Context: `<button id="reset-font" class="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors fle...`

16. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `html > body > iframe`
   - Context: `<iframe data-marker-styles="1" data-turbo-permanent="1" data-marker-frame="true" data-hj-allow-ifram...`

17. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#feedback-button`
   - Context: `<iframe data-v-a3622410="" id="feedback-button" title="Marker.io feedback button" data-marker-frame=...`

18. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#feedback-button`
   - Context: `<iframe data-v-a3622410="" id="feedback-button" title="Marker.io feedback button" data-marker-frame=...`

19. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#more-options-popover`
   - Context: `<iframe data-v-7736eb08="" id="more-options-popover" title="Marker.io more options menu" data-marker...`

20. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#more-options-popover`
   - Context: `<iframe data-v-7736eb08="" id="more-options-popover" title="Marker.io more options menu" data-marker...`

21. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#fullscreen-ui`
   - Context: `<iframe id="fullscreen-ui" title="Marker.io feedback widget" data-marker-frame="" data-turbo-permane...`

22. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#fullscreen-ui`
   - Context: `<iframe id="fullscreen-ui" title="Marker.io feedback widget" data-marker-frame="" data-turbo-permane...`

23. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#tooltip-container-wrapper`
   - Context: `<iframe id="tooltip-container-wrapper" title="Marker.io tooltip UI" data-marker-frame="" data-turbo-...`

24. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#tooltip-container-wrapper`
   - Context: `<iframe id="tooltip-container-wrapper" title="Marker.io tooltip UI" data-marker-frame="" data-turbo-...`

25. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#notifications-root`
   - Context: `<iframe data-v-6be13180="" id="notifications-root" title="Marker.io notification overlay" data-marke...`

26. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#notifications-root`
   - Context: `<iframe data-v-6be13180="" id="notifications-root" title="Marker.io notification overlay" data-marke...`

#### error (33)

1. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > nav > ol > li:nth-child(1) > a > span`
   - Context: `<span itemprop="name">About</span>...`

2. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > nav > ol > li:nth-child(2) > a > span`
   - Context: `<span itemprop="name">Our Team</span>...`

3. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > p:nth-child(2)`
   - Context: `<p class="text-primary font-semibold mb-3"> Executive Director </p>...`

4. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > a`
   - Context: `<a href="#" class="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-co...`

5. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > p:nth-child(2)`
   - Context: `<p class="text-primary font-semibold mb-3"> Manager of Industry Engagement...</p>...`

6. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > a`
   - Context: `<a href="#" class="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-co...`

7. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(4) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > p:nth-child(2)`
   - Context: `<p class="text-primary font-semibold mb-3"> Program Manager </p>...`

8. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(4) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > a`
   - Context: `<a href="#" class="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-co...`

9. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(4) > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > p:nth-child(2)`
   - Context: `<p class="text-primary font-semibold mb-3"> Coordinator </p>...`

10. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(4) > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > a`
   - Context: `<a href="#" class="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-co...`

11. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(4) > div:nth-child(2) > div:nth-child(5) > div:nth-child(2) > p:nth-child(2)`
   - Context: `<p class="text-primary font-semibold mb-3"> Coordinator </p>...`

12. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(4) > div:nth-child(2) > div:nth-child(5) > div:nth-child(2) > a`
   - Context: `<a href="#" class="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-co...`

13. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(4) > div:nth-child(2) > div:nth-child(6) > div:nth-child(2) > p:nth-child(2)`
   - Context: `<p class="text-primary font-semibold mb-3"> Coordinator </p>...`

14. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(4) > div:nth-child(2) > div:nth-child(6) > div:nth-child(2) > a`
   - Context: `<a href="#" class="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-co...`

15. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.43:1. Recommendation:  change text colour to #007faa.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > p`
   - Context: `<p class="text-primary-dark font-semibold text-sm mb-3"> Board Chair </p>...`

16. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > a`
   - Context: `<a href="#" class="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-co...`

17. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.43:1. Recommendation:  change text colour to #007faa.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(5) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > p`
   - Context: `<p class="text-primary-dark font-semibold text-sm mb-3"> Board Member </p>...`

18. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(5) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > a`
   - Context: `<a href="#" class="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-co...`

19. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.43:1. Recommendation:  change text colour to #007faa.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(5) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > p`
   - Context: `<p class="text-primary-dark font-semibold text-sm mb-3"> Board Member </p>...`

20. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(5) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > a`
   - Context: `<a href="#" class="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-co...`

21. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.43:1. Recommendation:  change text colour to #007faa.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(5) > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > p`
   - Context: `<p class="text-primary-dark font-semibold text-sm mb-3"> Board Member </p>...`

22. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(5) > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > a`
   - Context: `<a href="#" class="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-co...`

23. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.43:1. Recommendation:  change text colour to #007faa.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(5) > div:nth-child(2) > div:nth-child(5) > div:nth-child(2) > p`
   - Context: `<p class="text-primary-dark font-semibold text-sm mb-3"> Board Member </p>...`

24. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(5) > div:nth-child(2) > div:nth-child(5) > div:nth-child(2) > a`
   - Context: `<a href="#" class="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-co...`

25. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.03:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(6) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > p`
   - Context: `<p class="text-primary-light font-semibold text-sm mb-3"> Advisor to the Board </p>...`

26. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(6) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > a`
   - Context: `<a href="#" class="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-co...`

27. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.03:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(6) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > p`
   - Context: `<p class="text-primary-light font-semibold text-sm mb-3"> Advisor to the Board </p>...`

28. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(6) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > a`
   - Context: `<a href="#" class="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-co...`

29. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.03:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(6) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > p`
   - Context: `<p class="text-primary-light font-semibold text-sm mb-3"> Advisor to the Board </p>...`

30. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(6) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > a`
   - Context: `<a href="#" class="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-co...`

31. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(7) > div > div > a:nth-child(1)`
   - Context: `<a href="/get-involved" class="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gra...`

32. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change background to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#cookie-accept-btn`
   - Context: `<button id="cookie-accept-btn" class="flex-1 md:flex-initial px-6 py-2.5 bg-primary text-white round...`

33. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change background to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#reset-all`
   - Context: `<button id="reset-all" class="w-full px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded t...`

### Strategy

**URL:** http://localhost:4321/about/strategy

#### warning (27)

1. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `html > body > div:nth-child(1)`
   - Context: `<div class="skip-links"> <a href="#main-content" class=...</div>...`

2. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > div:nth-child(1) > a:nth-child(1)`
   - Context: `<a href="#main-content" class="skip-link bg-primary text-white px-4 py-2 rounded">
Skip to main cont...`

3. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > div:nth-child(1) > a:nth-child(2)`
   - Context: `<a href="#main-navigation" class="skip-link bg-primary text-white px-4 py-2 rounded">
Skip to naviga...`

4. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > div:nth-child(1) > a:nth-child(3)`
   - Context: `<a href="#footer" class="skip-link bg-primary text-white px-4 py-2 rounded">
Skip to footer
</a>...`

5. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#top-bar > div > div`
   - Context: `<div class="flex items-center justify-end gap-6 text-sm"> <a href="tel:+16047553469" cla...</div>...`

6. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > header > div > div > div:nth-child(3) > form > label`
   - Context: `<label for="desktop-search" class="sr-only">Search the site</label>...`

7. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 3:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G145.BgImage`
   - Selector: `#main-content > div > section:nth-child(4) > div > div > div > h2`
   - Context: `<h2 class="text-2xl font-bold text-gray-900 mb-2">Download the Full Strategic Pla...</h2>...`

8. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage`
   - Selector: `#main-content > div > section:nth-child(4) > div > div > div > p`
   - Context: `<p class="text-gray-600">Access the complete strategic p...</p>...`

9. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 3:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G145.BgImage`
   - Selector: `#main-content > div > section:nth-child(5) > div > h2`
   - Context: `<h2 class="text-3xl font-bold mb-4">Help Shape Our Strategy</h2>...`

10. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage`
   - Selector: `#main-content > div > section:nth-child(5) > div > p`
   - Context: `<p class="text-xl mb-8 text-white/90 max-w-2xl mx-auto"> We welcome input from industry...</p>...`

11. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#main-content > div > section:nth-child(5) > div > div`
   - Context: `<div class="flex flex-wrap gap-4 justify-center"> <a href="/about/get-involved" ...</div>...`

12. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage`
   - Selector: `#main-content > div > section:nth-child(5) > div > div > a:nth-child(2)`
   - Context: `<a href="/contact" class="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:...`

13. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#footer > div > div:nth-child(1) > div:nth-child(5) > div`
   - Context: `<div class="flex gap-4"> <a href="https://facebook.com"...</div>...`

14. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#cookie-banner`
   - Context: `<div id="cookie-banner" class="fixed bottom-0 left-0 right-0 z-50 transform transition-transform dur...`

15. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `html > body > div:nth-child(9)`
   - Context: `<div class="accessibility-tab-container fixed left-0 top-1/2 -translate-y-1/2 z-50" data-astro-cid-w...`

16. **Accessible name for this element does not contain the visible label text. Check that for user interface components with labels that include text or images of text, the name contains the text that is presented visually.**
   - Code: `WCAG2AA.Principle2.Guideline2_5.2_5_3.F96`
   - Selector: `#reset-font`
   - Context: `<button id="reset-font" class="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors fle...`

17. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `html > body > iframe`
   - Context: `<iframe data-marker-styles="1" data-turbo-permanent="1" data-marker-frame="true" data-hj-allow-ifram...`

18. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#feedback-button`
   - Context: `<iframe data-v-a3622410="" id="feedback-button" title="Marker.io feedback button" data-marker-frame=...`

19. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#feedback-button`
   - Context: `<iframe data-v-a3622410="" id="feedback-button" title="Marker.io feedback button" data-marker-frame=...`

20. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#more-options-popover`
   - Context: `<iframe data-v-7736eb08="" id="more-options-popover" title="Marker.io more options menu" data-marker...`

21. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#more-options-popover`
   - Context: `<iframe data-v-7736eb08="" id="more-options-popover" title="Marker.io more options menu" data-marker...`

22. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#fullscreen-ui`
   - Context: `<iframe id="fullscreen-ui" title="Marker.io feedback widget" data-marker-frame="" data-turbo-permane...`

23. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#fullscreen-ui`
   - Context: `<iframe id="fullscreen-ui" title="Marker.io feedback widget" data-marker-frame="" data-turbo-permane...`

24. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#tooltip-container-wrapper`
   - Context: `<iframe id="tooltip-container-wrapper" title="Marker.io tooltip UI" data-marker-frame="" data-turbo-...`

25. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#tooltip-container-wrapper`
   - Context: `<iframe id="tooltip-container-wrapper" title="Marker.io tooltip UI" data-marker-frame="" data-turbo-...`

26. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#notifications-root`
   - Context: `<iframe data-v-6be13180="" id="notifications-root" title="Marker.io notification overlay" data-marke...`

27. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#notifications-root`
   - Context: `<iframe data-v-6be13180="" id="notifications-root" title="Marker.io notification overlay" data-marke...`

#### error (20)

1. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > nav > ol > li:nth-child(1) > a > span`
   - Context: `<span itemprop="name">About</span>...`

2. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > nav > ol > li:nth-child(2) > a > span`
   - Context: `<span itemprop="name">Strategy</span>...`

3. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change background to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > div:nth-child(3) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div > div:nth-child(1) > span`
   - Context: `<span class="inline-block px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full mb-3"> ...`

4. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change background to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > div:nth-child(3) > section:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > span`
   - Context: `<span class="inline-block px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full mb-3"> ...`

5. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 1:1. Recommendation:  change text colour to #767676.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > div:nth-child(3) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div > div:nth-child(1) > span`
   - Context: `<span class="inline-block px-3 py-1 bg-blue text-white text-xs font-semibold rounded-full mb-3"> Adv...`

6. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 1:1. Recommendation:  change text colour to #767676.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > div:nth-child(3) > section:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > span`
   - Context: `<span class="inline-block px-3 py-1 bg-blue text-white text-xs font-semibold rounded-full mb-3"> Adv...`

7. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 1:1. Recommendation:  change text colour to #767676.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > div:nth-child(3) > section:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(1) > span`
   - Context: `<span class="inline-block px-3 py-1 bg-blue text-white text-xs font-semibold rounded-full mb-3"> Act...`

8. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 1:1. Recommendation:  change text colour to #767676.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > div:nth-child(3) > section:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div > div:nth-child(1) > span`
   - Context: `<span class="inline-block px-3 py-1 bg-green text-white text-xs font-semibold rounded-full mb-3"> Ad...`

9. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 1:1. Recommendation:  change text colour to #767676.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > div:nth-child(3) > section:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > span`
   - Context: `<span class="inline-block px-3 py-1 bg-green text-white text-xs font-semibold rounded-full mb-3"> Ac...`

10. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 1:1. Recommendation:  change text colour to #767676.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > div:nth-child(3) > section:nth-child(3) > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(1) > span`
   - Context: `<span class="inline-block px-3 py-1 bg-green text-white text-xs font-semibold rounded-full mb-3"> Ac...`

11. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 1:1. Recommendation:  change text colour to #767676.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > div:nth-child(3) > section:nth-child(3) > div:nth-child(2) > div:nth-child(4) > div > div:nth-child(1) > span`
   - Context: `<span class="inline-block px-3 py-1 bg-green text-white text-xs font-semibold rounded-full mb-3"> Ac...`

12. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 1:1. Recommendation:  change text colour to #767676.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > div:nth-child(3) > section:nth-child(3) > div:nth-child(2) > div:nth-child(5) > div > div:nth-child(1) > span`
   - Context: `<span class="inline-block px-3 py-1 bg-green text-white text-xs font-semibold rounded-full mb-3"> Ac...`

13. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 1:1. Recommendation:  change text colour to #767676.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > div:nth-child(3) > section:nth-child(3) > div:nth-child(2) > div:nth-child(6) > div > div:nth-child(1) > span`
   - Context: `<span class="inline-block px-3 py-1 bg-green text-white text-xs font-semibold rounded-full mb-3"> Ac...`

14. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 1:1. Recommendation:  change text colour to #767676.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > div:nth-child(3) > section:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div > div:nth-child(1) > span`
   - Context: `<span class="inline-block px-3 py-1 bg-orange text-white text-xs font-semibold rounded-full mb-3"> A...`

15. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 1:1. Recommendation:  change text colour to #767676.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > div:nth-child(3) > section:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > span`
   - Context: `<span class="inline-block px-3 py-1 bg-orange text-white text-xs font-semibold rounded-full mb-3"> A...`

16. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 1:1. Recommendation:  change text colour to #767676.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > div:nth-child(3) > section:nth-child(4) > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(1) > span`
   - Context: `<span class="inline-block px-3 py-1 bg-orange text-white text-xs font-semibold rounded-full mb-3"> A...`

17. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change background to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(4) > div > div > a`
   - Context: `<a href="/documents/hpsc-strategic-plan.pdf" class="inline-flex items-center gap-2 px-8 py-3 bg-prim...`

18. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(5) > div > div > a:nth-child(1)`
   - Context: `<a href="/about/get-involved" class="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:...`

19. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change background to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#cookie-accept-btn`
   - Context: `<button id="cookie-accept-btn" class="flex-1 md:flex-initial px-6 py-2.5 bg-primary text-white round...`

20. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change background to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#reset-all`
   - Context: `<button id="reset-all" class="w-full px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded t...`

### Contact

**URL:** http://localhost:4321/contact

#### warning (24)

1. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `html > body > div:nth-child(1)`
   - Context: `<div class="skip-links"> <a href="#main-content" class=...</div>...`

2. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > div:nth-child(1) > a:nth-child(1)`
   - Context: `<a href="#main-content" class="skip-link bg-primary text-white px-4 py-2 rounded">
Skip to main cont...`

3. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > div:nth-child(1) > a:nth-child(2)`
   - Context: `<a href="#main-navigation" class="skip-link bg-primary text-white px-4 py-2 rounded">
Skip to naviga...`

4. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > div:nth-child(1) > a:nth-child(3)`
   - Context: `<a href="#footer" class="skip-link bg-primary text-white px-4 py-2 rounded">
Skip to footer
</a>...`

5. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#top-bar > div > div`
   - Context: `<div class="flex items-center justify-end gap-6 text-sm"> <a href="tel:+16047553469" cla...</div>...`

6. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > header > div > div > div:nth-child(3) > form > label`
   - Context: `<label for="desktop-search" class="sr-only">Search the site</label>...`

7. **This select element does not have a value available to an accessibility API.**
   - Code: `WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.Select.Value`
   - Selector: `#subject`
   - Context: `<select id="subject" name="subject" required="" class="w-full px-4 py-3 border border-gray-300 round...`

8. **If this selection list contains groups of related options, they should be grouped with optgroup.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H85.2`
   - Selector: `#subject`
   - Context: `<select id="subject" name="subject" required="" class="w-full px-4 py-3 border border-gray-300 round...`

9. **This content looks like it is simulating an ordered list using plain text. If so, marking up this content with an ol element would add proper structure information to the document.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48.2`
   - Selector: `#main-content > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > p`
   - Context: `<p class="text-gray-600">123 Energy Efficiency Way<br>Va...</p>...`

10. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#footer > div > div:nth-child(1) > div:nth-child(5) > div`
   - Context: `<div class="flex gap-4"> <a href="https://facebook.com"...</div>...`

11. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#cookie-banner`
   - Context: `<div id="cookie-banner" class="fixed bottom-0 left-0 right-0 z-50 transform transition-transform dur...`

12. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `html > body > div:nth-child(9)`
   - Context: `<div class="accessibility-tab-container fixed left-0 top-1/2 -translate-y-1/2 z-50" data-astro-cid-w...`

13. **Accessible name for this element does not contain the visible label text. Check that for user interface components with labels that include text or images of text, the name contains the text that is presented visually.**
   - Code: `WCAG2AA.Principle2.Guideline2_5.2_5_3.F96`
   - Selector: `#reset-font`
   - Context: `<button id="reset-font" class="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors fle...`

14. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `html > body > iframe`
   - Context: `<iframe data-marker-styles="1" data-turbo-permanent="1" data-marker-frame="true" data-hj-allow-ifram...`

15. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#feedback-button`
   - Context: `<iframe data-v-a3622410="" id="feedback-button" title="Marker.io feedback button" data-marker-frame=...`

16. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#feedback-button`
   - Context: `<iframe data-v-a3622410="" id="feedback-button" title="Marker.io feedback button" data-marker-frame=...`

17. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#more-options-popover`
   - Context: `<iframe data-v-7736eb08="" id="more-options-popover" title="Marker.io more options menu" data-marker...`

18. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#more-options-popover`
   - Context: `<iframe data-v-7736eb08="" id="more-options-popover" title="Marker.io more options menu" data-marker...`

19. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#fullscreen-ui`
   - Context: `<iframe id="fullscreen-ui" title="Marker.io feedback widget" data-marker-frame="" data-turbo-permane...`

20. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#fullscreen-ui`
   - Context: `<iframe id="fullscreen-ui" title="Marker.io feedback widget" data-marker-frame="" data-turbo-permane...`

21. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#tooltip-container-wrapper`
   - Context: `<iframe id="tooltip-container-wrapper" title="Marker.io tooltip UI" data-marker-frame="" data-turbo-...`

22. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#tooltip-container-wrapper`
   - Context: `<iframe id="tooltip-container-wrapper" title="Marker.io tooltip UI" data-marker-frame="" data-turbo-...`

23. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#notifications-root`
   - Context: `<iframe data-v-6be13180="" id="notifications-root" title="Marker.io notification overlay" data-marke...`

24. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#notifications-root`
   - Context: `<iframe data-v-6be13180="" id="notifications-root" title="Marker.io notification overlay" data-marke...`

#### error (9)

1. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-navigation > ul > li:nth-child(4) > a`
   - Context: `<a href="/contact" class="font-medium transition-colors block py-2 text-primary border-b-2 border-pr...`

2. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > nav > ol > li > a > span`
   - Context: `<span itemprop="name">Contact Us</span>...`

3. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > a`
   - Context: `<a href="tel:+16047553469" class="text-primary hover:text-primary-dark transition-colors"> (604) 755...`

4. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > a`
   - Context: `<a href="mailto:info@homeperformance.ca" class="text-primary hover:text-primary-dark transition-colo...`

5. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > div > div:nth-child(3) > div > div:nth-child(1) > details:nth-child(4) > div > div > a`
   - Context: `<a href="/contractor-network/certification" class="text-primary hover:underline">certification page<...`

6. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change background to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > div > div:nth-child(3) > div > div:nth-child(2) > div > div > a`
   - Context: `<a href="#contact-form" class="block w-full bg-primary text-white font-semibold px-6 py-3 rounded-lg...`

7. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > div > div:nth-child(3) > div > div:nth-child(2) > div > div > p:nth-child(5) > a`
   - Context: `<a href="tel:+16047553469" class="text-primary hover:underline" data-astro-cid-uw5kdbxl="">(604) 755...`

8. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change background to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#cookie-accept-btn`
   - Context: `<button id="cookie-accept-btn" class="flex-1 md:flex-initial px-6 py-2.5 bg-primary text-white round...`

9. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change background to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#reset-all`
   - Context: `<button id="reset-all" class="w-full px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded t...`

### Find a Contractor

**URL:** http://localhost:4321/contractor-network/find-a-contractor

#### warning (57)

1. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `html > body > div:nth-child(1)`
   - Context: `<div class="skip-links"> <a href="#main-content" class=...</div>...`

2. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > div:nth-child(1) > a:nth-child(1)`
   - Context: `<a href="#main-content" class="skip-link bg-primary text-white px-4 py-2 rounded">
Skip to main cont...`

3. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > div:nth-child(1) > a:nth-child(2)`
   - Context: `<a href="#main-navigation" class="skip-link bg-primary text-white px-4 py-2 rounded">
Skip to naviga...`

4. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > div:nth-child(1) > a:nth-child(3)`
   - Context: `<a href="#footer" class="skip-link bg-primary text-white px-4 py-2 rounded">
Skip to footer
</a>...`

5. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#top-bar > div > div`
   - Context: `<div class="flex items-center justify-end gap-6 text-sm"> <a href="tel:+16047553469" cla...</div>...`

6. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > header > div > div > div:nth-child(3) > form > label`
   - Context: `<label for="desktop-search" class="sr-only">Search the site</label>...`

7. **This select element does not have a value available to an accessibility API.**
   - Code: `WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.Select.Value`
   - Selector: `#service-type`
   - Context: `<select id="service-type" name="service-type" class="w-full px-4 py-3 rounded-lg border border-gray-...`

8. **If this selection list contains groups of related options, they should be grouped with optgroup.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H85.2`
   - Selector: `#service-type`
   - Context: `<select id="service-type" name="service-type" class="w-full px-4 py-3 rounded-lg border border-gray-...`

9. **This select element does not have a value available to an accessibility API.**
   - Code: `WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.Select.Value`
   - Selector: `#location`
   - Context: `<select id="location" name="location" class="w-full px-4 py-3 rounded-lg border border-gray-300 focu...`

10. **If this selection list contains groups of related options, they should be grouped with optgroup.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H85.2`
   - Selector: `#location`
   - Context: `<select id="location" name="location" class="w-full px-4 py-3 rounded-lg border border-gray-300 focu...`

11. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 3:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G145.Abs`
   - Selector: `#main-content > div > section:nth-child(4) > div > div:nth-child(1) > div:nth-child(1)`
   - Context: `<div class="absolute right-2 bottom-2 text-[120px] font-bold text-primary/5 leading-none pointer-eve...`

12. **Img element is marked so that it is ignored by Assistive Technology.**
   - Code: `WCAG2AA.Principle1.Guideline1_1.1_1_1.H67.2`
   - Selector: `#main-content > div > section:nth-child(4) > div > div:nth-child(1) > div:nth-child(2) > img`
   - Context: `<img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&amp;h=300&amp;fit=crop"...`

13. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 3:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G145.Abs`
   - Selector: `#main-content > div > section:nth-child(4) > div > div:nth-child(2) > div:nth-child(1)`
   - Context: `<div class="absolute right-2 bottom-2 text-[120px] font-bold text-primary/5 leading-none pointer-eve...`

14. **Img element is marked so that it is ignored by Assistive Technology.**
   - Code: `WCAG2AA.Principle1.Guideline1_1.1_1_1.H67.2`
   - Selector: `#main-content > div > section:nth-child(4) > div > div:nth-child(2) > div:nth-child(2) > img`
   - Context: `<img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&amp;h=300&amp;fit=crop" al...`

15. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 3:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G145.Abs`
   - Selector: `#main-content > div > section:nth-child(4) > div > div:nth-child(3) > div:nth-child(1)`
   - Context: `<div class="absolute right-2 bottom-2 text-[120px] font-bold text-primary/5 leading-none pointer-eve...`

16. **Img element is marked so that it is ignored by Assistive Technology.**
   - Code: `WCAG2AA.Principle1.Guideline1_1.1_1_1.H67.2`
   - Selector: `#main-content > div > section:nth-child(4) > div > div:nth-child(3) > div:nth-child(2) > img`
   - Context: `<img src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=400&amp;h=300&amp;fit=crop"...`

17. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 3:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G145.Abs`
   - Selector: `#main-content > div > section:nth-child(4) > div > div:nth-child(4) > div:nth-child(1)`
   - Context: `<div class="absolute right-2 bottom-2 text-[120px] font-bold text-primary/5 leading-none pointer-eve...`

18. **Img element is marked so that it is ignored by Assistive Technology.**
   - Code: `WCAG2AA.Principle1.Guideline1_1.1_1_1.H67.2`
   - Selector: `#main-content > div > section:nth-child(4) > div > div:nth-child(4) > div:nth-child(2) > img`
   - Context: `<img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&amp;h=300&amp;fit=crop" al...`

19. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 3:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G145.Abs`
   - Selector: `#main-content > div > section:nth-child(4) > div > div:nth-child(5) > div:nth-child(1)`
   - Context: `<div class="absolute right-2 bottom-2 text-[120px] font-bold text-primary/5 leading-none pointer-eve...`

20. **Img element is marked so that it is ignored by Assistive Technology.**
   - Code: `WCAG2AA.Principle1.Guideline1_1.1_1_1.H67.2`
   - Selector: `#main-content > div > section:nth-child(4) > div > div:nth-child(5) > div:nth-child(2) > img`
   - Context: `<img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&amp;h=300&amp;fit=crop" al...`

21. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 3:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G145.BgImage`
   - Selector: `#main-content > div > section:nth-child(5) > div > h2`
   - Context: `<h2 class="text-3xl font-bold text-gray-900 mb-6">
Home Performance Contractor Ne...</h2>...`

22. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage`
   - Selector: `#main-content > div > section:nth-child(5) > div > p`
   - Context: `<p class="text-lg text-gray-700 mb-8">
All contractors in our network...</p>...`

23. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage`
   - Selector: `#main-content > div > section:nth-child(5) > div > div > div:nth-child(1) > div:nth-child(2) > h3`
   - Context: `<h3 class="font-bold text-gray-900 mb-1">Reference Checks</h3>...`

24. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage`
   - Selector: `#main-content > div > section:nth-child(5) > div > div > div:nth-child(1) > div:nth-child(2) > p`
   - Context: `<p class="text-gray-600 text-sm">Verified references from past c...</p>...`

25. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage`
   - Selector: `#main-content > div > section:nth-child(5) > div > div > div:nth-child(2) > div:nth-child(2) > h3`
   - Context: `<h3 class="font-bold text-gray-900 mb-1">Valid Business Licenses</h3>...`

26. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage`
   - Selector: `#main-content > div > section:nth-child(5) > div > div > div:nth-child(2) > div:nth-child(2) > p`
   - Context: `<p class="text-gray-600 text-sm">Current and valid business oper...</p>...`

27. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage`
   - Selector: `#main-content > div > section:nth-child(5) > div > div > div:nth-child(3) > div:nth-child(2) > h3`
   - Context: `<h3 class="font-bold text-gray-900 mb-1">General Liability Insurance</h3>...`

28. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage`
   - Selector: `#main-content > div > section:nth-child(5) > div > div > div:nth-child(3) > div:nth-child(2) > p`
   - Context: `<p class="text-gray-600 text-sm">Comprehensive insurance coverag...</p>...`

29. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage`
   - Selector: `#main-content > div > section:nth-child(5) > div > div > div:nth-child(4) > div:nth-child(2) > h3`
   - Context: `<h3 class="font-bold text-gray-900 mb-1">WorkSafeBC Standing</h3>...`

30. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage`
   - Selector: `#main-content > div > section:nth-child(5) > div > div > div:nth-child(4) > div:nth-child(2) > p`
   - Context: `<p class="text-gray-600 text-sm">Good standing with WorkSafeBC r...</p>...`

31. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage`
   - Selector: `#main-content > div > section:nth-child(5) > div > div > div:nth-child(5) > div:nth-child(2) > h3`
   - Context: `<h3 class="font-bold text-gray-900 mb-1">Code of Conduct Commitment</h3>...`

32. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage`
   - Selector: `#main-content > div > section:nth-child(5) > div > div > div:nth-child(5) > div:nth-child(2) > p`
   - Context: `<p class="text-gray-600 text-sm">Signed commitment to profession...</p>...`

33. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage`
   - Selector: `#main-content > div > section:nth-child(5) > div > div > div:nth-child(6) > div:nth-child(2) > h3`
   - Context: `<h3 class="font-bold text-gray-900 mb-1">Best Practices Training</h3>...`

34. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage`
   - Selector: `#main-content > div > section:nth-child(5) > div > div > div:nth-child(6) > div:nth-child(2) > p`
   - Context: `<p class="text-gray-600 text-sm">
Ongoing training in home perfo...</p>...`

35. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage`
   - Selector: `#main-content > div > section:nth-child(5) > div > div > div:nth-child(7) > div:nth-child(2) > h3`
   - Context: `<h3 class="font-bold text-gray-900 mb-1">One-Year Labor Warranty</h3>...`

36. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage`
   - Selector: `#main-content > div > section:nth-child(5) > div > div > div:nth-child(7) > div:nth-child(2) > p`
   - Context: `<p class="text-gray-600 text-sm">Minimum one-year warranty on al...</p>...`

37. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage`
   - Selector: `#main-content > div > section:nth-child(5) > div > div > div:nth-child(8) > div:nth-child(2) > h3`
   - Context: `<h3 class="font-bold text-gray-900 mb-1">Ongoing Quality Assurance</h3>...`

38. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage`
   - Selector: `#main-content > div > section:nth-child(5) > div > div > div:nth-child(8) > div:nth-child(2) > p`
   - Context: `<p class="text-gray-600 text-sm">Regular reviews and quality con...</p>...`

39. **This select element does not have a value available to an accessibility API.**
   - Code: `WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.Select.Value`
   - Selector: `#project-status`
   - Context: `<select id="project-status" name="project-status" required="" class="w-full px-4 py-3 rounded-lg bor...`

40. **If this selection list contains groups of related options, they should be grouped with optgroup.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H85.2`
   - Selector: `#project-status`
   - Context: `<select id="project-status" name="project-status" required="" class="w-full px-4 py-3 rounded-lg bor...`

41. **This select element does not have a value available to an accessibility API.**
   - Code: `WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.Select.Value`
   - Selector: `#project-type`
   - Context: `<select id="project-type" name="project-type" required="" class="w-full px-4 py-3 rounded-lg border ...`

42. **If this selection list contains groups of related options, they should be grouped with optgroup.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H85.2`
   - Selector: `#project-type`
   - Context: `<select id="project-type" name="project-type" required="" class="w-full px-4 py-3 rounded-lg border ...`

43. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#footer > div > div:nth-child(1) > div:nth-child(5) > div`
   - Context: `<div class="flex gap-4"> <a href="https://facebook.com"...</div>...`

44. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#cookie-banner`
   - Context: `<div id="cookie-banner" class="fixed bottom-0 left-0 right-0 z-50 transform transition-transform dur...`

45. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `html > body > div:nth-child(9)`
   - Context: `<div class="accessibility-tab-container fixed left-0 top-1/2 -translate-y-1/2 z-50" data-astro-cid-w...`

46. **Accessible name for this element does not contain the visible label text. Check that for user interface components with labels that include text or images of text, the name contains the text that is presented visually.**
   - Code: `WCAG2AA.Principle2.Guideline2_5.2_5_3.F96`
   - Selector: `#reset-font`
   - Context: `<button id="reset-font" class="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors fle...`

47. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `html > body > iframe`
   - Context: `<iframe data-marker-styles="1" data-turbo-permanent="1" data-marker-frame="true" data-hj-allow-ifram...`

48. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#feedback-button`
   - Context: `<iframe data-v-a3622410="" id="feedback-button" title="Marker.io feedback button" data-marker-frame=...`

49. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#feedback-button`
   - Context: `<iframe data-v-a3622410="" id="feedback-button" title="Marker.io feedback button" data-marker-frame=...`

50. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#more-options-popover`
   - Context: `<iframe data-v-7736eb08="" id="more-options-popover" title="Marker.io more options menu" data-marker...`

51. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#more-options-popover`
   - Context: `<iframe data-v-7736eb08="" id="more-options-popover" title="Marker.io more options menu" data-marker...`

52. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#fullscreen-ui`
   - Context: `<iframe id="fullscreen-ui" title="Marker.io feedback widget" data-marker-frame="" data-turbo-permane...`

53. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#fullscreen-ui`
   - Context: `<iframe id="fullscreen-ui" title="Marker.io feedback widget" data-marker-frame="" data-turbo-permane...`

54. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#tooltip-container-wrapper`
   - Context: `<iframe id="tooltip-container-wrapper" title="Marker.io tooltip UI" data-marker-frame="" data-turbo-...`

55. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#tooltip-container-wrapper`
   - Context: `<iframe id="tooltip-container-wrapper" title="Marker.io tooltip UI" data-marker-frame="" data-turbo-...`

56. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#notifications-root`
   - Context: `<iframe data-v-6be13180="" id="notifications-root" title="Marker.io notification overlay" data-marke...`

57. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#notifications-root`
   - Context: `<iframe data-v-6be13180="" id="notifications-root" title="Marker.io notification overlay" data-marke...`

#### error (6)

1. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > nav > ol > li:nth-child(1) > a > span`
   - Context: `<span itemprop="name">Contractor Network</span>...`

2. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > nav > ol > li:nth-child(2) > a > span`
   - Context: `<span itemprop="name">Find a Contractor</span>...`

3. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change background to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#contractor-search-form > button`
   - Context: `<button type="submit" class="w-full md:w-auto px-8 py-3 bg-primary text-white rounded-lg font-semibo...`

4. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#feedback-form > div:nth-child(7) > label > a`
   - Context: `<a href="/privacy-policy" class="text-primary hover:text-primary-dark underline">Privacy Policy</a>...`

5. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change background to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#cookie-accept-btn`
   - Context: `<button id="cookie-accept-btn" class="flex-1 md:flex-initial px-6 py-2.5 bg-primary text-white round...`

6. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change background to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#reset-all`
   - Context: `<button id="reset-all" class="w-full px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded t...`

### Contractor Network

**URL:** http://localhost:4321/contractor-network

#### warning (27)

1. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `html > body > div:nth-child(1)`
   - Context: `<div class="skip-links"> <a href="#main-content" class=...</div>...`

2. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > div:nth-child(1) > a:nth-child(1)`
   - Context: `<a href="#main-content" class="skip-link bg-primary text-white px-4 py-2 rounded">
Skip to main cont...`

3. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > div:nth-child(1) > a:nth-child(2)`
   - Context: `<a href="#main-navigation" class="skip-link bg-primary text-white px-4 py-2 rounded">
Skip to naviga...`

4. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > div:nth-child(1) > a:nth-child(3)`
   - Context: `<a href="#footer" class="skip-link bg-primary text-white px-4 py-2 rounded">
Skip to footer
</a>...`

5. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#top-bar > div > div`
   - Context: `<div class="flex items-center justify-end gap-6 text-sm"> <a href="tel:+16047553469" cla...</div>...`

6. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > header > div > div > div:nth-child(3) > form > label`
   - Context: `<label for="desktop-search" class="sr-only">Search the site</label>...`

7. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 3:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G145.BgImage`
   - Selector: `#main-content > div > section:nth-child(7) > div > h2`
   - Context: `<h2 class="text-3xl font-bold mb-4">Ready to Join the Network?</h2>...`

8. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage`
   - Selector: `#main-content > div > section:nth-child(7) > div > p`
   - Context: `<p class="text-xl mb-8 text-white/90 max-w-2xl">Take the next step in your prof...</p>...`

9. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#main-content > div > section:nth-child(7) > div > div`
   - Context: `<div class="flex flex-wrap gap-4"> <a href="https://app.registere...</div>...`

10. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage`
   - Selector: `#main-content > div > section:nth-child(7) > div > div > a:nth-child(2)`
   - Context: `<a href="/contact" class="inline-flex items-center gap-2 px-8 py-3 border-2 border-white text-white ...`

11. **This select element does not have a value available to an accessibility API.**
   - Code: `WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.Select.Value`
   - Selector: `#sector`
   - Context: `<select id="sector" name="sector" required="" class="w-full px-4 py-3 border border-gray-300 rounded...`

12. **If this selection list contains groups of related options, they should be grouped with optgroup.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H85.2`
   - Selector: `#sector`
   - Context: `<select id="sector" name="sector" required="" class="w-full px-4 py-3 border border-gray-300 rounded...`

13. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#footer > div > div:nth-child(1) > div:nth-child(5) > div`
   - Context: `<div class="flex gap-4"> <a href="https://facebook.com"...</div>...`

14. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#cookie-banner`
   - Context: `<div id="cookie-banner" class="fixed bottom-0 left-0 right-0 z-50 transform transition-transform dur...`

15. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `html > body > div:nth-child(9)`
   - Context: `<div class="accessibility-tab-container fixed left-0 top-1/2 -translate-y-1/2 z-50" data-astro-cid-w...`

16. **Accessible name for this element does not contain the visible label text. Check that for user interface components with labels that include text or images of text, the name contains the text that is presented visually.**
   - Code: `WCAG2AA.Principle2.Guideline2_5.2_5_3.F96`
   - Selector: `#reset-font`
   - Context: `<button id="reset-font" class="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors fle...`

17. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `html > body > iframe`
   - Context: `<iframe data-marker-styles="1" data-turbo-permanent="1" data-marker-frame="true" data-hj-allow-ifram...`

18. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#feedback-button`
   - Context: `<iframe data-v-a3622410="" id="feedback-button" title="Marker.io feedback button" data-marker-frame=...`

19. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#feedback-button`
   - Context: `<iframe data-v-a3622410="" id="feedback-button" title="Marker.io feedback button" data-marker-frame=...`

20. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#more-options-popover`
   - Context: `<iframe data-v-7736eb08="" id="more-options-popover" title="Marker.io more options menu" data-marker...`

21. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#more-options-popover`
   - Context: `<iframe data-v-7736eb08="" id="more-options-popover" title="Marker.io more options menu" data-marker...`

22. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#fullscreen-ui`
   - Context: `<iframe id="fullscreen-ui" title="Marker.io feedback widget" data-marker-frame="" data-turbo-permane...`

23. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#fullscreen-ui`
   - Context: `<iframe id="fullscreen-ui" title="Marker.io feedback widget" data-marker-frame="" data-turbo-permane...`

24. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#tooltip-container-wrapper`
   - Context: `<iframe id="tooltip-container-wrapper" title="Marker.io tooltip UI" data-marker-frame="" data-turbo-...`

25. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#tooltip-container-wrapper`
   - Context: `<iframe id="tooltip-container-wrapper" title="Marker.io tooltip UI" data-marker-frame="" data-turbo-...`

26. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#notifications-root`
   - Context: `<iframe data-v-6be13180="" id="notifications-root" title="Marker.io notification overlay" data-marke...`

27. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#notifications-root`
   - Context: `<iframe data-v-6be13180="" id="notifications-root" title="Marker.io notification overlay" data-marke...`

#### error (5)

1. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > nav > ol > li > a > span`
   - Context: `<span itemprop="name">Contractor Network</span>...`

2. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(7) > div > div > a:nth-child(1)`
   - Context: `<a href="https://app.registeredbccontractor.ca/profiles" target="_blank" rel="noopener noreferrer" c...`

3. **Heading tag found with no content. Text that is not intended as a heading should not be marked up with heading tags.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H42.2`
   - Selector: `#main-content > div > section:nth-child(11) > div > div:nth-child(2) > div > div > h2`
   - Context: `<h2 class="text-2xl font-bold mb-4"></h2>...`

4. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change background to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#cookie-accept-btn`
   - Context: `<button id="cookie-accept-btn" class="flex-1 md:flex-initial px-6 py-2.5 bg-primary text-white round...`

5. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change background to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#reset-all`
   - Context: `<button id="reset-all" class="w-full px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded t...`

### Resources

**URL:** http://localhost:4321/resources

#### warning (31)

1. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `html > body > div:nth-child(1)`
   - Context: `<div class="skip-links"> <a href="#main-content" class=...</div>...`

2. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > div:nth-child(1) > a:nth-child(1)`
   - Context: `<a href="#main-content" class="skip-link bg-primary text-white px-4 py-2 rounded">
Skip to main cont...`

3. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > div:nth-child(1) > a:nth-child(2)`
   - Context: `<a href="#main-navigation" class="skip-link bg-primary text-white px-4 py-2 rounded">
Skip to naviga...`

4. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > div:nth-child(1) > a:nth-child(3)`
   - Context: `<a href="#footer" class="skip-link bg-primary text-white px-4 py-2 rounded">
Skip to footer
</a>...`

5. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#top-bar > div > div`
   - Context: `<div class="flex items-center justify-end gap-6 text-sm"> <a href="tel:+16047553469" cla...</div>...`

6. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > header > div > div > div:nth-child(3) > form > label`
   - Context: `<label for="desktop-search" class="sr-only">Search the site</label>...`

7. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#main-content > div > section:nth-child(3) > div`
   - Context: `<div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <a href="/resources/news" clas...</div>...`

8. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 3:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G145.Abs`
   - Selector: `#main-content > div > section:nth-child(3) > div > a:nth-child(1) > div:nth-child(1) > div:nth-child(3) > h2`
   - Context: `<h2 class="text-2xl font-bold mb-2">News &amp; Updates</h2>...`

9. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 3:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G145.Abs`
   - Selector: `#main-content > div > section:nth-child(3) > div > a:nth-child(2) > div:nth-child(1) > div:nth-child(3) > h2`
   - Context: `<h2 class="text-2xl font-bold mb-2">Guides &amp; Best Practices</h2>...`

10. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 3:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G145.Abs`
   - Selector: `#main-content > div > section:nth-child(3) > div > a:nth-child(3) > div:nth-child(1) > div:nth-child(3) > h2`
   - Context: `<h2 class="text-2xl font-bold mb-2">Documents &amp; Forms</h2>...`

11. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 3:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G145.BgImage`
   - Selector: `#main-content > div > section:nth-child(5) > div > h2`
   - Context: `<h2 class="text-3xl font-bold text-gray-900 mb-8">Quick Links</h2>...`

12. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#main-content > div > section:nth-child(5) > div > div`
   - Context: `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> <a href="/contractor-network/f......`

13. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 3:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G145.BgImage`
   - Selector: `#main-content > div > section:nth-child(6) > div > div > h2`
   - Context: `<h2 class="text-3xl font-bold mb-4">Need Help Finding Something?</h2>...`

14. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage`
   - Selector: `#main-content > div > section:nth-child(6) > div > div > p`
   - Context: `<p class="text-xl mb-8 text-white/90">
Can't find the resource you're...</p>...`

15. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#main-content > div > section:nth-child(6) > div > div > div`
   - Context: `<div class="flex flex-wrap gap-4"> <a href="/contact" class="inli...</div>...`

16. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage`
   - Selector: `#main-content > div > section:nth-child(6) > div > div > div > a:nth-child(2)`
   - Context: `<a href="/search" class="inline-flex items-center gap-2 px-8 py-3 border-2 border-white text-white r...`

17. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#footer > div > div:nth-child(1) > div:nth-child(5) > div`
   - Context: `<div class="flex gap-4"> <a href="https://facebook.com"...</div>...`

18. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#cookie-banner`
   - Context: `<div id="cookie-banner" class="fixed bottom-0 left-0 right-0 z-50 transform transition-transform dur...`

19. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `html > body > div:nth-child(9)`
   - Context: `<div class="accessibility-tab-container fixed left-0 top-1/2 -translate-y-1/2 z-50" data-astro-cid-w...`

20. **Accessible name for this element does not contain the visible label text. Check that for user interface components with labels that include text or images of text, the name contains the text that is presented visually.**
   - Code: `WCAG2AA.Principle2.Guideline2_5.2_5_3.F96`
   - Selector: `#reset-font`
   - Context: `<button id="reset-font" class="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors fle...`

21. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `html > body > iframe`
   - Context: `<iframe data-marker-styles="1" data-turbo-permanent="1" data-marker-frame="true" data-hj-allow-ifram...`

22. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#feedback-button`
   - Context: `<iframe data-v-a3622410="" id="feedback-button" title="Marker.io feedback button" data-marker-frame=...`

23. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#feedback-button`
   - Context: `<iframe data-v-a3622410="" id="feedback-button" title="Marker.io feedback button" data-marker-frame=...`

24. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#more-options-popover`
   - Context: `<iframe data-v-7736eb08="" id="more-options-popover" title="Marker.io more options menu" data-marker...`

25. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#more-options-popover`
   - Context: `<iframe data-v-7736eb08="" id="more-options-popover" title="Marker.io more options menu" data-marker...`

26. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#fullscreen-ui`
   - Context: `<iframe id="fullscreen-ui" title="Marker.io feedback widget" data-marker-frame="" data-turbo-permane...`

27. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#fullscreen-ui`
   - Context: `<iframe id="fullscreen-ui" title="Marker.io feedback widget" data-marker-frame="" data-turbo-permane...`

28. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#tooltip-container-wrapper`
   - Context: `<iframe id="tooltip-container-wrapper" title="Marker.io tooltip UI" data-marker-frame="" data-turbo-...`

29. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#tooltip-container-wrapper`
   - Context: `<iframe id="tooltip-container-wrapper" title="Marker.io tooltip UI" data-marker-frame="" data-turbo-...`

30. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#notifications-root`
   - Context: `<iframe data-v-6be13180="" id="notifications-root" title="Marker.io notification overlay" data-marke...`

31. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#notifications-root`
   - Context: `<iframe data-v-6be13180="" id="notifications-root" title="Marker.io notification overlay" data-marke...`

#### error (11)

1. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > nav > ol > li > a > span`
   - Context: `<span itemprop="name">Resources</span>...`

2. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(3) > div > a:nth-child(1) > div:nth-child(2) > span`
   - Context: `<span class="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-...`

3. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(3) > div > a:nth-child(2) > div:nth-child(2) > span`
   - Context: `<span class="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-...`

4. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(3) > div > a:nth-child(3) > div:nth-child(2) > span`
   - Context: `<span class="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-...`

5. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(4) > div > div:nth-child(1) > div > div:nth-child(2) > a`
   - Context: `<a href="/contractor-network" class="text-primary font-semibold hover:underline"> Learn More →
</a>...`

6. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(4) > div > div:nth-child(2) > div > div:nth-child(2) > a`
   - Context: `<a href="/resources/guides" class="text-primary font-semibold hover:underline"> View Guide →
</a>...`

7. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(4) > div > div:nth-child(3) > div > div:nth-child(2) > a`
   - Context: `<a href="/resources/guides" class="text-primary font-semibold hover:underline"> Explore Programs →
<...`

8. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(4) > div > div:nth-child(4) > div > div:nth-child(2) > a`
   - Context: `<a href="/resources/documents" class="text-primary font-semibold hover:underline"> View Reports →
</...`

9. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(6) > div > div > div > a:nth-child(1)`
   - Context: `<a href="/contact" class="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary rounded-lg ...`

10. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change background to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#cookie-accept-btn`
   - Context: `<button id="cookie-accept-btn" class="flex-1 md:flex-initial px-6 py-2.5 bg-primary text-white round...`

11. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change background to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#reset-all`
   - Context: `<button id="reset-all" class="w-full px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded t...`

### News Index

**URL:** http://localhost:4321/resources/news

#### warning (31)

1. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `html > body > div:nth-child(1)`
   - Context: `<div class="skip-links"> <a href="#main-content" class=...</div>...`

2. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > div:nth-child(1) > a:nth-child(1)`
   - Context: `<a href="#main-content" class="skip-link bg-primary text-white px-4 py-2 rounded">
Skip to main cont...`

3. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > div:nth-child(1) > a:nth-child(2)`
   - Context: `<a href="#main-navigation" class="skip-link bg-primary text-white px-4 py-2 rounded">
Skip to naviga...`

4. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > div:nth-child(1) > a:nth-child(3)`
   - Context: `<a href="#footer" class="skip-link bg-primary text-white px-4 py-2 rounded">
Skip to footer
</a>...`

5. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#top-bar > div > div`
   - Context: `<div class="flex items-center justify-end gap-6 text-sm"> <a href="tel:+16047553469" cla...</div>...`

6. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > header > div > div > div:nth-child(3) > form > label`
   - Context: `<label for="desktop-search" class="sr-only">Search the site</label>...`

7. **Accessible name for this element does not contain the visible label text. Check that for user interface components with labels that include text or images of text, the name contains the text that is presented visually.**
   - Code: `WCAG2AA.Principle2.Guideline2_5.2_5_3.F96`
   - Selector: `#news-grid > article:nth-child(1) > a`
   - Context: `<a href="/resources/news/hpsc-launches-new-contractor-certification-program" class="block md:flex" a...`

8. **Accessible name for this element does not contain the visible label text. Check that for user interface components with labels that include text or images of text, the name contains the text that is presented visually.**
   - Code: `WCAG2AA.Principle2.Guideline2_5.2_5_3.F96`
   - Selector: `#news-grid > article:nth-child(2) > a`
   - Context: `<a href="/resources/news/new-energy-efficiency-rebates-available" class="block md:flex" aria-label="...`

9. **Accessible name for this element does not contain the visible label text. Check that for user interface components with labels that include text or images of text, the name contains the text that is presented visually.**
   - Code: `WCAG2AA.Principle2.Guideline2_5.2_5_3.F96`
   - Selector: `#news-grid > article:nth-child(3) > a`
   - Context: `<a href="/resources/news/heat-pump-technology-advances" class="block md:flex" aria-label="Read more ...`

10. **Accessible name for this element does not contain the visible label text. Check that for user interface components with labels that include text or images of text, the name contains the text that is presented visually.**
   - Code: `WCAG2AA.Principle2.Guideline2_5.2_5_3.F96`
   - Selector: `#news-grid > article:nth-child(4) > a`
   - Context: `<a href="/resources/news/hpsc-annual-conference-2025" class="block md:flex" aria-label="Read more ab...`

11. **Accessible name for this element does not contain the visible label text. Check that for user interface components with labels that include text or images of text, the name contains the text that is presented visually.**
   - Code: `WCAG2AA.Principle2.Guideline2_5.2_5_3.F96`
   - Selector: `#news-grid > article:nth-child(5) > a`
   - Context: `<a href="/resources/news/building-code-updates-impact-standards" class="block md:flex" aria-label="R...`

12. **Accessible name for this element does not contain the visible label text. Check that for user interface components with labels that include text or images of text, the name contains the text that is presented visually.**
   - Code: `WCAG2AA.Principle2.Guideline2_5.2_5_3.F96`
   - Selector: `#news-grid > article:nth-child(6) > a`
   - Context: `<a href="/resources/news/net-zero-heritage-home-success-story" class="block md:flex" aria-label="Rea...`

13. **Accessible name for this element does not contain the visible label text. Check that for user interface components with labels that include text or images of text, the name contains the text that is presented visually.**
   - Code: `WCAG2AA.Principle2.Guideline2_5.2_5_3.F96`
   - Selector: `#news-grid > article:nth-child(7) > a`
   - Context: `<a href="/resources/news/winter-preparedness-workshop-series" class="block md:flex" aria-label="Read...`

14. **Accessible name for this element does not contain the visible label text. Check that for user interface components with labels that include text or images of text, the name contains the text that is presented visually.**
   - Code: `WCAG2AA.Principle2.Guideline2_5.2_5_3.F96`
   - Selector: `#news-grid > article:nth-child(8) > a`
   - Context: `<a href="/resources/news/indoor-air-quality-hidden-benefit" class="block md:flex" aria-label="Read m...`

15. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 3:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G145.BgImage`
   - Selector: `#main-content > div > div > aside > div:nth-child(1) > h3`
   - Context: `<h3 class="text-2xl font-bold mb-3" data-astro-cid-u34uhckh="">Monthly Newsletter</h3>...`

16. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage`
   - Selector: `#main-content > div > div > aside > div:nth-child(1) > p`
   - Context: `<p class="mb-4 text-primary-light" data-astro-cid-u34uhckh="">
Get industry updates, training...</p>...`

17. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#footer > div > div:nth-child(1) > div:nth-child(5) > div`
   - Context: `<div class="flex gap-4"> <a href="https://facebook.com"...</div>...`

18. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#cookie-banner`
   - Context: `<div id="cookie-banner" class="fixed bottom-0 left-0 right-0 z-50 transform transition-transform dur...`

19. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `html > body > div:nth-child(9)`
   - Context: `<div class="accessibility-tab-container fixed left-0 top-1/2 -translate-y-1/2 z-50" data-astro-cid-w...`

20. **Accessible name for this element does not contain the visible label text. Check that for user interface components with labels that include text or images of text, the name contains the text that is presented visually.**
   - Code: `WCAG2AA.Principle2.Guideline2_5.2_5_3.F96`
   - Selector: `#reset-font`
   - Context: `<button id="reset-font" class="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors fle...`

21. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `html > body > iframe`
   - Context: `<iframe data-marker-styles="1" data-turbo-permanent="1" data-marker-frame="true" data-hj-allow-ifram...`

22. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#feedback-button`
   - Context: `<iframe data-v-a3622410="" id="feedback-button" title="Marker.io feedback button" data-marker-frame=...`

23. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#feedback-button`
   - Context: `<iframe data-v-a3622410="" id="feedback-button" title="Marker.io feedback button" data-marker-frame=...`

24. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#more-options-popover`
   - Context: `<iframe data-v-7736eb08="" id="more-options-popover" title="Marker.io more options menu" data-marker...`

25. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#more-options-popover`
   - Context: `<iframe data-v-7736eb08="" id="more-options-popover" title="Marker.io more options menu" data-marker...`

26. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#fullscreen-ui`
   - Context: `<iframe id="fullscreen-ui" title="Marker.io feedback widget" data-marker-frame="" data-turbo-permane...`

27. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#fullscreen-ui`
   - Context: `<iframe id="fullscreen-ui" title="Marker.io feedback widget" data-marker-frame="" data-turbo-permane...`

28. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#tooltip-container-wrapper`
   - Context: `<iframe id="tooltip-container-wrapper" title="Marker.io tooltip UI" data-marker-frame="" data-turbo-...`

29. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#tooltip-container-wrapper`
   - Context: `<iframe id="tooltip-container-wrapper" title="Marker.io tooltip UI" data-marker-frame="" data-turbo-...`

30. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#notifications-root`
   - Context: `<iframe data-v-6be13180="" id="notifications-root" title="Marker.io notification overlay" data-marke...`

31. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#notifications-root`
   - Context: `<iframe data-v-6be13180="" id="notifications-root" title="Marker.io notification overlay" data-marke...`

#### error (18)

1. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > nav > ol > li:nth-child(1) > a > span`
   - Context: `<span itemprop="name">Resources</span>...`

2. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > nav > ol > li:nth-child(2) > a > span`
   - Context: `<span itemprop="name">News &amp; Updates</span>...`

3. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change background to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#category-filters > button:nth-child(1)`
   - Context: `<button data-category="All" class="filter-btn px-4 py-2 rounded-full text-sm font-medium transition-...`

4. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#news-grid > article:nth-child(1) > a > div:nth-child(2) > div:nth-child(4) > span:nth-child(2)`
   - Context: `<span class="text-primary font-semibold group-hover:underline"> Read More → </span>...`

5. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#news-grid > article:nth-child(2) > a > div:nth-child(2) > div:nth-child(4) > span:nth-child(2)`
   - Context: `<span class="text-primary font-semibold group-hover:underline"> Read More → </span>...`

6. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#news-grid > article:nth-child(3) > a > div:nth-child(2) > div:nth-child(4) > span:nth-child(2)`
   - Context: `<span class="text-primary font-semibold group-hover:underline"> Read More → </span>...`

7. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#news-grid > article:nth-child(4) > a > div:nth-child(2) > div:nth-child(4) > span:nth-child(2)`
   - Context: `<span class="text-primary font-semibold group-hover:underline"> Read More → </span>...`

8. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#news-grid > article:nth-child(5) > a > div:nth-child(2) > div:nth-child(4) > span:nth-child(2)`
   - Context: `<span class="text-primary font-semibold group-hover:underline"> Read More → </span>...`

9. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#news-grid > article:nth-child(6) > a > div:nth-child(2) > div:nth-child(4) > span:nth-child(2)`
   - Context: `<span class="text-primary font-semibold group-hover:underline"> Read More → </span>...`

10. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#news-grid > article:nth-child(7) > a > div:nth-child(2) > div:nth-child(4) > span:nth-child(2)`
   - Context: `<span class="text-primary font-semibold group-hover:underline"> Read More → </span>...`

11. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#news-grid > article:nth-child(8) > a > div:nth-child(2) > div:nth-child(4) > span:nth-child(2)`
   - Context: `<span class="text-primary font-semibold group-hover:underline"> Read More → </span>...`

12. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change background to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#page-numbers > button:nth-child(1)`
   - Context: `<button class="px-4 py-2 rounded-lg bg-primary text-white">1</button>...`

13. **This emailinput element does not have a name available to an accessibility API. Valid names are: label element, title undefined, aria-label undefined, aria-labelledby undefined.**
   - Code: `WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.InputEmail.Name`
   - Selector: `#main-content > div > div > aside > div:nth-child(1) > form > input`
   - Context: `<input type="email" placeholder="Your email address" class="w-full px-4 py-2 rounded-lg text-gray-90...`

14. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > div > aside > div:nth-child(1) > form > button`
   - Context: `<button type="submit" class="w-full bg-white text-primary font-semibold px-4 py-2 rounded-lg hover:b...`

15. **This form does not contain a submit button, which creates issues for those who cannot submit the form using the keyboard. Submit buttons are INPUT elements with type attribute "submit" or "image", or BUTTON elements with type "submit" or omitted/invalid.**
   - Code: `WCAG2AA.Principle3.Guideline3_2.3_2_2.H32.2`
   - Selector: `#main-content > div > div > aside > div:nth-child(2) > form`
   - Context: `<form action="/resources/news/search" method="get" class="relative" data-astro-cid-u34uhckh=""> <inp...`

16. **This searchinput element does not have a name available to an accessibility API. Valid names are: label element, title undefined, aria-label undefined, aria-labelledby undefined.**
   - Code: `WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.InputSearch.Name`
   - Selector: `#main-content > div > div > aside > div:nth-child(2) > form > input`
   - Context: `<input type="search" name="q" placeholder="Search articles..." class="w-full pl-10 pr-4 py-2 border ...`

17. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change background to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#cookie-accept-btn`
   - Context: `<button id="cookie-accept-btn" class="flex-1 md:flex-initial px-6 py-2.5 bg-primary text-white round...`

18. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change background to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#reset-all`
   - Context: `<button id="reset-all" class="w-full px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded t...`

### Guides Index

**URL:** http://localhost:4321/resources/guides

#### warning (30)

1. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `html > body > div:nth-child(1)`
   - Context: `<div class="skip-links"> <a href="#main-content" class=...</div>...`

2. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > div:nth-child(1) > a:nth-child(1)`
   - Context: `<a href="#main-content" class="skip-link bg-primary text-white px-4 py-2 rounded">
Skip to main cont...`

3. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > div:nth-child(1) > a:nth-child(2)`
   - Context: `<a href="#main-navigation" class="skip-link bg-primary text-white px-4 py-2 rounded">
Skip to naviga...`

4. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > div:nth-child(1) > a:nth-child(3)`
   - Context: `<a href="#footer" class="skip-link bg-primary text-white px-4 py-2 rounded">
Skip to footer
</a>...`

5. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#top-bar > div > div`
   - Context: `<div class="flex items-center justify-end gap-6 text-sm"> <a href="tel:+16047553469" cla...</div>...`

6. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > header > div > div > div:nth-child(3) > form > label`
   - Context: `<label for="desktop-search" class="sr-only">Search the site</label>...`

7. **This select element does not have a value available to an accessibility API.**
   - Code: `WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.Select.Value`
   - Selector: `#category-filter`
   - Context: `<select id="category-filter" class="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:r...`

8. **If this selection list contains groups of related options, they should be grouped with optgroup.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H85.2`
   - Selector: `#category-filter`
   - Context: `<select id="category-filter" class="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:r...`

9. **This select element does not have a value available to an accessibility API.**
   - Code: `WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.Select.Value`
   - Selector: `#difficulty-filter`
   - Context: `<select id="difficulty-filter" class="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus...`

10. **If this selection list contains groups of related options, they should be grouped with optgroup.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H85.2`
   - Selector: `#difficulty-filter`
   - Context: `<select id="difficulty-filter" class="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus...`

11. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#main-content > div > section:nth-child(4) > div`
   - Context: `<div class="grid grid-cols-1 lg:grid-cols-2 gap-8"> <a href="/resources/guides/get...</div>...`

12. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `#main-content > div > section:nth-child(4) > div > a:nth-child(1) > div > div:nth-child(1) > div`
   - Context: `<div class="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibol...`

13. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `#main-content > div > section:nth-child(4) > div > a:nth-child(2) > div > div:nth-child(1) > div`
   - Context: `<div class="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibol...`

14. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#main-content > div > section:nth-child(5) > div`
   - Context: `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> <a href="/resources/guides/und......`

15. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#main-content > div > section:nth-child(6) > div`
   - Context: `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> <a href="/resources/guides/hea......`

16. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#footer > div > div:nth-child(1) > div:nth-child(5) > div`
   - Context: `<div class="flex gap-4"> <a href="https://facebook.com"...</div>...`

17. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#cookie-banner`
   - Context: `<div id="cookie-banner" class="fixed bottom-0 left-0 right-0 z-50 transform transition-transform dur...`

18. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `html > body > div:nth-child(9)`
   - Context: `<div class="accessibility-tab-container fixed left-0 top-1/2 -translate-y-1/2 z-50" data-astro-cid-w...`

19. **Accessible name for this element does not contain the visible label text. Check that for user interface components with labels that include text or images of text, the name contains the text that is presented visually.**
   - Code: `WCAG2AA.Principle2.Guideline2_5.2_5_3.F96`
   - Selector: `#reset-font`
   - Context: `<button id="reset-font" class="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors fle...`

20. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `html > body > iframe`
   - Context: `<iframe data-marker-styles="1" data-turbo-permanent="1" data-marker-frame="true" data-hj-allow-ifram...`

21. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#feedback-button`
   - Context: `<iframe data-v-a3622410="" id="feedback-button" title="Marker.io feedback button" data-marker-frame=...`

22. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#feedback-button`
   - Context: `<iframe data-v-a3622410="" id="feedback-button" title="Marker.io feedback button" data-marker-frame=...`

23. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#more-options-popover`
   - Context: `<iframe data-v-7736eb08="" id="more-options-popover" title="Marker.io more options menu" data-marker...`

24. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#more-options-popover`
   - Context: `<iframe data-v-7736eb08="" id="more-options-popover" title="Marker.io more options menu" data-marker...`

25. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#fullscreen-ui`
   - Context: `<iframe id="fullscreen-ui" title="Marker.io feedback widget" data-marker-frame="" data-turbo-permane...`

26. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#fullscreen-ui`
   - Context: `<iframe id="fullscreen-ui" title="Marker.io feedback widget" data-marker-frame="" data-turbo-permane...`

27. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#tooltip-container-wrapper`
   - Context: `<iframe id="tooltip-container-wrapper" title="Marker.io tooltip UI" data-marker-frame="" data-turbo-...`

28. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#tooltip-container-wrapper`
   - Context: `<iframe id="tooltip-container-wrapper" title="Marker.io tooltip UI" data-marker-frame="" data-turbo-...`

29. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#notifications-root`
   - Context: `<iframe data-v-6be13180="" id="notifications-root" title="Marker.io notification overlay" data-marke...`

30. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#notifications-root`
   - Context: `<iframe data-v-6be13180="" id="notifications-root" title="Marker.io notification overlay" data-marke...`

#### error (19)

1. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > nav > ol > li:nth-child(1) > a > span`
   - Context: `<span itemprop="name">Resources</span>...`

2. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > nav > ol > li:nth-child(2) > a > span`
   - Context: `<span itemprop="name">Guides</span>...`

3. **This textinput element does not have a name available to an accessibility API. Valid names are: label element, title undefined, aria-label undefined, aria-labelledby undefined.**
   - Code: `WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.InputText.Name`
   - Selector: `#search-input`
   - Context: `<input type="text" id="search-input" placeholder="Search guides..." class="w-full pl-12 pr-4 py-3 bo...`

4. **This form field should be labelled in some way. Use the label element (either with a "for" attribute or wrapped around the form field), or "title", "aria-label" or "aria-labelledby" attributes as appropriate.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.F68`
   - Selector: `#search-input`
   - Context: `<input type="text" id="search-input" placeholder="Search guides..." class="w-full pl-12 pr-4 py-3 bo...`

5. **This select element does not have a name available to an accessibility API. Valid names are: label element, title undefined, aria-label undefined, aria-labelledby undefined.**
   - Code: `WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.Select.Name`
   - Selector: `#category-filter`
   - Context: `<select id="category-filter" class="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:r...`

6. **This form field should be labelled in some way. Use the label element (either with a "for" attribute or wrapped around the form field), or "title", "aria-label" or "aria-labelledby" attributes as appropriate.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.F68`
   - Selector: `#category-filter`
   - Context: `<select id="category-filter" class="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:r...`

7. **This select element does not have a name available to an accessibility API. Valid names are: label element, title undefined, aria-label undefined, aria-labelledby undefined.**
   - Code: `WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.Select.Name`
   - Selector: `#difficulty-filter`
   - Context: `<select id="difficulty-filter" class="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus...`

8. **This form field should be labelled in some way. Use the label element (either with a "for" attribute or wrapped around the form field), or "title", "aria-label" or "aria-labelledby" attributes as appropriate.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.F68`
   - Selector: `#difficulty-filter`
   - Context: `<select id="difficulty-filter" class="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus...`

9. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(4) > div > a:nth-child(1) > div > div:nth-child(2) > div:nth-child(2) > span`
   - Context: `<span class="text-primary font-medium group-hover:underline"> Start Guide → </span>...`

10. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(4) > div > a:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > span`
   - Context: `<span class="text-primary font-medium group-hover:underline"> Start Guide → </span>...`

11. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(5) > div > a:nth-child(1) > div:nth-child(2) > div:nth-child(4) > span:nth-child(2)`
   - Context: `<span class="text-primary font-medium group-hover:underline">Start →</span>...`

12. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(5) > div > a:nth-child(2) > div:nth-child(2) > div:nth-child(4) > span:nth-child(2)`
   - Context: `<span class="text-primary font-medium group-hover:underline">Start →</span>...`

13. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(5) > div > a:nth-child(3) > div:nth-child(2) > div:nth-child(4) > span:nth-child(2)`
   - Context: `<span class="text-primary font-medium group-hover:underline">Start →</span>...`

14. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(6) > div > a:nth-child(1) > div:nth-child(2) > div:nth-child(4) > span:nth-child(2)`
   - Context: `<span class="text-primary font-medium group-hover:underline">Start →</span>...`

15. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(6) > div > a:nth-child(2) > div:nth-child(2) > div:nth-child(4) > span:nth-child(2)`
   - Context: `<span class="text-primary font-medium group-hover:underline">Start →</span>...`

16. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(6) > div > a:nth-child(3) > div:nth-child(2) > div:nth-child(4) > span:nth-child(2)`
   - Context: `<span class="text-primary font-medium group-hover:underline">Start →</span>...`

17. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section:nth-child(6) > div > a:nth-child(4) > div:nth-child(2) > div:nth-child(4) > span:nth-child(2)`
   - Context: `<span class="text-primary font-medium group-hover:underline">Start →</span>...`

18. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change background to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#cookie-accept-btn`
   - Context: `<button id="cookie-accept-btn" class="flex-1 md:flex-initial px-6 py-2.5 bg-primary text-white round...`

19. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change background to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#reset-all`
   - Context: `<button id="reset-all" class="w-full px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded t...`

### Documents Index

**URL:** http://localhost:4321/resources/documents

#### warning (23)

1. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `html > body > div:nth-child(1)`
   - Context: `<div class="skip-links"> <a href="#main-content" class=...</div>...`

2. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > div:nth-child(1) > a:nth-child(1)`
   - Context: `<a href="#main-content" class="skip-link bg-primary text-white px-4 py-2 rounded">
Skip to main cont...`

3. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > div:nth-child(1) > a:nth-child(2)`
   - Context: `<a href="#main-navigation" class="skip-link bg-primary text-white px-4 py-2 rounded">
Skip to naviga...`

4. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > div:nth-child(1) > a:nth-child(3)`
   - Context: `<a href="#footer" class="skip-link bg-primary text-white px-4 py-2 rounded">
Skip to footer
</a>...`

5. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#top-bar > div > div`
   - Context: `<div class="flex items-center justify-end gap-6 text-sm"> <a href="tel:+16047553469" cla...</div>...`

6. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > header > div > div > div:nth-child(3) > form > label`
   - Context: `<label for="desktop-search" class="sr-only">Search the site</label>...`

7. **This select element does not have a value available to an accessibility API.**
   - Code: `WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.Select.Value`
   - Selector: `#category-filter`
   - Context: `<select id="category-filter" class="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:r...`

8. **If this selection list contains groups of related options, they should be grouped with optgroup.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H85.2`
   - Selector: `#category-filter`
   - Context: `<select id="category-filter" class="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:r...`

9. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#footer > div > div:nth-child(1) > div:nth-child(5) > div`
   - Context: `<div class="flex gap-4"> <a href="https://facebook.com"...</div>...`

10. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#cookie-banner`
   - Context: `<div id="cookie-banner" class="fixed bottom-0 left-0 right-0 z-50 transform transition-transform dur...`

11. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `html > body > div:nth-child(9)`
   - Context: `<div class="accessibility-tab-container fixed left-0 top-1/2 -translate-y-1/2 z-50" data-astro-cid-w...`

12. **Accessible name for this element does not contain the visible label text. Check that for user interface components with labels that include text or images of text, the name contains the text that is presented visually.**
   - Code: `WCAG2AA.Principle2.Guideline2_5.2_5_3.F96`
   - Selector: `#reset-font`
   - Context: `<button id="reset-font" class="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors fle...`

13. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `html > body > iframe`
   - Context: `<iframe data-marker-styles="1" data-turbo-permanent="1" data-marker-frame="true" data-hj-allow-ifram...`

14. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#feedback-button`
   - Context: `<iframe data-v-a3622410="" id="feedback-button" title="Marker.io feedback button" data-marker-frame=...`

15. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#feedback-button`
   - Context: `<iframe data-v-a3622410="" id="feedback-button" title="Marker.io feedback button" data-marker-frame=...`

16. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#more-options-popover`
   - Context: `<iframe data-v-7736eb08="" id="more-options-popover" title="Marker.io more options menu" data-marker...`

17. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#more-options-popover`
   - Context: `<iframe data-v-7736eb08="" id="more-options-popover" title="Marker.io more options menu" data-marker...`

18. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#fullscreen-ui`
   - Context: `<iframe id="fullscreen-ui" title="Marker.io feedback widget" data-marker-frame="" data-turbo-permane...`

19. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#fullscreen-ui`
   - Context: `<iframe id="fullscreen-ui" title="Marker.io feedback widget" data-marker-frame="" data-turbo-permane...`

20. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#tooltip-container-wrapper`
   - Context: `<iframe id="tooltip-container-wrapper" title="Marker.io tooltip UI" data-marker-frame="" data-turbo-...`

21. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#tooltip-container-wrapper`
   - Context: `<iframe id="tooltip-container-wrapper" title="Marker.io tooltip UI" data-marker-frame="" data-turbo-...`

22. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#notifications-root`
   - Context: `<iframe data-v-6be13180="" id="notifications-root" title="Marker.io notification overlay" data-marke...`

23. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#notifications-root`
   - Context: `<iframe data-v-6be13180="" id="notifications-root" title="Marker.io notification overlay" data-marke...`

#### error (9)

1. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > nav > ol > li:nth-child(1) > a > span`
   - Context: `<span itemprop="name">Resources</span>...`

2. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > nav > ol > li:nth-child(2) > a > span`
   - Context: `<span itemprop="name">Documents</span>...`

3. **This textinput element does not have a name available to an accessibility API. Valid names are: label element, title undefined, aria-label undefined, aria-labelledby undefined.**
   - Code: `WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.InputText.Name`
   - Selector: `#search-input`
   - Context: `<input type="text" id="search-input" placeholder="Search documents..." class="w-full px-4 py-3 borde...`

4. **This form field should be labelled in some way. Use the label element (either with a "for" attribute or wrapped around the form field), or "title", "aria-label" or "aria-labelledby" attributes as appropriate.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.F68`
   - Selector: `#search-input`
   - Context: `<input type="text" id="search-input" placeholder="Search documents..." class="w-full px-4 py-3 borde...`

5. **This select element does not have a name available to an accessibility API. Valid names are: label element, title undefined, aria-label undefined, aria-labelledby undefined.**
   - Code: `WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.Select.Name`
   - Selector: `#category-filter`
   - Context: `<select id="category-filter" class="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:r...`

6. **This form field should be labelled in some way. Use the label element (either with a "for" attribute or wrapped around the form field), or "title", "aria-label" or "aria-labelledby" attributes as appropriate.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.F68`
   - Selector: `#category-filter`
   - Context: `<select id="category-filter" class="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:r...`

7. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > section > div > a > div:nth-child(2) > div:nth-child(4) > span`
   - Context: `<span class="text-primary font-medium group-hover:underline">View →</span>...`

8. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change background to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#cookie-accept-btn`
   - Context: `<button id="cookie-accept-btn" class="flex-1 md:flex-initial px-6 py-2.5 bg-primary text-white round...`

9. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change background to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#reset-all`
   - Context: `<button id="reset-all" class="w-full px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded t...`

### Coming Soon

**URL:** http://localhost:4321/coming-soon

#### warning (27)

1. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `html > body > div:nth-child(1)`
   - Context: `<div class="skip-links"> <a href="#main-content" class=...</div>...`

2. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > div:nth-child(1) > a:nth-child(1)`
   - Context: `<a href="#main-content" class="skip-link bg-primary text-white px-4 py-2 rounded">
Skip to main cont...`

3. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > div:nth-child(1) > a:nth-child(2)`
   - Context: `<a href="#main-navigation" class="skip-link bg-primary text-white px-4 py-2 rounded">
Skip to naviga...`

4. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > div:nth-child(1) > a:nth-child(3)`
   - Context: `<a href="#footer" class="skip-link bg-primary text-white px-4 py-2 rounded">
Skip to footer
</a>...`

5. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#top-bar > div > div`
   - Context: `<div class="flex items-center justify-end gap-6 text-sm"> <a href="tel:+16047553469" cla...</div>...`

6. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > header > div > div > div:nth-child(3) > form > label`
   - Context: `<label for="desktop-search" class="sr-only">Search the site</label>...`

7. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 3:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G145.BgImage`
   - Selector: `#main-content > div:nth-child(2) > div:nth-child(2) > h1`
   - Context: `<h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight" data-astro-cid...`

8. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 3:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G145.BgImage`
   - Selector: `#main-content > div:nth-child(2) > div:nth-child(2) > p:nth-child(3)`
   - Context: `<p class="text-xl sm:text-2xl lg:text-3xl text-primary-100 mb-8 font-light" data-astro-cid-ee6qhyem=...`

9. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage`
   - Selector: `#main-content > div:nth-child(2) > div:nth-child(2) > p:nth-child(4)`
   - Context: `<p class="text-lg sm:text-xl text-primary-50 mb-12 max-w-2xl mx-auto leading-relaxed" data-astro-cid...`

10. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#main-content > div:nth-child(2) > div:nth-child(2) > div:nth-child(5)`
   - Context: `<div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16" data-astro-cid-ee6qhy...`

11. **This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage`
   - Selector: `#main-content > div:nth-child(2) > div:nth-child(2) > div:nth-child(6) > p`
   - Context: `<p class="text-sm mb-4" data-astro-cid-ee6qhyem="">Stay connected with us</p>...`

12. **The heading structure is not logically nested. This h3 element should be an h2 to be properly nested.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1_A.G141`
   - Selector: `#footer > div > div:nth-child(1) > div:nth-child(2) > h3`
   - Context: `<h3 class="text-white font-semibold mb-4">Navigation</h3>...`

13. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#footer > div > div:nth-child(1) > div:nth-child(5) > div`
   - Context: `<div class="flex gap-4"> <a href="https://facebook.com"...</div>...`

14. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#cookie-banner`
   - Context: `<div id="cookie-banner" class="fixed bottom-0 left-0 right-0 z-50 transform transition-transform dur...`

15. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `html > body > div:nth-child(9)`
   - Context: `<div class="accessibility-tab-container fixed left-0 top-1/2 -translate-y-1/2 z-50" data-astro-cid-w...`

16. **Accessible name for this element does not contain the visible label text. Check that for user interface components with labels that include text or images of text, the name contains the text that is presented visually.**
   - Code: `WCAG2AA.Principle2.Guideline2_5.2_5_3.F96`
   - Selector: `#reset-font`
   - Context: `<button id="reset-font" class="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors fle...`

17. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `html > body > iframe`
   - Context: `<iframe data-marker-styles="1" data-turbo-permanent="1" data-marker-frame="true" data-hj-allow-ifram...`

18. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#feedback-button`
   - Context: `<iframe data-v-a3622410="" id="feedback-button" title="Marker.io feedback button" data-marker-frame=...`

19. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#feedback-button`
   - Context: `<iframe data-v-a3622410="" id="feedback-button" title="Marker.io feedback button" data-marker-frame=...`

20. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#more-options-popover`
   - Context: `<iframe data-v-7736eb08="" id="more-options-popover" title="Marker.io more options menu" data-marker...`

21. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#more-options-popover`
   - Context: `<iframe data-v-7736eb08="" id="more-options-popover" title="Marker.io more options menu" data-marker...`

22. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#fullscreen-ui`
   - Context: `<iframe id="fullscreen-ui" title="Marker.io feedback widget" data-marker-frame="" data-turbo-permane...`

23. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#fullscreen-ui`
   - Context: `<iframe id="fullscreen-ui" title="Marker.io feedback widget" data-marker-frame="" data-turbo-permane...`

24. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#tooltip-container-wrapper`
   - Context: `<iframe id="tooltip-container-wrapper" title="Marker.io tooltip UI" data-marker-frame="" data-turbo-...`

25. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#tooltip-container-wrapper`
   - Context: `<iframe id="tooltip-container-wrapper" title="Marker.io tooltip UI" data-marker-frame="" data-turbo-...`

26. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#notifications-root`
   - Context: `<iframe data-v-6be13180="" id="notifications-root" title="Marker.io notification overlay" data-marke...`

27. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#notifications-root`
   - Context: `<iframe data-v-6be13180="" id="notifications-root" title="Marker.io notification overlay" data-marke...`

#### error (6)

1. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-navigation > ul > li:nth-child(1) > a`
   - Context: `<a href="/coming-soon" class="font-medium transition-colors block py-2 text-primary border-b-2 borde...`

2. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-navigation > ul > li:nth-child(2) > a`
   - Context: `<a href="/coming-soon" class="font-medium transition-colors block py-2 text-primary border-b-2 borde...`

3. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-navigation > ul > li:nth-child(3) > a`
   - Context: `<a href="/coming-soon" class="font-medium transition-colors block py-2 text-primary border-b-2 borde...`

4. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div:nth-child(1) > nav > ol > li > a > span`
   - Context: `<span itemprop="name">Coming Soon</span>...`

5. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change background to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#cookie-accept-btn`
   - Context: `<button id="cookie-accept-btn" class="flex-1 md:flex-initial px-6 py-2.5 bg-primary text-white round...`

6. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change background to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#reset-all`
   - Context: `<button id="reset-all" class="w-full px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded t...`

### 404 Page

**URL:** http://localhost:4321/404

#### warning (25)

1. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `html > body > div:nth-child(1)`
   - Context: `<div class="skip-links"> <a href="#main-content" class=...</div>...`

2. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > div:nth-child(1) > a:nth-child(1)`
   - Context: `<a href="#main-content" class="skip-link bg-primary text-white px-4 py-2 rounded">
Skip to main cont...`

3. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > div:nth-child(1) > a:nth-child(2)`
   - Context: `<a href="#main-navigation" class="skip-link bg-primary text-white px-4 py-2 rounded">
Skip to naviga...`

4. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > div:nth-child(1) > a:nth-child(3)`
   - Context: `<a href="#footer" class="skip-link bg-primary text-white px-4 py-2 rounded">
Skip to footer
</a>...`

5. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#top-bar > div > div`
   - Context: `<div class="flex items-center justify-end gap-6 text-sm"> <a href="tel:+16047553469" cla...</div>...`

6. **This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least 4.5:1.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs`
   - Selector: `html > body > header > div > div > div:nth-child(3) > form > label`
   - Context: `<label for="desktop-search" class="sr-only">Search the site</label>...`

7. **The heading structure is not logically nested. This h2 element appears to be the primary document heading, so should be an h1 element.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1_A.G141`
   - Selector: `#main-content > div > div > div:nth-child(2) > h2`
   - Context: `<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Page Not Found</h2>...`

8. **The heading structure is not logically nested. This h2 element should be an h1 to be properly nested.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1_A.G141`
   - Selector: `#main-content > div > div > div:nth-child(2) > h2`
   - Context: `<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Page Not Found</h2>...`

9. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#main-content > div > div > div:nth-child(3)`
   - Context: `<div class="flex flex-wrap gap-4 justify-center mb-12"> <a href="/" class="inline-flex...</div>...`

10. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#main-content > div > div > div:nth-child(4) > div > div`
   - Context: `<div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <a href="/contractor-network" ...</div>...`

11. **If this element contains a navigation section, it is recommended that it be marked up as a list.**
   - Code: `WCAG2AA.Principle1.Guideline1_3.1_3_1.H48`
   - Selector: `#footer > div > div:nth-child(1) > div:nth-child(5) > div`
   - Context: `<div class="flex gap-4"> <a href="https://facebook.com"...</div>...`

12. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#cookie-banner`
   - Context: `<div id="cookie-banner" class="fixed bottom-0 left-0 right-0 z-50 transform transition-transform dur...`

13. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `html > body > div:nth-child(9)`
   - Context: `<div class="accessibility-tab-container fixed left-0 top-1/2 -translate-y-1/2 z-50" data-astro-cid-w...`

14. **Accessible name for this element does not contain the visible label text. Check that for user interface components with labels that include text or images of text, the name contains the text that is presented visually.**
   - Code: `WCAG2AA.Principle2.Guideline2_5.2_5_3.F96`
   - Selector: `#reset-font`
   - Context: `<button id="reset-font" class="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors fle...`

15. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `html > body > iframe`
   - Context: `<iframe data-marker-styles="1" data-turbo-permanent="1" data-marker-frame="true" data-hj-allow-ifram...`

16. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#feedback-button`
   - Context: `<iframe data-v-a3622410="" id="feedback-button" title="Marker.io feedback button" data-marker-frame=...`

17. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#feedback-button`
   - Context: `<iframe data-v-a3622410="" id="feedback-button" title="Marker.io feedback button" data-marker-frame=...`

18. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#more-options-popover`
   - Context: `<iframe data-v-7736eb08="" id="more-options-popover" title="Marker.io more options menu" data-marker...`

19. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#more-options-popover`
   - Context: `<iframe data-v-7736eb08="" id="more-options-popover" title="Marker.io more options menu" data-marker...`

20. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#fullscreen-ui`
   - Context: `<iframe id="fullscreen-ui" title="Marker.io feedback widget" data-marker-frame="" data-turbo-permane...`

21. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#fullscreen-ui`
   - Context: `<iframe id="fullscreen-ui" title="Marker.io feedback widget" data-marker-frame="" data-turbo-permane...`

22. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#tooltip-container-wrapper`
   - Context: `<iframe id="tooltip-container-wrapper" title="Marker.io tooltip UI" data-marker-frame="" data-turbo-...`

23. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#tooltip-container-wrapper`
   - Context: `<iframe id="tooltip-container-wrapper" title="Marker.io tooltip UI" data-marker-frame="" data-turbo-...`

24. **Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.BGColour`
   - Selector: `#notifications-root`
   - Context: `<iframe data-v-6be13180="" id="notifications-root" title="Marker.io notification overlay" data-marke...`

25. **This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_10.C32,C31,C33,C38,SCR34,G206`
   - Selector: `#notifications-root`
   - Context: `<iframe data-v-6be13180="" id="notifications-root" title="Marker.io notification overlay" data-marke...`

#### error (6)

1. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > nav > ol > li > a > span`
   - Context: `<span itemprop="name">404</span>...`

2. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change background to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > div > div:nth-child(3) > a:nth-child(1)`
   - Context: `<a href="/" class="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-lg font-se...`

3. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > div > div:nth-child(3) > a:nth-child(2)`
   - Context: `<a href="/search" class="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-prima...`

4. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change text colour to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#main-content > div > div > p > a`
   - Context: `<a href="/contact" class="text-primary hover:underline font-medium">contact us</a>...`

5. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change background to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#cookie-accept-btn`
   - Context: `<button id="cookie-accept-btn" class="flex-1 md:flex-initial px-6 py-2.5 bg-primary text-white round...`

6. **This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 2.35:1. Recommendation:  change background to #0080a9.**
   - Code: `WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail`
   - Selector: `#reset-all`
   - Context: `<button id="reset-all" class="w-full px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded t...`

