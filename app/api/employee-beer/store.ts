// Memory-only store (resets on server restart)
export const employeeBeerStore = new Map<number, { beer: string; updatedAt: string }>();
