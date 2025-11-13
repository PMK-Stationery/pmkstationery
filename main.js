
document.getElementById('quote-form').addEventListener('submit', function(e){
  e.preventDefault();
  const product = document.getElementById('product').value.trim();
  const qty = parseInt(document.getElementById('quantity').value);
  if (!product || qty <= 0) return;
  const priceList = { 'Pen': 10, 'Notebook': 50, 'File Folder': 30, 'Marker': 40 };
  const price = priceList[product] || 20;
  const total = price * qty;
  document.getElementById('quote-output').innerHTML =
    `<h3>Quotation</h3><p>Product: ${product}</p><p>Quantity: ${qty}</p><p>Total Estimate: ₹${total}</p>`;
});
