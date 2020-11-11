const requests = {
  fetchGuestData() {
    return fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users")
      .then(response => response.json())
      // .then(data => data.guestData)
      .catch(error => console.log(error))
  },
  
  fetchRoomsData() {
    return fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms")
      .then(response => response.json())
    // .then(data => data.roomsData)
      .catch(error => console.log(error))
  },
  
  fetchBookingsData() {
    return fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings")
      .then(response => response.json())
    // .then(data => data.bookingsData)
      .catch(error => console.log(error))
  },
  
  postNewBooking(guestID, postingDate, postRoomNumber) {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userID: guestID,
        date: postingDate,
        roomNumber: postRoomNumber
      }),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
  },  
}

export default requests;