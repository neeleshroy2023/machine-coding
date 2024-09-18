interface ResponsiveLayoutProps {
    children: JSX.Element[];
}

const ResponsiveLayout = ( {children}: ResponsiveLayoutProps ) => {
  return (
    <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
};

export default ResponsiveLayout;
