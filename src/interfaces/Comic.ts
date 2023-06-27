export interface Comic {
	id: number;
	title: string;
	modified: string;
	description?: string;
	creators: {
		items: [];
	};
	thumbnail: {
		extension: string;
		path: string;
	};
}
