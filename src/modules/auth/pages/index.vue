<script lang="ts" setup>
import { useNuxtApp } from '#app'
const { $repositories } = useNuxtApp()
</script>
<template>
	<div>
		<NuxtLink to="/"> go to home </NuxtLink>
		<br />
		<br />
		<br />
		<pre>
			{{ $repositories }}
		</pre
		>
	</div>
</template>
