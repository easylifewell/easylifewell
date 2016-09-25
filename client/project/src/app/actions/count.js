import { INCREASE, DECREASE } from '../constants'
import superagent from 'superagent'

export function increase(n) {
  return {
    type: INCREASE,
    amount: n
  }
}

export function getNumber() {
        superagent
          .post('/api/pet')
          .send({ name: 'Manny', species: 'cat' })
          .set('X-API-Key', 'foobar')
          .set('Accept', 'application/json')
          .end(function(err, res){
            // Calling the end function will send the request 
          });

}

export function decrease(n) {
  return {
    type: DECREASE,
    amount: n
  }
}
