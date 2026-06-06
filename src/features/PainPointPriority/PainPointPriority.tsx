import React from 'react';
import { SEO } from '../../components/SEO';
import { AlertOctagon, Plus, Edit2, Trash2, Save, Info, LayoutList } from 'lucide-react';
import { PainPoint } from './types';
import { usePainPoints } from './usePainPoints';

export default function PainPointPriority() {
  const {
    items,
    editingId,
    formData,
    setFormData,
    handleSubmit,
    handleEdit,
    handleDelete,
    cancelEdit,
  } = usePainPoints();

  const getTier = (painScore: number, effort: number) => {
    // Quick Win: high pain, low effort
    if (painScore >= 16 && effort <= 3) return { label: 'Quick Win', color: 'bg-emerald-100 text-emerald-800 border-emerald-200' };
    // Long-Term Project: high pain, high effort
    if (painScore >= 16 && effort > 3) return { label: 'Long-Term Project', color: 'bg-orange-100 text-orange-800 border-orange-200' };
    // Low Hanging Fruit (minor): low pain, low effort
    if (painScore < 16 && effort <= 2) return { label: 'Minor Fix', color: 'bg-indigo-100 text-indigo-800 border-indigo-200' };
    // Low Priority: low pain, high effort
    return { label: 'Low Priority', color: 'bg-gray-100 text-gray-600 border-gray-200' };
  };

  const calculatePain = (item: Omit<PainPoint, 'id'>) => {
    return item.severity + item.frequency + item.costImpact + item.timeImpact + item.riskUrgency;
  };

  const sortedItems = [...items].sort((a, b) => {
    const painA = calculatePain(a);
    const painB = calculatePain(b);
    if (painB !== painA) return painB - painA;
    return a.effortToFix - b.effortToFix; // if pain is equal, lower effort wins
  });

  const ScoreInput = ({ label, field, desc }: { label: string, field: keyof typeof formData, desc: string }) => (
    <div>
      <label className="block text-sm font-semibold text-gray-800 mb-1">
        {label}
      </label>
      <select
        value={Number(formData[field])}
        onChange={(e) => setFormData({ ...formData, [field]: Number(e.target.value) })}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 transition-colors"
      >
        <option value={1}>1 - Lowest</option>
        <option value={2}>2 - Low</option>
        <option value={3}>3 - Medium</option>
        <option value={4}>4 - High</option>
        <option value={5}>5 - Extreme</option>
      </select>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
      <SEO 
        title="Rural Pain Point Priority Calculator | Rural Utility Cost"
        description="Rank your biggest rural problems by severity, frequency, and impact to determine what to fix first."
      />

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3 mb-4">
          <AlertOctagon className="w-8 h-8 text-rose-600" />
          Pain Point Priority Matrix
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl">
          Turn vague rural frustrations into a clear action list. Score issues to reveal Quick Wins (high pain, low effort) versus Long-Term Projects.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 print:block">
        {/* LEFT / TOP ENTRY FORM */}
        <div className="lg:col-span-4 lg:col-start-1 h-fit print:hidden">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sticky top-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Plus className="w-5 h-5 text-rose-600" />
              {editingId ? 'Edit Issue' : 'Add New Issue'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1">
                  Issue / Pain Point Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Broken perimeter fence"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500"
                />
              </div>

              <div className="pt-2 border-t border-gray-100">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Pain Factors (1-5)</h3>
                <div className="grid grid-cols-2 gap-4">
                  <ScoreInput label="Severity" field="severity" desc="How bad is it when it happens?" />
                  <ScoreInput label="Frequency" field="frequency" desc="How often does it happen?" />
                  <ScoreInput label="Cost Impact" field="costImpact" desc="How much money is it draining?" />
                  <ScoreInput label="Time Impact" field="timeImpact" desc="How much time does it waste?" />
                  <div className="col-span-2">
                    <ScoreInput label="Risk / Urgency" field="riskUrgency" desc="What is the legal/safety risk?" />
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-100">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Fix Factors (1-5)</h3>
                <ScoreInput label="Effort to Fix" field="effortToFix" desc="1 = Easy, 5 = Very Hard" />
              </div>

              <div className="pt-2 border-t border-gray-100">
                <label className="block text-sm font-semibold text-gray-800 mb-1">
                  Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 resize-none"
                  placeholder="Dependencies, ideas, vendors..."
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-rose-600 hover:bg-rose-700 text-white py-2.5 rounded-xl font-medium transition-colors flex justify-center items-center gap-2 shadow-sm"
                >
                  {editingId ? <><Save className="w-4 h-4" /> Save</> : <><Plus className="w-4 h-4" /> Add to List</>}
                </button>
                {editingId && (
                  <button
                    type="button"
                    onClick={cancelEdit}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-colors"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* RIGHT / BOTTOM LIST */}
        <div className="lg:col-span-8 print:w-full">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 h-full min-h-[600px] print:bg-white print:border-none print:p-0 print:min-h-0">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 print:text-2xl">
                <LayoutList className="w-5 h-5 text-gray-500 print:hidden" />
                Ranked Action List
              </h2>
              <span className="bg-white border border-gray-200 text-gray-600 px-3 py-1 text-sm font-medium rounded-full shadow-sm print:hidden">
                {items.length} Items Indexed
              </span>
            </div>

            {items.length === 0 ? (
              <div className="text-center py-20 print:hidden">
                <AlertOctagon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-1">No pending issues</h3>
                <p className="text-gray-500">Add a problem to the left to see your priority ranking.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {sortedItems.map((item, index) => {
                  const pain = calculatePain(item);
                  const tier = getTier(pain, item.effortToFix);
                  
                  return (
                    <div 
                      key={item.id} 
                      className={`bg-white rounded-xl shadow-sm border p-4 sm:p-5 transition-shadow hover:shadow-md ${editingId === item.id ? 'border-rose-300 ring-2 ring-rose-50' : 'border-gray-200'}`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2 text-wrap flex-wrap">
                            <span className="bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded text-xs font-bold font-mono">
                              #{index + 1}
                            </span>
                            <h3 className="font-bold text-lg text-gray-900 leading-tight">
                              {item.name}
                            </h3>
                            <span className={`px-2.5 py-1 rounded-md text-xs font-bold border ${tier.color}`}>
                              {tier.label}
                            </span>
                          </div>

                          {item.notes && (
                            <p className="text-sm text-gray-600 mb-4 bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                              {item.notes}
                            </p>
                          )}

                          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
                            <div>Pain Metrics: <span className="font-bold text-rose-600">S:{item.severity} F:{item.frequency} C:{item.costImpact} T:{item.timeImpact} R:{item.riskUrgency}</span></div>
                            <div>Effort Required: <span className="font-bold text-indigo-600">{item.effortToFix}/5</span></div>
                          </div>
                        </div>

                        <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-4 sm:gap-2">
                          <div className="text-center bg-gray-50 px-4 py-2 rounded-lg border border-gray-100 min-w-[90px] print:bg-white print:border-none print:p-0">
                            <div className="text-xs font-bold text-gray-500 uppercase">Pain Score</div>
                            <div className="text-2xl font-black text-rose-700">{pain}</div>
                          </div>
                          
                          <div className="flex gap-2 print:hidden">
                            <button 
                              onClick={() => handleEdit(item)}
                              className="p-2 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                              title="Edit Issue"
                            >
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button 
                              onClick={() => handleDelete(item.id)}
                              className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              title="Delete Issue"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="mt-8 bg-blue-50/50 rounded-xl p-4 flex gap-3 text-blue-800 text-sm border border-blue-100 print:hidden">
              <Info className="w-5 h-5 shrink-0 text-blue-500" />
              <div>
                <strong className="block font-semibold text-blue-900 mb-1">How Scoring Works</strong>
                All metrics are graded 1 (Lowest) to 5 (Extreme). The Total Pain Score is the sum of Severity, Frequency, Cost, Time, and Risk (Max 25). 
                <br className="my-1"/>
                • <strong>Quick Wins:</strong> Pain ≥ 16, Effort ≤ 3. High return investments.<br/>
                • <strong>Long-Term:</strong> Pain ≥ 16, Effort ≥ 4. Needs planning/budgeting.
              </div>
            </div>

            {items.length > 0 && (
              <div className="print:hidden mt-4">
                <div className="flex flex-col sm:flex-row gap-2 mt-6 print:hidden">
                  <button onClick={() => window.print()} className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 py-2.5 px-3 rounded-xl text-sm font-medium transition-colors shadow-sm active:scale-[0.98]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-printer"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg>
                    Print Report
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
