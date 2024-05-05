<template>
        <section class="flex flex-col items-center justify-center">
            <transition name="fade" mode="out-in">
            <!-- Step 1: Username -->
            <div v-if="step === 1" class="mt-4 pb-8 relative w-full">
                <p class="text-lg font-bold">Step: Username</p>
                <input type="text" id="username" name="username" v-model="formData.username" @input="validateInputs"
                       class="border rounded-md p-2 mt-2 w-full max-w-80" />
                <transition name="fade" mode="out-in">
                    <p v-if="!isUsernameValid" class="text-red-500 absolute bottom-0 right-0 left-0">Please enter a valid username.</p>
                </transition>
            </div>

            <!-- Step 2: Email -->
            <div v-else-if="step === 2" class="mt-4 pb-8 relative w-full">
                <p class="text-lg font-bold">Step: Email</p>
                <input type="text" id="email" name="email" v-model="formData.email" @input="validateInputs"
                       class="border rounded-md p-2 mt-2 w-full max-w-80" />
                <transition name="fade" mode="out-in">
                    <p v-if="!isEmailValid" class="text-red-500 absolute bottom-0 right-0 left-0">Please enter a valid email
                    address.</p>
                </transition>
            </div>

            <!-- Step 3: Review -->
            <div v-else class="mt-4 w-full">
                <p class="text-lg font-bold">Step: Review</p>
                <p>Username: {{ formData.username }}</p>
                <p>Email: {{ formData.email }}</p>
            </div>
        </transition>

        <!-- Navigation buttons -->
            <div class="flex">
                <button id="btn-prev" @click="prevStep" :disabled="step === 1"
                        :class="{ 'disabled:opacity-50 cursor-not-allowed': step === 1 }"
                        class="mt-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded mr-2">Prev</button>
                <button id="btn-next" @click="nextStep" :disabled="step === 3 || !isStepFilled"
                        :class="{ 'disabled:opacity-50 cursor-not-allowed': step === 3 || !isStepFilled }"
                        class="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Next</button>
            </div>
        </section>
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
                if (this.step < 3) this.step++;
                this.checkStepsValidation();
            },
            prevStep() {
                if (this.step > 1) this.step--;
                this.checkStepsValidation();
            },
            validateInputs() {
                this.checkStepsValidation();
            },
            isValidEmail(email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(email);
            },
            checkStepsValidation() {
                if (this.step === 1) {
                    this.isUsernameValid = this.formData.username.trim() !== '';
                    this.isStepFilled = this.isUsernameValid;
                } else if (this.step === 2) {
                    if (this.formData.email.trim() === '' && this.isEmailValid === true) {
                        this.isStepFilled = false;
                    } else {
                        this.isEmailValid = this.formData.email.trim() !== '' && this.isValidEmail(this.formData.email);
                        this.isStepFilled = this.isEmailValid;
                    }
                }
            }
        },
    };
</script>

<style scoped>

</style>
