import { ConsumerModule } from './consumer.module';

describe('ConsumerModule', () => {
  let consumerModule: ConsumerModule;

  beforeEach(() => {
    consumerModule = new ConsumerModule();
  });

  it('should create an instance', () => {
    expect(consumerModule).toBeTruthy();
  });
});
