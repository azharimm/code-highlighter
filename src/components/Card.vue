<template>
    <div class="card">
        <div class="card-header">
            <slot name="card-header"></slot>
        </div>
        <div class="card-body">
            <slot name="card-body"></slot>
        </div>
    </div>
</template>

<style scoped>
.card:hover {
    box-shadow: 0 0 11px rgba(33,33,33,.2); 
}
</style>