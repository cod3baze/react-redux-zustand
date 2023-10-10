import { useStore, useCurrentLesson } from "../zustand-store";

export function Header() {
  const { currentModule, currentLesson } = useCurrentLesson();
  const isLoading = useStore((store) => store.isLoading);

  if (isLoading) {
    return (
      <div className="shadow rounded-md p-1 max-w-sm w-full mr-auto">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="space-y-3">
              <div className="h-2 bg-slate-700 rounded"></div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
      <span>Módulo "{currentModule?.title}"</span>
    </div>
  );
}
