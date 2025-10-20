interface IAddEventInput {
	id: string;
}

type IEvent = IAddEventInput & {
	createdAt: number;
};

export const addEventFunctionABC = (event: IAddEventInput): IEvent => {
	return {
		...event,
		createdAt: Date.now(),
	};
};
