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
}

export default requests;