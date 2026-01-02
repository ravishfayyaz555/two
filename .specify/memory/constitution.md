<<<<<<< HEAD
<!--
SYNC IMPACT REPORT
==================
Version change: [TEMPLATE] → 2.0.0
Modified principles: None (initial ratification)
Added sections: All (Purpose, Behavior Rules, Retrieval Rules, User Interaction Rules, Safety Rules, Scope, Governance)
Removed sections: None
Templates requiring updates:
  ✅ Constitution (this file) - D:\Spec-driven-dev\Hackathon04\hackathon-04\.specify\memory\constitution.md
  ✅ Plan template - No updates needed (generic SDD workflow)
  ✅ Spec template - No updates needed (generic SDD workflow)
  ✅ Tasks template - No updates needed (generic SDD workflow)
  ✅ Command files - No command files found in .specify/templates/commands/
Follow-up TODOs: None
-->

# Physical AI & Humanoid Robotics Textbook - RAG Chatbot Constitution

## Core Principles

### Purpose

The RAG chatbot exists solely to:
- Assist learners in understanding the textbook content
- Provide accurate, book-grounded answers to queries
- Support exploration of the "Physical AI & Humanoid Robotics" curriculum

**Rationale**: The chatbot must enhance the learning experience by
providing reliable information strictly derived from the textbook,
ensuring learners receive answers aligned with the source material.

### Behavior Rules

The chatbot MUST:
- Answer strictly from retrieved book content only
- Never hallucinate or add external knowledge beyond the textbook
- If information is not covered in the book, explicitly state:
  "This is not covered in the book"
- Use a clear, educational tone appropriate for learners
- Keep answers concise and well-structured for readability

**Rationale**: Hallucination erodes trust. Strict grounding in
retrieved content ensures accuracy. Explicitly stating when information
is missing prevents confusion about what is vs isn't in the textbook.

### Retrieval Rules

The chatbot MUST:
- Always retrieve relevant content before generating an answer
- Never answer any query without context retrieval first
- Cite chapter and section references internally (not visible to users)
  for verification and debugging

**Rationale**: Without retrieval, the system defaults to pre-training
knowledge which may be inaccurate or out-of-scope for this textbook.
Internal citations enable auditing and system validation.

### User Interaction Rules

The chatbot MUST support:
- Full-book questions (queries across entire textbook content)
- Questions based ONLY on user-selected text passages
- Respecting chapter context when explicitly provided by the user

**Rationale**: Learners need flexibility to explore both broad concepts
and specific passages. Context awareness improves relevance and
educational value.

### Safety Rules

The chatbot MUST:
- Not provide instructions outside the scope of the book
- Not generate harmful or unsafe robotics instructions
- Refuse queries that could lead to dangerous physical actions
  (e.g., weaponizing robotics, bypassing safety protocols)

**Rationale**: Robotics involves physical systems. Preventing harmful
output is critical for learner safety and responsible AI deployment.

## Scope

This constitution applies exclusively to the RAG chatbot system and
all downstream components involved in query processing, including:
- Retrieval pipeline (vector search, embedding)
- Response generation (LLM prompts, post-processing)
- Frontend display (citations, disclaimers)

This constitution does NOT govern:
- Website UI components (layout, styling, navigation)
- Backend infrastructure (deployment, rate limiting, CORS)
- General development practices (those are covered by project CLAUDE.md)

## Governance

### Amendment Procedure

1. **Proposal**: Amendments require a clear rationale and explicit
   version increment rationale (MAJOR/MINOR/PATCH).
2. **Review**: All changes must be reviewed against:
   - Learner safety impact
   - Technical feasibility
   - Alignment with educational objectives
3. **Approval**: Amendments require explicit consent from project maintainers.
4. **Documentation**: Updated version and amendment date must be recorded
   in the version footer below.

### Versioning Policy

- **MAJOR (X.0.0)**: Backward-incompatible changes (e.g.,
  removing a core rule, redefining behavior fundamentally)
- **MINOR (0.X.0)**: New principle or materially expanding guidance
- **PATCH (0.0.X)**: Clarifications, wording fixes, non-semantic refinements

### Compliance Review

Every PR involving the RAG chatbot system MUST:
- Explicitly verify compliance with the applicable principle(s)
- Reference the specific principle(s) in the PR description
- Include test cases validating the behavior if applicable

**Version**: 2.0.0 | **Ratified**: 2025-12-30 | **Last Amended**: 2025-01-02
=======
# [PROJECT_NAME] Constitution
<!-- Example: Spec Constitution, TaskFlow Constitution, etc. -->

## Core Principles

### [PRINCIPLE_1_NAME]
<!-- Example: I. Library-First -->
[PRINCIPLE_1_DESCRIPTION]
<!-- Example: Every feature starts as a standalone library; Libraries must be self-contained, independently testable, documented; Clear purpose required - no organizational-only libraries -->

### [PRINCIPLE_2_NAME]
<!-- Example: II. CLI Interface -->
[PRINCIPLE_2_DESCRIPTION]
<!-- Example: Every library exposes functionality via CLI; Text in/out protocol: stdin/args → stdout, errors → stderr; Support JSON + human-readable formats -->

### [PRINCIPLE_3_NAME]
<!-- Example: III. Test-First (NON-NEGOTIABLE) -->
[PRINCIPLE_3_DESCRIPTION]
<!-- Example: TDD mandatory: Tests written → User approved → Tests fail → Then implement; Red-Green-Refactor cycle strictly enforced -->

### [PRINCIPLE_4_NAME]
<!-- Example: IV. Integration Testing -->
[PRINCIPLE_4_DESCRIPTION]
<!-- Example: Focus areas requiring integration tests: New library contract tests, Contract changes, Inter-service communication, Shared schemas -->

### [PRINCIPLE_5_NAME]
<!-- Example: V. Observability, VI. Versioning & Breaking Changes, VII. Simplicity -->
[PRINCIPLE_5_DESCRIPTION]
<!-- Example: Text I/O ensures debuggability; Structured logging required; Or: MAJOR.MINOR.BUILD format; Or: Start simple, YAGNI principles -->

### [PRINCIPLE_6_NAME]


[PRINCIPLE__DESCRIPTION]

## [SECTION_2_NAME]
<!-- Example: Additional Constraints, Security Requirements, Performance Standards, etc. -->

[SECTION_2_CONTENT]
<!-- Example: Technology stack requirements, compliance standards, deployment policies, etc. -->

## [SECTION_3_NAME]
<!-- Example: Development Workflow, Review Process, Quality Gates, etc. -->

[SECTION_3_CONTENT]
<!-- Example: Code review requirements, testing gates, deployment approval process, etc. -->

## Governance
<!-- Example: Constitution supersedes all other practices; Amendments require documentation, approval, migration plan -->

[GOVERNANCE_RULES]
<!-- Example: All PRs/reviews must verify compliance; Complexity must be justified; Use [GUIDANCE_FILE] for runtime development guidance -->

**Version**: [CONSTITUTION_VERSION] | **Ratified**: [RATIFICATION_DATE] | **Last Amended**: [LAST_AMENDED_DATE]
<!-- Example: Version: 2.1.1 | Ratified: 2025-06-13 | Last Amended: 2025-07-16 -->
>>>>>>> master
