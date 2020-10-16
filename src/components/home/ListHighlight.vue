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
						@click.prevent="fetchSingleHighlight({id: highlight.id, user: userId})"
					>
						<span class="pointer"
							>{{
								highlight.fileName
									? highlight.fileName
									: "Untitled"
							}}
							- <span style="font-size: 12px;">{{ highlight.updatedAt | formatDate }}</span>
						</span>
						<span
							class="text-danger float-right pointer"
							@click="doDelete({id: highlight.id, user: userId})"
							>x</span
						>
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
import { mapGetters, mapActions } from "vuex";
import moment from 'moment';

export default {
	components: {
		Card,
	},
	computed: {
		...mapGetters({
			userId: 'auth/getUserId',
			listHighlight: "highlight/listHighlight",
		}),
	},
	methods: {
		...mapActions({
			deleteHighlight: "highlight/deleteHighlight",
			fetchSingleHighlight: "highlight/fetchSingleHighlight"
		}),
		doDelete(data) {
			this.deleteHighlight(data).catch(e => this.$toast.error(e.response.data));
		}
	},
	filters: {
		formatDate(value) {
			return moment(value).format('MMM Do YY, h:mm a')
		}
	}
};
</script>

<style scoped>
.pointer {
	cursor: pointer;
}
.list-group-item:hover {
	background: #f7f7f7;
}
</style>