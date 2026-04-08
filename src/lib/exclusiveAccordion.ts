/**
 * Single-open accordion: opening one id closes all others; tapping the open id closes it.
 */
export function exclusiveAccordionToggle(
  allIds: readonly string[],
  prev: Record<string, boolean>,
  toggledId: string,
): Record<string, boolean> {
  const closed = Object.fromEntries(allIds.map((id) => [id, false])) as Record<string, boolean>
  if (prev[toggledId]) {
    return closed
  }
  return { ...closed, [toggledId]: true }
}
