window.switchTab = function switchTab(id) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  event.target.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.toggleQA = function toggleQA(el) {
  const ans = el.nextElementSibling;
  ans.classList.toggle('open');
}