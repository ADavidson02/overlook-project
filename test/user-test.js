import { expect } from 'chai';

import User from '../src/user';
import userData from '../test/sample-user-data.js';
import bookingsData from '../test/sample-bookings-data.js';


describe('User', () => {
  let user1, user43, user20, user
  
  beforeEach(() => {
    user1 = new User({"id":1, "name":"Leatha Ullrich"});
    user43 = new User({"id":43,"name":"Earline Hamill"});
    user20 = new User({"id":20,"name":"Keon Kirlin"});
    
    user = new User(userData);
  })
  
  it('should be an instance of a User', () => {
    expect(user1).to.be.an.instanceof(User);
  })
  
  it('should take a user data object', () => {
      expect(user1.id).to.equal(1)
      expect(user1.name).to.equal('Leatha Ullrich');
  })
  
  it('should return a list of all bookings for a user', () => {
    expect(user.findBookings(user43.id)).to.deep.equal([
    {
      id: '5fwrgu4i7k55hl6t5',
      userID: 43,
      date: '2020/01/24',
      roomNumber: 24,
      roomServiceCharges: []
    }])
  })
  
  it('should return a total a user has spent on rooms', () => {
    expect(user.findTotalSpent(user43.id)).to.equal('$327.24')
  })
})