<template>
    <div>
        <input type="text" id="description" v-model="text" />
        <p v-if="isBalanced(text)">{{ balancedMessage }}</p>
        <p v-else>{{ unbalancedMessage }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                text: '',
                balancedMessage: 'The text is balanced.',
                unbalancedMessage: 'The text is not balanced.'
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
