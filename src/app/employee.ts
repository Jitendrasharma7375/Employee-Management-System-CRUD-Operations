import { v4 as uuidv4 } from 'uuid';

export class Employee {
    id: string = uuidv4();
    first_name: string = '';
    last_name: string = '';
    email_id: string = '';
}

// When we use to ,then we need to change id in
// update-employee.component.html and should change 
// the arguments type in update-employee.component.ts from number to string

// export class Employee {
//     id: number;
//     first_name: string = '';
//     last_name: string = '';
//     email_id: string = '';

//     constructor() {
//         this.id = Date.now(); // Assigns a unique ID based on the current timestamp
//     }
// }

// When we use to ,then we need to change id in
// update-employee.component.html and should change 
// the arguments type in update-employee.component.ts from string to number



