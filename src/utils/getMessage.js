import axios from "axios";

export async function getMessage (id,token,getIdMessage, getArrayMessage) {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://api.green-api.com/waInstance${id}/ReceiveNotification/${token}`,
      headers: { }
    };
    
    await axios.request(config)
    .then((response) => {
     
      getIdMessage(JSON.stringify(response.data.receiptId));
      getArrayMessage(JSON.parse(JSON.stringify(response.data)).body.messageData.textMessageData.textMessage)
    })
    .catch((error) => {
      console.log(error);
    });
  }