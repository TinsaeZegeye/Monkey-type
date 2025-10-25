import Language from "@/components/Language";
import TestControlBar from "@/components/TestControlBar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between">
      <TestControlBar />
      <Language />
    </div>
  );
}
