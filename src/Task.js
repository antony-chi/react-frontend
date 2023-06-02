export function TaskCard() {
  const cartStyle = { background: "#202020", color: "#fff", padding: "20px" };
  const titleStyle = { fontWeight: "lighter" }
  return (
    <div style={cartStyle}>
      <h1 style={titleStyle}>Mi primera tarea</h1>
      <p>Tarea realizada</p>
    </div>
  );
}
