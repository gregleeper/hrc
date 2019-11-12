# Hugoton Recreation Commission

**Link:** [HRC](https://hugotonrec.com)

The HRC site is my first step into Gatsby land. The rec needed a site to host content for their constituents and I jumped at the opportunity to use Gatsby for the project.

All images and content come from within the filesystem and are queried by GraphQL. The index page uses two components, [Announcements](https://github.com/gregleeper/hrc/blob/master/src/components/homePageComponents/announcements.js) and [CurrentActivities](https://github.com/gregleeper/hrc/blob/master/src/components/homePageComponents/currentActivities.js), that query for markdown files in the filesystem. It is integrated with Netlify CMS which can commit markdown files to the Github repo and trigger a build on commit.

This site is styled using [Bulma](https://bulma.io) and CSS-in-JS.
