export const map = <T, U>(coll: T[], fn: (item: T) => U) => {
	if (!Array.isArray(coll)) {
		throw new Error("Expected an array as the first parameter");
	}
	return coll.map(fn);
};
