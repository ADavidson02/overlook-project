import { expect } from 'chai';

import User from '../src/user';

describe('User', () => {
  let user1
  
  beforeEach(() => {
    user1 = new User({"id":1, "name":"Leatha Ullrich"});
    
  })
  
  it('should be an instance of a User', () => {
    expect(user1).to.be.an.instanceof(User);
  })
  
  it('should take a user data object', () => {
      expect(user1.id).to.equal(1)
      expect(user1.name).to.equal('Leatha Ullrich');
  })
})