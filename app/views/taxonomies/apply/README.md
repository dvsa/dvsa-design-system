This page shows all known patterns and components used in the apply for something taxonomy.

## Patterns

You'll need to be a member of the [dvsa-design](https://dashboard.heroku.com/teams/dvsa-design/apps) Heroku team and have your prototype in [DVSA's GitHub account](https://github.com/dvsa).

If you don't have access to these, ask in the Slack channel [#dvsa-design-system](https://dvsa.slack.com/messages/CH5RUSB27) and whoever is managing support that day should be able to add you.

<!-- If you don't know how to setup GitHub read the [version your prototype](#) guide. -->

## Components

We use pipelines in Heroku. Pipelines let you have multiple apps and keep things together in one place.

1. go to the homepage for [dvsa-design](https://dashboard.heroku.com/teams/dvsa-design/apps) in Heroku
2. click 'new' in the top right corner of the screen and select 'Create new pipeline'
3. name the pipeline `{organisation-abbreviation}-{service-name}-prototype`
4. leave the pipeline owner set to `dvsa-design`
5. in the connect to GitHub section select `dvsa` and type the name of your repo which is normally `{organisation-abbreviation}-{service-name}-prototype` and click search
6. find the correct GitHub repo and click 'Connect'
7. click 'Create pipeline'

If everything has worked you should be taken to the pipeline view. You then need to create an app to deploy your prototype to.
