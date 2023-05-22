# WorkboardProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.11.

## Initial Setup

- setup with a basic angular project
- log in to Firebase via the CLI
  - Make sure there is a remote database already set up for the project you want
- run 'ng add @angular/fire' to add and initialize @angular/firebase
  - As of @angular/fire v7.5.0 there is a bug for non-existent environment files. Just manually create them
- run 'firebase init' to initialize the emulators
  - project needs auth and firestore
    - When in doubt: 'firebase login --reauth'

## Development server

Run `firebase emulators:exec --project=demo-project --ui 'ng serve'`
- Firebase emulators:exec starts the emulator servers
  - Calling any project 'demo' tells the system to boot in dev mode
  - UI call is chained at the end of the execution to start the UI service
    - UI service will reload automatically on code updates

| Service       | Port     |
|---------------|----------|
| UI            | 4200     |
| Auth          | 9099     |
| Firestore     | 8080     |
| Emulator host | On start |
| Hosting       | 5000     |

## Env setup notes

In app.module.ts we have switches set up for when we are running in a non-prod environment. These automatically trigger to run against the local emulators when in demo-mode.
### Material Design Pallet
Warning: there are some breaking changes that happened going to V15, so the generators may not work yet
[Material Theme Generator](https://materialtheme.arcsine.dev/)
[Material Pallet Generator](http://mcg.mbitson.com/)

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
