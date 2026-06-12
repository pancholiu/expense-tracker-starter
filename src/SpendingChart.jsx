import { BarChart, Bar, Cell, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const COLORS = {
  food: '#FF8042',
  housing: '#0088FE',
  utilities: '#FFBB28',
  transport: '#00C49F',
  entertainment: '#A259FF',
  salary: '#22C55E',
  other: '#888888',
};

export default function SpendingChart({ transactions }) {
  const data = Object.entries(
    transactions
      .filter(t => t.type === 'expense')
      .reduce((acc, t) => {
        acc[t.category] = (acc[t.category] || 0) + t.amount;
        return acc;
      }, {})
  ).map(([name, value]) => ({ name, value }));

  if (data.length === 0) return null;

  return (
    <div className="spending-chart">
      <h2>Spending by Category</h2>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data} margin={{ top: 4, right: 16, left: 0, bottom: 4 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis tickFormatter={(v) => `$${v}`} tick={{ fontSize: 12 }} width={55} />
          <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
          <Bar dataKey="value" name="Amount" radius={[3, 3, 0, 0]}>
            {data.map(entry => (
              <Cell key={entry.name} fill={COLORS[entry.name] || '#8884d8'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
