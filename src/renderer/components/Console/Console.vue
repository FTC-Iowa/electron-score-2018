<template>
<div>
    <div class="console-panel" v-if="visible">
        <div ref="console" class="console-display">
            <div v-for="(item,index) in logs" :key="index" v-html="item" />
        </div>
        <div class="console-input-bar">
            <label class="console-prompt">></label>
            <!-- <div class="console-input"> -->
                <input v-model="cmd" ref="input" :placeholder="config.placeholder" @keydown="keyhandler" class="console-input" />
            <!-- </div> -->
        </div>
    </div>
</div>
</template>

<script>
    function createHotKeyListener (self, key) {
        return function (e) {
            if (e.keyCode !== key) 
                return
            self.toggle()
            e.preventDefault()
        }
    }

export default {
    name: 'console',
    props: {
        // visible: true
    },
    data: () => ({
        cmd: '',
        logs: [],
        history: [],
        commands: {},
        visible: false,
        config: {
            hotkey: 192 // '~'
        }        
    }),
    destroyed() {
        this.hotKeyListener && window.removeEventListener('keydown', this.hotKeyListener)
    },
    created() {
        this.toggle(this.visible)
        this.$console.log = this.log
        // this.$console.dispatch = this.dispatch
        // this.$console.toggle = this.toggle
        // this.$console.guid = this.guide
        console.log("setup key listener")
        this.hotKeyListener = createHotKeyListener(this, this.config.hotkey)
        window.addEventListener('keydown', this.hotKeyListener)
    },
    methods: {
        toggle(value) {
            if(value === true)
                this.visible = true
            else if (value === false)
                this.visible = false
            else
                this.visible = !this.visible;
            // this.$console.visible = this.visible
            this.$set(this.$console, 'visible', this.visible)
            this.$emit('console-visible', this.visible)
        },
        keyhandler(e) {
            switch(e.keyCode) {
                case 13: // enter
                    this.history.unshift(this.cmd)
                    console.log('enter', this.cmd)
                    this.log('command', this.cmd)
                    break
                case 38: // up arrow
                    break;
                case 40: // down arrow
                    break;
                case 9: // tab
                    break
            }
        },
        autoComplete() {

        },
        log (type) {
            var args = Array.prototype.slice.call(arguments, 1)
            switch (type) {
                case 'command': 
                    this.logs.push('<span class="console-user-input">' + args.join(' ') + '</span>')
                    break;
                case 'message':
                    this.logs.push(args.join(' '))
                    break;
                default:
                    args.unshift(type)
                    this.logs.push(args.join(' '))
            }
            this.$nextTick(function() { if (this.$refs.console) this.$refs.console.scrollTop = this.$refs.console.scrollHeight })
        }
    }

}
</script>

<style lang="scss" scoped>
    .console-panel {
        background-color: rgba(0,0,0,0.8);
        display: block;
        position: fixed;
        bottom: 0px;
        left: 0px;
        right: 0px;
        height: 200px;
        z-index: 9999;

        .console-input-bar {
            background-color: transparent;
            display:flex;
            bottom: 0px;
            width: 100%;
            position:fixed;
            padding: 0px;
            flex-direction: row;
            .console-prompt {
                // background-color: blue;
                padding: 4px 5px;
                color: white;
            }
            .console-input {
                background-color: transparent;
                flex: 1;
                line-height: 16px;
                padding: 4px 5px;
                border: 0; 
                color: white;
            }
        }
        .console-display {
            height: 200px - 28px;
            width: 100%;
            bottom: 28px;
            position: fixed;
            overflow-y: scroll;
            color: white;
        }
    }


</style>
