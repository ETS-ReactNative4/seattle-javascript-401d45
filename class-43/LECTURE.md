# Class 43 - Contemporary Full Stack Frameworks

## Presentations of React Native

What did you build?

* Kellen: Tilt functionality, drawing with the gyroscope.
  * How do you draw??
  * react-native-svg
* Daniel: Snap cat (name credit: Andrew / Kellen)
  * Some hardcoded captions with cat pictures.
  * Social madia app.
* Erik: Flash light.
  * Background color, brightness, torch.
  * Not fully implemented yet!
* Andrew: Hi Mom.
  * Use one contact as a target, and randomly send messages at an interval.
  * Will power and energy is the biggest blocker.
* Michael Hendricks: Phone keeps apps open in the background.]
  * Clear out the background apps.
  * Automatically clear on lock.
  * Timer that runs and checks.

## JAM Stack

Javascript: business logic, powers all the events that users experience.

APIs: All data lives on server accessed through remote APIs.

Markup: templating system that formats the content to be displayed.

React technically falls into the JAM Stack.

## SPA vs MPA

Single page application / multi page application

* is content rendered dynamically from one page, or statically from multiple pages.
  * there is some big benefits to MPAs
    * SEO (search engine optimization)
    * Usaully a little faster an runtime.
  * SPAs are usually better at small scale performance.
    * Content can be accessed dynamically, without waiting for a build (building HTML).

## Typescript

* Tomorrow perhaps a mini lecture on typescript.

## Gatsby JS

A feature rich JAM Stack framework with CMS or content fetching used to build templated UIs.
* Has some SEO configuration out of the box (metatags / site maps).
* Lots of configuration options.
* Has opinions about how to createPages / run build tasks.

## Next JS

A little less opinionated, has a more JS developery feel.

Sever side vs Static rendering.

* Is the data processed server side, and HTML handed back.
* Is the HTMl already created, and pre-rendered HTML text is just sent back.
