declare global {
    namespace NodeJS {
        interface ProcessENV {
            NODE_ENV: "development" | "production"
        }
    }
}

export{}