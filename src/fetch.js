let requests = {
  fetchGuestData() {
    return fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users");
      .then(response => response.json())
      .then(data => data.guestData)
      .catch(error => consle.log(error))
  }
  
  fetchRoomsData() {
    return fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms");
    .then(response => response.json())
    .then(data => data.roomsData)
    .catch(error => consle.log(error))
  }
  
  fetchBookingsData() {
    return fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings");
    .then(response => response.json())
    .then(data => data.bookingsData)
    .catch(error => consle.log(error))
  }
  
  postNewBooking() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "userID": 22,
      "date": "2019/09/23",
      "roomNumber": 4
  }),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
  },
  
  
}

export default requests;