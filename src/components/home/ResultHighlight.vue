<template>
	<Card style="min-height: 400px;">
		<template v-slot:card-header>
			<h5>Hasil</h5>
		</template>
		<template v-slot:card-body>
			<template v-if="result">
				<div v-html="result"></div>
			</template>
		</template>
	</Card>
</template>

<script>
import Card from '../Card'
import { mapGetters } from "vuex";

export default {
	components: {
		Card
	},
	computed: {
		...mapGetters({
			result: 'highlight/result'
		})
	}
}
</script>

<style>
.shiki {
	background: #1a202c;
	color:#e2e8f0;
	min-height: 290px;
}
.highlight {
	background-color: #2c4848;
	opacity: 0.6;
	border-left: 5px solid white;
}
</style>