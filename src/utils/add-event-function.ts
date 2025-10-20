interface IAddEventInput {
	id: string;
}

type IEvent = IAddEventInput & {
	createdAt: number;
};

export const addEventFunction = (event: IAddEventInput): IEvent => {
	return {
		...event,
		createdAt: Date.now(),
	};
};
