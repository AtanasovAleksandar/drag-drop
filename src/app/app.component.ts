import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  config = [

  ];

  elem = [
    {
      type: 'select',
      label: 'Favourite drink',
      name: 'asd',
      options: ['fata', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option',
    },
    {
      type: 'input',
      label: 'Full name',
      name: 'nameTwo',
      placeholder: 'Enter your name',
    },
    {
      type: 'checkbox',
      label: 'check',
      name: 'value',
      value: 'option1'
      // placeholder: 'Enter your name',
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button',
    }
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  formSubmitted(value) {
    console.log(value);
  }
}












   // {
    //   type: 'checkbox',
    //   label: 'check',
    //   name: 'value',
    //   value: 'option1'
    //   // placeholder: 'Enter your name',
    // },
    // {
    //   type: 'select',
    //   label: 'Favourite drink',
    //   name: 'asd',
    //   options: ['fata', 'Hot Dogs', 'Knakworstje', 'Coffee'],
    //   placeholder: 'Select an option',
    // },
    // {
    //   type: 'input',
    //   label: 'Full name',
    //   name: 'nameTwo',
    //   placeholder: 'Enter your name',
    // },
    // {
    //   type: 'input',
    //   label: 'Full name',
    //   name: 'two',
    //   placeholder: 'Enter your name',
    // },
    // {
    //   type: 'select',
    //   label: 'Favourite food',
    //   name: 'food',
    //   options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
    //   placeholder: 'Select an option',
    // },
    // {
    //   label: 'Submit',
    //   name: 'submit',
    //   type: 'button',
    // },
