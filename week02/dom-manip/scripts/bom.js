const input = document.querySelector('#favchap'); // this connects to the input box
const button = document.querySelector('button');// this connects to the button within the HTML script with the text "add chapter"
const list = document.querySelector('#list') // this connects to the list element within the HTML so that new entries can be added
//const li = document.createElement('li');
//const deleteButton = document.createElement('button');


//li.textContent = input.value;
//deleteButton.textContent = '❌';

//li.append(deleteButton);
//list.append(li);



// activity two code 
// 
// :: a bit tougher than I thought. signals seem to be there, but not connected... or maybe it is the function?
// nevermind I forgot to add the script AND css scripts to the html document on accident... though I didn't quite follow
// what it meant by copy and paste your code you made earlier... also yeah, a bit confusing with where to place the delete button a bit.
// see the uncommented code above for details as to why that is not a good idea by the way.

button.addEventListener('click', function(){
    if (input.value.trim() !== '') {

        const li = document.createElement('li'); // this makes the list that will be embedded later
        const deleteButton = document.createElement('button');//this makes the deleteButton element

        li.textContent = input.value;// this sets the data from input into the constant li
        deleteButton.textContent = '❌';


        deleteButton.addEventListener('click', function(){ 
        // this is placed WITHIN the first event listener to have it make new event listeners each time for each list entry
        // this is also a case of event delegation which allows one blueprint to manage many elements based on one event
        list.removeChild(li) // this removes the entry the delete button is a part of
        input.focus() // this resets focus to the input box
    })
        li.append(deleteButton);// this appends the deletebutton element to the constant li
        list.append(li); // this appends li [and by proxy the delete button] to the constant list
        input.value = ''; // this resets the text-box to empty
        input.focus();
    }    
    else {
     input.focus(); // this resets focus to the input box
    }

    })
