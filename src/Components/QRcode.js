import style from './Style.module.css'
import { useState } from "react"
import QRCode from "react-qr-code"
export default function QRcode(){
    const [link,setLink] = useState("")
    function handleQrcode(e){
        setLink(e.target.value)
    }
    return(
        <div className={style.QrCodeBody}>
            <QRCode size="75vh" className={style.Qrcode} id="QrCode" value={link}/>
            <input type="text" placeholder='QrCode Texto' id="TextQR" onChange={(e) => handleQrcode(e)} value={link}/>
        </div>
        )
}
