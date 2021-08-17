## Making a plan

1. Make a drawing of your app. Simple "wireframes"
2. Once you have a drawing, name the HTML elements you'll need to realize your vision
3. For each HTML element ask: Why do I need this?
4. Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5. Is there some state we need to initialize?
6. Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?
7. Think about how to validate each of your steps
8. Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9. Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

#2 Button (With ID) - Span (With ID) for results.
#3 Button: so the user can take the quiz.
Span: So that the results of the quiz can be displayed.
#5 State: yes, we need to keep track of right and wrong answers as well as the users name.
#6 Events: On Button click we will start the quiz with the first prompt.
#7 Console.log: Button, and span for answers to make sure we are getting them.
run through questions and answers as they are written.
