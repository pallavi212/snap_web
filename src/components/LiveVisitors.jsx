import { useEffect, useState } from "react";
import { Users, Clock, Eye } from "lucide-react";

function LiveVisitors() {
  const [activeNow, setActiveNow] = useState(0);
  const [active30, setActive30] = useState(0);
  const [views30, setViews30] = useState(0);
  const [isConnected, setIsConnected] = useState(false);
  // Default to current domain in production if VITE_BACKEND_URL is not provided
  const backendUrl = import.meta.env.VITE_BACKEND_URL || "";

  useEffect(() => {
    const fetchAnalytics = () => {
      const url = backendUrl ? `${backendUrl}/analytics` : "/analytics";
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if (!data) return;

          const now =
            data.activeUsersNow ??
            data.activeUsers ??
            0;

          setActiveNow(Number(now) || 0);
          setActive30(Number(data.activeUsersLast30Min ?? 0) || 0);
          setViews30(Number(data.viewsLast30Min ?? 0) || 0);

          console.log(
            `[${new Date().toLocaleTimeString()}] Analytics: now=${now}, active30=${data.activeUsersLast30Min}, views30=${data.viewsLast30Min}`
          );

          setIsConnected(true);
        })
        .catch((err) => {
          console.error("Error fetching live visitors:", err);
          setIsConnected(false);
        });
    };

    // Initial fetch
    fetchAnalytics();

    // Set interval for polling
    const interval = setInterval(fetchAnalytics, 5000);

    return () => clearInterval(interval);
  }, [backendUrl]);

  return (
    <div className="flex flex-col items-start gap-2">
      <div className="flex items-center gap-2 text-xs text-gray-300">
        <span
          className={`inline-flex items-center gap-1 rounded-full px-2 py-1 ${
            isConnected
              ? "bg-green-500/10 text-green-300"
              : "bg-red-500/10 text-red-300"
          }`}
        >
          <span className="relative flex h-4 w-4 items-center justify-center">
            <Users className="h-3 w-3" />
            <span
              className={`absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full ${
                isConnected ? "bg-green-500" : "bg-red-500"
              } animate-pulse`}
            />
          </span>
          <span className="uppercase tracking-widest text-[10px]">
            Realtime overview
          </span>
        </span>
      </div>

      <div className="inline-flex items-stretch rounded-xl bg-slate-900/70 border border-white/10 shadow-sm overflow-hidden">
        <div className="flex flex-col px-4 py-2 min-w-[90px]">
          <span className="text-[11px] text-gray-400">Active users</span>
          <span className="text-lg font-semibold text-white leading-tight">
            {activeNow}
          </span>
        </div>

        <div className="w-px bg-white/5" />

        <div className="flex flex-col px-4 py-2 min-w-[90px]">
          <span className="text-[11px] text-gray-400">New users</span>
          <span className="text-lg font-semibold text-white leading-tight">
            {active30}
          </span>
        </div>

        <div className="w-px bg-white/5" />

        <div className="flex flex-col px-4 py-2 min-w-[90px]">
          <span className="text-[11px] text-gray-400">Total views</span>
          <span className="text-lg font-semibold text-white leading-tight flex items-center gap-1">
            {views30}
            <Eye className="h-3 w-3 text-gray-400" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default LiveVisitors;
