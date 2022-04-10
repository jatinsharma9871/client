<template>
    <footer class="footer">
        <div class="footer__content">
            <p class="footer__content--text"> &copy; PNB Metlife INDIA LTD 2002. All rights reserved. <br> Contact us @ Gurdeep Singh : 7982419813 </p>
            
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer"
};
</script>

<style lang="scss">
.footer {

    &__content {
        margin-top: 10rem;
        height: 20rem;
        width: 100%;
        background-color: $color-primary;

        &--text {
            text-align: center;
            font-size: 2rem;
            color: $color-white;
            border-top: 1px solid $color-white;
            padding-top: 8rem;
        }
    }
}
</style>