# Cur-ency

A simple website to convert currency. 

# How it works 

I've used multiple API's for different features. I have some country code saved in CurrencySelect. Those code upon selection will use flag API to display their respective flags. Then, when you click in Exchange btn, it uses exchangerate API to compare two values and display them at the bottom. The part which I felt unique is Historical Background where we learn about the currency we select. For this, I've used an AI model which first tells about currency (like history of economy) and in second paragraph, it uses serper API to pull headline of selected currency when that information is also formated with same AI but with latest updated context. 

# About 

This is a project whose main purpose is doing currency conversion BUT it also provides some insight into the currency itself. In a way, you could say that I've spent more time in extras (like AI and latest info feature) than the actual core project itself but that's what makes it different ig.. Making a simple currency convert is kinda like making calculator or to do list so I thought of adding something fun :)

Right now, I've used llama-3.1-instruct which is a 70b parameter model. The temperature is set at 0.5 so it does not tell anything gibberish that we dont like to hear. Also, the token is capped at 700 (might increase later) since it's use window is relatively small and no input required too.

# Motivation

I always used currency converter to plan for my trip to SGP for arcana. I needed it to see the accomodation cost, travel cost and misc cost along with transit airport currency values. So, I thought why not build one. At first, I thought it was simple but turns out its just one API for actual core MVP. 

# Use of AI 

I used AI to implement local /api runner so I dont gotta deploy every build to see /api functionality. I also used it for general debugging and improving some issues with my code. I kept getting error during API setup so I took help on that case as well as paragraph seperation. Mostly, AI basically refined / improved the part of code which was not working properly as intended. 

# NOTE:

My project might be flagged for fraud because of some glitch in hackatime. As of today (15th july 4:08 NPT) my hackatime hours in dashboard shows 15h 21m. I am not asking for my inflated hours to be approved but 9-10 hours that I actually worked on.

This issue has been informed to fraud squad member and all necessary steps are already done with them. 

[For reviewer] this project has been approved for 7h only due to some confusion regarding tracked time.  This is the reupload of project with updated and clear readme about the issue and to get the remaining hours back.

# Images: 

_USD to NPR conversion_
![Screenshot](uploads/S1.png)

_JPY to INR conversion_
![Screenshot](uploads/S2.png)

# Everything that I've used

```
FlagAPI: https://flagsapi.com/US/flat/64.png
Swap icon: https://www.flaticon.com/free-icon/swap_17714908
Currency value (API): https://app.exchangerate-api.com/
Favicon: https://www.flaticon.com/free-icon/dollar-symbol_2150264
Search (API): https://serper.dev/
AI model (API): https://build.nvidia.com/models
Background: https://bg.ibelick.com/
```