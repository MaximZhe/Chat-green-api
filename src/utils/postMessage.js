import axios from "axios";
export async function postMessage(id, token, phone, message, postNewMessageArray,clearInputMessage) {
    let data = JSON.stringify({
      chatId: `${phone}@c.us`,
      message: `${message}`,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `https://api.green-api.com/waInstance${id}/sendMessage/${token}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    await axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        postNewMessageArray();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        clearInputMessage();
      });
  }
