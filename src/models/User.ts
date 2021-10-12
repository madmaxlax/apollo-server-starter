import { Field, ObjectType } from "type-graphql";

@ObjectType({ description: 'User object from B2C' })
export class User {
    @Field(() => String, { nullable: true })
    type!: string;

    @Field(() => String, { nullable: true })
    firstName!: string;

    @Field(() => String, { nullable: true })
    lastName!: string;

    @Field(() => [String], { nullable: true })
    roles!: string[];
}

export enum Role {
    Admin = 'admin',
    Client = 'client',
    Broker = 'broker'
}

export const allRoles: string[] = Object.keys(Role).map(
    (key: string) => Role[key as keyof typeof Role]
  );

