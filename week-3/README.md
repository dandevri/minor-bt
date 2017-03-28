# Browser Technologies - Progressive Enhancement

## Briefing
Make a demo based on the following use case:

> As a user I want to get a notification when my favorite soccer team has won a game.

Make sure all users with different browsers get the minimal functionality based on the principles of Progressive Enhancement.

## Notification API
> The Notifications API allows web pages to control the display of system notifications to the end user — these are outside the top-level browsing context viewport, so therefore can be displayed even the user has switched tabs or moved to a different app. The API is designed to be compatible with existing notification systems across different platforms.

Showing a system notification involves two things:
* User needs to grant permission to display system notification
* Then the notification can be created

**Constructor**  
`Notification()`: Creates new instance of the Notification object  
**Properties**  
`Notification.permission`: Only available on the Notification object itself.

## Resources
[Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API)  
