import * as mongoose from 'mongoose';
import { prop, Typegoose } from 'typegoose';

export class User extends Typegoose{
    // properties
    // |
    // v
    @prop()
    userId?: number;
    @prop()
    firstname?: string;
    @prop()
    lastname?: string;
    @prop()
    email?: string;
    @prop()
    password?: string;
}

export const UserModel = new User().getModelForClass(User, {
    existingMongoose: mongoose,
    //  had many problems without that definition of the collection name
    //  so better define it
    //                        |
    //                        v
    schemaOptions: {collection: 'UserAuth'}
})