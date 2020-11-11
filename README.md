# Overlook Hotel application
This project is a hotel app that can be used by both guests of the hotel and managers. The main features of this app for guests are  they can see all of the bookings they have ever made, a lifetime total for all of their bookings and also make new reservations. For managers the key feature is they are able to view the total rooms available for today, see the total revenue for today and the percentage of rooms that are booked for today.

### Tech Stack
* webpack
* JavaScript
* Scss
* Chai/Mocha

## Testing
There are test that are to used with the bookings, manager, rooms, and user classes. 

### Project
When a guest signs in on their dashboard they will see a full list of all of their bookings along with their lifetime total at the bottom. From this view the guest has the option to click the "New Reservation" button where they will input a date and click the search button. They will be returned a list of available rooms for this date and at this point have the choice to filter the room type.
The results will be changed based on their filter input. When the orange book button is clicked it will turn purple, send a post request to the server and 
add this new reservation to their bookings list on their dashboard. 

When a manager signs in their dashboard will show todays total rooms available, total revenue for today and percetage of rooms occupied for today. If the "search Guest" button is clicked they will be greeted with a search bar to enter a guest to search. Right now there is a bug so this does not yet work but will be fixed on my next iteration along with being able to book a room for this user and deleteing upcoming bookings. 

Contributor:

Amanda Davidson 
@ADavidson02
  

