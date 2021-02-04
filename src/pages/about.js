export default {
    render: function (h) {
        return h('div', [
            h('h4', 'About'),
            h('span', [
                h('span', 'This is another Plugin page.'),
                h('button', {
                    on: {
                        click: () => { this.$store.dispatch('likes/like'); }
                    }
                }, `The plugin has ${this.$store.getters['likes/likes']} likes.`)
            ])
        ])
    }
};
