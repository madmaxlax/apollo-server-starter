import { ApolloServer, ApolloError } from 'apollo-server';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import resolvers from './resolvers';
import dataSources from './services';
import { userAccessAuthCheck } from './utils/auth-checker';

export const bootstrap = async () => {
  const server = await createApolloServer();

  const { url } = await server.listen({ port: process.env.PORT || 3003 });
  console.log(`Server is running on ${url}`);
};

export const createApolloServer = async () => {
  const checkOrigins: any = (origin: string, callback: any) => {
    if (
      process.env.NODE_ENV === 'development' ||
      process.env.NODE_ENV === 'local' ||
      !origin
    ) {
      callback(null, true);
    } else {
      callback(new ApolloError('Not allowed by CORS'));
    }
  };

  const corsOptions: {
    origin: string;
    optionsSuccessStatus: number;
    exposedHeaders: [string];
  } = {
    origin: checkOrigins,
    optionsSuccessStatus: 204,
    exposedHeaders: ['Content-Disposition'],
  };

  try {
    const schema = await buildSchema({
      resolvers: resolvers,
      emitSchemaFile: true,
      nullableByDefault: true,
      authChecker: userAccessAuthCheck,
      validate: false,
      dateScalarMode: 'timestamp',
    });

    return new ApolloServer({
      schema,
      dataSources: dataSources,
      playground: process.env.NODE_ENV !== 'production',
      cors: corsOptions,
      context: async ({ req }) => {
        return {
          token: req?.headers?.authorization || '',
        };
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};
