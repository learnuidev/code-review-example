import type { IAddEventInput, IEvent } from "@/types/event.types";

export const addEventFunction = (event: IAddEventInput): IEvent => {
	return {
		...event,
		createdAt: Date.now(),
	};
};
