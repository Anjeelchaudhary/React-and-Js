import conf from '../conf/conf.js'
import { Client, ID, Databases, Storage, Query } from 'appwrite'

export class Service {
    Client = new Client();
    Databases;
    bucket;
    constructor() {
        this.Client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectId);
    }
}

const servive = new Service();
export default servive;