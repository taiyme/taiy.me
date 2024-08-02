type CommonLayoutSimpleProps = Readonly<React.PropsWithChildren>;

export default function CommonLayoutSimple({ children }: CommonLayoutSimpleProps) {
  return (
    <main className='overflow-clip'>
      <div className='@container/page'>
        {children}
      </div>
    </main>
  );
}
