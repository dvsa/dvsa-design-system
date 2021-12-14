
## Core user groups

Our core user groups have been created to help us ensure we test with all type of users when building our services. It also shows visitors of the DVSA design system the depth of user testing we have for particular components and patterns.

### Digital capability

We are using the great research done by GOV.UK on the [digital inclusion scale](https://www.gov.uk/government/publications/government-digital-inclusion-strategy/government-digital-inclusion-strategy#a-digital-inclusion-scale-for-individuals) to help us ensure we test our components and patterns with users at different points across the level of digital capability and learn from them.

The digital inclusion scale for individuals has 9 points. It ranges from those people who may have consciously decided not to use the internet and therefore never have been online and never will, to experts whose primary income comes from online services. Basic digital skills, at point 7, is the minimum capability that people need to have in order to use the internet effectively.

#### Digital inclusion scale for individuals

<figure style="margin-left:0px;" class="image embedded"><div class="img"><img src="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/24857/02.-Scale.2.2.png" alt=""></div>
<figcaption><p>Digital inclusion scale for individuals: 1-9</p></figcaption></figure>

#### -5 on digital inclusion scale

The users in this group range from 1 to 5 on the digital inclusion scale.

1. Never have, never will
2. Was online, but no longer
3. Willing and unable
4. Reluctantly online
5. Learning the ropes

#### +5 on digital inclusion scale

The users in this group range from 6 to 9 on the digital inclusion scale.

6. Task specific
7. Basic digital skills
8. Confident
9. Expert



### Accessibility

#### Physical access needs

Our core user groups.

#### Cognitive access needs

Our core user groups.



### Language and content

#### Public

Our core user groups.

#### Internal/Trade

Our core user groups.



### Location

#### Tested on the move (mobile)

Our core user groups.

#### Fixed/stationary access (desktop)

Our core user groups.



### Task complexity

#### Single component page journey

Our core user groups.

#### Multiple component page journey

Our core user groups.














## Setting up Heroku

We use pipelines in Heroku. Pipelines let you have multiple apps and keep things together in one place.

1. go to the homepage for [dvsa-design](https://dashboard.heroku.com/teams/dvsa-design/apps) in Heroku
2. click 'new' in the top right corner of the screen and select 'Create new pipeline'
3. name the pipeline `{organisation-abbreviation}-{service-name}-prototype`
4. leave the pipeline owner set to `dvsa-design`
5. in the connect to GitHub section select `dvsa` and type the name of your repo which is normally `{organisation-abbreviation}-{service-name}-prototype` and click search
6. find the correct GitHub repo and click 'Connect'
7. click 'Create pipeline'

If everything has worked you should be taken to the pipeline view. You then need to create an app to deploy your prototype to.
