// TODO: Make this component polymorphic.
// The `as` prop should accept any valid HTML element type (e.g. 'h1', 'p', 'span').
// The remaining props should be inferred from whatever element `as` resolves to —
// for example, if as="a", then `href` should be valid and autocomplete.
// Default `as` to 'p' when not provided.

type TextProps<T extends React.ElementType> = {
  as?: T;
  classname?: string;
  children?: React.ReactNode;
} & Omit<React.ComponentProps<T>, 'as' | 'className' | 'children'>;

function Text<T extends React.ElementType>({
  as,
  children,
  className,
  ...props
}: TextProps<T>) {
  const Component = as || 'p';

  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
}

export { Text };
