let roomsAvailableTonight = document.querySelector('.available-tonight');
let hotelRevenueTonight = document.querySelector('.hotel-revenue');
let hotelOccupancyTonight = document.querySelector('.hotel-occupancy');

const domUpdates = { 
  todaysAvailable(date, data) {
    let emptyRooms = data.availableRooms(date);
    let roomCount = 
    `
    <div class="today-available">
    <h3>${emptyRooms}</h3>
    </div>
    `
    roomsAvailableTonight.insertAdjacentHTML('beforeend', roomCount)
  },

  todaysTotalRevenue(date) {
    let total = todaysBookings.totalRevenue(date, roomsData);
    let todaysTotal = 
    ` 
    <div class="todays-total">
    <h3>${total}</h3>
    </div>
    `
    hotelRevenueTonight.insertAdjacentHTML('beforeend', todaysTotal);
  },

  todaysOccupancy(date) {
    let todaysPercentage = todaysBookings.occupancyTotal(date, roomsData);
    let todaysPercent = 
    `
    <div class="todays-occupancy">
    <h3>${todaysPercentage}</h3>
    </div>
    `
    hotelOccupancyTonight.insertAdjacentHTML('beforeend', todaysPercent)
  }
}

export default domUpdates;