/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { ApolloServer } from 'apollo-server-express';
import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';
import { createTestClient } from 'apollo-server-testing';
import path from 'path';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createTestClientWrapper(server: ApolloServer, headers = {} as any) {
  // @ts-ignore because context is marked as private.
  const oldContext = server.context;

  const context = ({ req, res }: ExpressContext) => {
    return oldContext({ res, req: { ...req, headers } });
  };

  const serverWithHeaderContext = Object.assign({}, server, { context });
  // @ts-ignore -- Typescript doesn't know about __proto__
  serverWithHeaderContext.__proto__ = server.__proto__;

  return createTestClient(serverWithHeaderContext);
}

export const emitTestSchemaFile = path.resolve('./test/', 'schema.gql');
