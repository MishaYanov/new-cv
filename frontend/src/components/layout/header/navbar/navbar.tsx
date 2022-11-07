import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from './navbar.css'
export default component$(()=>{
    useStylesScoped$(styles);


    return (
        <>
        <nav>
            <div className="wrapper">
                <div className="logo">
                    <h1>LOGO</h1>
                </div>
                <div className="actionbar">
                    <button className="action wave">action1</button>
                    <button className="action">action2</button>
                    <button className="action">action3</button>
                </div>
            </div>
        </nav>
        </>
    )
})