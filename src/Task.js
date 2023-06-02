import "./tasks.css";

export function TaskCard({ready}) {
  return (
    <div className="card">
      <h1>Mi primera tarea</h1>
      <span className={ready ? "bg-green" : "bg-red"}>{ready ? "tarea realizada" : "Tarea pendiente"}</span>
    </div>
  );
}
