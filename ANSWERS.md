- [ ] Why would you use class component over function components (removing hooks from the question)?

    Class components might be more useful than function components in terms of explicitly separating stateful components from functions. 
    Functional components using hooks blur the line between a component that manages state and logic and one which is merely presentational.

- [ ] Name three lifecycle methods and their purposes.

    componentDidMount - This method is fired when the component is mounted on the page. This method could house an API call because it will only fire once.
    componentDidUpdate - This method is fired when there is a change to state.
    componentWillUnmount - When a component is unmounted, it is destroyed and is no longer active on the page.

- [ ] What is the purpose of a custom hook?

    The purpose of a custom hook is to reuse logic between components that are sharing it. Instead of rewriting and hard-coding the logic for each component
    we can choose to create a custom hook which will be reusable.

- [ ] Why is it important to test our apps?

    It saves a ton of money and headache. By testing our apps, we can narrow in on surface bugs faster and write better code. By writing components that are 
    simpler and easier to test, we make them easier to read and maintain. This is important for decreasing the amount of tech debt we accrue over the lifespan
    of a product or application.