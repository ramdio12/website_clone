# Website Clone

## Description

- This website clone is based from a company's learning provider site
- Each sections are made up of functional components

## Tech Stack Used :

- React
- Typescript
- CSS
- JSON

- Fontawesome
- Embla Carousel
- Framer Motion

## Challenges

    Problem: In using Helmet for browser title, there was an error :
     Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code.
    * Move data fetching code or side effects to componentDidUpdate.
    * If you're updating state whenever props change,refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at:state

    Solution: I find out that importing react-helmet-async instead of react-helmet will remove the error

### Needs to be improved

- Tracking Some Components that requires less coding
- Although I wanted to use Vanilla CSS to showcase my skills in UI development, the site can still be improved with Tailwind CSS and Bootstrap CSS or React Bootstrap (still at learning phase)
