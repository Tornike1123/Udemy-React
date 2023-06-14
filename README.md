# Udemy React

All react projects on udemy course

# 10: Side Effects (effect), Reducers, Context API

## Side Effect

> A React side-effect occurs when we use something that is **outside the scope of React.js** in our React components e.g. the Browser APIs like localStorage.
> It means that it is not part of the React framework, for example, the localStorage in your browser.
> When we use React with any of the Browser’s API such as the localStorage, we are creating side-effects.

-   Store Data in Browsers Storage
-   Send Http Request to Backend Servers , handling errors after http request
-   Set & Manage Timers, intervals

**useEffect Hook**

useEffect hook is a function. that U can run inside your component function
![](/Slides/useEffect.png)

---

**useReducer Hook**
![](/Slides/usereducer1.png)
![](/Slides/reducer_js.png)
![](/Slides/reduceVSuseReduce.png)
![](/slides/usereducer.png)
![](/Slides/usereducer4.png)

---

## React Memo

> **Using memo will cause React to skip rendering a component if its props have not changed**. This can improve performance.
> React.memo can be a great tool if you have a huge component tree with a lot of child components & on a high level in the component tree you can avoid unnecessary re-render cycles of the entire branch of the component tree. By avoiding reevalution of parent component we are also automatically avoiding the reevalution of it's child components. Its use is recommended only in large projects.

![React Memo](/Slides/React-memo.jpeg)

[React Memo - Example](https://www.w3schools.com/react/react_memo.asp)

---

## useCallback Hook

> useCallback is a hook that allows us store a function across component executions. So, it allows us to tell React that we want to save a function & that function should not be recreated with every execution. **If we know that function should never change we can use useCallback to store it & disable recreation.**

![useCallback hook](/Slides/useCallback.jpeg)

---

## Class Based Components (Statefull Components)

![Class Components](/Slides/class_comps.png)
![Class Components 2](/Slides/class_comps2.png)
![Class Components 3](/Slides/class_comps3.png)
![Class Components 4](/Slides/class_comps4.png)
![Error Baundary](/Slides/errorBoundary.jpeg)

> **ComponentDidCatch(error)** is similar to "try,catch" block

---

## Forms Validation

![input](/Slides/forms_validation.jpg)

## useRef()

**useRef** is a hook in React that allows you to access the properties of a DOM element. It returns a mutable object with a single property, **current**, which you can use to store a reference to a DOM element or any other value. The value assigned to current will persist across render cycles, making it useful for accessing elements or values that change over time.

For example, you can use useRef to store a reference to an input element and then use that reference to programmatically manipulate the element, such as setting its focus or value.

---

## Redux Library

**_Redux_** is an open-source JavaScript library for managing application state in web applications. It provides a centralized store for the data of an application and enforces unidirectional data flow, making it easier to understand how data changes in response to actions taken in the app. This makes it especially useful for developing complex, data-driven applications.
![what is redux](/Slides/What_is_redux.jpg)
![redux managing state](/Slides/Redux_State.jpg)
![ContextApi disadventages](/Slides/ContextAPI_disadventages.jpg)
![Redux_Concepts](/Slides/Redux_Concepts.jpg)
![Reducer_func_Redux](/Slides/reducer_func.jpeg)

---

## React Router

##### [documentation](https://reactrouter.com/en/main)

installation: `npm install react-router-dom`

#### Hooks

![hook](/Slides/hooks.png)
