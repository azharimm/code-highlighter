<template>
	<Card style="min-height: 405px;">
		<template v-slot:card-header>
			<h5>Daftar Highlight</h5>
		</template>
		<template v-slot:card-body>
			<center><h5>Tidak ada data</h5></center>
			<ul class="list-group">
				<li class="list-group-item">app.js</li>
				<li class="list-group-item">app.php</li>
				<li class="list-group-item">component.vue</li>
			</ul>
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