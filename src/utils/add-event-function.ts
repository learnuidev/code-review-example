import type { IAddEventInput, IEvent } from "@/types/event.types";

console.log("BROOO");
export const addEventFunction = (event: IAddEventInput): IEvent => {
	return {
		...event,
		createdAt: Date.now(),
	};
};
