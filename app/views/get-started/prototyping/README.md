This guide explains how to create prototypes using the DVSA Design System and GOV.UK Prototype Kit.

## Before you start

You must follow the [GOV.UK Design System prototype setup guide](https://design-system.service.gov.uk/get-started/prototyping/) first. Once you've done that, continue below.

## Installing DVSA Frontend

The DVSA Design System uses DVSA Frontend. To install it, run these steps:

1. open Terminal
2. change the directory to your prototype. For example, `cd path/to/prototype`
3. run `npm install @ministryofjustice/frontend --save`

## Updating DVSA Frontend

The current version of DVSA Frontend is **0.0.17-alpha**.

You can check which version your prototype is running by opening `package.json` in the root folder of your prototype. Look for `"@ministryofjustice/frontend"` under `"dependencies"`.

To update your prototype to the latest version of DVSA Frontend:

1. open `package.json` in the root folder of your prototype in a text editor
2. Under `dependencies`, update the reference to DVSA Frontend to  `"@ministryofjustice/frontend": "0.0.17-alpha",`
3. save `package.json`
4. open Terminal/command line
5. change the directory to your prototype's directory. For example, `cd path/to/prototype`
6. run `npm install`
