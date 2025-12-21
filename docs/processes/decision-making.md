# Decision Making

> "Everyone should have enough information to make smart, autonomous decisions."
>
> — [Crewmates Principle](/principles/#crewmates)

Clear ownership of decisions prevents bottlenecks and empowers the team.

## Who Decides What

| Decision Type | Who Decides |
|---------------|-------------|
| **Technical decisions** | [Project Lead](/roles/project-lead) |
| **Architecture choices** | [Project Lead](/roles/project-lead) |
| **Implementation approach** | [Project Lead](/roles/project-lead) |
| **Design / UI / UX** | [UX Design](/roles/design-engineer) |
| **Infrastructure** | [Infrastructure](/roles/infrastructure-architect) |

## Technical Decisions: Project Lead

If you're the lead on a project, you make the technical calls:

- Which library to use
- How to structure the code
- What trade-offs to make
- When something is "good enough"

You don't need permission. You have the context. Make the call.

### When to Escalate

Escalate when:
- The decision affects other projects significantly
- You're genuinely unsure and need input
- There are security implications
- It requires resources beyond your project

Escalation is not weakness. It's judgment.

## Design Decisions

For anything UI/UX related, coordinate with [UX Design](/roles/design-engineer). Reach out **early** in the process:
- Before implementing UI components
- When making UX trade-offs
- For visual consistency questions

Don't finish a feature and then ask "does this look right?" Start the design conversation earlier.

## Infrastructure Decisions

For anything that touches infrastructure, coordinate with [Infrastructure](/roles/infrastructure-architect). Reach out **early** to:
- Identify impact on existing infrastructure
- Discover patterns and resources that can accelerate your project
- Avoid rework from misaligned approaches

The goal is to make your project go smoother, not to slow you down.

## Making Good Decisions

1. **Gather context**: Understand the problem before solving it
2. **Consider trade-offs**: Document what you're choosing and why
3. **Move forward**: Don't let perfect be the enemy of shipped
4. **Be open to feedback**: A decision can change with new information

## Documenting Decisions

For significant decisions, leave a trail:
- Comment in the PR
- Note in the Linear ticket
- Message in the project channel

This helps future you and future teammates understand why things are the way they are.

## TL;DR

Project leads own technical decisions. Design owns design. Don't wait for permission you don't need.
