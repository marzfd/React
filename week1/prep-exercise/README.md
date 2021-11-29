# Building a counter

The counter is one of the best way to learn about state management as it is nice and simple and isolates the management of state. Let's create a simple number counter, starting from 0 until infinity!

1. Run `create-react-app` in this folder to create your environment
2. Create 3 functional components called `<Counter>`, `<Count>` and `<Button>`
3. Inside `<Counter>` define a state variable called `count` (initialized with value `0`) and state handler called `setCount`
4. Inside `<Button>` create a `<button>` with the text `Add 1!` and `onClick` attribute
5. Pass down the `count` state variable to `<Count>`, and the `setCount` to `<Button>`
6. Inside `<Counter>`, declare a variable called `feedback` above the return statement. Give this variable a ternary operator value: if `count` is higher than 10 it should display the string `"It's higher than 10!"`, else it displays `"Keep counting..."`
7. Test out if it works by importing `<Counter>` into the top level component, which is `<App>`