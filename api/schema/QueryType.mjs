import { GraphQLList, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import FileType from './FileType.mjs';

export default new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    uploads: {
      description: 'All stored files.',
      type: GraphQLNonNull(GraphQLList(GraphQLNonNull(FileType))),
      async resolve(source, args, { db }) {
        await db.read();
        return db.data.uploads;
      },
    },
  }),
});
