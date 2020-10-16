<template>
	<Card style="min-height: 405px;">
		<template v-slot:card-header>
			<h5>Input Kode</h5>
		</template>
		<template v-slot:card-body>
			<form action="">
				<div class="form-group">
					<textarea
						class="form-control"
						cols="30"
						rows="9"
						v-model="settingHighlight.code"
						@input="saveCode"
					></textarea>
				</div>
				<div class="form-group">
					<div
						class="btn-group"
						role="group"
						aria-label="Basic example"
					>
						<button
							type="button"
							class="btn btn-secondary"
							v-if="result"
							@click.prevent="reset"
						>
							Reset
						</button>
						<button
							type="button"
							class="btn btn-success"
							v-if="isAuthenticated && result"
							@click.prevent="save"
						>
							Simpan
						</button>
						<button
							type="button"
							class="btn btn-primary"
							v-if="result"
							@click.prevent="unduh"
						>
							Unduh
						</button>
					</div>
				</div>
			</form>
		</template>
	</Card>
</template>

<script>
import Card from '../Card'
import { mapActions, mapGetters } from 'vuex';
export default {
	components: {
		Card
	},
	computed: {
		...mapGetters({
			settingHighlight: 'highlight/settingHighlight',
			isAuthenticated: 'auth/getIsAuthenticated',
			userId: 'auth/getUserId',
			result: 'highlight/result'
		})
	},
	methods: {
		...mapActions({
			setCode: 'highlight/setCode',
			reset: 'highlight/reset',
			generateHighlight: 'highlight/generateHighlight',
			storeHighlight: 'highlight/storeHighlight'
		}),
		saveCode() {
			this.setCode({data: this.settingHighlight});
		},
		unduh() {
			let data = this.settingHighlight;
			data.is_unduh = true;
			this.generateHighlight(data);
		},
		save() {
			this.storeHighlight({user: this.userId, content: this.settingHighlight});
		}
	}
}
</script>