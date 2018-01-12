# Loose-Diamond-Search

This project uses -

- React js - ^15.6.1
- [Redux js - ^3.5.2](http://redux.js.org/)
- [react bootstrap - ^3](https://react-bootstrap.github.io/components.html)
- react-motion - ^0.5.0
- react-redux - ^5.0.5
- react-router - ^4.1.2
- react-router-dom - ^4.1.2
- react-router-redux - ^5.0.0-alpha.6
- redux-observable - ^0.16.0
- rxjs - ^5.4.3
- font-awesome - ^4.7.0
- form-serialize - ^0.7.2
- classnames
- react-image
- react-modal
- react-redux-toastr
- react-scroll
- react-select
- react-sticky
- react-transition-group
- react-validation
- validator
- sweetalert
- antd


## Roadmap

Before starting development please go through -

- [Presentational and Container Components
](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
- [Tips to learn React + Redux](https://www.robinwieruch.de/tips-to-learn-react-redux/)

- [You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)

## Code Structure

Project uses `Domain-style` for code structure-

Domain-style : separate folders per feature or domain, possibly with sub-folders per file type

Reference -
- http://redux.js.org/docs/faq/CodeStructure.html
- http://engineering.kapost.com/2016/01/organizing-large-react-applications/


## Create React App Boilerplate

Project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Ajax

1. Use `axios` library

2. With epics may be you need to use Rxjs DOM api for ajax see file - `rxjs/observable/dom/ajax`
[AjaxObservable](http://reactivex.io/rxjs/file/es6/observable/dom/AjaxObservable.js.html)

#### Setting up default config for Ajax

Default configurations such as default headers, Root url added in file `src/utils/axios.js`

## Creating new Domain/Feature folder
- Must contain antd file named `index.js` and css file '[feature].css' at root

Example -

- `src/catalog/index.js`
- `src/catalog/catalog.css`

## Reducers for Domain/Feature

 - Create folder named `reducers` inside Feature folder like - `src/catalog/reducers`
- Place `index.js` which combines all reducers using `combineReducers`


## Styling

we are using `scss` Preprocessor. Create a feature/domain specfic scss file, example - `src/catalog/catalog.scss`

After compilation the new corresponding CSS file next to it.
example - `src/catalog/catalog.css`

Finally you can import that css file in `index.js` file
example - `src/catalog/index.js` will import `src/catalog/catalog.css`

#### global styling

For global variables/mixins refer file `src/_shared.scss` which will be again imported inside your feature/domain specific `scss` file, example - `src/catalog/catalog.scss` will import `src/_shared.scss`

#### Reference

- https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc


#### Deployment

May be you need to run `npm rebuild node-sass` to fix Missing binding for Sass to node current version.


