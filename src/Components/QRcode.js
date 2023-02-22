import { useState } from "react"
import QRCode from "react-qr-code"
export default function QRcode(){
    const [link,setLink] = useState("")
    function handleQrcode(e){
        setLink(e.target.value)
    }
    return(
        <div>
            <h1>QRcode</h1>
            <QRCode id="QrCode" value={link}/>
            <input type="text" id="TextQR" onChange={(e) => handleQrcode(e)} value={link}/>
        </div>
        )
}
