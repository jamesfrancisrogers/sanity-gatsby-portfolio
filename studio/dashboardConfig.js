export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '614ed5c6f6e935b6db5b6a87',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-5tru7ggi',
                  apiId: 'f8a0eea8-2b67-440c-bfdf-a159549437de'
                },
                {
                  buildHookId: '614ed5c6da3c8ac6936710f9',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-iz6e6k61',
                  apiId: '640d5e88-5adc-40b0-9b35-9eeb0c711f5c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jamesfrancisrogers/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-iz6e6k61.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
