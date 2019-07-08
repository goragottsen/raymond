React is a JavaSCript library for building user interfaces:
1. React apps run in the browser (not server)
2. Components

Why +:
1. UI state becomes difficult to handle with Vanilla JS
2. Business logic
3. Huge ecosystem and high performance


SPA vs MPA
One HTML, (re)rendered on Client vs Multiple HTML pages, content rendered on the server
Root component —> Components vs Page is not under react control, only some widgets, which ‘don’t know’ of each other existence
Only one ReactDOM.render() call	vs ReactDOM.render() call per widget

react-dom - package needed for rendering components to the real DOM

Babel - syntax compiler for the code to work in the browser

JSX - special react syntax

return(); —> parenthesis used to return a multiline code

ReactDOM.render(<Person /> (what to render - a component), document.querySelector('#p1') (where to render));

props - an argument containing all the attribute of the component 

Syntax differences w/JS:

JavaScript vs React
class ---> className
onclick ---> onClick
onchange ---> onChange

State Management:
Class based component: setState() —> changing one part doesn’t change the entire state
Function based component: useState() —> calling it will change the entire state


Hooks:
- useState - allows us to manage the state, returns 2 elements: current state and the function allowing us to update the state



Components:
Stateful (aka smart, container) - component that manages STATE (no matter via useState or setState with state property approaches)
Stateless  (aka dumb, presentational) - no internal state management, they only get external data and output it in a structured way, good practice to use as much as possible



Methods can be passed as props