export default function funcToText(fn, start = 1, end = -1) {
  return fn
      .toString()
      .split('\n')
      .slice(start, end)
      .map(s => s.replace(/^\s{6}/, ''))
      .join('\n');
}
