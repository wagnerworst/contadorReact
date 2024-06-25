import { LabelHTMLAttributes } from "react"

interface TitleProps extends LabelHTMLAttributes<HTMLLabelElement>{}

export const Title = ({children}:TitleProps) =>{
    return <h1>{children}</h1>
}