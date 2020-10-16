<template>
	<Card style="min-height: 405px">
		<template v-slot:card-header>
			<h5>Pengaturan Highlighter</h5>
		</template>
		<template v-slot:card-body>
			<form action="#">
				<div class="form-group">
					<label for="">Pilih Bahasa Pemrograman</label>
					<select class="form-control" @change="selectBahasa">
						<option
							value
							:selected="settingHighlight.lang == null"
							disabled
						>
							--Pilih Bahasa--
						</option>
						<option
							:value="bahasa"
							v-for="(bahasa, index) in listBahasa"
							:key="index"
							:selected="
								bahasa == settingHighlight.lang ? true : false
							"
						>
							{{ bahasa }}
						</option>
					</select>
				</div>
				<div class="form-group">
					<label for="">Nama Berkas</label>
					<input
						type="text"
						class="form-control"
						v-model="settingHighlight.fileName"
						@input="saveFileName"
					/>
					<small class="text-muted">contoh: app.js</small>
				</div>
				<div class="form-group">
					<label for="">Baris Highlight</label>
					<input
						type="text"
						class="form-control"
						v-model="settingHighlight.highlight"
						@input="saveHighlight"
					/>
					<small class="text-muted">contoh: 1, 2, atau 1 - 3</small>
				</div>
			</form>
		</template>
	</Card>
</template>

<script>
import Card from "../Card";

import { mapGetters, mapActions } from "vuex";
export default {
	components: {
		Card,
	},
	computed: {
		...mapGetters({
			listBahasa: "highlight/listBahasa",
			settingHighlight: "highlight/settingHighlight",
		}),
	},
	methods: {
		...mapActions({
			setSelectedBahasa: "highlight/setSelectedBahasa",
			setFileName: "highlight/setFileName",
			setRowHighlight: 'highlight/setRowHighlight'
		}),
		selectBahasa(e) {
			this.setSelectedBahasa({lang: e.target.value, data: this.settingHighlight});
		},
		saveFileName() {
			this.setFileName({data: this.settingHighlight});
		},
		saveHighlight() {
			this.setRowHighlight({data: this.settingHighlight});
		}
	},
};
</script>