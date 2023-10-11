export default function App() {
  return (
    <Toolbar
      onPlayMovie={() => alert("playing!")}
      onUploadImage={() => alert("Uploading!")}
    />
  );
}

const Toolbar = ({ onPlayMovie, onUploadImage }: any) => {
  return (
    <div>
      <Button onClick={onPlayMovie}>PlayMovie</Button>
      <Button onClick={onUploadImage}>Upload Image</Button>
    </div>
  );
};

const Button = ({ onClick, children }: any) => {
  return <button onClick={onClick}>{children}</button>;
};
