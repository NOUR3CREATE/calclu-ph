 // دالة لحساب تكلفة الهاتف بالتقسيط
 function calculateInstallments() {
    // استرجاع المدخلات من الحقول
    const phonePrice = parseFloat(document.getElementById("phonePrice").value);
    const years = parseInt(document.getElementById("years").value);

    // التحقق من صحة المدخلات
    if (isNaN(phonePrice) || isNaN(years) || phonePrice <= 0 || years <= 0) {
      alert("يرجى إدخال قيم صحيحة لسعر الهاتف وعدد السنوات.");
      return;
    }

    const annualInterestRate = 0.20; // نسبة الفائدة السنوية (20%)

    // حساب إجمالي الفائدة
    const totalInterest = phonePrice * annualInterestRate * years;

    // حساب المبلغ الإجمالي
    const totalAmount = phonePrice + totalInterest;

    // تحديث النتائج على الصفحة
    const output = document.getElementById("output");
    output.innerHTML = `
      <p>إجمالي الفائدة: ${totalInterest.toFixed(2)} دولار</p>
      <p>المبلغ الإجمالي: ${totalAmount.toFixed(2)} دولار</p>
    `;
  }