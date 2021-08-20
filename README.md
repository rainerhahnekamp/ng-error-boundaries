This application shows how to assign an individual ErrorHandler per module.

It is a very similar featuer that React provides with its error boundaries.

That is only possible when both conditions are given:

1. The individual ErrorHandler is provided on the module level, and
2. that module is lazy-loaded. This is because only with lazy-loading, Angular creates an additional injector.

Click on the button and watch the console's log.
