# Using Linear

> "We depend on bottom-up reporting and confidence that teammates will surface issues as they are discovered."
>
> — [Kitchen Communication Principle](/principles/#kitchen-communication)

Linear is our project and issue tracking system.

**Our Linear instance**: [linear.app/burnt](https://linear.app/burnt/)

## Projects

A **project** is a significant body of work with a clear goal and end state.

Examples: new features, major refactors, integrations, infrastructure upgrades.

Projects should have:
- A clear objective
- A **Lead** assigned (this person is the [Project Lead](/roles/project-lead) with decision-making authority)
- Weekly status updates (see [Project Updates](/processes/project-updates))

## Issues

An **issue** is a discrete unit of work that can be completed independently.

Examples: bug fixes, small features, technical debt, spikes.

**Where issues live:**
- **Inside a project** - Part of a larger body of work. Create directly in the project or use `Shift+P` to move an existing issue.
- **Team backlog** - Standalone work not tied to a project. Can be picked up independently or added to a project later.

## Project Statuses

| Status | When to Use |
|--------|-------------|
| **Ideas/Feedback** | Early concepts, not yet scoped |
| **Feature Scoping** | Defining requirements and approach |
| **Backlog** | Scoped but not yet scheduled |
| **Planned** | Scheduled to start |
| **In Progress** | Actively being worked on |
| **Blocked** | Cannot proceed—add a comment explaining why |
| **External Partner Building** | Waiting on external party |
| **Completed** | Shipped and done |
| **Canceled** | Will not be completed (see [Project Lifecycle](/processes/project-lifecycle)) |

Keep status current. Stale statuses erode trust in the system.

## Writing Good Issues

**Titles** - Be specific. Start with a verb. Someone should understand the work from the title alone.

| Bad | Good |
|-----|------|
| Fix bug | Fix login redirect loop on mobile Safari |
| Update API | Add rate limiting to public endpoints |

**Descriptions** - Include context (why is this needed?), acceptance criteria (how do we know it's done?), and links to related work.

## TL;DR

- Projects for significant work with a lead
- Issues for discrete tasks (in a project or team backlog)
- Keep status current
- Write clear titles
