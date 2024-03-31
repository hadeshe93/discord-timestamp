# Discord Timestamp Generator

Designed to cater to the diverse needs of online groups, this utility simplifies the process of scheduling events and announcements. By selecting a specific time in the tool, you can effortlessly generate markdown text that, when posted in Discord, automatically adjusts to display the corresponding time in each user's local timezone. This ensures clear communication and eliminates the confusion of time conversions, making it ideal for coordinating multiplayer gaming sessions, virtual meetings, or any group activities.

And I have build a simple convenient tool to helper us generating timestamp markdown snippets quicky: [https://discordtimestampsgenerator.com/](https://discordtimestampsgenerator.com/)

## Formatting

|Style|Input|Output (12-hour clock)|Output (24-hour clock)
|--|--|--|--
|Default|`<t:1543392061>`|November 28, 2018 9:01 AM|28 November 2018 09:01
|Short Time|`<t:1543392061:t>`|9:01 AM|09:01
|Long Time|`<t:1543392061:T>`|9:01:00 AM|09:01:01
|Short Date|`<t:1543392061:d>`|11/28/2018|28/11/2018
|Long Date|`<t:1543392061:D>`|November 28, 2018|28 November 2018
|Short Date/Time|`<t:1543392061:f>`|November 28, 2018 9:01 AM|28 November 2018 09:01
|Long Date/Time|`<t:1543392061:F>`|Wednesday, November 28, 2018 9:01 AM|Wednesday, 28 November 2018 09:01
|Relative Time|`<t:1543392061:R>`|5 years ago|5 years ago

## How to display the timestamp according to different district?

You can use some 3rd-paty npm packages to convert the unix timestamp to do that. And I recommend [`dayjs`](https://www.npmjs.com/package/dayjs) because it is only 2KB when we just use it's core functions.

For convenience, we can code according to it's official instructions: [https://day.js.org/docs/en/display/format#localized-formats](https://day.js.org/docs/en/display/format#localized-formats).

<img width="813" alt="image" src="https://gist.github.com/assets/44319041/f1962618-be5d-4ab8-84c9-4c339f488d5c">

Last but no least, `moment` and `date-fn` also have similar functions. But I usually compare these similar packages in bundlephobia.com. And you can see the difference below:

![image](https://gist.github.com/assets/44319041/825a6992-cc73-4108-acf0-7c6bb84af02e)
