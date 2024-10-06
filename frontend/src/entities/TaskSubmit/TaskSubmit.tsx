import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./TaskSubmit.css"

interface ITask {
  id: number;
  title: string;
  description: string;
  status: string;
  starts: string;
  ends: string;
}

const TaskSubmit: React.FC = () => {
  const { id } = useParams();
  const [task, setTask] = useState<ITask | null>(null);

  const getTaskById = async () => {
    const access = localStorage.getItem("token");
    try {
      const res = await fetch(
        `http://localhost:8000/api/v1/study/tasks/${id}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: `JWT ${access}`,
          },
        }
      );
      const data = await res.json();
      setTask(data);
      console.log(data);
    } catch (error) {
      console.error("Ошибка при получении задачи:", error);
    }
  };

  const getStatusClass = () => {
    const statusClasses = {
      active: "activeStatus",
      future: "futureStatus",
      archived: "archivedStatus",
    };
    return `status ${
      statusClasses[task?.status as keyof typeof statusClasses] || ""
    }`;
  };

  useEffect(() => {
    getTaskById();
  }, []);
  return (
    <div className="task-submit m-5 py-10 px-10 rounded-lg">
      <div className="flex w-full justify-between text-center items-center relative">
        <div className="flex gap-3 items-center">
          <img
            src="../../../arrow-right.svg"
            className="arrow-right absolute top-5 -left-6 transition rotate-180"
            alt="Стрелка"
            onClick={() => {
              window.history.back();
            }}
          />
          <h2>{task?.title}</h2>
          <p className={getStatusClass()}>{task?.status}</p>
        </div>
        <p className="text-lg">
          {task?.starts} — {task?.ends}
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <div className="text-left">
          <h4 className="text-xl font-semibold">Описание</h4>
          <p className="text-lg">{task?.description}</p>
        </div>
        <form className="flex gap-5 relative">
          <input
            className="w-full"
            type="text"
            placeholder="Введите ссылку на решение на гитхабе"
          />
          <button className="absolute p-0 -translate-y-1/2 !border-none top-1/2 right-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill=""
              className="fill-[var(--color-accent)]"
              viewBox="0 0 16 16"
            >
              <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default TaskSubmit;
