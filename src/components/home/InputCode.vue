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
export default {
	components: {
		Card
	}
}
</script>