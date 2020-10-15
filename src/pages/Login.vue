<template>
    <Container class="mt-5">
        <Row class="row justify-content-center">
            <Cols class="col-md-8">
                <div class="card">
                    <div class="card-header">Masuk ke Highlighter App</div>
                    <div class="card-body">
                        <form action="" method="">
                            <div class="form-group row">
                                <label for="email_address" class="col-md-4 col-form-label text-md-right">
                                    Nama Pengguna
                                </label>
                                <div class="col-md-6">
                                    <input type="text" id="email_address" class="form-control" name="email-address" required autofocus>
                                </div>
                            </div>

                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary btn-block">
                                    Masuk
                                </button>
                            </div>
                        </form>
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
        Cols
    }    
}
</script>