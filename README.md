# Udemy React

All react projects on udemy course

# 10: Side Effects (effect), Reducers, Context API

Side Effect

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

![useCallback hook](/slides/useCallback.jpeg)
