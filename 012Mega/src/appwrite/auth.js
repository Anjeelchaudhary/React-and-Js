import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf.js"

export class AuthService {
    Client = new Client();
    account;

    constructor() {
        this.Client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.Client);
    }

    async createAccount({ email, name, password }) {
        try {
            const userAccount = await this.account.create(ID.unique(), password, name, email);
            if (userAccount) {
                //calls a method
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password)
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }
        return null
    }

    async logOut() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();
export default authService;