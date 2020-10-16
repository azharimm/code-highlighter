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
						<button type="button" class="btn btn-secondary">
							Reset
						</button>
						<button type="button" class="btn btn-success">
							Simpan
						</button>
						<button type="button" class="btn btn-primary">
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
			settingHighlight: 'highlight/settingHighlight'
		})
	},
	methods: {
		...mapActions({
			setCode: 'highlight/setCode'
		}),
		saveCode() {
			this.setCode({data: this.settingHighlight});
		}
	}
}
</script>