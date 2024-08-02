export const filterClickLikeEvent = (ev: React.MouseEvent | React.KeyboardEvent) => {
  if (ev.metaKey || ev.ctrlKey || ev.altKey || ev.shiftKey) return false;
  if (ev.type === 'click') return true;
  if (ev.type === 'keydown' && 'key' in ev) return ev.key === 'Enter' || ev.key === ' ';
  return false;
};
