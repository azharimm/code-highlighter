<template>
	<Container class="mt-5">
		<Row class="row justify-content-center">
			<Cols class="col-md-8">
				<Card>
					<template v-slot:card-header>
						<center><h5>Daftar ke Highlighter App</h5></center>
					</template>
					<template v-slot:card-body>
						<form @submit.prevent="doRegister">
							<div class="form-group row">
								<label
									for="email_address"
									class="col-md-4 col-form-label text-md-right"
								>
									Nama Pengguna
								</label>
								<div class="col-md-6">
									<input
										type="text"
										id="email_address"
                                        v-model="userName"
										class="form-control"
                                        :class="{'is-invalid': error.isError}"
										name="email-address"
										autofocus
                                        autocomplete="off"
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
									Daftar
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
			register: "auth/register",
		}),
		async doRegister() {
			try {
				await this.register({ name: this.userName });
				this.$router.push("/");
				this.$toast.success('Daftar Berhasil');
			} catch (e) {
				console.log(e);
			}
		},
	},
};
</script>