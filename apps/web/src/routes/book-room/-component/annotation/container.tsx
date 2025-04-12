function AnnotationContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center text-gray-500">
      <p>Notes and comments will appear here</p>
      {children}
    </div>
  );
}

export default AnnotationContainer;
