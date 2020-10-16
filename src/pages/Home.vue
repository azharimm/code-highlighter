<template>
	<Container class="mt-5">
		<Row>
            <Cols class="col-md-4">
                <Setting />
            </Cols>
            <Cols class="col-md-8">
                <InputCode />
            </Cols>
        </Row>
        <Row class="mt-3">
            <Cols class="col-md-4" v-if="isAuthenticated">
                <ListHighlight />
            </Cols>
            <Cols class="col-md-8" :class="{'offset-md-4': !isAuthenticated}" v-show="result">
                <ResultHighlight />
            </Cols>
        </Row>
	</Container>
</template>

<script>
import Container from "../components/Container";
import Row from "../components/Row";
import Cols from "../components/Cols";
import Setting from '../components/home/Setting'
import InputCode from '../components/home/InputCode'
import ListHighlight from '../components/home/ListHighlight'
import ResultHighlight from '../components/home/ResultHighlight'

import { mapGetters, mapActions } from 'vuex';

export default {
    props: ['userId', 'isAuthenticated'],
	components: {
		Container,
		Row,
        Cols,
        Setting,
        InputCode,
        ListHighlight,
        ResultHighlight
    },
    mounted() {
        if(this.isAuthenticated) {
            this.fetchListHighlight({user: this.userId});
        }
    },
    computed: {
        ...mapGetters({
            result: 'highlight/result'
        })
    },
    methods: {
		...mapActions({
			'fetchListHighlight': 'highlight/fetchListHighlight'
		})
	}
};
</script>