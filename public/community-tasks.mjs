// Read-only public API example; no login, claim or financial operation.
const endpoint = 'https://43.161.219.89.sslip.io/api/social/tasks';
const response = await fetch(endpoint, {signal: AbortSignal.timeout(15000)});
if (!response.ok) throw new Error('Public service returned HTTP ' + response.status);
const value = await response.json();
if (!Array.isArray(value.tasks)) throw new Error('Unexpected public task response');
console.table(value.tasks.map(task => ({task: task.id, points: task.rewardPoints, available: task.available !== false})));
