<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<router-link tag="a" to="/" class="navbar-brand">
			<img
				src="https://cdn4.iconfinder.com/data/icons/seo-flat-1/512/Code_Optimization-256.png"
				width="30"
				height="30"
				class="d-inline-block align-top"
				alt=""
				loading="lazy"
			/>
			Highlighter
		</router-link>
		<button
			class="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav ml-auto">
				<li class="nav-item active" v-if="!isAuthenticated">
					<router-link tag="a" to="/login" class="nav-link">
						Login
					</router-link>
				</li>
				<li class="nav-item active" v-if="!isAuthenticated">
					<router-link tag="a" to="/register" class="nav-link">
						Register
					</router-link>
				</li>
				<li class="nav-item active" v-if="isAuthenticated">
					<a href="#" class="nav-link">
						{{ userName }}
					</a>
				</li>
				<li class="nav-item active" v-if="isAuthenticated">
					<a type="button" @click.prevent="doLogout" class="nav-link">
						Logout
					</a>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
	computed: {
		...mapGetters({
			'isAuthenticated': 'auth/getIsAuthenticated',
			'userName': 'auth/getUserName'
		})
	},
	methods: {
		...mapActions({
			'logout': 'auth/logout'
		}),
		doLogout() {
			this.logout();
			this.$router.push('/');
		}
	}
}
</script>