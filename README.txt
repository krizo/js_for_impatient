# Code for “JavaScript for impatient programmers”

## Installation

1. Requirement: Node.js must be installed. https://nodejs.org/en/
  * Check that the version is at least 10.5.0: `node -v`

2. Installing this repository:

  ```
  cd impatient-js-code/
  npm install
  ```

3. Checking that everything was installed correctly (the “t” is an abbreviation for “test”):

  ```
  npm t installation_test.js
  ```

## Running exercises

Each exercise/test file:

* mentions the command for running the exercise via a command line.
* gives instructions for solving the exercise.

## Tips for the exercises

* In this repository, TypeScript’s type checking is enabled for pure JavaScript, to help you with writing your code. In a few rare cases, type errors prevent you from writing valid JavaScript code (because, in pure JavaScript, you can’t use type annotations to fix them). Work-arounds:
  * Add type annotations via JSDoc comments.
  * Ignore type errors in the complete file: Put the following line at the beginning of the file.
    ```
    // @ts-nocheck
    ```
  * Ignore type errors in the following line:
    ```
    // @ts-ignore
    ```
