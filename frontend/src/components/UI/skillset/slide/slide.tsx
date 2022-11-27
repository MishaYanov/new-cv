import { component$, useStyles$ } from "@builder.io/qwik";
import styles from './slide.css'

export default component$(()=>{
    useStyles$(styles)

    return(
        <div className="slide-wrapper">
            <div className="style-image"></div>
            <div className="style content"></div>
        </div>
    )
})