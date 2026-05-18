export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] bg-cream flex items-center justify-center">
      <div className="text-center">
        <div className="font-display italic text-3xl text-matcha-deep">matchio</div>
        <div className="mt-6 h-px w-32 mx-auto bg-cream-dark overflow-hidden">
          <div className="h-full bg-clay animate-[shimmer_2s_linear_infinite] origin-left" />
        </div>
      </div>
    </div>
  );
}
