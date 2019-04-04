
export default function SaveData(props) {

    const requestData = {
          method: 'POST',
          body: JSON.stringify({
            newName: props.nome,
            newEmail: props.email,
            newUserLocationLat: props.currentMarkerLat,
            newUserLocationLng: props.currentMarkerLng,
            newPlace: props.selectedPlace,
            newUserDevice: navigator.userAgent
          }),
          headers: new Headers({
            'content-type': 'application/json'
          }),
          json: true
        };
        // Envia os dados para o servidor Express que conecta com o MongoDB
        fetch(`https://mongo-dot-nexa-digital.appspot.com/userlist`, requestData)
            .then(response => {
                if(response.ok) {
                    return response.json()
                }
                else {
                    throw new Error("Não rolou comunicação com a API");
                }
            })
}