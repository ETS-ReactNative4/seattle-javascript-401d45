# Class 41: React Native

## Announcements

We have whiteboard finals:  This is your final exam.

* You have to pass to get the cert: worth 10% of your grade.
* You are all on a schedule (google doc).
* As early as tomorrow afternoon you may be scheduled for round 1.
* Please let me know of any shceduling things you think I should know.
* We dont' give up on you (as long as you are showing prgress and effort, we will keep scheduling you).

## Warm Up (10 minutes)

Prompt: Given an Integer, Find the next greatest value in a binary search tree.

* Given value is not garanteed the root.
* We have access to the root of the tree.
* Return null if nothing is higher.

## Conceptual Review

* React Hooks API:
  * Functions that are invoked within React (function components).
  * Hooks into React specific stuff.
  * Replace objected 'this'.
  * use state, hooks into lifecycle methods on components.
  * Implement functionality important to multiple components.
  * Custom Hooks:

```javascript

// cusomt hooks return getters and setters (by convention)
function useForm(callback) {

  let [formState, setForm] = useState({});

  function onSubmit(e) {
    e.preventDefault();
    callback(formState[value]);
  }

  return [formState, setForm, onSubmit];
}


function personForm() {

  let [formState, setFrom, onSubmit] = useForm(console.log);

  return (
    <form onSubmit={onSubmit}>
    </form>
  )
}

```

* React Context API:
  * Something to do with the component tree. (Allows components global access to values stored above, without directly passing props).
  * Before something like context, we have to pass values firectly from parent through child.
    * Context hooks into the component tree using Providers and Consumers.
    * Consumers can now opt in, to values stored in a Provider.

* React Redux API:
  * Meant to create a Global Application state object used by all important components.
  * Using Providers and Consumers.
  * Having a Reducer, while not pretty, does give us some peace of mind for how our applications can change.

## React Native

* A component library, with the goal of converting JS js syntax into objective-c or Java.
* We get acces to many fancy tools that take of all the hard work.
  * install some extra CLI tools (expo) and runtime environment (xcode or visual studio / your phone).

* Allows us to interface directly with native hardware things:
  * camera
  * accelerometer
  * phone contacts
  * ability to make phone calls.
  * finger print readers
  * .... etc

### Expo

* Workflow managment tool (akin to CRA).
  * Compile you JS into excutable code that will run on the device of your choosing.

We can install dependencies with `expo install <dependency-name>`

* Not entirely required but recommended.

Running on iOS emulation:

* Emulation: Xcode installed as well as xcode command line tools.
  * `xcode-select --install`
* Need the Xcode IDE
  * Provides all the SDKs and emulator for devices.
  * If this is your first time running xcode you will need to create a license.
    * `sudo xcodebuild -license`

Running on Android emulation:

* Install Android studio.
* Select a emulation device.
  * Create a virtual device profile to use for expo: https://developer.android.com/studio/run/managing-avds
