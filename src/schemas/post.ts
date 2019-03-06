import * as mongoose from 'mongoose';
import { prop, Typegoose } from 'typegoose';

export class Article extends Typegoose{
    // properties
    // |
    // v
    @prop()
    title?: String;

    @prop()
    author?: String;

    @prop()
    dateCreated?: String;

    @prop()
    dateEdited?: String;

    @prop()
    body?: String;
}

export const UserModel = new Article().getModelForClass(Article, {
    existingMongoose: mongoose,
    //  had many problems without that definition of the collection name
    //  so better define it
    //                        |
    //                        v
    schemaOptions: {collection: 'BlogHist'}
})