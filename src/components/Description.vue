<!-- Description.vue -->
<template>
    <div class="mt-4 pb-8 flex flex-col items-center justify-center">
        <p class="text-lg font-bold mb-2">Description</p>
        <input type="text" id="description" v-model="text" class="border rounded-md p-2 w-full max-w-80" />
        <transition name="fade" mode="out-in">
        <p v-if="isBalanced(text)" class="text-green-500 mt-1">The text is balanced.</p>
        <p v-else class="text-red-500 mt-1">The text is not balanced.</p>
        </transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                text: ''
            };
        },
        methods: {
            isBalanced(text) {
                const stack = [];
                const brackets = {
                    '(': ')',
                    '[': ']',
                    '{': '}'
                };

                for (let char of text) {
                    if (brackets[char]) {
                        stack.push(char);
                    } else if (Object.values(brackets).includes(char)) {
                        if (stack.length === 0 || brackets[stack.pop()] !== char) {
                            return false;
                        }
                    }
                }

                return stack.length === 0;
            }
        }
    };
</script>

<style scoped>
</style>
