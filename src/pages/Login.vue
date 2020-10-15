<template>
	<Container class="mt-5">
		<Row class="row justify-content-center">
			<Cols class="col-md-8">
				<Card>
					<template v-slot:card-header>
						<center><h5>Masuk ke Highlighter App</h5></center>
					</template>
					<template v-slot:card-body>
						<form @submit.prevent="doLogin">
							<div class="form-group row">
								<label
									for="user_name"
									class="col-md-4 col-form-label text-md-right"
								>
									Nama Pengguna
								</label>
								<div class="col-md-6">
									<input
										type="text"
										id="user_name"
										class="form-control"
                                        :class="{'is-invalid': error.isError}"
										v-model="userName"
										autocomplete="off"
										autofocus
                                        required
									/>
                                    <small class="text-danger" v-if="error.isError">
                                        {{error.errMsg}}
                                    </small>
								</div>
							</div>

							<div class="col-md-6 offset-md-4">
								<button
									type="submit"
									class="btn btn-primary btn-block"
								>
									Masuk
								</button>
							</div>
						</form>
					</template>
				</Card>
			</Cols>
		</Row>
	</Container>
</template>

<script>
import Container from "../components/Container";
import Row from "../components/Row";
import Cols from "../components/Cols";
import Card from "../components/Card";

import { mapActions, mapGetters } from "vuex";

export default {
	data() {
		return {
			userName: null,
		};
	},
	components: {
		Container,
		Row,
		Cols,
		Card,
	},
	computed: {
		...mapGetters({
			error: "auth/getError",
		}),
	},
	methods: {
		...mapActions({
			login: "auth/login",
		}),
		async doLogin() {
			try {
                await this.login({ name: this.userName });
                this.$router.push('/');
			} catch (e) {
				console.log(e);
			}
		},
	},
};
</script>