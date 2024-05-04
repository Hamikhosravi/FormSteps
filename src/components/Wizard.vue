<template>
    <div>
        <Description />

        <transition name="fade" mode="out-in">
            <div v-if="step === 1">
                <p>Step: username</p>
                <input type="text" id="username" name="username" v-model="formData.username" @input="validateInputs" />
                <p v-if="!isUsernameValid">Invalid Username.</p>
            </div>
            <div v-else-if="step === 2">
                <p>Step: email</p>
                <input type="text" id="email" name="email" v-model="formData.email" @input="validateInputs" />
                <p v-if="!isEmailValid">Invalid Email Address.</p>
            </div>
            <div v-else>
                <p>Step: review</p>
                <p>Username: {{ formData.username }}</p>
                <p>Email: {{ formData.email }}</p>
            </div>
        </transition>

        <button id="btn-prev" @click="prevStep" :disabled="step === 1">Prev</button>
        <button id="btn-next" @click="nextStep" :disabled="step === 3 || !isStepFilled">Next</button>
    </div>
</template>

<script>
    import Description from './Description.vue';

    export default {
        components: {
            Description
        },
        data() {
            return {
                step: 1,
                formData: {
                    username: '',
                    email: ''
                },
                isUsernameValid: true,
                isEmailValid: true,
                isStepFilled: false
            };
        },
        methods: {
            nextStep() {
                if (this.step < 3 && this.isUsernameValid && this.isEmailValid) this.step++;
            },
            prevStep() {
                if (this.step > 1) this.step--;
            },
            validateInputs() {
                if (this.step === 1) {
                    this.isUsernameValid = this.formData.username.trim() !== '';
                    this.isStepFilled = this.isUsernameValid;
                } else if (this.step === 2) {
                    this.isEmailValid = this.formData.email.trim() !== '' && this.isValidEmail(this.formData.email);
                    this.isStepFilled = this.isEmailValid;
                }
            },
            isValidEmail(email) {
                // Implement email validation logic based on your requirements
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(email);
            }
        },
        watch: {
            'formData.username'(newValue) {
                this.validateInputs();
            },
            'formData.email'(newValue) {
                this.validateInputs();
            }
        }
    };
</script>

<style>
    .fade-leave-to {
        opacity: 0;
        transform: translateX(-100px);
    }
    .fade-enter-from {
        opacity: 0;
        transform: translateX(100px);
    }
    .fade-enter-active, .fade-leave-active {
        transition: all 0.3s ease-out;
    }

</style>
