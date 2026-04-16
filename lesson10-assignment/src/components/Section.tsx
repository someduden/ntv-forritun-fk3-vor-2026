import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type SectionProps = ComponentPropsWithoutRef<'section'> & {
  title: string;
  children: ReactNode;
  bordered?: boolean;
  background?: 'none' | 'muted' | 'accent';
};

function Section({ title, children, bordered, background = 'none', className, ...props }: SectionProps) {
  const bgStyles = {
    none: '',
    muted: 'bg-gray-50',
    accent: 'bg-blue-50',
  };

const bgStyles = {
  none: '',
  muted: 'bg-gray-50',
  accent: 'bg-blue-50',
} as const;

type SectionProps = {
  title: string;
  children: React.ReactNode;
  bordered?: boolean;
  background?: keyof typeof bgStyles;
  className?: string;
} & Omit<React.ComponentPropsWithRef<'section'>, 'children'>;

function Section({
  title,
  children,
  bordered,
  background,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={`${bordered ? 'rounded-lg border' : ''} ${bgStyles[background]} ${className || ''}`}
      {...props}
    >
      <h2 className="mb-3 text-lg font-bold">{title}</h2>
      <div>{children}</div>
    </section>
  );
}

export { Section };
