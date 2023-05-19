import axios from "axios";

export async function deleteMessage (id,token, idMessage) {
    let config = {
      method: 'delete',
      maxBodyLength: Infinity,
      url: `https://api.green-api.com/waInstance${id}/deleteNotification/${token}/${idMessage}`,
      headers: { }
    };
    
    await axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  }