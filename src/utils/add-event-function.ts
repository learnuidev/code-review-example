interface IAddEventInput {
	id: string;
}

type IEvent = IAddEventInput & {
	createdAt: number;
};

export const addEventFunctionYo = (event: IAddEventInput): IEvent => {
	return {
		...event,
		createdAt: Date.now(),
	};
};
