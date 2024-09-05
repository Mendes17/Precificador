function reset() {
  // Faz um reload na página
  location.reload();
}

const nameProduct = document.getElementById("name-product"); // Captura os elementos HTML

const amount = document.getElementById("amount");
const allValue = document.getElementById("all-value");
const profit = document.getElementById("profit");

const partOne = document.getElementById("part-one");
const partTwo = document.getElementById("part-two");
const partThree = document.getElementById("part-three");
const partFour = document.getElementById("part-four");
const end1 = document.getElementById("end1");

function button1() {
  const name = nameProduct.value;

  if (name == "") {
    const alertt = document.getElementById("alert");
    const menssager = document.getElementById("menssager");

    menssager.textContent = "Digite o nome do produto nenê!";

    alertt.style.display = "flex";

    setTimeout(() => {
      alertt.style.display = "none";
    }, 3000);
  } else {
    partOne.style.display = "none";
    partTwo.style.display = "flex";
    const t1 = (document.getElementById(
      "t1"
    ).textContent = `Nome do produto: ${name}`);
  }
}

function button2() {
  const value1 = amount.value;

  if (value1 == "") {
    const alertt = document.getElementById("alert");
    const menssager = document.getElementById("menssager");

    menssager.textContent = "Digite a quantidade princesa!";

    alertt.style.display = "flex";

    setTimeout(() => {
      alertt.style.display = "none";
    }, 3000);
  } else {
    partTwo.style.display = "none";
    partThree.style.display = "flex";
    const t2 = (document.getElementById(
      "t2"
    ).textContent = `Quantidade: ${value1}`);
  }
}

function button3() {
  const value2 = allValue.value;

  if (value2 == "") {
    const alertt = document.getElementById("alert");
    const menssager = document.getElementById("menssager");

    menssager.textContent = "Digite o valorzinho que você pagou meu amor!";

    alertt.style.display = "flex";

    setTimeout(() => {
      alertt.style.display = "none";
    }, 3000);
  } else {
    partThree.style.display = "none";
    partFour.style.display = "flex";
    const t3 = (document.getElementById(
      "t3"
    ).textContent = `Valor total pago: R$ ${value2}`);
  }
}

function button4() {
  const value3 = Number(profit.value);

  if (value3 == "") {
    const alertt = document.getElementById("alert");
    const menssager = document.getElementById("menssager");

    menssager.textContent =
      "Coloca quanto de lucro você quer ganhar vidinhaaa!";

    alertt.style.display = "flex";

    setTimeout(() => {
      alertt.style.display = "none";
    }, 3000);
  } else {
    partFour.style.display = "none";
    end1.style.display = "flex";
    const t4 = (document.getElementById(
      "t4"
    ).textContent = `Lucro aplicado acima: ${value3}%`);

    const value1 = Number(allValue.value);
    const value2 = Number(amount.value);
    const calc1 = Number((value1 / value2).toFixed(2));
    const calc2 = (calc1 * (value3 / 100) + calc1).toFixed(2);
    const calc3 = (value1 * (value3 / 100) + value1).toFixed(2);
    const calc4 = (calc3 - value1).toFixed(2);

    const t5 = (document.getElementById(
      "t5"
    ).textContent = `Preço pago por unidade: R$ ${calc1}`);

    const t6 = (document.getElementById(
      "t6"
    ).textContent = `Valor por unidade ja com o lucro de ${value3}% aplicado: R$ ${calc2}`);

    const t7 = (document.getElementById(
      "t7"
    ).textContent = `Lucro bruto: R$ ${calc3}`);

    const t8 = (document.getElementById(
      "t8"
    ).textContent = `Lucro liquído: R$ ${calc4}`);
  }
}
