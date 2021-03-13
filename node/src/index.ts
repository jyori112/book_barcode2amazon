import { BrowserCodeReader, BrowserMultiFormatOneDReader } from '@zxing/browser'
import Mode from '@zxing/library/esm/core/qrcode/decoder/Mode';

window.addEventListener('load', async () => {
    console.log("LOADING")

    const videoInputDevices = await BrowserCodeReader.listVideoInputDevices();

    const video = document.querySelector('video#test');

    const reader = new BrowserMultiFormatOneDReader();

    const controls = await reader.decodeFromVideoDevice(videoInputDevices[0].deviceId, video, (result, error, controls) => {
        if (!result) {
            return;
        }

        const text = result.getText();

        if (!text.startsWith('978')) {
            return;
        }

        const segment = result.getText().slice(3, -1)

        let total = 0;
        for (let i = 0; i < segment.length; i++) {
            total += parseInt(segment[i]) * (10-i)
        }

        const mod = total % 11;

        const checksum = (mod === 0) ? 0 : 11 - mod;

        const isbn10 = segment + (checksum === 10 ? 'X' : checksum.toString())

        location.href = `https://www.amazon.co.jp/dp/${isbn10}`
    });
});
