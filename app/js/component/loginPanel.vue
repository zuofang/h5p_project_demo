<template>
    <div class="example">
        <label for="user-name">
            用户名 <input type="text" class="user-name" v-model="userName"/>
        </label>
        <label for="password">
            密码<input type="password" class="password" />
        </label>

    </div>
</template>
<script>
    export default {
        data(){
            return {
                userName:"左小胖",
                password:""
            }
        }
    }
</script>
<style scoped>
    .user-name{
        color: red;
    }
    .password{
        color: green;
    }
</style>