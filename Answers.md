1. What problem does the context API help solve?

Context API removes the need to prop drill down layers of components. Instead a Context Provider can wrap the branches of the app that will need to access that data and the components within the wrapped brances can use React's useContext to create a context object with the needed data.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions:
action-creators dispatch the action object to the reducer. Action objects must have a type and can have an optional payload of data.

reducer:
is an elaborate if/then function that taked in a state and action and passes an updated state to the redux store

store:
the Redux store is an external state management tool that can provide data within an app through the connect function

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is state that is universally used through out the app (like user logged in and user settings). Component state is locally used state (like text input on a  form or an isLoading property). 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk and other middleware allow the action creators to intercept action-creators before they pass actions to the reducer. This creates an async application. The reducer is synchronous so to facilitate async functionality, middleware are needed.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Last time it was context API because it was the only one I understood, today it is Redux because I finally 'get it'. Redux is my shiny new tool. 
