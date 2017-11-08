# React, D3 with Redux Example

<pre>/*
                 ┌────────────────────────┐
                 │                        │
                 │       S T O R E        │
                 │                        │
              ┌──│ object literal (POJO)  │◀──┐
              │  │ of all state and data  │   │
              │  │                        │   │
              │  └────────────────────────┘   │
              │                               │
              │                               │
              ▼                               │
 ┌────────────────────────┐                   │
 │                        │                   │
 │    P R O V I D E R     │                   │
 │                        │                   │
 │ makes store available  │                   │
 │   to all containers    │      ┌────────────────────────┐
 │                        │      │                        │
 └────────────────────────┘      │    R E D U C E R S     │
              │                  │                        │
              │                  │ functions that take in │
              ▼                  │   actions and update   │
 ┌────────────────────────┐      │   part of the state    │
 │                        │      │                        │
 │  C O N T A I N E R S   │      └────────────────────────┘
 │                        │                   ▲
 │  fetch app state data  │                   │
 │   and use to render    │                   │
 │       components       │                   │
 │                        │                   │
 └────────────────────────┘      ┌────────────────────────┐
              │                  │                        │
              │                  │     A C T I O N S      │
              ▼                  │                        │
 ┌────────────────────────┐      │ any change made to the │
 │                        │      │   applications state   │
 │  C O M P O N E N T S   │      │                        │
 │                        │      └────────────────────────┘
 │    react stateless     │                   ▲
 │       components       │                   │
 │                        │                   │
 │                        │                   │
 └────────────────────────┘                   │
              │                               │
              │                               │
              │                               │
              │         ___                   │
              │        /\  \                  │
              │        \:\  \       ___       │
              │         \:\  \     /\__\      │
              │     ___  \:\  \   /:/__/      │
              └─▶  /\  \  \:\__\ /::\  \     ─┘
                   \:\  \ /:/  / \/\:\  \__
                    \:\  /:/  /   ~~\:\/\__\
                     \:\/:/  /       \::/  /
                      \::/  /        /:/  /
                       \/__/         \/__/

*/</pre>

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

It's been adapted from [this forked repo](https://github.com/eesur/React-Redux-Boilerplate)

### It uses these component libraries:

- [vx low-level visualization components](https://vx-demo.now.sh/)
- [Rebass styled-components](http://jxnblk.com/rebass/) 

### What is does/illustrates

All the components are stateless and updates are handles via redux actions (as per diagram above). It serves no purpose other than to help setup or learning. Screen shot:

![screen shot 2017-11-08 at 17 04 37](https://user-images.githubusercontent.com/1597761/32562605-fa7c156a-c4a6-11e7-9e45-f58e306b8427.png)

View build: https://eesur.github.io/d3-react-redux-boilerplate/

-------------------------

## Getting Started

Clone the repo:
```
> git clone https://github.com/eesur/d3-react-redux-boilerplate.git
```
Goinside the downloaded directory:
```
> cd d3-react-redux-boilerplate
```
To get started, first install all the necessary dependencies.
```
> npm install
```
Start the development server (changes will now update live in browser)
```
> npm run start
```

To view your project, go to: [http://localhost:3000/](http://localhost:3000/)

