<template>
	<div id="app">
		<Navbar />
		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
	name: "App",
	components: {
		Navbar,
	},
};
</script>

<style>
.fade-enter {
	opacity: 0;
}

.fade-enter-active {
	transition: opacity .3s ease;
}

.fade-leave {
}

.fade-leave-active {
	transition: opacity .3s ease;
	opacity: 0;
}
</style>
