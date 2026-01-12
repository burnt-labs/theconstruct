import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'The Construct',
  description: 'XION Engineering Team Playbook',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Principles', link: '/principles/' },
      { text: 'Roles', link: '/roles/project-lead' },
      { text: 'Processes', link: '/processes/linear' },
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
          { text: 'Project Lead', link: '/roles/project-lead' },
          { text: 'UX Design', link: '/roles/design-engineer' },
          { text: 'Infrastructure', link: '/roles/infrastructure-architect' }
        ]
      },
      {
        text: 'Processes',
        items: [
          { text: 'Using Linear', link: '/processes/linear' },
          { text: 'Project Updates', link: '/processes/project-updates' },
          { text: 'Project Lifecycle', link: '/processes/project-lifecycle' },
          { text: 'Decision Making', link: '/processes/decision-making' }
        ]
      },
      {
        text: 'Culture',
        items: [
          { text: 'Asking for Help', link: '/culture/asking-for-help' },
          { text: 'Communication', link: '/culture/communication' },
          { text: 'Time Off', link: '/culture/time-off' }
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
