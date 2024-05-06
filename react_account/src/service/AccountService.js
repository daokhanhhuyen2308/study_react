import axios from "axios";

class AccountService {

    async register(username, email, password) {

        try {
            const url = 'http://localhost:8080/api/auth';
            await axios.post(url.concat('register'), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify({
                    username: username,
                    email: email,
                    password: password
                })
            });

            alert('User Registration Successfully');

        }
        catch (error) {
            console.log(error);
        }


    }
}

export default new AccountService();
