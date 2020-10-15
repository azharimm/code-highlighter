<template>
	<Container class="mt-5">
		<Row>
            <Cols class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        This is the card
                    </div>
                </div>
            </Cols>
            <Cols class="col-md-8">
            <div class="card">
                <div class="card-body">
                    This is the card
                </div>
            </div>
            </Cols>
        </Row>
        <Row class="mt-3">
            <Cols class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        This is the card
                    </div>
                </div>
            </Cols>
            <Cols class="col-md-8">
            <div class="card">
                <div class="card-body">
                    This is the card
                </div>
            </div>
            </Cols>
        </Row>
	</Container>
</template>

<script>
import Container from "../components/Container";
import Row from "../components/Row";
import Cols from "../components/Cols";
export default {
	components: {
		Container,
		Row,
		Cols,
	},
};
</script>