import { AuthChecker, ResolverData } from 'type-graphql';
import * as jwt from 'jsonwebtoken';
import { Context } from './graphql-context';
import { User } from '../models';
import { camelize } from './mappers';

export const userAccessAuthCheck: AuthChecker<Context> = async (
  resolverData: ResolverData<Context>,
  roles
) => {
  // If there's no token in the context do not allow access
  if (!resolverData.context.token) {
    return false;
  }

  // If @Authorize('RoleName') decorates a query, mutation, or field
  // then check if the user has the required role.
  if (roles) {
    const user = jwt.verify(
      resolverData.context.token,
      process.env.TOKEN_PRIVATE_KEY as string // qwertyuiopasdfghjklzxcvbnm123456
    ) as User;
    // Set context.user to decoded token
    resolverData.context.user = camelize()(user);
    return roles.some(role => user.roles.includes(role));
  }

  return true;
};
