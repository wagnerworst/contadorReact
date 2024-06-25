import { ButtonHTMLAttributes } from "react";
import './style.css'

interface ButtomProps extends ButtonHTMLAttributes<HTMLButtonElement>{}

export const ButtomClick = ({children, onClick}:ButtomProps)  => {
    return <button onClick={onClick}>{children}</button>
}