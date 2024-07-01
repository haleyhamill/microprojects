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