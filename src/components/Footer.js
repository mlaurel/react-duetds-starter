import React from "react"
import { DuetFooter } from "@duetds/react"

const menu = [
    {
        label: "About Us",
        href: "#",
        external: "false"
    },
    {
        label: "Contact",
        href: "#",
        external: "false"
    },
    {
        label: "Twitter",
        href: "#",
        external: "true"
    }
]

export default function Footer() {
    return <DuetFooter variation="default" menu={menu}></DuetFooter>
}
