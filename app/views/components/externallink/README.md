In addition to the [layout styles](https://design-system.service.gov.uk/styles/layout) in the GOV.UK Design System, the DVSA Design System provides a number of helpers.

## Page wrappers and component mixins

Like `.govuk-width-container` we have an `.dvsa-width-container` class that does the same thing. The difference is that you pass a parameter that overrides the `$govuk-page-width` or `$dvsa-page-width` variables on a component by component basis.

For example, if you wanted one particular instance of the primary navigation component to have a max-width of `400px` you could create a modifier like this:

{% code %}
.dvsa-primary-navigation__container--400 {
  @include dvsa-width-container($width: 400px);
}
{% endcode %}

And pass the modifier class to the macro:

{% code %}js
{% raw %}{{ dvsaPrimaryNavigation({
  containerClasses: 'dvsa-primary-navigation__container--400'
}) }}{% endraw %}
{% endcode %}
