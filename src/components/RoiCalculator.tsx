import React, { useState } from 'react';
import { Calculator, Sparkles, CheckCircle2 } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export const RoiCalculator: React.FC = () => {
  const [budget, setBudget] = useState(15000);
  const [timelineMonths, setTimelineMonths] = useState(6);
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const estimatedRoas = budget >= 25000 ? 5.2 : budget >= 10000 ? 4.5 : 3.8;
  const projectedRevenue = budget * estimatedRoas * (timelineMonths / 3);
  const netProfitGain = projectedRevenue - budget * timelineMonths;

  return (
    <div className={`glass-card rounded-3xl p-6 sm:p-10 border shadow-2xl relative overflow-hidden transition-colors duration-400 ${
      isDark ? 'border-red-900/40' : 'border-stone-200'
    }`}>
      {/* Glow highlight */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-linear-to-bl from-red-600/20 via-rose-900/10 to-transparent blur-3xl pointer-events-none" />

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        {/* Left Input Sliders */}
        <div className="flex-1 space-y-6 w-full">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-red-600/15 border border-red-500/30 text-red-500">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase text-red-500 tracking-wider">Interactive Tool</span>
              <h3 className={`text-xl sm:text-2xl font-heading font-bold ${
                isDark ? 'text-white' : 'text-neutral-900'
              }`}>Campaign ROI Simulator</h3>
            </div>
          </div>

          <p className={`text-sm ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
            Estimate your projected growth and net return on ad spend (ROAS) based on our audited agency benchmarks.
          </p>

          {/* Monthly Budget Slider */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <label className={`font-medium ${isDark ? 'text-neutral-300' : 'text-stone-700'}`}>
                Monthly Ad Spend / Marketing Budget
              </label>
              <span className="font-mono font-bold text-red-500 text-base">${budget.toLocaleString()}/mo</span>
            </div>
            <input
              type="range"
              min={3000}
              max={100000}
              step={1000}
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-red-600 bg-red-950/40"
            />
            <div className="flex justify-between text-[11px] font-mono text-red-500/70">
              <span>$3,000</span>
              <span>$50,000</span>
              <span>$100,000+</span>
            </div>
          </div>

          {/* Campaign Timeline */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <label className={`font-medium ${isDark ? 'text-neutral-300' : 'text-stone-700'}`}>
                Campaign Duration
              </label>
              <span className="font-mono font-bold text-red-500 text-base">{timelineMonths} Months</span>
            </div>
            <input
              type="range"
              min={3}
              max={12}
              step={3}
              value={timelineMonths}
              onChange={(e) => setTimelineMonths(Number(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-red-600 bg-red-950/40"
            />
            <div className="flex justify-between text-[11px] font-mono text-red-500/70">
              <span>3 Mos</span>
              <span>6 Mos</span>
              <span>9 Mos</span>
              <span>12 Mos</span>
            </div>
          </div>

          <div className={`flex flex-wrap gap-3 text-xs pt-2 ${isDark ? 'text-neutral-400' : 'text-stone-600'}`}>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-red-500" /> CAPI & Pixel Auditing</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-red-500" /> Real-time Attribution</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-red-500" /> Zero Long Contracts</span>
          </div>
        </div>

        {/* Right Output Display Box */}
        <div className={`w-full lg:w-96 border rounded-2xl p-6 sm:p-8 flex flex-col justify-between gap-6 shadow-xl relative overflow-hidden transition-colors ${
          isDark
            ? 'bg-black/90 border-red-600/40 shadow-red-950/30'
            : 'bg-stone-50 border-stone-200 shadow-stone-200'
        }`}>
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-red-500">Projected Performance</span>
            
            <div>
              <span className={`text-xs ${isDark ? 'text-neutral-400' : 'text-stone-500'}`}>Est. Return on Ad Spend</span>
              <div className="text-3xl sm:text-4xl font-extrabold font-number text-gradient-red">
                {estimatedRoas.toFixed(1)}x ROAS
              </div>
            </div>

            <div className={`pt-3 border-t ${isDark ? 'border-neutral-900' : 'border-stone-200'}`}>
              <span className={`text-xs ${isDark ? 'text-neutral-400' : 'text-stone-500'}`}>Projected Gross Revenue</span>
              <div className={`text-2xl font-bold font-number ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                ${Math.round(projectedRevenue).toLocaleString()}
              </div>
            </div>

            <div className={`pt-3 border-t ${isDark ? 'border-neutral-900' : 'border-stone-200'}`}>
              <span className={`text-xs ${isDark ? 'text-neutral-400' : 'text-stone-500'}`}>Net Estimated Profit Gain</span>
              <div className="text-xl font-bold font-number text-red-500">
                +${Math.round(netProfitGain).toLocaleString()}
              </div>
            </div>
          </div>

          <MagneticButton
            variant="primary"
            size="md"
            className="w-full"
            onClick={() => navigate('/contact')}
          >
            Claim Your Growth Strategy <Sparkles className="w-4 h-4 ml-1" />
          </MagneticButton>
        </div>
      </div>
    </div>
  );
};
