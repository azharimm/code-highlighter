<template>
	<Card style="min-height: 405px">
		<template v-slot:card-header>
			<h5>Daftar Highlight</h5>
		</template>
		<template v-slot:card-body>
			<template v-if="listHighlight.length > 0">
				<ul class="list-group">
					<li
						class="list-group-item"
						v-for="highlight in listHighlight"
						:key="highlight.id"
					>
						<span class="pointer"
							>{{
								highlight.fileName
									? highlight.fileName
									: "Untitled"
							}}
							- {{ highlight.id }}</span
						>
						<span class="text-danger float-right pointer">x</span>
					</li>
				</ul>
			</template>
			<template v-else>
				<center><h5>Tidak ada data</h5></center>
			</template>
		</template>
	</Card>
</template>

<script>
import Card from "../Card";
import { mapGetters } from "vuex";

export default {
	components: {
		Card,
	},
	computed: {
		...mapGetters({
			listHighlight: "highlight/listHighlight",
		}),
	},
};
</script>

<style scoped>
.pointer {
	cursor: pointer;
}
.list-group-item:hover {
	background: #ccc;
}
</style>