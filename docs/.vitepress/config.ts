import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'The Construct',
  description: 'XION Engineering Team Playbook',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Principles', link: '/principles/' },
      { text: 'Roles', link: '/roles/project-lead' },
      { text: 'Processes', link: '/processes/project-updates' },
      { text: 'Culture', link: '/culture/asking-for-help' }
    ],

    sidebar: [
      {
        text: 'Principles',
        items: [
          { text: 'Engineering Principles', link: '/principles/' }
        ]
      },
      {
        text: 'Roles',
        items: [
          { text: 'Project Lead', link: '/roles/project-lead' }
        ]
      },
      {
        text: 'Processes',
        items: [
          { text: 'Project Updates', link: '/processes/project-updates' },
          { text: 'Decision Making', link: '/processes/decision-making' }
        ]
      },
      {
        text: 'Culture',
        items: [
          { text: 'Asking for Help', link: '/culture/asking-for-help' },
          { text: 'Communication', link: '/culture/communication' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/burnt-labs' }
    ],

    footer: {
      message: 'XION Engineering Team',
      copyright: 'There is no spoon.'
    }
  }
})
