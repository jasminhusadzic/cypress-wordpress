# E2E Cypress 

## How to run tests

Pull project and the first thing that you need to do is to run:

```sh
$ npm install
```

This will generate the node modules folder.

### Local Run

There is two way to run tests in local:
  - Headless mode
  - Headed mode
  
  ##### Headless mode
  ```sh
$ npm run cy:run
```
  ##### Headed mode
  ```sh
$ npm run cy:open
```

### Github Actions Run

Navigate to Actions section, and select Manual Run. Select Run Workflow, choose branch and click on Run Workflof button. 

# Reporting

Currently is used Mochawesome report. This report will be automatically generated after every exeucution and it can be found in folder reports inside project. If execution is triggered over Github Actions, reports will be saved as Artifact (report.zip)
