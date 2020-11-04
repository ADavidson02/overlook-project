import {expect} from 'chai';

import User from '../src/user';
import Bookings from '../src/bookings';

describe ('Bookings', () => {
  let user1, booking
  
  
  beforeEach(() => {
    user1 = new User({"id":1, "name":"Leatha Ullrich"});
    booking = new Bookings ({
      "id":"5fwrgu4i7k55hl6t8",
      "userID":1,
      "date":"2020/02/05",
      "roomNumber":12,
      "roomServiceCharges":[]
    })
    
    it('should be an instance of booking', () => {
      expect(booking).to.be.an.instanceof(Bookings);
    })
  })
})