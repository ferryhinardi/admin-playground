import { EXPECTED_OPTIONS_KEY } from 'dataloader-sequelize';
import { resolver } from 'graphql-sequelize';
import Models from '../../../../models';

// Tell `graphql-sequelize` where to find the DataLoader context in the
// global request context
resolver.contextToOptions = { [EXPECTED_OPTIONS_KEY]: EXPECTED_OPTIONS_KEY };

export default (ModelName: string, opt?: any) => async (...args) => {
  const model = Models[ModelName];
  const returnValue = await resolver(model, opt)(...args);
  return returnValue;
};
