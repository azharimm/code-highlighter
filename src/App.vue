<template>
	<div id="app">
		<Navbar />
		<transition name="fade" mode="out-in">
			<router-view :userId="userId" :isAuthenticated="isAuthenticated"></router-view>
		</transition>
	</div>
</template>

<script>
import Navbar from "./components/Navbar";

import { mapActions, mapGetters } from 'vuex';
export default {
	name: "App",
	components: {
		Navbar,
	},
	mounted() {
		this.fetchListBahasa();
	},
	computed: {
		...mapGetters({
			'isAuthenticated': 'auth/getIsAuthenticated',
            'userId': 'auth/getUserId'
		})
	},
	methods: {
		...mapActions({
			'fetchListBahasa': 'highlight/fetchListBahasa',
		})
	}
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
