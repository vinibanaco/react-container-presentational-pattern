# React Container-Presentational Pattern

This is a simple React pattern to help separation of concerns and improve code readability.

Even though Dan Abramov, one of the most important disseminators of the pattern, don't find it
useful anymore (as he explains in the update of
[his article](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) about
the pattern), I still think it has its advantages.

## The pattern

The basic concept about this pattern is to split your components in 2, on to be your **Container**
component and the other to be your **Presentational** component.

### Container components:

- Responsible for make the requests, handle the data, handle the business rules
- Most times it will need to manage states

### Presentational components:

- Responsible for render JSX and style everything
- Rarely it will need to manage states (if you're doing that probably you need to separate more your
  components responsibilities)

###### **FOLLOW ME ON SOCIAL MEDIA**:

Twitter: [@vinibanaco](https://twitter.com/vinibanaco)

Instagram: [@vinibanaco](https://www.instagram.com/vinibanaco)

LinkedIn: https://www.linkedin.com/in/vinibanaco/
