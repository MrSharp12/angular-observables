import { Subject } from 'rxjs/Subject';

export class UsersService {
    userActivated = new Subject();
}
//NOTE:  if you are wanting to implement cross-component communication
//think about using a subject instead of the event emitter

//REMBEMBER next is what pushes a new data value
//and subscribe is the one to consume it