import { useCurrentLesson } from "../store/slices/player";

export function Header() {
  const { currentModule, currentLesson } = useCurrentLesson();

  if (!currentModule || !currentLesson) {
    return <span>no lessons</span>;
  }

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentLesson.title}</h1>
      <span>Módulo "{currentModule.title}"</span>
    </div>
  );
}
