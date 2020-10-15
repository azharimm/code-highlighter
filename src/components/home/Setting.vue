<template>
	<div class="card">
		<div class="card-header">
			<h5>Pengaturan Highlighter</h5>
		</div>
		<div class="card-body">
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
		</div>
	</div>
</template>