export interface IAddEventInput {
	id: string;
}

export type IEvent = IAddEventInput & {
	createdAt: number;
};
