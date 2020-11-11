import { expect } from 'chai';
import User from '../src/user';
import bookingsData from '../test/sample-bookings-data.js';
import roomData from '../test/sample-room-data.js';


describe('User', () => {
  let user1, user, userData
  
  beforeEach(() => {
    user1 = new User({"id": 1, "name": "Leatha Ullrich"});
    userData = [
      {"id": 1, "name": "Leatha Ullrich"},
      {"id": 2, "name": "Rocio Schuster"},
      {"id": 43, "name": "Earline Hamill"},
      {"id": 20, "name": "Keon Kirlin"}, 
    ]
    
    user = new User(userData);
  })
  
  it('should be an instance of a User', () => {
    expect(user1).to.be.an.instanceof(User);
  })
  
  it('user should have an id', () => {
    expect(userData[0].id).to.equal(1);
  })
  
  it('user should have a name', () => {
    expect(userData[0].name).to.equal('Leatha Ullrich');
  })
  
  
  it('should return a list of all bookings for a user', () => {
    expect(user.findBookings(userData[2].id, bookingsData)).to.deep.equal([
      {
        id: '5fwrgu4i7k55hl6t5',
        userID: 43,
        date: '2020/01/24',
        roomNumber: 24,
        roomServiceCharges: []
      }]);
  })
  
  it('should return a total a user has spent on rooms', () => {
    expect(user.findTotalSpent(userData[2].id, roomData,bookingsData )).to.equal('$327.24');
  })
})