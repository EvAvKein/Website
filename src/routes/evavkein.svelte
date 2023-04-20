<h1 aria-label="Eve Aviv Keinan">
	<span aria-hidden="true" id="eve">Ev<span class="extra">e</span></span>
	<span aria-hidden="true" id="aviv">Av<span class="extra">iv</span></span>
	<span aria-hidden="true" id="keinan">Kein<span class="extra">an</span></span>
</h1>

<style>
	h1 {
		font-size: clamp(3.5em, 11vw, 5em);
		color: var(--highlightColor);
		user-select: none;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0 0.3em;
		transition: gap 750ms ease-in-out;
	}
	.extra {
		display: inline-block;
		max-width: 2.5em;
		opacity: 1;
		transition: max-width 750ms ease-in, opacity 500ms ease-out 250ms;
	}

	h1 > span {
		white-space: nowrap;
	}

	h1:hover {
		gap: 0;
	}
	h1:hover .extra {
		max-width: 0;
		opacity: 0;
		transition: max-width 550ms ease-out 100ms, opacity 400ms ease-out;
	}
</style>
