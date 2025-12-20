# Using Linear

> "We depend on bottom-up reporting and confidence that teammates will surface issues as they are discovered."
>
> — [Kitchen Communication Principle](/principles/#kitchen-communication)

Linear is our project and issue tracking system. This doc covers what goes in Linear and how to use it effectively.

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
- A clear title describing the work
- Enough context to start without asking questions
- Appropriate labels and priority

### What Doesn't Belong

- Vague ideas without clear next steps (use discussions or docs first)
- Duplicate issues (search before creating)
- Issues you don't intend to work on soon (use a backlog or roadmap instead)

## Issue Lifecycle

| Status | Meaning |
|--------|---------|
| **Backlog** | Not yet prioritized |
| **Todo** | Ready to be picked up |
| **In Progress** | Actively being worked on |
| **In Review** | PR submitted, awaiting review |
| **Done** | Merged and deployed |

### Moving Issues

- Move to **In Progress** when you start work
- Move to **In Review** when you open a PR
- Move to **Done** when it's deployed (not just merged)

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
