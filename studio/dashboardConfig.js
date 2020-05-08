export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5eb4c7a127bbbb89c8bb1c84',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-nzkgzt6h',
                  apiId: 'a6ab8720-4fba-4ef8-840f-d2d38733e280'
                },
                {
                  buildHookId: '5eb4c7a14120e8c4258a12cf',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-489x7hxd',
                  apiId: '33609c39-f18d-43fd-82a1-e728b4cf6027'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tommyyau/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-489x7hxd.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
