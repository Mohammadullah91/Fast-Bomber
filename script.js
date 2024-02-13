async function sendOTPRequest() {
    var number = document.getElementById('number').value;
    var amount = document.getElementById('amount').value;

    try {
        const response = await fetch("http://103.4.145.86:6005/api/v1/user/otp/send", {
            method: 'POST',
            headers: {
                'User-Agent': 'Your-User-Agent',
                'Authorization': 'Bearer 2Comics4mh5ln64ron5t26kpvm3toBlog',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                msisdn: number,
                operator: 'robi',
                secret_key: '',
            }),
        });

        const data = await response.json();
        document.getElementById('output').innerText = "Send OTP Response: " + JSON.stringify(data);
    } catch (error) {
        console.error("Error sending OTP:", error);
        document.getElementById('output').innerText = "Error sending OTP";
    }
}

async function retrieveOTPRequest() {
    var number = document.getElementById('number').value;

    try {
        const response = await fetch(`http://apibeta.iqra-live.com/api/v2/sent-otp/${number}`, {
            method: 'GET',
            headers: {
                'User-Agent': 'Your-User-Agent',
                'x-user-channel': 'apps',
            },
        });

        const data = await response.json();
        document.getElementById('output').innerText = "Retrieve OTP Response: " + JSON.stringify(data);
    } catch (error) {
        console.error("Error retrieving OTP:", error);
        document.getElementById('output').innerText = "Error retrieving OTP";
    }
}