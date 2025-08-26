export function NetworkDiagram() {
  return (
    <div className="relative h-96 bg-slate-800/30 rounded-2xl border border-slate-700 overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 400 300">
        {/* Connection lines */}
        <g stroke="#475569" strokeWidth="1" fill="none">
          <line x1="50" y1="50" x2="120" y2="80" />
          <line x1="120" y1="80" x2="200" y2="60" />
          <line x1="200" y1="60" x2="280" y2="90" />
          <line x1="280" y1="90" x2="350" y2="70" />
          <line x1="120" y1="80" x2="150" y2="150" />
          <line x1="150" y1="150" x2="250" y2="180" />
          <line x1="250" y1="180" x2="320" y2="160" />
          <line x1="200" y1="60" x2="220" y2="120" />
          <line x1="220" y1="120" x2="300" y2="140" />
          <line x1="80" y1="200" x2="150" y2="150" />
          <line x1="150" y1="150" x2="220" y2="120" />
        </g>

        {/* Nodes */}
        <g>
          {/* Regular nodes */}
          <circle cx="50" cy="50" r="8" fill="#64748b" stroke="#94a3b8" strokeWidth="2" />
          <circle cx="120" cy="80" r="8" fill="#64748b" stroke="#94a3b8" strokeWidth="2" />
          <circle cx="200" cy="60" r="8" fill="#64748b" stroke="#94a3b8" strokeWidth="2" />
          <circle cx="280" cy="90" r="8" fill="#64748b" stroke="#94a3b8" strokeWidth="2" />
          <circle cx="350" cy="70" r="8" fill="#64748b" stroke="#94a3b8" strokeWidth="2" />
          <circle cx="150" cy="150" r="8" fill="#64748b" stroke="#94a3b8" strokeWidth="2" />
          <circle cx="250" cy="180" r="8" fill="#64748b" stroke="#94a3b8" strokeWidth="2" />
          <circle cx="320" cy="160" r="8" fill="#64748b" stroke="#94a3b8" strokeWidth="2" />
          <circle cx="220" cy="120" r="8" fill="#64748b" stroke="#94a3b8" strokeWidth="2" />
          <circle cx="300" cy="140" r="8" fill="#64748b" stroke="#94a3b8" strokeWidth="2" />
          <circle cx="80" cy="200" r="8" fill="#64748b" stroke="#94a3b8" strokeWidth="2" />

          {/* Highlighted skill nodes */}
          <circle cx="180" cy="100" r="12" fill="#3b82f6" stroke="#60a5fa" strokeWidth="2" />
          <text x="180" y="105" textAnchor="middle" className="text-xs fill-white font-semibold">
            JS
          </text>

          <circle cx="240" cy="140" r="12" fill="#8b5cf6" stroke="#a78bfa" strokeWidth="2" />
          <text x="240" y="145" textAnchor="middle" className="text-xs fill-white font-semibold">
            PY
          </text>

          <circle cx="160" cy="200" r="12" fill="#f59e0b" stroke="#fbbf24" strokeWidth="2" />
          <text x="160" y="205" textAnchor="middle" className="text-xs fill-white font-semibold">
            R
          </text>
        </g>
      </svg>
    </div>
  )
}
