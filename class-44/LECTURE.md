# Class 44 - Ethics and Open Source Contributions

## Presentations

I want to hear your reports.

Andrew and Scott: Svelte! (Not a huge success)

* Performance perks / issues (build time plus runtime)
* Managing state in svelte is easier.
* Context and store built in.
* Refactoring existing code was difficult.
  * Starting from boilerplate and editing things is tedious, lots of files and folders.
* Integrating into an existing project:
  * every `.svelte` file can be a component.
  * Still asking "What's the best way to convert?"
* Score: Scott - 4 / 10, potential|unpleant(5) / 10
* Maybe better to use from the rather than a refactor.

Ryan and Keian: Svelte -> Angular

* hit a few roadblocks
* Single Page Application framework
* A lot of usability features / similar architecture to React.
  * 3 files
    * TS file / CSS / HTML.
* Learning TS!!
  * Feels a little less intuitive
  * There are some new rules to follow :/
* Keian: rendering of the table.
  * Previously: populate array and dyanmically create HTML elements.
  * Angular: HTML template that uses angular attributes.
* Ryan:  using example to figure out the templating
  * Creating the forms in Angular is way different
  * Ryan: Time intensive - 7 / 10.
  * Keian: challenging but a good framework with a lot of pros 8 / 10

Kellen / Erik: Ionic

* Super responsive
* Lots of styling features right out of the box.
  * Figuring out how to deal with all the boilerplate.
* Looks like full feature functionality was reached!
* Immediately deploy to other platforms.
  * Progressive web applications / Native Hardware Applications.
* UI Library / comes.
* Score 10 / 10.

## Ethics in Tech

Ethics vs morals

* Ethics: philosophy for what is best for society?
* Morals: Philosophy for what is best for society / ethics are the rules that get you there.

* You can't have one without the other.
* Semantic, how do you draw a line.
  * Feels like morals are subjective to the individual / ethics has a broader scope.
  * Both deal with rightness. (application of philosophy)

Ethics is "what should I do" / morals is "How do I feel"

Why do we need ethics?

* Society needs guard rails, morals will vary widely and we need something to keep those morals going down a "good" path.
  * When living in a large society we need "rules" to keep us on the straight and narrow.
* Pineapples on Pizza? Is this bad for society or just bad for you.

Readings

* Self Driving cars - real life trolley problem.
  * Passengers vs incoming cars.
  * Do companies decide or the user.
  * Ethics will always be broken.
    * How can we know that people aren't going to break these rules.
    * How do decide who is at fault?
  * What about the unintended consequences.
  * Who makes the rules? Who makes the tech.
    * Are the bad decisions part of the path to right decisions?
  * A very human problem.

* Nothing we can do about the terrible people?
  * Can society agree on what is right and wrong.

* Joey: We should lead by example, model good ethics and morals to compele others.
  * Our the wrong the decisions by the leaders we have enabled a reflection of our own society and ethics.

* Scott: Many problems come from our tech, if we have a lack of diversity we have a lack in problem solving approach.
  * The "racist" soap dispenser,  only despensed soap to light colored skin users.
  * We should expose ourselves and include people of others cultures to get a better insight into the lives of the people on our planet.

* Micheal H.: There will always people bad actors in a vacuum.
  * Our society should be open and we should expose ourselves to as much of our society as possible.

* Michael M: Pharmaceutical company that published a quiz about a drug.
  * Developer reads about a young girl that killed herself from the use case of the drug.
  * Developer leaves the company and talks about his experience.

* Andrew: we are going to be given work that is advnacing some organizations agenda (profits / marketing)
  * Engineers are not speciailists in the products they are building tech for.
    * It's not our job to access harm.
  * What can we do?  Who's responsibility is the harm?

* Michael H: SEO is tricky,  we want people to have eyes on our product, but is that right.
  * Google: "Don't be evil"??
  * Business with China -> no more not being evil.

* Andrew:  How many cases of good ethics outweigh all the bad decisions that companies make.
  * If I don't do this, than another company will reap the profits.
  * We need accountability in our social / municipal services (police / legislation / armed forces)

* Michael: acts of resistance, most people don't have a voice.  Recognize that you have a voice!!
  * We are held captive.

* Joey: Leaders don't want to change the way things are.
  * Promote the right stuff.

## Open Source Contributions

See lab document for details!

## Typescript

### What is Typescript?

A programming that looks like Javascript with Type decarations.  A superset of the JS syntax.

* All the JS you know an love is totally Typescript.
  * The only thing added is we can declare.

* Also includes a compiler.
  * Typescript has a way to convert ts into js.
  * There is more than 1 to make this conversions.
    * How to configure our compilation target?

* Why?
  * Type safety.
  * Better debugging process.
  * Cleaner more conistent code acrosss.

```js

const name = 'Jacob'; // type of string

console.log(typeof(name));

```

```ts

const name: string = 'Jacob';  // typescript super set.

```

### Basic Usage

1. Installation configuration

2. Declaring types

3. Different ways to configure and compile.

  * Babel: a js compiler that is often used for react / angular / frameworks that use JSX or TS.
  * Gulp / Grunt: really prevalent build tools.

### Developing with Typescript
