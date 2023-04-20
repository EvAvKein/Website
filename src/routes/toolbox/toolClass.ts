// this is a module because svelte's compiler breaks when it needs to compile a typescript-syntax class (as of 21.9.22) due to a dependency,
// see https://github.com/sveltejs/svelte/issues/6900 & https://github.com/sveltejs/svelte/issues/6592 (& more via "mentioned this issue" automated replies)

class Tool {
	name: string;
	id: string;

	constructor(name: Tool["name"], id: string) {
		this.name = name;
		this.id = id;
	}
}

export {Tool};
