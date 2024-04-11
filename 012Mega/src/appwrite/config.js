import conf from '../conf/conf.js'
import { Client, ID, Databases, Storage, Query } from 'appwrite'

export class Service {
    Client = new Client();
    Databases;
    bucket; //this is variable i have choosen bucket as variable for storage

    constructor() {
        this.Client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectId);
        this.Databases = new Databases(this.Client)
        this.bucket = new Storage(this.Client)
    }

    async createPost({ title, slug, featuredImage, content, status, userId }) {
        try {
            return await this.Databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    userId,
                    featuredImage,
                    content,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite code :: createPost error ", error);
        }
    }

    async updatePost(slug, { title, featuredImage, content, status }) {
        try {
            return await this.Databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    featuredImage,
                    content,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite code :: updatePost error ", error);
        }
    }

    async deletePost(slug) {
        try {
            return await this.Databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite code :: deletePost error ", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.Databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite code :: getPost error ", error);
            return false;
        }
    }

    //athe k queries kana suruk ola variable ho 
    //jab custom db banail rahbo ta status kana ola key banail rahbo ouhai lehat e
    //ani e appwrite ola hukre fe status kana key banail batai
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            await this.Databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries, //[Query.equal("status", "avtive")] e ola bhag mai yaha fe likhe sektu
            )
        } catch (error) {
            console.log("Appwrite code :: getPost error ", error);

        }
    }

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite code :: uploadfile error", error)
        }
    }

    async deletFile(fileId) {
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite code :: deleteFile error", error)
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId,
        )
    }
}

const servive = new Service();
export default servive;