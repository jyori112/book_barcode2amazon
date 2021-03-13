<template>
    <div class="container-fluid app">
        <div class="video-frame row">
            <video ref="video" class="video"></video>
        </div>
        <div class="fixed-bottom bg-light border-top row justify-content-center" v-if="amazon_url">
            <div class="col-8 text-center py-5">
                <a :href="amazon_url" class="btn btn-primary btn-lg btn-block w-100" role="button">Amazon.co.jp</a>
                <a @click="reset" class="mt-1 btn btn-link">もう一度</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { BrowserCodeReader, BrowserMultiFormatOneDReader } from '@zxing/browser'
import { Result } from '@zxing/library';

export default Vue.extend({
    name: 'app',
    data () {
        return {
            devices: [],
            device_index: 1,
            control: null,
            reader: new BrowserMultiFormatOneDReader(),
            amazon_url: null
        }
    },
    methods: {
        reset() {
            this.amazon_url = null;
        },
        async get_devices() {
            this.devices = await BrowserCodeReader.listVideoInputDevices();
        },
        async start() {
            this.control = await this.reader.decodeFromVideoDevice(this.devices[this.device_index].deviceId, this.$refs.video, (result, error, controls) => {
                if (!this.validate_result(result) || this.amazon_url) {
                    return;
                }

                this.amazon_url = this.convert_isbn13_to_url(result.getText());
            });
        },
        validate_result (result: Result) {
            if (!result) {
                return false;
            }

            const text = result.getText();

            if (!text.startsWith('978')) {
                return false;
            }

            return true;
        },
        convert_isbn13_to_url (isbn13) {
            const segment = isbn13.slice(3, -1)

            let total = 0;
            for (let i = 0; i < segment.length; i++) {
                total += parseInt(segment[i]) * (10-i)
            }

            const mod = total % 11;

            const checksum = (mod === 0) ? 0 : 11 - mod;

            const isbn10 = segment + (checksum === 10 ? 'X' : checksum.toString())

            return `https://www.amazon.co.jp/dp/${isbn10}`
        }
    },
    async mounted () {
        await this.get_devices();
        await this.start();
    }
})
</script>
