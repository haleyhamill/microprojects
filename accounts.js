export default class Account {
    constructor(status, id) {
        this.status = status
        this.id = id
    }

    updateStatus(newStatus) {
        console.log(`Status updated from ${this.status} to ${newStatus}`)
        this.status = newStatus
    }

}


import React from "react"
import {createRoot} from "react-dom/client"

const root = document.querySelector("react-root")
createRoot(root).render(React.createElement("h1", {}, "Hello World"))