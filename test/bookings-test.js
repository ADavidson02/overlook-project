import {expect} from 'chai';
import roomData from './sample-room-data.js';
import Booking from '../src/booking';

describe ('Booking', () => {
  let booking, bookingsData
  
  beforeEach(() => {
    
    booking = new Booking ({
      "id": "5fwrgu4i7k55hl6t8",
      "userID": 1,
      "date": "2020/02/05",
      "roomNumber": 12,
      "roomServiceCharges": []
    });
    
    bookingsData = [
      {"id": "5fwrgu4i7k55hl6sz", "userID": 9, "date": "2020/04/22", "roomNumber": 15, "roomServiceCharges": []},
      {"id": "5fwrgu4i7k55hl6t5", "userID": 43, "date": "2020/01/24", "roomNumber": 24, "roomServiceCharges": []},
      {"id": "5fwrgu4i7k55hl6t6", "userID": 13, "date": "2020/01/10", "roomNumber": 12, "roomServiceCharges": []},
      {"id": "5fwrgu4i7k55hl6t7", "userID": 20, "date": "2020/02/16", "roomNumber": 7, "roomServiceCharges": []}
    ]
  })
  
  it('should be an instance of booking', () => {
    expect(booking).to.be.an.instanceof(Booking);
  })
  
  it('should have a an id', () => {
    expect(bookingsData[0].id).to.equal('5fwrgu4i7k55hl6sz');
  })
  
  it('should have a userID assocated with the booking', () => {
    expect(bookingsData[2].userID).to.equal(13);
  })
  
  it('should have a date for the booking', () => {
    expect(bookingsData[1].date).to.equal("2020/01/24");
  })
  
  it('should have a room number associated with the booking', () => {
    expect(bookingsData[3].roomNumber).to.equal(7);
  })
  
  it('should start with no room service charges', () => {
    expect(bookingsData[1].roomServiceCharges.length).to.deep.equal(0);
  })
  
  it('should have an amount of room that are available for today', () => {
    expect(booking.availableRoomAmount("2020/04/22", bookingsData)).to.equal(24);
  })
  
  it('should have a list of available rooms for a date', () => {
    expect(booking.availableRooms("2020/04/22", roomData, bookingsData)).to.have.lengthOf(5)
  })
  
  it('should return the total revenue for a date', () => {
    expect(booking.totalRevenue("2020/02/16", roomData, bookingsData)).to.equal('$231.46');
    expect(booking.totalRevenue("2020/04/23", roomData,  bookingsData)).to.equal('$0');
  })
  
  it('should return the percent of rooms booked for a date', () => {
    expect(booking.occupancyTotal("2020/01/10", roomData, bookingsData)).to.equal('20%');
  })
})