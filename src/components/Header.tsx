import { useAppSelector } from "../store";

export function Header() {
  const lesson = useAppSelector((state) => {
    const { currentLessonIndex, currentModuleIndex } = state.player;

    const currentModule = state.player.course.modules[currentModuleIndex];
    const currentLesson = currentModule.lessons[currentLessonIndex];

    return { currentModule, currentLesson };
  });

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{lesson.currentLesson.title}</h1>
      <span>Módulo "{lesson.currentModule.title}"</span>
    </div>
  );
}
