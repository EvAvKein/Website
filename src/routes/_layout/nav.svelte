<nav>
	<NavItem href={"/"} imgSrc={"/about.svg"} imgAlt={"Non-descript person icon"} pageName={"Home"} />
	<NavItem href={"/portfolio"} imgSrc={"/code.svg"} imgAlt={"Computer code icon"} pageName={"Portfolio"} />
	<NavItem href={"/contact"} imgSrc={"/contact.svg"} imgAlt={"Envelope icon"} pageName={"Contact"} />
	<hr />
	<NavItem href={"/toolbox"} imgSrc={"/toolbox.svg"} imgAlt={"Toolbox icon"} pageName={"Toolbox"} />
</nav>

<script lang="ts">
	import NavItem from "./navItem.svelte";
</script>

<style>
	nav {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		gap: 1.25em;
		padding: 1em 0.5em 1em;
	}

	hr {
		border-color: var(--textSubColor);
		width: 100%;
		margin: 0;
	}
</style>
