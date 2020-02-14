import { CustomDatePipePipe } from './custom-date-pipe.pipe';

describe('CustomDatePipePipe', () => {
  it('create an instance', () => {
    const pipe = new CustomDatePipePipe('en-GB');
    expect(pipe).toBeTruthy();
  });
});
