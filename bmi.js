function calculateBMI() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  height=height/100

  if (weight === "" || height === "") {
    document.getElementById("result").innerText = "لطفا همه مقادیر را وارد کنید";
    return;
  }

  let bmi = weight / (height * height);
  bmi = bmi.toFixed(2);

  let status = "";
    document.getElementById("result").className = "";


  if (bmi < 18.5) {
    status = "کمبود وزن";
        document.getElementById("result").classList.add("underweight");

  } else if (bmi < 25) {
    status = "نرمال 👍";
        document.getElementById("result").classList.add("normal");

  } else if (bmi < 30) {
    status = "اضافه وزن 🌭";
    document.getElementById("result").classList.add("overweight");

  } else {
    status = "چاق 🍔🍕";
    //     document.getElementById("result").style.color = "#f44336" ; // رنگ قرمز برای چاق
    // document.getElementById("result").style.fontWeight = "bold";
    document.getElementById("result").classList.add("obese"); // کلاس ویژه چاقی
  }

  document.getElementById("result").innerText =
    `شاخص توده بدنی شما ${bmi} (${status})`;
}