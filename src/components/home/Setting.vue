<template>
	<Card style="min-height: 405px;">
		<template v-slot:card-header>
			<h5>Pengaturan Highlighter</h5>
		</template>
		<template v-slot:card-body>
			<form action="#">
				<div class="form-group">
					<label for="">Pilih Bahasa Pemrograman</label>
					<select class="form-control">
						<option value="">Select</option>
					</select>
				</div>
				<div class="form-group">
					<label for="">Nama Berkas</label>
					<input type="text" class="form-control">
					<small class="text-muted">contoh: app.js</small>
				</div>
				<div class="form-group">
					<label for="">Baris Highlight</label>
					<input type="text" class="form-control">
					<small class="text-muted">contoh: 1, 2, atau 1 - 3</small>
				</div>
			</form>
		</template>
	</Card>
</template>

<script>
import Card from '../Card'
export default {
	components: {
		Card
	}
}
</script>