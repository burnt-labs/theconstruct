# Using Linear

> "We depend on bottom-up reporting and confidence that teammates will surface issues as they are discovered."
>
> — [Kitchen Communication Principle](/principles/#kitchen-communication)

Linear is our project and issue tracking system. This doc covers what goes in Linear and how to use it effectively.

**Our Linear instance**: [linear.app/burnt](https://linear.app/burnt/)

## What Goes in Linear

### Projects

A **project** is a significant body of work with a clear goal and end state.

Examples:
- New feature implementations
- Major refactors
- Integrations with external systems
- Infrastructure upgrades

Projects should have:
- A clear objective
- A **Lead** assigned (this person is the [Project Lead](/roles/project-lead) with decision-making authority)
- Weekly status updates (see [Project Updates](/processes/project-updates))

### Issues

An **issue** is a discrete unit of work that can be completed independently.

Examples:
- Bug fixes
- Small features or enhancements
- Technical debt items
- Spikes or investigations

Issues should have:
- A clear title describing the work (start with a verb: "Fix calendar bug", "Add webhook handler")
- Enough context to start without asking questions
- Appropriate labels and priority

### Issues and Projects

Issues can exist in two places:

| Where | When to Use |
|-------|-------------|
| **Inside a project** | The issue is part of a larger body of work with a clear outcome |
| **Team backlog** | Standalone work not tied to a specific project |

**Adding issues to projects:**
- If you know the issue belongs to a project, create it directly in that project
- Use `Shift+P` to move existing issues into a project
- Each issue can only belong to one project at a time

**Team backlog:**
- Issues not assigned to a project live in the team backlog
- These can be picked up independently or added to a project later
- Keep the backlog healthy—important issues resurface, low-priority ones rarely get done

## Project Statuses

| Status | When to Use |
|--------|-------------|
| **Ideas/Feedback** | Early concepts, not yet scoped |
| **Feature Scoping** | Defining requirements and approach |
| **Backlog** | Scoped but not yet scheduled |
| **Planned** | Scheduled to start |
| **In Progress** | Actively being worked on |
| **Blocked** | Cannot proceed due to a dependency or issue |
| **External Partner Building** | Waiting on external party |
| **Completed** | Shipped and done |
| **Canceled** | Will not be completed |

### Moving Projects

- Move to **In Progress** when work begins
- Move to **Blocked** immediately if you can't proceed—add a comment explaining why
- Move to **Completed** when it's deployed, not just merged
- Move to **Canceled** with a note explaining why (see [Project Lifecycle](/processes/project-lifecycle))

Keep status current. Stale statuses erode trust in the system.

## Writing Good Issues

### Title

Be specific. Someone should understand the work from the title alone.

| Bad | Good |
|-----|------|
| Fix bug | Fix login redirect loop on mobile Safari |
| Update API | Add rate limiting to public endpoints |
| Refactor | Extract auth middleware from route handlers |

### Description

Include:
- **Context**: Why is this needed?
- **Acceptance criteria**: How do we know it's done?
- **Links**: Related PRs, docs, designs, or discussions

### Labels

Use labels consistently:
- **Type**: bug, feature, chore, spike
- **Area**: frontend, backend, infra, contracts
- **Priority**: urgent, high, medium, low

## Projects vs Issues

| Use a Project when... | Use an Issue when... |
|-----------------------|----------------------|
| Work spans multiple issues | Work is self-contained |
| Needs a dedicated lead | Can be picked up by anyone |
| Requires status tracking | Status is obvious from done/not done |
| Takes more than a week | Takes hours to days |

## Linking Work

- Link issues to their parent project
- Link PRs to their issues (use "Fixes #123" in PR description)
- Link related issues to each other

This creates traceability and makes status updates easier.

## TL;DR

- Projects for significant work with a lead and timeline
- Issues for discrete tasks
- Keep status current
- Write clear titles and descriptions
- Link everything together
