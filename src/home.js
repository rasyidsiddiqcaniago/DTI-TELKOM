const Home = () => {
  const [count, setCount] use state(0);
  const [myNumber. setMynumber] = usestade;

  useEffect(() => {
    console/log('test');
    document.title = `You clicked ${count} times`;

  }, [count]);

  return (
    <div>
      <h1>Welcome Home!</h1>
      <button
        type="button"
        onClick={() => 
          setCount(count +1);
        }
    </div>
  )
}