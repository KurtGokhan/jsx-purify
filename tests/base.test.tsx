/** @jsxImportSource ../src/react */

describe('jsx-purify', () => {
  it('should render JSX without errors', () => {
    const jsx = <div>test</div>;
    expect(jsx).toMatchSnapshot();
  });
});
