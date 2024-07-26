import {sleep, check} from 'k6';
import http from 'k6/http';

export let options = {
    vus: 10,
    duration: '30s',
};

export default function () {
    const res = http.get('https://test-api.k6.io/public/crocodiles/1/');
    check(res, {
        'status is 200': (r) => r.status === 200,
    });
    sleep(1);
}