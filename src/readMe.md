1. useState: To manage states. Returns a stateful value and an updater function to update it. ☑️

2. useEffect: To manage side-effects like API calls, subscriptions, timers, mutations, and more

3. useContext: To return the current value for a context.

4. useRef: It returns a ref object with a .current property. The ref object is mutable. It is mainly used to access a child component imperatively.

5. useCallback: It returns a memorized version of a callback to help a child component not re-render unnecessarily.

6. useReducer: A useState alternative to help with complex state management.

7. useMemo: It returns a memoized value that helps in performance optimizations.

<!-- class based components -->

##Lifecycle of Components

Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.

Virtual DOM and Actual/Real DOM

The three phases are:
Mounting,
Updating, and
Unmounting.
