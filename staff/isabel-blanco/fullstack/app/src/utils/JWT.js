class JWT {
    constructor(token) {
        this.token = token

        const [header64, payload64, signature] = token.split('.')

        const headerJSON = atob(header64)
        const header = JSON.parse(headerJSON)
        this.header = header

        const payloadJSON = atob(payload64)
        const payload = JSON.parse(payloadJSON)
        this.payload = payload

        this.signature = signature
    }

    isExpired() {
        const now = Math.round(Date.now() / 1000)

        return this.payload.exp - now < 0
    }

    getSubject() {
        return this.payload.sub
    }
}

export default JWT