---
name: interface-design
description: 'Use when building or modifying UI components, pages, or layouts to ensure design consistency. This skill enforces reading and saving design decisions (spacing, colors, depth, typography) to `.github/interface-design/system.md`.'
---

# Interface Design Skill

Craft · Memory · Consistency

When you build UI with GitHub Copilot, design decisions get made: spacing values, colors, depth strategy, surface elevation. Without structure, those decisions drift across sessions. This skill helps you craft principle-based designs, memorize decisions, and maintain consistency.

## The Flow

1. **Load System**: Always check for and read `.github/interface-design/system.md`. If it doesn't exist, create one based on the current context.
2. **Setup/Assessment**: If no system exists, suggest a design direction based on the project, confirm with the user, and establish the base tokens (Spacing, Colors, Depth, Patterns).
3. **State Decisions**: Explicitly state the design choices that will be applied to the current task before writing the code.
4. **Build**: Build the UI components adhering strictly to the saved principles in `system.md`.
5. **Save System**: After building, if new patterns or tokens (like specific button heights, new card padding) were introduced, update `.github/interface-design/system.md`.

## Philosophy

Consistency beats perfection. A coherent system with "imperfect" values beats a scattered interface with "correct" ones. Memory enables iteration. When you can see what you decided and why, you can evolve intentionally instead of drifting accidentally.
