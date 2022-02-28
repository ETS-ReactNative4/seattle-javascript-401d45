# Class 36: Redux

## Warm Up (20 mins)

Prompt: Write a function that can perform a Breadth First Traversal of a Graph, given a node to start.

## Review (30 mins)

- Testing the Auth and Login components!
- State managment with Reducers.
  - What is a reducer function?
    - A way to consolodate managment of state
    - The reducer function alters state.
      - we always want to return new state ( a new object, not a mutation on an existing object ).

```javascript

function reducer(state, payload) {
  switch(payload.type) {
    case "ADD_NAME":
      return {...state, name: payload.value}
    default:
      return state;
  }
}
```

- Provider and Consumer components.
  - Provider: The context component that provides the `context` / `data` / `behaviors` to it's children.
  - Consumer: The thing that consumes the context => uses the `data` / `behaviors` to do something.
    - Has to opt in.

- Testing Providers and Consumers

```javascript
// AuthContext.test.js
import AuthProvider from './context/auth/');
import { AuthContext } from './context/auth/');

describe('testing Auth Provider Behavior', () => {
  it ('should provide isAuthorized to Consumers', () => {

    const testConsumer = (props) => {
      returns (
        <>
          <p data-testid='isAuthorized'>{props.isAuthorized}</p>
        </>
      )
    }

    render(
      <AuthProvider>
        <testConsumer>
      </AuthProvider>
    )
    expect(screen.getByTestid('isAuthorized')).toEqual(false);
  });
});
```

## Global Application State (40 mins)

Last week the focus was on specific features that ideally only a subset of components use
  - Authentication: only auth components need to consume these values / behaviors/
  - Settings and theme: only styled conmponents or menus and dashboards.

Redux is designed to be a system that potentially all parts of our UI need.

## Redux API (30 mins)

### Material UI (Component Library) (30 mins)
