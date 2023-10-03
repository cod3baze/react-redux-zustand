import { useCurrentLesson } from "../store/slices/player";

export function Header() {
  const lesson = useCurrentLesson();

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{lesson.currentLesson.title}</h1>
      <span>Módulo "{lesson.currentModule.title}"</span>
    </div>
  );
}
