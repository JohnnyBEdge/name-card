Overview 
Using your completed 'CSS: Understanding Selectors' exercise you will write HTML and JavaScript that update the name within the card itself. You'll need to create a way for a user to type in a new name and script out an update feature to handle the change of the displayed name inside your name card. 

Learning Objectives 
Link JS to HTML 
Use Form Events 
Requirements 
The following objectives serve as a high-level roadmap for this assignment.

Create an HTML form that accepts user input for a new name 
Connect a JavaScript file to your HTML 
Connect the HTML Form to a JavaScript function that updates the Displayed name 
HINT: document.getElementById("<insertIDHere>") comes in handy with this 
Stretch your Thoughts: Answer the following questions to help stretch your thoughts: 

Which web event did you hook into to update the display name? 
I hooked an eventlistener on the submit button to the input field to copy the value into the name tag.

Where in your HTML did you link to your JavaScript file? Are there better places? What's the best place? 
I added the link to my JS at the end of my body tag, but still within, using the script tag. This is the best place for it as it allows for the content to be loaded first, before trying to implement any changes.

Why is it best practice to store your CSS/JS in external files rather than in your HTML file? 
It is best practice to separate these for readability and seperation of concerns. 

Bonus: In addition to the form to submit a new name, create a button that will generate a pop up in JavaScript with the message "Hello, my name is InputFieldTextHere". 

Deliverables:
Provide a link to your GitHub page. Answer the questions in a readme.txt file. 