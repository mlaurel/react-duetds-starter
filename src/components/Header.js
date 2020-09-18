// @ts-check
import React from "react"
import { DuetHeader } from "@duetds/react/commonjs"

export class Header extends React.Component {
    handleEvent = ev => {
        const event = ev.detail.originalEvent
        event.preventDefault()
        console.log("event happened")
    }
    render() {
        return (
            <DuetHeader
                current-href="/"
                language="en"
                contact="mlaurel"
                onDuetChange={this.handleEvent}
                items={[
                    { label: "About", href: "/" },
                    { label: "Contact", href: "#" },
                    { label: "Home", href: "#" },
                    { label: "Sitemap", href: "#" }
                ]}
            />
        )
    }
}
export default Header

// export default function Header() {
//     return (
//         <DuetHeader
//             current-href="/"
//             language="en"
//             region="USA"
//             contact="mlaurel"
//             // onDuetChange={this.handleEvent}
//             items={[
//                 { label: "About", href: "/" },
//                 { label: "Contact", href: "#" },
//                 { label: "Home", href: "#" },
//                 { label: "Sitemap", href: "#" }
//             ]}
//         />
//     )
// }
