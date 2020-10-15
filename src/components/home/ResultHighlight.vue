<template>
	<Card style="min-height: 400px;">
		<template v-slot:card-header>
			<h5>Hasil</h5>
		</template>
		<template v-slot:card-body>
			<pre
				class="shiki"
			><div class="shiki__meta"><div class="shiki__language">vue</div></div><div class="shiki__code"><code><div class="line"><span style="color: rgb(127, 219, 202);">&lt;template&gt;</span></div><div class="line"><span style="color: rgb(214, 222, 235);">	</span><span style="color: rgb(127, 219, 202);">&lt;div </span><span style="color: rgb(173, 219, 103);">class</span><span style="color: rgb(127, 219, 202);">=</span><span style="color: rgb(217, 245, 221);">"</span><span style="color: rgb(236, 196, 141);">card</span><span style="color: rgb(217, 245, 221);">"</span><span style="color: rgb(127, 219, 202);">&gt;</span></div><div class="line"><span style="color: rgb(214, 222, 235);">		</span><span style="color: rgb(127, 219, 202);">&lt;div </span><span style="color: rgb(173, 219, 103);">class</span><span style="color: rgb(127, 219, 202);">=</span><span style="color: rgb(217, 245, 221);">"</span><span style="color: rgb(236, 196, 141);">card-body</span><span style="color: rgb(217, 245, 221);">"</span><span style="color: rgb(127, 219, 202);">&gt;</span><span style="color: rgb(214, 222, 235);">This is the result highlight card</span><span style="color: rgb(127, 219, 202);">&lt;/div&gt;</span></div><div class="line"><span style="color: rgb(214, 222, 235);">	</span><span style="color: rgb(127, 219, 202);">&lt;/div&gt;</span></div><div class="line"><span style="color: rgb(127, 219, 202);">&lt;/template&gt;</span></div></code></div></pre>
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

<style scoped>
.shiki {
	background: #1a202c;
	color:#e2e8f0;
	min-height: 290px;
}
</style>