export const Counter = () => {
  const [count, setCount] = useState(0);

return (
<div>
<p>Current count: {count}</p>
<button onClick={() => setCount(count + 1)}>+</button>
</div>
);
};
