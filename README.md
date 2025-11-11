# React-Course
This is react course for begginer's to intermediate who know javascript

# what is react
 
 React is an external library

 React is a popular open-source JavaScript library primarily used for building user interfaces (UI), especially for single-page web applications. It was created by Facebook (now Meta) and focuses on creating reusable UI components that manage their own state, making complex UIs easier to build and maintain.

# script tag
 
 used to load javascript in html
 we can load code from anywhere in the internet
 <!-- https://unpkg.com/supersimpledev@3.2.1/external-library.js   --> this is an external code called external library

 # why there are two libraries for react

  <!-- <script src="https://unpkg.com/supersimpledev/react.js"></script>
  <script src="https://unpkg.com/supersimpledev/react-dom.js"></script> -->

  using react to create websites
  = load react and React-DOM

  using React to creat mobile apps
  = load React and React-Native


# Babel
 
 <!-- https://unpkg.com/supersimpledev/babel.js -->
 Babel is a javascript compiler
 = translates other languages into javascript

 when we use react we don't use javascript,
 we use enhanced version of javascript called = jsx

 jsx = javascript XML
 = its same as javascript but we can directly write HTML code in our javascript

 # problem with jsx

 our web browser doesn't understand jsx
 we need to convet jsx to javascript,
 to convert this we use babel compiler

 # componets

 it's a piece of a website

 when building website
 it's better to split up website into pieces
 so we can work on small pieces of website at a time

# Fragments <></>

group elements together without creating extra div

# Best practice

to use a component(App) 
to create a website

## Lesson 1 Props,components

1. component = a piece of the website
2. component = create out own HTNL elements
3. split the chatbot inot <ChatInput> <ChatMessage>
4. props = make components reusable
5. Destructuring, Guard Operator ( && )
6. Created <App> component