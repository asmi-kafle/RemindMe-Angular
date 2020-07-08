# RemindMe - Frontend

**Note taking app built with Angular frontend and .Net backend and SQL database for asset management**

- this application implements HTTP requests against a .NET WEB API
- the HTTP requests are translated to CRUD operations by the backend API to return data models from a SQL server
- the return data models are converts into note components
- the note components are dynamically generated and rendered on screen
- each note component has a note title and a task list.
- users create new note with a title and a task by clicking the "Add New Note" button, which creates an alert with input fields.
- more tasks can then be added by pressing the "Update Note" button.
- each note component can be deleted by clicking the delete icon next to the note title

# **TO DO**

- check boxes need to be implemented, to strike through completed task
- delete icon needs to be added next to each task to delete individual task
- new task can be made more visually appealing and user-friendly by taking in the input through an input box which directly makes HTTP Post request to the server instead of using a "Add New Task" button

##

# **To run the Angular application:**

##

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
