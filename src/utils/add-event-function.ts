interface IAddEventInput {
	id: string;
}

type IEvent = IAddEventInput & {
	createdAt: number;
};

export const addEventFunction = (event: IAddEventInput): IEvent => {
	console.log("BLABLA");

	console.log("ANOTHER USELESS COMMENT");
	return {
		...event,
		createdAt: Date.now(),
	};
};
