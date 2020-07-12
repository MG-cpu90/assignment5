# Assignment 5 – Work-Day Scheduler:
## Summary:
The following application is an hourly work-day scheduler which allows users to add and save information pertinent to each hour of the work-day

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Usage
* In order to run the application, open the "index.html" file inside the Develop folder in the browser window.

## Successses:
* I was able to generate the html through JavaScript
* I was able to display the current date using "moment"
* The page retrieves items form the browser's local storage to populate the work-day planner
    * As such, when the page is refreshed, the items remain on the page
* When the save button is clicked, the events are added to the browser's local storage

## Bugs:
* I was unable to get the current time to show continuously changing by each second
* I was unable to have the colour of each input box change according to the time of day

## Deployed Links:
* GitHub Repository: https://github.com/MG-cpu90/assignment5
* Deployed URL: https://mg-cpu90.github.io/assignment5/Develop/